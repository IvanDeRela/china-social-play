import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

const phases = [
  {
    label: "Fase 1",
    months: "Mes 1 — 6",
    title: "Lanzamiento y prueba",
    items: [
      "Versión inicial dentro de WeChat",
      "Objetivo: 15.000 usuarios activos al mes",
      "Torneo piloto con la Liga española",
      "Comprobar que la gente vuelve cada semana",
    ],
    color: "primary",
    bar: 100,
  },
  {
    label: "Fase 2",
    months: "Mes 6 — 12",
    title: "Empezar a ingresar",
    items: [
      "Activamos la suscripción VIP (¥29/mes)",
      "Que un 3 % de usuarios pase a pagar",
      "Primer gran patrocinador firmado",
      "Añadimos torneos de eSports",
    ],
    color: "info",
    bar: 65,
  },
  {
    label: "Equilibrio",
    months: "Mes 14",
    title: "Cubrimos costes",
    items: [
      "Equipo reducido de 6 personas",
      "Ingresos previstos: ¥380.000 al mes",
      "Cuentas en positivo y sin deuda",
      "Listos para buscar inversión y escalar",
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
        Plan en 14 meses,
        <br />
        <span className="text-primary">sin promesas infladas</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        Tres fases claras, cada una con su objetivo medible.{" "}
        <strong className="text-foreground font-medium">En el mes 14 cubrimos costes</strong> sin
        depender de rondas de inversión grandes.
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
          { val: "15.000", sub: "Usuarios al mes 6", color: "primary" },
          { val: "3%", sub: "Pasan a VIP en mes 12", color: "info" },
          { val: "¥380K", sub: "Ingresos al mes 14", color: "gold" },
          { val: "Mes 14", sub: "Cubrimos costes", color: "gold" },
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
