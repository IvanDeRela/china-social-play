import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import { TrendingUp, Check } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";
import { palette, baseOptions } from "../ChartTheme";

type Scenario = "conservador" | "base" | "optimista";

const data = {
  conservador: {
    revenue: [0.3, 4, 20, 55, 140], cost: [2.5, 7, 20, 38, 75], ebitda: [-2.2, -3, 0, 17, 65],
    arpu: [4, 6, 10, 14, 18], mau: [0.04, 0.4, 1.5, 4, 8],
  },
  base: {
    revenue: [0.5, 6, 30, 80, 200], cost: [2.8, 8, 22, 45, 90], ebitda: [-2.3, -2, 8, 35, 110],
    arpu: [5, 7, 12, 16, 20], mau: [0.05, 0.5, 2, 5, 10],
  },
  optimista: {
    revenue: [0.7, 9, 45, 120, 280], cost: [3, 9, 25, 55, 110], ebitda: [-2.3, 0, 20, 65, 170],
    arpu: [6, 9, 14, 19, 24], mau: [0.07, 0.7, 3, 7, 14],
  },
};

const labels = ["Y1", "Y2", "Y3", "Y4", "Y5"];

const tiers = [
  { name: "Free", price: "$0", per: "siempre", features: ["Crear equipo", "Liga pública", "Stats básicas"], tone: "muted" as const },
  { name: "Premium", price: "$11", per: "/trim", features: ["Liga privada", "AI predicciones", "Sin ads", "Live stats"], tone: "primary" as const, highlight: true, badge: "Más popular" },
  { name: "VIP", price: "$28", per: "/año", features: ["Todo Premium", "−50 % anual", "Insignia VIP", "Soporte 24/7"], tone: "copper" as const },
];

export const SlideMonetization = () => {
  const [scenario, setScenario] = useState<Scenario>("base");
  const d = data[scenario];

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      { type: "bar" as const, label: "Ingresos (M USD)", data: d.revenue, backgroundColor: palette.primaryAlpha(0.85), borderRadius: 6, order: 2 },
      { type: "bar" as const, label: "Gastos (M USD)",   data: d.cost,    backgroundColor: palette.copperAlpha(0.65), borderRadius: 6, order: 2 },
      { type: "line" as const, label: "EBITDA (M USD)",  data: d.ebitda,  borderColor: palette.success(), backgroundColor: palette.successAlpha(0.15), borderWidth: 3, tension: 0.35, pointRadius: 5, pointBackgroundColor: palette.success(), fill: false, order: 1 },
    ],
  }), [d]);

  const opts = useMemo(() => ({
    ...baseOptions(),
    scales: { ...baseOptions().scales, y: { ...baseOptions().scales.y, title: { display: true, text: "Millones USD", color: palette.muted(), font: { size: 11 } } } },
  }), []);

  // Curva exponencial MAU con anotaciones grandes
  const dauData = useMemo(() => ({
    labels,
    datasets: [{
      label: "MAU (millones)",
      data: d.mau,
      borderColor: palette.primary(),
      backgroundColor: (ctx: any) => {
        const c = ctx.chart.ctx;
        const g = c.createLinearGradient(0, 0, 0, 260);
        g.addColorStop(0, palette.primaryAlpha(0.55));
        g.addColorStop(1, palette.primaryAlpha(0.02));
        return g;
      },
      borderWidth: 4, tension: 0.5, pointRadius: 6, pointBackgroundColor: palette.primary(), fill: true,
    }],
  }), [d]);

  const breakevenYear = d.ebitda.findIndex((v) => v > 0);

  return (
    <SlideShell chapter="06" chapterLabel="Proyecciones" watermark="增">
      <div className="flex items-start justify-between gap-6 flex-wrap mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="h-6 w-6 text-success" />
            <Eyebrow color="primary">Proyecciones · 5 años</Eyebrow>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="display-xl text-3xl md:text-4xl lg:text-5xl mt-4 max-w-3xl"
          >
            Breakeven <span className="text-success">Y3</span>. EBITDA{" "}
            <Money value={`+${d.ebitda[4]}`} unit="M USD" tone="success" size="lg" /> en Y5.
          </motion.h2>
        </div>

        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-card">
          {(["conservador", "base", "optimista"] as Scenario[]).map((s) => (
            <button key={s} onClick={() => setScenario(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${scenario === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Pricing tiers SaaS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {tiers.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            className={`relative rounded-2xl p-5 shadow-card ${t.highlight ? "border-2 border-primary bg-primary/5 scale-[1.02]" : "border border-border bg-card"}`}
          >
            {t.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-primary-foreground">
                {t.badge}
              </span>
            )}
            <div className="font-serif text-xl text-foreground mb-1">{t.name}</div>
            <div className="flex items-baseline gap-1 mb-3">
              <span className={`font-mono font-bold text-5xl ${t.tone === "primary" ? "text-primary" : t.tone === "copper" ? "text-copper" : "text-foreground"}`}>{t.price}</span>
              <span className="text-xs text-muted-foreground">{t.per}</span>
            </div>
            <ul className="space-y-1.5">
              {t.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-xs text-foreground/85">
                  <Check className="h-3.5 w-3.5 text-success shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-7 relative rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
            Ingresos · Gastos · EBITDA (M USD)
          </div>
          <div className="relative h-[240px]">
            <Bar data={chartData as any} options={opts as any} />
            {breakevenYear >= 0 && (
              <div className="pointer-events-none absolute top-2 bottom-8 border-l-2 border-dashed border-success" style={{ left: `${10 + (breakevenYear + 0.5) * (80 / 5)}%` }}>
                <span className="absolute -top-1 -translate-x-1/2 rounded-full bg-success px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white whitespace-nowrap">Breakeven</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Curva exponencial MAU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}
          className="lg:col-span-5 rounded-2xl border border-primary/30 bg-card p-6 shadow-card relative overflow-hidden"
        >
          <div className="flex items-baseline justify-between mb-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary font-bold">Crecimiento MAU · exponencial</div>
          </div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-mono font-bold text-6xl text-primary">{d.mau[0]}M</span>
            <span className="text-2xl text-muted-foreground">→</span>
            <span className="font-mono font-bold text-7xl text-primary text-glow-primary">{d.mau[4]}M</span>
          </div>
          <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-2">Y1 → Y5 · MAU</div>
          <div className="h-[180px]">
            <Line data={dauData} options={opts as any} />
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
};
