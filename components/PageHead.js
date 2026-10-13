import Link from "next/link";
export default function PageHead({ title, lead, crumb }) {
  return (
    <header className="page-head">
      <div className="wrap">
        <p className="crumb"><Link href="/">Ana sayfa</Link>{crumb && <> / {crumb}</>}</p>
        <h1>{title}</h1>
        {lead && <p className="lead">{lead}</p>}
      </div>
    </header>
  );
}
