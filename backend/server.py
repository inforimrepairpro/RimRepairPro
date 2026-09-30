from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from openai import OpenAI
import os
import logging
import base64
import json
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
app = FastAPI()
api_router = APIRouter(prefix="/api")

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/analyze-wheel")
async def analyze_wheel(file: UploadFile = File(...)):
    if file.content_type not in {"image/jpeg", "image/png", "image/webp"}:
        raise HTTPException(status_code=400, detail="Please upload a JPG, PNG, or WebP image.")

    image_bytes = await file.read()
    if len(image_bytes) > 8 * 1024 * 1024:
        raise HTTPException(status_code=400, detail="Image is too large. Maximum size is 8 MB.")

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise HTTPException(status_code=503, detail="AI analysis is not configured yet.")

    encoded = base64.b64encode(image_bytes).decode("utf-8")
    data_url = f"data:{file.content_type};base64,{encoded}"
    ai = OpenAI(api_key=api_key)

    prompt = """You are a photo triage assistant for Rim Repair Pro, a mobile cosmetic wheel repair business. Analyze only what is visibly supported by this wheel photo. The business repairs cosmetic curb rash and surface scratches only; it does NOT repair bent or cracked wheels. Never claim structural safety from a photo. Return ONLY valid JSON with these keys: serviceable (boolean), damage_type (one of light_curb_rash, medium_curb_rash, heavy_cosmetic, possible_crack_or_bend, unclear), severity (light, medium, heavy, unknown), confidence (integer 0-100), estimate (one of $100-$120, $120-$150, $150+, manual_review), summary (short customer-friendly sentence). If a crack/bend may be present, the image is unclear, or confidence is below 70, use manual_review and serviceable false. Do not diagnose wheel safety."""

    try:
        response = ai.responses.create(
            model=os.environ.get("OPENAI_VISION_MODEL", "gpt-5.6-luna"),
            input=[{
                "role": "user",
                "content": [
                    {"type": "input_text", "text": prompt},
                    {"type": "input_image", "image_url": data_url},
                ],
            }],
        )
        raw = response.output_text.strip()
        if raw.startswith("```"):
            raw = raw.replace("```json", "", 1).replace("```", "").strip()
        result = json.loads(raw)
    except Exception as exc:
        logging.exception("Wheel AI analysis failed")
        raise HTTPException(status_code=502, detail="AI analysis failed. Please text the photo for a manual quote.") from exc

    allowed = {"light_curb_rash", "medium_curb_rash", "heavy_cosmetic", "possible_crack_or_bend", "unclear"}
    if result.get("damage_type") not in allowed:
        result["damage_type"] = "unclear"
        result["serviceable"] = False
        result["estimate"] = "manual_review"
    return result

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
