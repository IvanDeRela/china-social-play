import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";
import { palette, baseOptions } from "../ChartTheme";

/** Mejora 5 — Proyecciones financieras con Chart.js (mixto barras + línea, breakeven Y3). */
type Scenario = "conservador" | "base" | "optimista";

const data = {
  conservador: {
    revenue: [0.3, 4, 20, 55, 140],
    cost: [2.5, 7, 20, 38, 75],
    ebitda: [-2.2, -3, 0, 17, 65],
    arpu: [4, 6, 10, 14, 18],
    mau: [0.04, 0.4, 1.5, 4, 8],
  },
  base: {
    revenue: [0.5, 6, 30, 80, 200],
    cost: [2.8, 8, 22, 45, 90],
    ebitda: [-2.3, -2, 8, 35, 110],
    arpu: [5, 7, 12, 16, 20],
    mau: [0.05, 0.5, 2, 5, 10],
  },
  optimista: {
    revenue: [0.7, 9, 45, 120, 280],
    cost: [3, 9, 25, 55, 110],
    ebitda: [-2.3, 0, 20, 65, 170],
    arpu: [6, 9, 14, 19, 24],
    mau: [0.07, 0.7, 3, 7, 14],
  },
};

const labels = ["Y1", "Y2", "Y3", "Y4", "Y5"];

export const SlideMonetization = () => {
  const [scenario, setScenario] = useState<Scenario>("base");
  const d = data[scenario];

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        type: "bar" as const,
        label: "Ingresos (M USD)",
        data: d.revenue,
        backgroundColor: palette.primaryAlpha(0.85),
        borderRadius: 6,
        order: 2,
      },
      {
        type: "bar" as const,
        label: "Gastos (M USD)",
        data: d.cost,
        backgroundColor: palette.copperAlpha(0.65),
        borderRadius: 6,
        order: 2,
      },
      {
        type: "line" as const,
        label: "EBITDA (M USD)",
        data: d.ebitda,
        borderColor: palette.success(),
        backgroundColor: palette.successAlpha(0.15),
        borderWidth: 3,
        tension: 0.35,
        pointRadius: 5,
        pointBackgroundColor: palette.success(),
        fill: false,
        order: 1,
      },
    ],
  }), [d, scenario]);

  const opts = useMemo(() => ({
    ...baseOptions(),
    scales: {
      ...baseOptions().scales,
      y: { ...baseOptions().scales.y, title: { display: true, text: "Millones USD", color: palette.muted(), font: { size: 11 } } },
    },
  }), []);

  const summary = [
    { y: "Y1", arr: d.revenue[0], mau: d.mau[0], arpu: d.arpu[0], ebitda: d.ebitda[0], cost: d.cost[0] },
    { y: "Y2", arr: d.revenue[1], mau: d.mau[1], arpu: d.arpu[1], ebitda: d.ebitda[1], cost: d.cost[1] },
    { y: "Y3", arr: d.revenue[2], mau: d.mau[2], arpu: d.arpu[2], ebitda: d.ebitda[2], cost: d.cost[2] },
    { y: "Y4", arr: d.revenue[3], mau: d.mau[3], arpu: d.arpu[3], ebitda: d.ebitda[3], cost: d.cost[3] },
    { y: "Y5", arr: d.revenue[4], mau: d.mau[4], arpu: d.arpu[4], ebitda: d.ebitda[4], cost: d.cost[4] },
  ];

  const breakevenYear = summary.findIndex((s) => s.ebitda > 0);

  // DAU evolution chart with gradient cyan fill
  const dauData = useMemo(() => ({
    labels,
    datasets: [{
      label: "DAU (millones)",
      data: [0.05, 0.5, 2, 5, 10],
      borderColor: palette.primary(),
      backgroundColor: (ctx: any) => {
        const c = ctx.chart.ctx;
        const g = c.createLinearGradient(0, 0, 0, 260);
        g.addColorStop(0, palette.primaryAlpha(0.45));
        g.addColorStop(1, palette.primaryAlpha(0.02));
        return g;
      },
      borderWidth: 3,
      tension: 0.4,
      pointRadius: 5,
      pointBackgroundColor: palette.primary(),
      fill: true,
    }],
  }), []);

  return (
    <SlideShell chapter="06" chapterLabel="Proyecciones">
      <div className="flex items-start justify-between gap-6 flex-wrap mb-6">
        <div>
          <Eyebrow color="primary">Proyecciones · 5 años</Eyebrow>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="display-xl text-3xl md:text-4xl lg:text-5xl mt-5 max-w-3xl"
          >
            Breakeven <span className="text-success">Y3</span>.
            EBITDA{" "}
            <Money value={`+${d.ebitda[4]}`} unit="M USD" tone="success" size="lg" /> en Y5.
          </motion.h2>
        </div>

        {/* Scenario toggle */}
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 shadow-card">
          {(["conservador", "base", "optimista"] as Scenario[]).map((s) => (
            <button
              key={s}
              onClick={() => setScenario(s)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium capitalize transition-colors ${
                scenario === s ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
        {/* Bar chart: ingresos / gastos / EBITDA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 relative rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-2">
            Ingresos · Gastos · EBITDA (M USD)
          </div>
          <div className="relative h-[260px]">
            <Bar data={chartData as any} options={opts as any} />
            {/* BREAKEVEN vertical marker on Y3 (col 3 of 5) */}
            {breakevenYear >= 0 && (
              <div
                className="pointer-events-none absolute top-2 bottom-8 border-l-2 border-dashed border-success"
                style={{ left: `${10 + (breakevenYear + 0.5) * (80 / 5)}%` }}
              >
                <span className="absolute -top-1 -translate-x-1/2 rounded-full bg-success px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-wider text-white whitespace-nowrap">
                  Breakeven
                </span>
              </div>
            )}
          </div>
        </motion.div>

        {/* DAU evolution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-baseline justify-between mb-2">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              DAU · usuarios diarios
            </div>
            <div className="font-mono text-[10px] text-primary">50k → 10M</div>
          </div>
          <div className="h-[260px]">
            <Line data={dauData} options={opts as any} />
          </div>
        </motion.div>
      </div>

      {/* Summary table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-card"
      >
        <div className="grid grid-cols-6 border-b border-border bg-muted/40 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <div className="px-4 py-2.5">Año</div>
          <div className="px-4 py-2.5 text-right">ARR (M USD)</div>
          <div className="px-4 py-2.5 text-right">MAU (M)</div>
          <div className="px-4 py-2.5 text-right">ARPU (USD)</div>
          <div className="px-4 py-2.5 text-right">EBITDA (M USD)</div>
          <div className="px-4 py-2.5 text-right">Margen</div>
        </div>
        {summary.map((r) => {
          const margin = r.arr > 0 ? Math.round((r.ebitda / r.arr) * 100) : null;
          return (
            <div key={r.y} className="grid grid-cols-6 border-b border-border last:border-0 text-sm font-mono">
              <div className="px-4 py-2.5 font-serif text-foreground">{r.y}</div>
              <div className="px-4 py-2.5 text-right text-primary font-semibold">{r.arr}</div>
              <div className="px-4 py-2.5 text-right text-foreground">{r.mau}</div>
              <div className="px-4 py-2.5 text-right text-foreground">{r.arpu}</div>
              <div className={`px-4 py-2.5 text-right font-semibold ${r.ebitda >= 0 ? "text-success" : "text-danger"}`}>
                {r.ebitda > 0 ? "+" : ""}{r.ebitda}
              </div>
              <div className={`px-4 py-2.5 text-right font-semibold ${margin !== null && margin >= 0 ? "text-success" : "text-danger"}`}>
                {margin !== null ? `${margin > 0 ? "+" : ""}${margin}%` : "—"}
              </div>
            </div>
          );
        })}
      </motion.div>

      <p className="mt-3 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
        Proyecciones del equipo fundador · metodología disponible en el anexo.
      </p>
    </SlideShell>
  );
};
