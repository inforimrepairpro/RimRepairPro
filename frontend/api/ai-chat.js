const SYSTEM = `You are the customer-facing AI assistant for Rim Repair Pro, a mobile cosmetic wheel repair business serving the Los Angeles area. Be warm, concise, professional and conversational. Answer the customer's actual question and remember context from prior messages.

Business rules:
- Rim Repair Pro specializes in cosmetic wheel repair: curb rash, scratches, scuffs and cosmetic finish damage.
- Do not claim that bent or cracked wheels are repaired. Explain that those require a different repair service.
- This is a mobile service: Rim Repair Pro comes to the customer's vehicle. Do not invent a shop address.
- Contact phone: (747) 717-0060. Customers can call or text.
- Never invent a final price, appointment availability, warranty, service area, repairability, vehicle/wheel identification, or completion time. When those need confirmation, say Sargis will personally confirm after reviewing the photos/details.
- Encourage customers with damage questions to upload clear wheel photos and provide vehicle, number of wheels, location/ZIP, and preferred time.
- If the customer simply says hello or asks how you are, respond naturally before guiding them toward wheel repair.
- If asked for an address, explain that Rim Repair Pro is mobile and ask for the vehicle location or ZIP.
- If asked how to contact the business, provide (747) 717-0060 and say call or text.
- Keep replies usually to 1-4 short sentences. Do not use markdown tables.`;

const extractText = data => {
  if (typeof data?.output_text === 'string' && data.output_text.trim()) return data.output_text.trim();
  for (const item of data?.output || []) {
    for (const part of item?.content || []) {
      if ((part?.type === 'output_text' || part?.type === 'text') && typeof part?.text === 'string' && part.text.trim()) return part.text.trim();
    }
  }
  return '';
};

export default async function handler(req,res){
  if(req.method!=='POST') return res.status(405).json({error:'Method not allowed'});
  if(!process.env.OPENAI_API_KEY) return res.status(503).json({error:'OPENAI_API_KEY is not configured for this deployment.'});
  const raw = Array.isArray(req.body?.messages) ? req.body.messages : [];
  const messages = raw.slice(-12).filter(m=>m && typeof m.content==='string' && ['user','assistant'].includes(m.role)).map(m=>({role:m.role,content:m.content.slice(0,2000)}));
  if(!messages.length) return res.status(400).json({error:'No message provided.'});
  try{
    const r=await fetch('https://api.openai.com/v1/responses',{
      method:'POST',
      headers:{Authorization:`Bearer ${process.env.OPENAI_API_KEY}`,'Content-Type':'application/json'},
      body:JSON.stringify({model:'gpt-5-mini',instructions:SYSTEM,input:messages,max_output_tokens:300}),
      signal:AbortSignal.timeout(30000)
    });
    const data=await r.json();
    if(!r.ok){console.error('OpenAI chat error',r.status,data?.error?.message||'unknown');return res.status(502).json({error:'AI service request failed.'});}
    const reply=extractText(data);
    if(!reply) return res.status(502).json({error:'AI returned an empty response.'});
    return res.status(200).json({reply});
  }catch(err){console.error('AI chat exception',err?.message||err);return res.status(500).json({error:'AI chat failed.'});}
}
