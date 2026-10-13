import PageHead from "@/components/PageHead";
import { company, fullAddress } from "@/lib/site";

export const metadata = { title: "KVKK aydınlatma metni", alternates: { canonical: "/kvkk" } };

export default function Page() {
  return (
    <>
      <PageHead title="Kişisel verilerin korunması aydınlatma metni" crumb="KVKK" />
      <section className="section">
        <div className="wrap prose">
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
          <p>Verileriniz, e-posta gönderimi için hizmet aldığımız sağlayıcıya (Resend, Inc.) ve sitenin barındırıldığı altyapı sağlayıcısına aktarılabilir. Bu sağlayıcıların sunucuları yurt dışında bulunabileceğinden aktarım, KVKK m.9 hükümlerine uygun şekilde gerçekleştirilir. Bunun dışında verileriniz yalnızca yetkili kamu kurumlarının yasal talepleri halinde paylaşılır.</p>

          <h2>5. Saklama süresi</h2>
          <p>İletişim talepleri, talebin sonuçlanmasından itibaren 2 yıl; bülten kayıtları aboneliğiniz sürdüğü müddetçe ve sona ermesinden sonra ispat amacıyla 3 yıl saklanır. Süre sonunda veriler silinir, yok edilir veya anonim hale getirilir.</p>

          <h2>6. Haklarınız</h2>
          <p>KVKK m.11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, düzeltilmesini veya silinmesini isteme, aktarıldığı üçüncü kişileri bilme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı {company.email} adresine veya yukarıdaki posta adresine yazılı olarak iletebilirsiniz. Başvurular en geç 30 gün içinde sonuçlandırılır.</p>
          <p>Bülten aboneliğinden her e-postanın altındaki bağlantıyla ya da bize yazarak dilediğiniz an çıkabilirsiniz.</p>
        </div>
      </section>
    </>
  );
}
