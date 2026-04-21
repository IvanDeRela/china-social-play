import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

const phases = [
  {
    label: "Fase 1",
    months: "M1 — M6",
    title: "MVP y validación",
    items: [
      "MVP funcional como WeChat Mini-Program",
      "Target: 15.000 MAU orgánicos",
      "Torneo piloto: Liga Fantasy LaLiga",
      "KPI clave: retención D7 > 40%",
    ],
    color: "primary",
    bar: 100,
  },
  {
    label: "Fase 2",
    months: "M6 — M12",
    title: "Monetización y escala",
    items: [
      "Lanzamiento VIP Pro Analytics (¥29/mes)",
      "Target: 3% conversión Freemium → VIP",
      "Primer patrocinador local (sportswear / F&B)",
      "Expansión: añadir torneos de eSports",
    ],
    color: "info",
    bar: 65,
  },
  {
    label: "Break-Even",
    months: "Mes 14",
    title: "Punto de equilibrio",
    items: [
      "Equipo lean de 6 personas",
      "Ingresos proyectados: ¥380K/mes",
      "Margen operativo positivo, sin deuda",
      "Preparación Serie A si se supera SOM",
    ],
    color: "gold",
    bar: 30,
  },
];

export const SlideRoadmap = () => {
  return (
    <SlideShell chapter="08" chapterLabel="Roadmap">
      <Eyebrow color="primary">Plan de ejecución</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 max-w-4xl"
      >
        Roadmap lean y
        <br />
        <span className="text-primary">proyecciones conservadoras</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        Tres fases secuenciales con métricas de validación claras por etapa.{" "}
        <strong className="text-foreground font-medium">Break-even proyectado al mes 14</strong> sin
        necesidad de rondas de financiación agresivas.
      </motion.p>

      {/* Phases */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 flex-1">
        {phases.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 + i * 0.15 }}
            className="relative overflow-hidden rounded-2xl border bg-card/40 p-6 backdrop-blur-sm"
            style={{ borderColor: `hsl(var(--${p.color}) / 0.3)` }}
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: `hsl(var(--${p.color}))` }}
              >
                {p.label}
              </span>
              <span className="rounded-full border border-border bg-background/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                {p.months}
              </span>
            </div>

            <h3 className="font-serif text-2xl text-foreground mb-5">{p.title}</h3>

            <div className="h-1 rounded-full bg-muted/40 overflow-hidden mb-5">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${p.bar}%` }}
                transition={{ duration: 1.2, delay: 0.7 + i * 0.15 }}
                className="h-full rounded-full"
                style={{ background: `hsl(var(--${p.color}))` }}
              />
            </div>

            <ul className="space-y-2.5">
              {p.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: `hsl(var(--${p.color}))` }}
                  />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* KPI strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { val: "15K MAU", sub: "Objetivo M6", color: "primary" },
          { val: "3% CVR", sub: "VIP a M12", color: "info" },
          { val: "¥380K/m", sub: "Break-even revenue", color: "gold" },
          { val: "Mes 14", sub: "Break-even fecha", color: "gold" },
        ].map((kpi, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-background/40 px-4 py-3 text-center"
            style={{ borderColor: `hsl(var(--${kpi.color}) / 0.25)` }}
          >
            <div className="font-serif text-xl" style={{ color: `hsl(var(--${kpi.color}))` }}>
              {kpi.val}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {kpi.sub}
            </div>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  );
};
