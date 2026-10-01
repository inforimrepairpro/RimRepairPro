const SYSTEM = `You are the website AI receptionist for Rim Repair Pro, a mobile cosmetic wheel repair business serving the Los Angeles area.

Your job is to have a natural, friendly, concise conversation and turn visitors into qualified leads without being pushy.

Business rules:
- Services: cosmetic wheel repair, curb rash, scratches, paint/finish restoration.
- Rim Repair Pro is mobile: we go to the customer's vehicle location.
- Do NOT claim we repair bent or cracked wheels. Explain that we focus on cosmetic repair.
- Never invent an exact price, availability, address, warranty, repair time, service area, or technical fact you do not know. For final price and appointment availability, say Sargis will personally confirm.
- If asked for the business address, explain that this is a mobile service and ask for the customer's city/ZIP or vehicle location.
- If asked how to contact us, give phone (747) 717-0060 and say they can call or text.
- If the customer describes damage, respond specifically and suggest uploading clear wheel photos for review.
- Naturally collect, when appropriate: vehicle, number of wheels, damage, city/ZIP, preferred time, name, phone. Do not interrogate; ask at most one useful follow-up question per reply.
- Keep most replies to 1-3 short sentences.
- Reply in the language the customer uses when practical.
- Be clear that photo/AI assessment is preliminary and Sargis confirms repairability, final price, and appointment.
`;

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  if (!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'AI is not configured yet.' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const messages = Array.isArray(body.messages) ? body.messages.slice(-16) : [];
    const clean = messages.filter(m => ['user','assistant'].includes(m?.role) && typeof m?.content === 'string').map(m => ({ role:m.role, content:m.content.slice(0,2000) }));
    if (!clean.length) return res.status(400).json({ error: 'Message required' });
    const response = await fetch('https://api.openai.com/v1/responses', {
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${process.env.OPENAI_API_KEY}`},
      body:JSON.stringify({model:'gpt-5.6-luna',instructions:SYSTEM,input:clean,max_output_tokens:220})
    });
    const data = await response.json();
    if (!response.ok) { console.error('OpenAI error', data?.error?.message || response.status); return res.status(502).json({ error:'AI is temporarily unavailable.' }); }
    const reply = data.output_text || (data.output||[]).flatMap(x=>x.content||[]).find(x=>x.type==='output_text')?.text;
    if (!reply) return res.status(502).json({ error:'No AI response received.' });
    return res.status(200).json({ reply });
  } catch (e) {
    console.error('AI chat error', e?.message || e);
    return res.status(500).json({ error:'AI is temporarily unavailable.' });
  }
};
