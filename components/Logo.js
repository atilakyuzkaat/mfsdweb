// Geçici logomark: iki iç içe daire (anne ve bebek) + kelime işareti.
export default function Logo({ light = false }) {
  return (
    <span className={light ? "logo logo-light" : "logo"}>
      <svg width="30" height="30" viewBox="0 0 30 30" aria-hidden="true">
        <circle cx="15" cy="15" r="13" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="18.5" cy="17.5" r="5.5" fill="var(--rose)" />
      </svg>
      <span className="logo-word">MFSD</span>
    </span>
  );
}
