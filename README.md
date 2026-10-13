# MFSD kurumsal web sitesi

Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Tic. Ltd. Şti. (MFSD) için Next.js 15 (App Router) sitesi.

## Sayfalar
- `/` ana sayfa · `/hizmetler` · `/projeler` · `/projeler/partoai` · `/ekip` · `/hakkimizda` · `/iletisim`
- `/kvkk` (aydınlatma metni, taslak) · `/cerez-politikasi`
- `/api/contact` iletişim formu, `/api/subscribe` e-bülten kaydı
- `sitemap.xml`, `robots.txt`, Organization JSON-LD

## İçerik nerede değişir
- Şirket bilgileri (unvan, MERSIS, adres, telefon, e-posta): `lib/site.js`
- Ekip ve özgeçmişler: `lib/team.js` (fotoğrafları `public/team/` içine koyup `photo` alanını doldurun)
- Hizmetler: `lib/services.js` · PartoAI modülleri: `components/PartoShowcase.js`

## Yerel çalıştırma
```bash
npm install
cp .env.example .env.local   # RESEND_API_KEY vb.
npm run dev                  # http://localhost:3000
```
`RESEND_API_KEY` yoksa geliştirme ortamında form e-postaları konsola yazılır; canlıda form hata verir ve kullanıcıyı info@ adresine yönlendirir.

## E-posta kurulumu (Resend)
1. resend.com'da hesap açın, `mfsd.com.tr` alan adını ekleyin ve verilen SPF/DKIM DNS kayıtlarını girin.
2. API anahtarını `RESEND_API_KEY` olarak tanımlayın; `MAIL_FROM`'u doğrulanmış alan adından bir adres yapın.
3. Bülten listesi için Resend > Audiences'ta bir liste açıp ID'sini `RESEND_AUDIENCE_ID` olarak girin.

## Yayına alma (Vercel)
Repoyu Vercel'e import edin, `.env.example`'daki değişkenleri ekleyin, `mfsd.com.tr` alan adını bağlayın.

## Yayından önce
- KVKK metnini hukukçuya okutun.
- Ekip sayfasındaki özgeçmişi Prof. Dr. Resul Arısoy'a onaylatın.
- Ticari e-ileti (bülten) gönderecekseniz İYS kaydını yapın.
