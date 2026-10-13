import { NextResponse } from "next/server";
import { clean, isEmail, escapeHtml, rateLimited, clientIp } from "@/lib/validate";
import { sendMail, mailConfigured } from "@/lib/mail";
import { company } from "@/lib/site";

export const runtime = "nodejs";

const TOPICS = {
  demo: "PartoAI demo talebi",
  danismanlik: "Klinik danışmanlık",
  egitim: "Eğitim programları",
  isbirligi: "İş birliği / yatırım",
  diger: "Diğer",
};

export async function POST(req) {
  let b;
  try {
    b = await req.json();
  } catch {
    return NextResponse.json({ error: "Form verisi okunamadı. Sayfayı yenileyip tekrar deneyin." }, { status: 400 });
  }

  // Bot tuzağı: görünmez alan doluysa ya da form 3 sn'den kısa sürede gönderildiyse sessizce kabul et.
  if (b.website || (b.startedAt && Date.now() - Number(b.startedAt) < 3000)) {
    return NextResponse.json({ ok: true });
  }

  if (rateLimited("c:" + clientIp(req))) {
    return NextResponse.json({ error: "Kısa sürede çok fazla mesaj gönderildi. 10 dakika sonra tekrar deneyin." }, { status: 429 });
  }

  const data = {
    name: clean(b.name, 120),
    org: clean(b.org, 160),
    email: clean(b.email, 254).toLowerCase(),
    phone: clean(b.phone, 40),
    topic: TOPICS[b.topic] ? b.topic : "diger",
    message: clean(b.message, 5000),
  };

  const errors = {};
  if (data.name.length < 2) errors.name = "Adınızı ve soyadınızı yazın.";
  if (!isEmail(data.email)) errors.email = "Geçerli bir e-posta adresi yazın.";
  if (data.message.length < 10) errors.message = "Mesajınız en az 10 karakter olmalı.";
  if (b.kvkk !== true) errors.kvkk = "Devam etmek için aydınlatma metnini onaylayın.";
  if (Object.keys(errors).length) return NextResponse.json({ errors }, { status: 422 });

  if (!mailConfigured() && process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: `Form şu anda çalışmıyor. Lütfen ${company.email} adresine e-posta gönderin.` }, { status: 503 });
  }

  const topicLabel = TOPICS[data.topic];
  const rows = [
    ["Ad soyad", data.name],
    ["Kurum", data.org || "—"],
    ["E-posta", data.email],
    ["Telefon", data.phone || "—"],
    ["Konu", topicLabel],
  ];
  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#3d1f52">Web sitesinden yeni mesaj</h2>
    <table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">
      ${rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#6e6275">${k}</td><td style="padding:4px 0"><b>${escapeHtml(v)}</b></td></tr>`).join("")}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap;border-left:3px solid #b83a62;padding-left:12px">${escapeHtml(data.message)}</p>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#6e6275">KVKK aydınlatma metni onaylandı · ${new Date().toISOString()}</p>`;
  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n") + "\n\n" + data.message;

  try {
    await sendMail({
      to: process.env.CONTACT_TO || company.email,
      subject: `[mfsd.com.tr] ${topicLabel}: ${data.name}${data.org ? " (" + data.org + ")" : ""}`,
      html,
      text,
      replyTo: data.email,
    });

    if (process.env.CONTACT_AUTO_REPLY !== "false") {
      await sendMail({
        to: data.email,
        subject: "Mesajınız MFSD'ye ulaştı",
        text: `Sayın ${data.name},\n\n"${topicLabel}" konulu mesajınızı aldık. Ekibimiz en kısa sürede size dönüş yapacak.\n\nMFSD\n${company.legalName}\n${company.email}`,
        html: `<p style="font-family:Arial,sans-serif;font-size:14px">Sayın ${escapeHtml(data.name)},</p>
               <p style="font-family:Arial,sans-serif;font-size:14px">"${escapeHtml(topicLabel)}" konulu mesajınızı aldık. Ekibimiz en kısa sürede size dönüş yapacak.</p>
               <p style="font-family:Arial,sans-serif;font-size:13px;color:#6e6275">MFSD<br>${escapeHtml(company.legalName)}<br>${company.email}</p>`,
      }).catch((e) => console.error("[contact] otomatik yanıt gönderilemedi", e.message));
    }
  } catch (e) {
    console.error("[contact]", e.message);
    return NextResponse.json({ error: `Mesaj gönderilemedi. Lütfen ${company.email} adresine doğrudan yazın.` }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
