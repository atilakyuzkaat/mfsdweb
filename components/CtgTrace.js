// Kardiyotokografi (CTG) kâğıdı: üstte fetal kalp hızı, altta uterus kasılması.
// Deterministik üretilir (her yüklemede aynı çizgi), sunucuda render edilir.

const W = 1200;
const FHR_H = 150; // fetal kalp hızı kanalı yüksekliği
const TOCO_H = 70; // kasılma kanalı
const GAP = 18;

// Periyodu tam W olan dalgalar: çizginin sonu başına denk gelir, böylece kayıt kesintisiz akar.
const TAU = Math.PI * 2;
const wave = (x, k) => Math.sin((TAU * k * x) / W);
function noise(x) {
  return wave(x, 151) * 0.55 + wave(x, 97) * 0.35 + wave(x, 23) * 0.45 + wave(x, 7) * 0.4;
}
const bump = (x, c, w, h) => h * Math.exp(-((x - c) ** 2) / (2 * w * w));

function fhrPath() {
  const pts = [];
  for (let x = 0; x <= W; x += 4) {
    let bpm = 138 + noise(x) * 4.2;
    bpm += bump(x, 330, 34, 22) + bump(x, 860, 30, 19) + bump(x, 1100, 26, 12);
    const y = FHR_H - ((bpm - 90) / (190 - 90)) * FHR_H;
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return "M" + pts.join(" L");
}

function tocoPath() {
  const pts = [];
  for (let x = 0; x <= W; x += 6) {
    let p = 10 + Math.abs(wave(x, 60)) * 1.2;
    p += bump(x, 300, 55, 48) + bump(x, 830, 52, 44);
    const y = TOCO_H - (p / 70) * TOCO_H;
    pts.push(`${x},${y.toFixed(1)}`);
  }
  return "M" + pts.join(" L");
}

export default function CtgTrace({ labels }) {
  const fhr = fhrPath();
  const toco = tocoPath();
  const band = (b) => FHR_H - ((b - 90) / 100) * FHR_H;
  return (
    <figure className="ctg" aria-label={labels.aria}>
      <svg viewBox={`0 0 ${W} ${FHR_H + GAP + TOCO_H}`} preserveAspectRatio="none" role="img" aria-hidden="true">
        <defs>
          <pattern id="ctg-minor" width="20" height="10" patternUnits="userSpaceOnUse">
            <path d="M20 0V10M0 10H20" fill="none" stroke="var(--grid)" strokeWidth="0.6" />
          </pattern>
          <pattern id="ctg-major" width="100" height="30" patternUnits="userSpaceOnUse">
            <rect width="100" height="30" fill="url(#ctg-minor)" />
            <path d="M100 0V30M0 30H100" fill="none" stroke="var(--grid-strong)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={FHR_H} fill="url(#ctg-major)" />
        {/* 110–160 atım/dk normal bant */}
        <rect x="0" y={band(160)} width={W} height={band(110) - band(160)} fill="var(--band)" />
        <g className="ctg-scroll">
          <path className="ctg-line ctg-fhr" d={fhr} />
          <path className="ctg-line ctg-fhr" d={fhr} transform={`translate(${W} 0)`} />
        </g>
        <g transform={`translate(0 ${FHR_H + GAP})`}>
          <rect width={W} height={TOCO_H} fill="url(#ctg-major)" />
          <g className="ctg-scroll">
            <path className="ctg-line ctg-toco" d={toco} />
            <path className="ctg-line ctg-toco" d={toco} transform={`translate(${W} 0)`} />
          </g>
        </g>
      </svg>
      <figcaption>
        <span>{labels.fhr}</span>
        <span>{labels.toco}</span>
      </figcaption>
    </figure>
  );
}
