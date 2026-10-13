import Link from "next/link";
import { routes } from "@/lib/i18n";
export default function PageHead({ lang, t, title, lead, crumb }) {
  return (
    <header className="page-head">
      <div className="wrap">
        <p className="crumb"><Link href={routes.home[lang]}>{t.crumbHome}</Link>{crumb && <> / {crumb}</>}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </header>
  );
}
