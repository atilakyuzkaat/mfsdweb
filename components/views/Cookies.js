import PageHead from "@/components/PageHead";
import { getDict } from "@/lib/i18n";
import { company } from "@/lib/site";

const body = {
  tr: [
    "mfsd.com.tr reklam veya izleme amaçlı çerez kullanmaz. Site yalnızca çalışması için teknik olarak zorunlu olan işlevleri kullanır ve bunlar için onay gerekmez.",
    "İleride ziyaretçi istatistikleri için bir analiz aracı eklenirse bu sayfa güncellenecek ve gerekli durumlarda ziyaretçilerden önceden onay alınacaktır.",
  ],
  en: [
    "mfsd.com.tr does not use advertising or tracking cookies. The site only uses features that are strictly necessary for it to work, and these do not require consent.",
    "If we add an analytics tool in the future, this page will be updated and visitors will be asked for consent where required.",
  ],
};

export default function Cookies({ lang }) {
  const t = getDict(lang);
  return (
    <>
      <PageHead lang={lang} t={t} title={t.meta.cookies.title} crumb={t.meta.cookies.title} />
      <section className="section">
        <div className="wrap prose">
          {body[lang].map((p) => <p key={p}>{p}</p>)}
          <p>{lang === "en" ? "Questions:" : "Sorularınız için:"} <a href={`mailto:${company.email}`}>{company.email}</a></p>
        </div>
      </section>
    </>
  );
}
