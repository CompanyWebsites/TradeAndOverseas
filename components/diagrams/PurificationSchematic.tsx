export function PurificationSchematic({ dark }: { dark?: boolean }) {
  const line = dark ? "#EFEDE3" : "#12201B";
  const dim = dark ? "#6C8F80" : "#9B9284";
  const fill = dark ? "#3F6656" : "#C1793A";

  return (
    <svg
      viewBox="0 0 720 220"
      className="h-auto w-full"
      role="img"
      aria-label="Diagram: ambient polluted air enters the THAPAK system, passes through passive filtration without electricity, and purified air is released."
    >
      {/* registration ticks */}
      <path d="M8 8H24M8 8V24" stroke={dim} strokeWidth="1" />
      <path d="M712 212H696M712 212V196" stroke={dim} strokeWidth="1" />

      {/* dashed particulate field — before */}
      {Array.from({ length: 24 }).map((_, i) => (
        <circle
          key={i}
          cx={30 + (i % 6) * 12}
          cy={70 + Math.floor(i / 6) * 12}
          r="1.4"
          fill={dim}
        />
      ))}
      <text x="30" y="140" fontFamily="var(--font-mono)" fontSize="11" fill={dim}>
        AMBIENT POLLUTED AIR
      </text>

      {/* connector */}
      <line x1="180" y1="90" x2="250" y2="90" stroke={dim} strokeWidth="1" />
      <path d="M244 84L252 90L244 96" stroke={dim} strokeWidth="1" fill="none" />

      {/* system box */}
      <rect x="260" y="40" width="200" height="100" stroke={line} strokeWidth="1.25" fill="none" />
      <line x1="290" y1="40" x2="290" y2="140" stroke={line} strokeWidth="0.75" />
      <line x1="320" y1="40" x2="320" y2="140" stroke={line} strokeWidth="0.75" />
      <line x1="350" y1="40" x2="350" y2="140" stroke={line} strokeWidth="0.75" />
      <line x1="380" y1="40" x2="380" y2="140" stroke={line} strokeWidth="0.75" />
      <line x1="410" y1="40" x2="410" y2="140" stroke={line} strokeWidth="0.75" />
      <line x1="440" y1="40" x2="440" y2="140" stroke={line} strokeWidth="0.75" />
      <text x="360" y="160" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="11" fill={line}>
        PASSIVE FILTRATION
      </text>
      <text x="360" y="174" textAnchor="middle" fontFamily="var(--font-mono)" fontSize="9.5" fill={dim}>
        NO ELECTRICITY · NO EXTERNAL ENERGY
      </text>

      {/* connector */}
      <line x1="470" y1="90" x2="540" y2="90" stroke={dim} strokeWidth="1" />
      <path d="M534 84L542 90L534 96" stroke={dim} strokeWidth="1" fill="none" />

      {/* purified air — after */}
      {Array.from({ length: 16 }).map((_, i) => (
        <circle
          key={i}
          cx={560 + (i % 4) * 16}
          cy={70 + Math.floor(i / 4) * 16}
          r="1.4"
          fill={fill}
        />
      ))}
      <text x="558" y="140" fontFamily="var(--font-mono)" fontSize="11" fill={line}>
        PURIFIED AIR RELEASED
      </text>
    </svg>
  );
}
