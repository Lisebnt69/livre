/** Drapeau américain en SVG (couleurs de la marque : bordeaux de la couverture et marine). */
export function UsFlag({ className = "", title }: { className?: string; title?: string }) {
  const W = 190;
  const H = 100;
  const sh = H / 13;
  const cw = 76;
  const ch = sh * 7;
  const stars: { x: number; y: number }[] = [];
  for (let r = 0; r < 9; r++) {
    const n = r % 2 === 0 ? 6 : 5;
    for (let c = 0; c < n; c++) {
      const x = (r % 2 === 0 ? c * 2 + 1 : c * 2 + 2) * (cw / 12);
      stars.push({ x, y: (r + 1) * (ch / 10) });
    }
  }
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      {title && <title>{title}</title>}
      <rect width={W} height={H} fill="#fff" />
      {Array.from({ length: 7 }, (_, i) => (
        <rect key={i} y={i * 2 * sh} width={W} height={sh} fill="#A1232B" />
      ))}
      <rect width={cw} height={ch} fill="#273472" />
      {stars.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={1.9} fill="#fff" />
      ))}
    </svg>
  );
}

/** Bande rayée bordeaux et crème, clin d'œil aux auvents et aux gradins américains. */
export function StripesBand({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-3 w-full ${className}`}
      style={{
        backgroundImage: "repeating-linear-gradient(90deg, #A1232B 0 22px, #FFFFFF 22px 44px)",
      }}
    />
  );
}

/** Rangée de cinq étoiles. */
export function StarRow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 20" className={className} aria-hidden="true">
      {[10, 35, 60, 85, 110].map((cx) => (
        <path
          key={cx}
          transform={`translate(${cx} 10)`}
          d="M0-9 2.6-2.8 9.3-2.4 4.2 1.9 5.8 8.4 0 4.9-5.8 8.4-4.2 1.9-9.3-2.4-2.6-2.8Z"
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

/** Guirlande de fanions bleu, blanc, rouge (kermesse et gradins américains). */
export function Bunting({ className = "" }: { className?: string }) {
  const colors = ["#A1232B", "#FFFFFF", "#273472"];
  const n = 24;
  return (
    <svg viewBox={`0 0 ${n * 40} 46`} preserveAspectRatio="none" className={className} aria-hidden="true">
      <path d={`M0 4 Q${n * 20} 14 ${n * 40} 4`} fill="none" stroke="#1B2350" strokeWidth="2" opacity=".35" />
      {Array.from({ length: n }, (_, i) => {
        const x = i * 40 + 4;
        const t = i / (n - 1);
        const y = 4 + 4 * 2 * (1 - 2 * Math.abs(t - 0.5)) * 1.25 * (t < 0.5 ? t * 2 : (1 - t) * 2) * 0.9;
        return <path key={i} d={`M${x} ${y} L${x + 32} ${y} L${x + 16} ${y + 30} Z`} fill={colors[i % 3]} stroke="#1B2350" strokeOpacity=".25" strokeWidth="1" />;
      })}
    </svg>
  );
}

/** Patch « varsity » : écusson de veste de lycée américain. */
export function VarsityPatch({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} role="img" aria-label="Écusson High School USA">
      <defs>
        <path id="patch-arc" d="M80 80 m-58 0 a58 58 0 1 1 116 0 a58 58 0 1 1 -116 0" />
      </defs>
      <circle cx="80" cy="80" r="76" fill="#273472" stroke="#fff" strokeWidth="5" />
      <circle cx="80" cy="80" r="66" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 4" />
      <circle cx="80" cy="80" r="40" fill="#A1232B" stroke="#fff" strokeWidth="3" />
      <text fill="#fff" fontSize="15" fontWeight="800" letterSpacing="3.2" fontFamily="'Figtree Variable', sans-serif">
        <textPath href="#patch-arc" startOffset="2%">HIGH SCHOOL USA ★ HIGH SCHOOL USA ★</textPath>
      </text>
      <text x="80" y="92" textAnchor="middle" fill="#fff" fontSize="34" fontWeight="900" fontFamily="'Figtree Variable', sans-serif">
        USA
      </text>
      <path transform="translate(80 60)" d="M0-9 2.6-2.8 9.3-2.4 4.2 1.9 5.8 8.4 0 4.9-5.8 8.4-4.2 1.9-9.3-2.4-2.6-2.8Z" fill="#fff" />
    </svg>
  );
}

/** Étoiles en motif, très discrètes, pour les fonds sombres. */
export const STAR_PATTERN =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='72' height='72'><path transform='translate(36 36) scale(1.6)' d='M0-9 2.6-2.8 9.3-2.4 4.2 1.9 5.8 8.4 0 4.9-5.8 8.4-4.2 1.9-9.3-2.4-2.6-2.8Z' fill='white' fill-opacity='0.07'/></svg>\")";
