import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

// Resolve CSS HSL var to "hsl(...)" string at runtime
export const cssVar = (name: string, alpha = 1) => {
  if (typeof window === "undefined") return `hsl(190 95% 36%)`;
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return alpha === 1 ? `hsl(${v})` : `hsl(${v} / ${alpha})`;
};

export const palette = {
  primary: () => cssVar("--primary"),
  primaryAlpha: (a: number) => cssVar("--primary", a),
  copper: () => cssVar("--copper"),
  copperAlpha: (a: number) => cssVar("--copper", a),
  success: () => cssVar("--success"),
  successAlpha: (a: number) => cssVar("--success", a),
  danger: () => cssVar("--danger"),
  warn: () => cssVar("--warn"),
  fg: () => cssVar("--foreground"),
  muted: () => cssVar("--muted-foreground"),
  border: () => cssVar("--border"),
};

export const baseOptions = () => ({
  responsive: true,
  maintainAspectRatio: false,
  interaction: { mode: "index" as const, intersect: false },
  plugins: {
    legend: {
      labels: {
        color: palette.fg(),
        font: { family: "Inter, sans-serif", size: 12, weight: 500 },
        usePointStyle: true,
        padding: 16,
      },
    },
    tooltip: {
      backgroundColor: palette.fg(),
      titleColor: "#fafaf7",
      bodyColor: "#fafaf7",
      borderColor: palette.border(),
      padding: 12,
      titleFont: { family: "Inter", size: 12, weight: 600 },
      bodyFont: { family: "JetBrains Mono", size: 12 },
      callbacks: {},
    },
  },
  scales: {
    x: {
      grid: { color: palette.border(), display: false },
      ticks: { color: palette.muted(), font: { family: "JetBrains Mono", size: 11 } },
    },
    y: {
      grid: { color: palette.border() },
      ticks: { color: palette.muted(), font: { family: "JetBrains Mono", size: 11 } },
    },
  },
});
