import PageHead from "@/components/PageHead";
import { getDict } from "@/lib/i18n";
import { company, fullAddress } from "@/lib/site";

function Tr() {
  return (
    <>
      <p className="draft-note">Taslak metindir. Yayından önce bir hukuk danışmanı tarafından gözden geçirilmelidir.</p>
      <p>Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu'nun ("KVKK") 10. maddesi uyarınca, {company.legalName} ("MFSD") tarafından veri sorumlusu sıfatıyla, mfsd.com.tr internet sitesi üzerinden toplanan kişisel veriler hakkında sizi bilgilendirmek amacıyla hazırlanmıştır.</p>
      <h2>1. Veri sorumlusu</h2>
      <p>{company.legalName}<br />{fullAddress()}<br />MERSIS: {company.mersis}<br />E-posta: {company.email}</p>
      <h2>2. İşlenen kişisel veriler</h2>
      <ul>
        <li><b>İletişim formu:</b> ad soyad, kurum, e-posta, telefon, mesaj içeriği.</li>
        <li><b>Bülten aboneliği:</b> e-posta adresi ve izin tarihi.</li>
        <li><b>İşlem güvenliği:</b> IP adresi ve tarayıcı bilgileri (kötüye kullanımı önlemek amacıyla, geçici olarak).</li>
      </ul>
      <p>İletişim formu üzerinden hasta bilgisi veya sağlık verisi göndermemenizi rica ederiz.</p>
      <h2>3. İşleme amaçları ve hukuki sebepler</h2>
      <ul>
        <li>Talep ve sorularınıza yanıt verilmesi: KVKK m.5/2-c (sözleşmenin kurulması) ve m.5/2-f (meşru menfaat).</li>
        <li>Bülten ve duyuru gönderimi: KVKK m.5/1 uyarınca açık rızanız ve 6563 sayılı Kanun kapsamındaki onayınız.</li>
        <li>Bilgi güvenliğinin sağlanması: KVKK m.5/2-ç (hukuki yükümlülük) ve m.5/2-f.</li>
      </ul>
      <h2>4. Aktarım</h2>
      <p>Verileriniz, e-posta gönderimi için hizmet aldığımız sağlayıcıya (Resend, Inc.) ve sitenin barındırıldığı altyapı sağlayıcısına (Vercel Inc.) aktarılabilir. Bu sağlayıcıların sunucuları yurt dışında bulunabileceğinden aktarım, KVKK m.9 hükümlerine uygun şekilde gerçekleştirilir. Bunun dışında verileriniz yalnızca yetkili kamu kurumlarının yasal talepleri halinde paylaşılır.</p>
      <h2>5. Saklama süresi</h2>
      <p>İletişim talepleri, talebin sonuçlanmasından itibaren 2 yıl; bülten kayıtları aboneliğiniz sürdüğü müddetçe ve sona ermesinden sonra ispat amacıyla 3 yıl saklanır. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.</p>
      <h2>6. Haklarınız</h2>
      <p>KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme, aktarıldığı üçüncü kişileri bilme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı {company.email} adresine veya yukarıdaki posta adresine yazılı olarak iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.</p>
      <p>Bülten aboneliğinden her e-postanın altındaki bağlantıyla ya da bize yazarak dilediğiniz an çıkabilirsiniz.</p>
    </>
  );
}

function En() {
  return (
    <>
      <p className="draft-note">Draft text. It should be reviewed by legal counsel before publication. The Turkish version prevails in case of any discrepancy.</p>
      <p>This notice is provided by {company.legalName} ("MFSD") as data controller under Article 10 of the Turkish Personal Data Protection Law No. 6698 ("KVKK"), to inform you about personal data collected through the mfsd.com.tr website.</p>
      <h2>1. Data controller</h2>
      <p>{company.legalName}<br />{fullAddress()}, Türkiye<br />MERSIS: {company.mersis}<br />Email: {company.email}</p>
      <h2>2. Personal data we process</h2>
      <ul>
        <li><b>Contact form:</b> full name, organisation, email, phone and message content.</li>
        <li><b>Newsletter:</b> email address and date of consent.</li>
        <li><b>Security:</b> IP address and browser information, kept temporarily to prevent abuse.</li>
      </ul>
      <p>Please do not send patient information or health data through the contact form.</p>
      <h2>3. Purposes and legal grounds</h2>
      <ul>
        <li>Responding to your enquiries: KVKK Art. 5/2-c (entering into a contract) and Art. 5/2-f (legitimate interest).</li>
        <li>Sending newsletters and announcements: your explicit consent under KVKK Art. 5/1 and Law No. 6563 on electronic commerce.</li>
        <li>Ensuring information security: KVKK Art. 5/2-ç (legal obligation) and Art. 5/2-f.</li>
      </ul>
      <h2>4. Transfers</h2>
      <p>Your data may be transferred to our email delivery provider (Resend, Inc.) and our hosting provider (Vercel Inc.). As their servers may be located outside Türkiye, such transfers are carried out in accordance with KVKK Art. 9. Otherwise, your data is shared only in response to lawful requests from competent authorities.</p>
      <h2>5. Retention</h2>
      <p>Enquiries are kept for 2 years after they are resolved; newsletter records are kept for as long as you are subscribed and for 3 years afterwards as evidence of consent. After that, data is deleted, destroyed or anonymised.</p>
      <h2>6. Your rights</h2>
      <p>Under KVKK Art. 11 you have the right to learn whether your data is processed, request information, ask for correction or deletion, know the third parties it is transferred to, object, and claim compensation for damages. You can send requests in writing to {company.email} or to the postal address above. Requests are answered within 30 days.</p>
      <p>You can unsubscribe from the newsletter at any time using the link at the bottom of each email or by writing to us.</p>
    </>
  );
}

export default function Privacy({ lang }) {
  const t = getDict(lang);
  const title = lang === "en" ? "Privacy notice" : "Kişisel verilerin korunması aydınlatma metni";
  return (
    <>
      <PageHead lang={lang} t={t} title={title} crumb={t.meta.privacy.title} />
      <section className="section">
        <div className="wrap prose">{lang === "en" ? <En /> : <Tr />}</div>
      </section>
    </>
  );
}
