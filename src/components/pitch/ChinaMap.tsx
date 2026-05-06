import { motion } from "framer-motion";

/** Simplified China silhouette SVG with Tier 1-2 cities as pulsing dots. */
const cities = [
  { name: "Pekín",     x: 540, y: 220, tier: 1 },
  { name: "Shanghái",  x: 600, y: 360, tier: 1 },
  { name: "Shenzhen",  x: 520, y: 510, tier: 1 },
  { name: "Guangzhou", x: 510, y: 495, tier: 1 },
  { name: "Chengdu",   x: 380, y: 380, tier: 2 },
  { name: "Wuhan",     x: 500, y: 380, tier: 2 },
  { name: "Xi'an",     x: 430, y: 320, tier: 2 },
  { name: "Hangzhou",  x: 590, y: 380, tier: 2 },
  { name: "Hong Kong", x: 530, y: 530, tier: 1 },
];

// Stylized China outline (approximated path; decorative, not geographically exact)
const chinaPath =
  "M180,260 C200,200 250,160 320,150 C380,140 430,150 470,140 C510,130 540,100 580,110 C620,120 660,150 680,200 C700,250 690,280 670,300 C690,320 700,360 680,400 C700,420 700,470 670,500 C640,540 580,560 540,560 C520,580 470,590 430,580 C400,600 340,590 310,560 C260,540 220,500 200,460 C180,440 160,420 165,380 C150,360 140,320 180,260 Z";

interface ChinaMapProps {
  className?: string;
}

export const ChinaMap = ({ className }: ChinaMapProps) => {
  return (
    <svg viewBox="100 80 620 520" className={className} role="img" aria-label="Mapa de China con ciudades Tier 1-2">
      <defs>
        <linearGradient id="cn-fill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(var(--primary) / 0.18)" />
          <stop offset="100%" stopColor="hsl(var(--copper) / 0.10)" />
        </linearGradient>
        <radialGradient id="dot-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        </radialGradient>
      </defs>

      <motion.path
        d={chinaPath}
        fill="url(#cn-fill)"
        stroke="hsl(var(--primary) / 0.55)"
        strokeWidth={2}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />

      {cities.map((c, i) => (
        <g key={c.name}>
          <motion.circle
            cx={c.x} cy={c.y} r={c.tier === 1 ? 28 : 18}
            fill="url(#dot-glow)"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.4, 1], opacity: [0, 0.8, 0.5] }}
            transition={{ duration: 1.8, delay: 0.6 + i * 0.12, repeat: Infinity, repeatDelay: 1.5 }}
            style={{ transformOrigin: `${c.x}px ${c.y}px` }}
          />
          <motion.circle
            cx={c.x} cy={c.y} r={c.tier === 1 ? 6 : 4}
            fill={c.tier === 1 ? "hsl(var(--primary))" : "hsl(var(--copper))"}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
          />
          <motion.text
            x={c.x + 12} y={c.y + 4}
            fontSize={c.tier === 1 ? 18 : 14}
            fontFamily="JetBrains Mono, monospace"
            fontWeight={c.tier === 1 ? 700 : 500}
            fill={c.tier === 1 ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))"}
            initial={{ opacity: 0, x: c.x }}
            animate={{ opacity: 1, x: c.x + 12 }}
            transition={{ duration: 0.5, delay: 0.8 + i * 0.12 }}
          >
            {c.name}
          </motion.text>
        </g>
      ))}
    </svg>
  );
};
