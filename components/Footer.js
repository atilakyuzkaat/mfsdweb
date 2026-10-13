import Link from "next/link";
import { company, nav, fullAddress } from "@/lib/site";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <div className="footer-news">
          <h2>Gelişmelerden haberdar olun</h2>
          <p>PartoAI pilot sonuçları, eğitim takvimi ve klinik yayınlar hakkında yılda birkaç kez e-posta gönderiyoruz.</p>
          <NewsletterForm />
        </div>
        <div className="footer-cols">
          <div>
            <h3>Site</h3>
            <ul>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Yasal</h3>
            <ul>
              <li><Link href="/kvkk">KVKK aydınlatma metni</Link></li>
              <li><Link href="/cerez-politikasi">Çerez politikası</Link></li>
            </ul>
          </div>
          <div>
            <h3>İletişim</h3>
            <ul>
              <li><a href={`mailto:${company.email}`}>{company.email}</a></li>
              {company.phone && <li><a href={`tel:${company.phone.replace(/\s/g, "")}`}>{company.phone}</a></li>}
              <li>{company.address.district} / {company.address.city}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="wrap footer-legal">
        <Logo light />
        <p>
          <strong>{company.legalName}</strong><br />
          {fullAddress()}<br />
          MERSIS No: {company.mersis} · {company.tradeRegistry}
          {company.taxOffice && <> · {company.taxOffice}</>}
          {company.kep && <> · KEP: {company.kep}</>}
        </p>
        <p className="copy">© {year} MFSD. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
