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
