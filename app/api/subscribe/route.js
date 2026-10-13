import { NextResponse } from "next/server";
import { clean, isEmail, escapeHtml, rateLimited, clientIp } from "@/lib/validate";
import { sendMail, addSubscriber, mailConfigured } from "@/lib/mail";
import { company } from "@/lib/site";

export const runtime = "nodejs";

export async function POST(req) {
  let b;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "İstek okunamadı." }, { status: 400 });
  }
  if (b.website) return NextResponse.json({ ok: true });

  if (rateLimited("s:" + clientIp(req), 5)) {
    return NextResponse.json({ error: "Çok fazla deneme yapıldı. Birkaç dakika sonra tekrar deneyin." }, { status: 429 });
  }

  const email = clean(b.email, 254).toLowerCase();
  if (!isEmail(email)) return NextResponse.json({ error: "Geçerli bir e-posta adresi yazın." }, { status: 422 });
  if (b.consent !== true) return NextResponse.json({ error: "Abone olmak için e-posta iznini onaylayın." }, { status: 422 });

  if (!mailConfigured() && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Bülten kaydı şu anda çalışmıyor. Daha sonra tekrar deneyin." }, { status: 503 });
  }

  try {
    await addSubscriber(email);
    await sendMail({
      to: process.env.CONTACT_TO || company.email,
      subject: `[mfsd.com.tr] Yeni bülten abonesi: ${email}`,
      text: `Yeni abone: ${email}\nİzin metni onaylandı: ${new Date().toISOString()}`,
      html: `<p style="font-family:Arial,sans-serif">Yeni bülten abonesi: <b>${escapeHtml(email)}</b><br><small>İzin onayı: ${new Date().toISOString()}</small></p>`,
    });
  } catch (e) {
    console.error("[subscribe]", e.message);
    return NextResponse.json({ error: "Kayıt tamamlanamadı. Lütfen daha sonra tekrar deneyin." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
