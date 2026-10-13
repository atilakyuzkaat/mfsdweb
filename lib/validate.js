const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function clean(v, max = 2000) {
  if (typeof v !== "string") return "";
  return v.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

export function isEmail(v) {
  return typeof v === "string" && v.length <= 254 && EMAIL_RE.test(v);
}

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Basit, bellek içi hız sınırı. Sunucusuz ortamda örnekler arası paylaşılmaz;
// kötüye kullanım artarsa Vercel Firewall / Upstash ile değiştirin.
const hits = new Map();
export function rateLimited(key, limit = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > limit;
}

export function clientIp(req) {
  const fwd = req.headers.get("x-forwarded-for");
  return (fwd ? fwd.split(",")[0] : req.headers.get("x-real-ip")) || "unknown";
}
