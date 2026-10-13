# MFSD kurumsal web sitesi

Maternal Fetal Sağlık ve Danışmanlık Hizmetleri Tic. Ltd. Şti. (MFSD) için Next.js 15 (App Router) sitesi.

## Sayfalar (TR / EN)
| Türkçe | English |
|---|---|
| `/` | `/en` |
| `/hizmetler` | `/en/services` |
| `/projeler` | `/en/projects` |
| `/projeler/partoai` | `/en/projects/partoai` |
| `/ekip` | `/en/team` |
| `/hakkimizda` | `/en/about` |
| `/iletisim` | `/en/contact` |
| `/kvkk` | `/en/privacy` |
| `/cerez-politikasi` | `/en/cookies` |

Üst menüdeki TR/EN düğmesi aynı sayfanın diğer dildeki karşılığına geçer. Her sayfada `hreflang` etiketleri ve iki dilli sitemap bulunur.
- `/api/contact` iletişim formu, `/api/subscribe` e-bülten kaydı
- `sitemap.xml`, `robots.txt`, Organization JSON-LD

## İçerik nerede değişir
- **Tüm metinler:** `lib/content/tr.js` ve `lib/content/en.js` (aynı anahtarlar; birini değiştirince diğerini de güncelleyin)
- KVKK ve çerez metinleri: `components/views/Privacy.js`, `components/views/Cookies.js`
- Şirket bilgileri (unvan, MERSIS, adres, telefon, e-posta): `lib/site.js`
- Kişi adları ve fotoğraflar: `lib/team.js` (fotoğrafları `public/team/` içine koyup `photo` alanını doldurun)
- Sayfa adresleri ve dil eşleşmeleri: `lib/i18n.js`

## Yapı
- `app/(tr)/…` Türkçe sayfalar, `app/(en)/en/…` İngilizce sayfalar; her grup kendi `<html lang>` kök düzenine sahip.
- Sayfa dosyaları incedir; içerik `components/views/*` içinde, `lang` parametresiyle iki dilde aynı bileşenden üretilir.
- Duyarlı kırılımlar: telefon < 640px, tablet 640–1080px (açılır menü), masaüstü > 1080px.

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
