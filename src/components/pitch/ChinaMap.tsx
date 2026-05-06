import { motion } from "framer-motion";

/**
 * Mapa estilizado de China — cada ciudad se representa como una silueta
 * (área urbana aproximada) contorneada según su Tier (1 o 2).
 */
const cities = [
  // Tier 1 — siluetas más grandes, contorno primary
  { name: "Pekín",     cx: 540, cy: 220, tier: 1, r: 26 },
  { name: "Shanghái",  cx: 600, cy: 360, tier: 1, r: 28 },
  { name: "Shenzhen",  cx: 520, cy: 510, tier: 1, r: 22 },
  { name: "Guangzhou", cx: 495, cy: 495, tier: 1, r: 24 },
  { name: "Hong Kong", cx: 540, cy: 535, tier: 1, r: 18 },
  // Tier 2 — siluetas medianas, contorno copper
  { name: "Chengdu",   cx: 380, cy: 380, tier: 2, r: 20 },
  { name: "Wuhan",     cx: 500, cy: 380, tier: 2, r: 18 },
  { name: "Xi'an",     cx: 430, cy: 320, tier: 2, r: 18 },
  { name: "Hangzhou",  cx: 595, cy: 385, tier: 2, r: 18 },
];

// Stylized China outline
const chinaPath =
  "M180,260 C200,200 250,160 320,150 C380,140 430,150 470,140 C510,130 540,100 580,110 C620,120 660,150 680,200 C700,250 690,280 670,300 C690,320 700,360 680,400 C700,420 700,470 670,500 C640,540 580,560 540,560 C520,580 470,590 430,580 C400,600 340,590 310,560 C260,540 220,500 200,460 C180,440 160,420 165,380 C150,360 140,320 180,260 Z";

/** Genera un path "blob" pseudo-orgánico para representar la silueta urbana. */
const blobPath = (cx: number, cy: number, r: number, seed: number) => {
  const points = 8;
  const pts: [number, number][] = [];
  for (let i = 0; i < points; i++) {
    const angle = (i / points) * Math.PI * 2;
    const variance = 0.75 + ((Math.sin(seed * (i + 1)) + 1) / 2) * 0.5;
    pts.push([cx + Math.cos(angle) * r * variance, cy + Math.sin(angle) * r * variance]);
  }
  let d = `M ${pts[0][0]},${pts[0][1]}`;
  for (let i = 0; i < points; i++) {
    const [x1, y1] = pts[i];
    const [x2, y2] = pts[(i + 1) % points];
    const cxm = (x1 + x2) / 2;
    const cym = (y1 + y2) / 2;
    d += ` Q ${x1},${y1} ${cxm},${cym}`;
  }
  return d + " Z";
};

interface ChinaMapProps {
  className?: string;
}

export const ChinaMap = ({ className }: ChinaMapProps) => {
  return (
    <svg viewBox="100 80 620 520" className={className} role="img" aria-label="Mapa de China con ciudades Tier 1-2">
      <defs>
        <linearGradient id="cn-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.12)" />
          <stop offset="100%" stopColor="hsl(var(--copper) / 0.06)" />
        </linearGradient>
      </defs>

      <motion.path
        d={chinaPath}
        fill="url(#cn-fill)"
        stroke="hsl(var(--primary) / 0.45)"
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />

      {cities.map((c, i) => {
        const stroke = c.tier === 1 ? "hsl(var(--primary))" : "hsl(var(--copper))";
        const fill = c.tier === 1 ? "hsl(var(--primary) / 0.18)" : "hsl(var(--copper) / 0.14)";
        const path = blobPath(c.cx, c.cy, c.r, i + 1);
        return (
          <g key={c.name}>
            <motion.path
              d={path}
              fill={fill}
              stroke={stroke}
              strokeWidth={2.2}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease: "backOut" }}
              style={{ transformOrigin: `${c.cx}px ${c.cy}px` }}
            />
            <motion.circle
              cx={c.cx} cy={c.cy} r={c.tier === 1 ? 3 : 2.4}
              fill={stroke}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
            />
            <motion.text
              x={c.cx + c.r + 6} y={c.cy + 5}
              fontSize={c.tier === 1 ? 17 : 14}
              fontFamily="JetBrains Mono, monospace"
              fontWeight={c.tier === 1 ? 700 : 500}
              fill={c.tier === 1 ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.08 }}
            >
              {c.name}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
};
