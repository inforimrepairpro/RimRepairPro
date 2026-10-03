const { createHash } = require('node:crypto');

const TO = 'inforimrepairpro@gmail.com';
const SERVICES = ['Curb Rash Repair', 'Polish', 'Wheel Color Change', 'Lease Return Wheel Repair', 'Not Sure'];
const error = (res, status, message) => res.status(status).json({ error: message });
const attempts = new Map();

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return error(res, 405, 'Method not allowed.'); }
  if (!['https://www.rimrepairpro.com', 'https://rimrepairpro.com'].includes(req.headers.origin)) return error(res, 403, 'Please use the form on our website.');
  if (!String(req.headers['content-type'] || '').includes('application/json')) return error(res, 415, 'Invalid request.');
  let b;
  try { b = typeof req.body === 'string' ? JSON.parse(req.body) : req.body; } catch { return error(res, 400, 'Invalid request.'); }
  if (!b || JSON.stringify(b).length > 3500000) return error(res, 413, 'Please use smaller photos.');
  if (b.website) return error(res, 400, 'Please try again or text us.');
  const name = String(b.name || '').trim(), phone = String(b.phone || '').trim(), address = String(b.address || '').trim();
  if (!name || name.length > 100 || !/^[+()\d\s.-]{7,30}$/.test(phone) || phone.replace(/\D/g, '').length < 10 || !address || address.length > 300 || !SERVICES.includes(b.service) || !['1','2','3','4'].includes(String(b.rims)) || !['quote','book'].includes(b.kind)) return error(res, 400, 'Please check your contact and service details.');
  if (!/^[a-f0-9-]{36}$/.test(b.requestId || '')) return error(res, 400, 'Please refresh and try again.');
  if (!Array.isArray(b.photos) || b.photos.length > 4) return error(res, 400, 'Maximum 4 photos.');
  const attachments = [];
  for (const [i, photo] of b.photos.entries()) {
    if (typeof photo !== 'string' || !/^data:image\/jpeg;base64,[A-Za-z0-9+/=]+$/.test(photo)) return error(res, 400, 'Please choose JPG, PNG or WebP photos.');
    const content = photo.split(',')[1], bytes = Buffer.from(content, 'base64');
    if (bytes.length > 600000 || bytes[0] !== 255 || bytes[1] !== 216 || bytes[2] !== 255) return error(res, 400, 'Please use smaller valid photos.');
    attachments.push({ filename: `wheel-${i + 1}.jpg`, content });
  }
  if (!process.env.RESEND_API_KEY || !process.env.QUOTE_FROM_EMAIL) return error(res, 503, 'Online requests are temporarily unavailable. Please text your photos to (747) 717-0060.');
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
  const ip = createHash('sha256').update(String(req.headers['x-forwarded-for'] || 'unknown')).digest('hex');
  const limit = attempts.get(ip) || { count: 0, until: now + 600000 };
  if (limit.count >= 5) { res.setHeader('Retry-After', '600'); return error(res, 429, 'Please wait a few minutes or text us.'); }
  limit.count++; attempts.set(ip, limit);
  const text = [`New ${b.kind === 'book' ? 'appointment request' : 'quote request'}`, `Name: ${name}`, `Phone: ${phone}`, `Service address: ${address}`, `Service: ${b.service}`, `Wheels: ${b.rims}`, `Photos: ${attachments.length}`, `Request ID: ${b.requestId}`, 'This is a request; price and appointment are not confirmed.'].join('\n');
  const payload = { from: process.env.QUOTE_FROM_EMAIL, to: [TO], subject: `Rim Repair Pro: new ${b.kind === 'book' ? 'appointment' : 'quote'} request`, text, attachments };
  const key = createHash('sha256').update(JSON.stringify(payload)).digest('hex');
  try {
    const response = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${process.env.RESEND_API_KEY}`, 'Content-Type': 'application/json', 'Idempotency-Key': `quote-${key}` }, body: JSON.stringify(payload), signal: AbortSignal.timeout(15000) });
    const result = await response.json();
    if (!response.ok || !result.id) return error(res, 502, 'Your request could not be sent. Please try again or text us.');
    return res.status(200).json({ accepted: true, requestId: b.requestId });
  } catch { return error(res, 502, 'Your request could not be sent. Please try again or text us.'); }
}
