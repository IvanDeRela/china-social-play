import { useMemo } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";
import { palette, baseOptions } from "../ChartTheme";

/** Mejora 6 — economías de escala. Coste unitario decreciente vs ARPU creciente. */
export const SlideRoadmap = () => {
  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5"];

  // Unit cost per user vs ARPU
  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Coste unitario por usuario (USD)",
        data: [56, 16, 11, 9, 9],
        borderColor: palette.copper(),
        backgroundColor: palette.copperAlpha(0.1),
        borderWidth: 3,
        tension: 0.35,
        pointRadius: 4,
        pointBackgroundColor: palette.copper(),
        fill: true,
      },
      {
        label: "Ingreso por usuario · ARPU (USD)",
        data: [5, 7, 12, 16, 20],
        borderColor: palette.primary(),
        backgroundColor: palette.primaryAlpha(0.1),
        borderWidth: 3,
        tension: 0.35,
        pointRadius: 4,
        pointBackgroundColor: palette.primary(),
        fill: true,
      },
    ],
  }), []);

  const opts = useMemo(() => baseOptions(), []);

  const economies = [
    { icon: "☁️", title: "Cloud Tencent", body: "−30 % por TB a partir de 1M DAU (descuentos de volumen)." },
    { icon: "⚽", title: "Licencias deportivas", body: "Coste fijo: pasa del 18 % del revenue (Y1) al 4 % (Y5)." },
    { icon: "📣", title: "CAC blended", body: <>Cae de <Money value="USD 4" tone="copper" size="sm" /> (Y1) a <Money value="USD 1,2" tone="primary" size="sm" /> (Y5) por viralidad WeChat.</> },
    { icon: "🤖", title: "Soporte IA", body: "1 agente cada 50.000 usuarios. 10× el ratio sectorial." },
  ];

  return (
    <SlideShell chapter="07" chapterLabel="Escala">
      <Eyebrow color="success">Economías de escala · unit economics</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 max-w-4xl"
      >
        Cuanto más crecemos, <span className="font-serif italic text-success">más rentables somos</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Punto de viabilidad · año 3
          </div>
          <div className="h-[260px]">
            <Line data={chartData} options={opts as any} />
          </div>
        </motion.div>

        {/* Unit economics hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="lg:col-span-5 grid grid-cols-2 gap-3"
        >
          {[
            { val: "USD 2,5", label: "CAC blended Y3", tone: "copper" as const },
            { val: "USD 45", label: "LTV Y3", tone: "primary" as const },
            { val: "18×", label: "LTV/CAC ratio", tone: "success" as const, hint: "Sano: 3-5×" },
            { val: "4 meses", label: "Payback period", tone: "primary" as const },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <Money value={s.val} size="md" tone={s.tone} />
              <div className="mt-2 text-xs text-muted-foreground">{s.label}</div>
              {s.hint && <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-success">{s.hint}</div>}
            </div>
          ))}
        </motion.div>
      </div>

      {/* 4 cost cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {economies.map((e, i) => (
          <motion.div
            key={e.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-4 shadow-card"
          >
            <div className="text-xl mb-2">{e.icon}</div>
            <h4 className="font-serif text-base text-foreground mb-1">{e.title}</h4>
            <p className="text-xs leading-relaxed text-muted-foreground">{e.body}</p>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
};
