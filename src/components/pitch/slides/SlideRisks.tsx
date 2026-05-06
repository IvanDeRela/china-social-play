import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

type Tone = "danger" | "warn" | "copper" | "primary" | "success";

interface Risk {
  id: string;
  short: string;
  full: string;
  /** 1 (baja) – 3 (alta) */
  prob: 1 | 2 | 3;
  impact: 1 | 2 | 3;
  tone: Tone;
  mitigation: string;
  metric: string;
}

const risks: Risk[] = [
  {
    id: "reg",
    short: "Regulación",
    full: "Cambio normativo PRC",
    prob: 2,
    impact: 3,
    tone: "danger",
    mitigation: "Counsel local · King & Wood Mallesons · estructura VIE · ICP M3.",
    metric: "$120K legal Y1",
  },
  {
    id: "bat",
    short: "BAT entra",
    full: "Tencent / Alibaba copia",
    prob: 3,
    impact: 2,
    tone: "warn",
    mitigation: "Foso comunidad WeChat + datos propietarios · ventana 24-36 m.",
    metric: "First mover",
  },
  {
    id: "wechat",
    short: "Bloqueo WeChat",
    full: "Mini-Program suspendido",
    prob: 1,
    impact: 3,
    tone: "danger",
    mitigation: "Diversificación Douyin Y3 · acuerdo marco Tencent post-Seed.",
    metric: "Plan B Douyin",
  },
  {
    id: "cac",
    short: "CAC sube",
    full: "Adquisición se encarece",
    prob: 2,
    impact: 2,
    tone: "copper",
    mitigation: "Viralidad WeChat (k=2,4×) · KOL deals · grupos privados.",
    metric: "$3,20 → $1,20",
  },
  {
    id: "season",
    short: "Estacionalidad",
    full: "Verano sin ligas",
    prob: 3,
    impact: 1,
    tone: "primary",
    mitigation: "Multi-liga: Premier · LaLiga · NBA · eSports todo el año.",
    metric: "4 ligas",
  },
  {
    id: "team",
    short: "Talento",
    full: "Hiring senior China",
    prob: 2,
    impact: 1,
    tone: "primary",
    mitigation: "Hub HK + remoto LATAM/EU · equity pool 12 %.",
    metric: "12 % ESOP",
  },
];

const toneBg: Record<Tone, string> = {
  danger: "bg-danger",
  warn: "bg-warn",
  copper: "bg-copper",
  primary: "bg-primary",
  success: "bg-success",
};
const toneText: Record<Tone, string> = {
  danger: "text-danger",
  warn: "text-warn",
  copper: "text-copper",
  primary: "text-primary",
  success: "text-success",
};
const toneBorder: Record<Tone, string> = {
  danger: "border-danger/40",
  warn: "border-warn/40",
  copper: "border-copper/40",
  primary: "border-primary/40",
  success: "border-success/40",
};

const probLabels = ["", "Baja", "Media", "Alta"];
const impactLabels = ["", "Bajo", "Medio", "Crítico"];

export const SlideRisks = () => {
  const [active, setActive] = useState<Risk>(risks[0]);

  return (
    <SlideShell chapter="08" chapterLabel="Riesgos">
      <Eyebrow color="danger">Mapa de riesgos · probabilidad × impacto</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 max-w-4xl"
      >
        Sabemos dónde duele. <span className="font-serif italic text-danger">Y cómo mitigarlo</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Matriz · click en un riesgo
            </div>
            <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              {risks.length} riesgos
            </div>
          </div>

          <div className="grid grid-cols-[auto_1fr] gap-2">
            {/* Y axis label */}
            <div className="flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground -rotate-90 whitespace-nowrap">
                Impacto →
              </span>
            </div>

            {/* Grid 3x3 */}
            <div className="grid grid-cols-3 grid-rows-3 gap-1.5 h-[280px]">
              {[3, 2, 1].map((impact) =>
                [1, 2, 3].map((prob) => {
                  const cellRisks = risks.filter((r) => r.prob === prob && r.impact === impact);
                  const heat =
                    prob * impact >= 6
                      ? "bg-danger/10 border-danger/30"
                      : prob * impact >= 3
                      ? "bg-warn/10 border-warn/30"
                      : "bg-success/5 border-success/20";
                  return (
                    <div
                      key={`${prob}-${impact}`}
                      className={`relative rounded-lg border ${heat} p-2 flex flex-wrap gap-1.5 items-start content-start`}
                    >
                      {cellRisks.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setActive(r)}
                          className={`group relative inline-flex items-center gap-1.5 rounded-full border ${
                            active.id === r.id
                              ? `${toneBg[r.tone]} text-white shadow-card scale-105`
                              : `bg-card ${toneBorder[r.tone]} ${toneText[r.tone]} hover:scale-105`
                          } px-2.5 py-1 text-[11px] font-medium transition-all`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${active.id === r.id ? "bg-white" : toneBg[r.tone]}`} />
                          {r.short}
                        </button>
                      ))}
                    </div>
                  );
                }),
              )}
            </div>

            {/* X axis spacer */}
            <div />
            <div className="grid grid-cols-3 text-center">
              {[1, 2, 3].map((p) => (
                <span key={p} className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {probLabels[p]}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Probabilidad →
          </div>
        </motion.div>

        {/* Detail panel */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.35 }}
              className={`rounded-2xl border-l-4 ${toneBorder[active.tone]} bg-card p-6 shadow-elevated h-full flex flex-col`}
              style={{ borderLeftColor: `hsl(var(--${active.tone}))` }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`font-mono text-[10px] uppercase tracking-[0.25em] ${toneText[active.tone]}`}>
                  Riesgo
                </span>
                <span className={`rounded-full ${toneBg[active.tone]} px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-white`}>
                  P:{probLabels[active.prob]} · I:{impactLabels[active.impact]}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-1">{active.full}</h3>
              <div className="text-sm text-muted-foreground mb-5">{active.short}</div>

              <div className="rounded-xl bg-muted/40 px-4 py-3 mb-4">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Mitigación
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed">{active.mitigation}</p>
              </div>

              <div className={`rounded-xl border ${toneBorder[active.tone]} bg-background/60 px-4 py-3 mt-auto`}>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                  Métrica clave
                </div>
                <div className={`font-mono text-lg font-semibold ${toneText[active.tone]}`}>
                  {active.metric}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Quick selector chips */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-5 flex flex-wrap gap-2"
      >
        {risks.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(r)}
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs transition-all ${
              active.id === r.id
                ? `${toneBg[r.tone]} border-transparent text-white`
                : `bg-card ${toneBorder[r.tone]} ${toneText[r.tone]} hover:scale-105`
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${active.id === r.id ? "bg-white" : toneBg[r.tone]}`} />
            {r.short}
          </button>
        ))}
      </motion.div>
    </SlideShell>
  );
};
