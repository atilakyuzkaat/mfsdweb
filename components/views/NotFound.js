import Link from "next/link";
import { getDict, routes } from "@/lib/i18n";
export default function NotFoundView({ lang }) {
  const t = getDict(lang).notFound;
  return (
    <section className="section">
      <div className="wrap measure">
        <h1>{t.title}</h1>
        <p className="lead">{t.text}</p>
        <div className="actions">
          <Link href={routes.home[lang]} className="btn">{t.home}</Link>
          <Link href={routes.contact[lang]} className="btn btn-ghost">{t.contact}</Link>
        </div>
      </div>
    </section>
  );
}
