const SYSTEM = `You are the customer-facing AI assistant for Rim Repair Pro, a mobile cosmetic wheel repair business serving the Los Angeles area. Be warm, concise, professional, and conversational. Answer the customer's actual question and use prior messages as context.

Business rules:
- Rim Repair Pro specializes in cosmetic wheel repair: curb rash, scratches, scuffs, and cosmetic finish damage.
- Do not claim bent or cracked wheels are repaired. Explain those require a different repair service.
- This is a mobile service: Rim Repair Pro comes to the customer's vehicle. Do not invent a shop address.
- Contact phone: (747) 717-0060. Customers can call or text.
- Never invent a final price, appointment availability, warranty, exact service area, repairability, vehicle/wheel identification, or completion time.
- For wheel photos, describe only what is visibly apparent. You may describe likely cosmetic damage, visible finish/color, and apparent severity using cautious language. Never claim certainty about hidden damage, structural safety, exact vehicle/model, or final repairability from a photo alone.
- After photo analysis, encourage the customer to provide number of wheels, vehicle, ZIP/city, preferred time, and contact number so Sargis can personally confirm the repair and final price.
- If asked for an address, explain Rim Repair Pro is mobile and ask for the vehicle location or ZIP.
- If asked how to contact the business, provide (747) 717-0060 and say call or text.
- If the customer says hello or asks how you are, respond naturally.
- Keep replies complete and usually 1-4 short sentences. Never end mid-sentence.`;

const extractText=data=>{
 if(typeof data?.output_text==='string'&&data.output_text.trim())return data.output_text.trim();
 const parts=[];
 for(const item of data?.output||[])for(const part of item?.content||[])if((part?.type==='output_text'||part?.type==='text')&&typeof part?.text==='string')parts.push(part.text);
 return parts.join('\n').trim();
};

export default async function handler(req,res){
 if(req.method!=='POST')return res.status(405).json({error:'Method not allowed'});
 if(!process.env.OPENAI_API_KEY)return res.status(503).json({error:'OPENAI_API_KEY is not configured for this deployment.'});
 const raw=Array.isArray(req.body?.messages)?req.body.messages:[];
 const image=typeof req.body?.image==='string'&&req.body.image.startsWith('data:image/')?req.body.image:null;
 const history=raw.slice(-12).filter(m=>m&&typeof m.content==='string'&&['user','assistant'].includes(m.role)).map(m=>({role:m.role,content:m.content.slice(0,2500)}));
 if(!history.length&&!image)return res.status(400).json({error:'No message or image provided.'});
 let input=history;
 if(image){
   const prior=history.slice(0,-1);
   const last=history[history.length-1];
   const prompt=last?.role==='user'?last.content:'Please analyze this wheel photo for visible cosmetic damage.';
   input=[...prior,{role:'user',content:[{type:'input_text',text:prompt},{type:'input_image',image_url:image,detail:'high'}]}];
 }
 try{
   const r=await fetch('https://api.openai.com/v1/responses',{
     method:'POST',headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
     body:JSON.stringify({model:'gpt-5.6-luna',reasoning:{effort:'none'},instructions:SYSTEM,input,max_output_tokens:900}),
     signal:AbortSignal.timeout(45000)
   });
   const data=await r.json();
   if(!r.ok){console.error('OpenAI chat error',r.status,data?.error?.message||'unknown');return res.status(502).json({error:'AI service request failed.'});}
   const reply=extractText(data);
   if(!reply)return res.status(502).json({error:'AI returned an empty response.'});
   return res.status(200).json({reply});
 }catch(err){console.error('AI chat exception',err?.message||err);return res.status(500).json({error:'AI chat failed.'});}
}
