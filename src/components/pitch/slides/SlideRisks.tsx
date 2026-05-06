import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

type Tone = "danger" | "warn" | "copper" | "primary" | "success";

interface Risk {
  id: string;
  short: string;
  prob: 1 | 2 | 3;
  impact: 1 | 2 | 3;
  tone: Tone;
  mitigation: string;
  metric: string;
  icon: string;
}

const risks: Risk[] = [
  { id: "reg",    short: "Regulación PRC",  prob: 2, impact: 3, tone: "danger",  mitigation: "King & Wood Mallesons · VIE · ICP M3", metric: "$120K legal Y1", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { id: "bat",    short: "BAT copia",       prob: 3, impact: 2, tone: "warn",    mitigation: "Foso WeChat · datos propietarios · 24-36 m", metric: "First mover", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { id: "wechat", short: "Bloqueo WeChat",  prob: 1, impact: 3, tone: "danger",  mitigation: "Plan B Douyin Y3 · acuerdo Tencent",        metric: "Multi-canal", icon: "M3 3l18 18M21 3L3 21" },
  { id: "cac",    short: "CAC sube",        prob: 2, impact: 2, tone: "copper",  mitigation: "Viralidad k=2,4× · KOL · grupos privados",  metric: "$3,2 → $1,2", icon: "M3 17l6-6 4 4 8-8M14 7h7v7" },
  { id: "season", short: "Estacionalidad",  prob: 3, impact: 1, tone: "primary", mitigation: "Premier · LaLiga · NBA · eSports todo año", metric: "4 ligas",    icon: "M12 2v20M2 12h20M5 5l14 14M19 5L5 19" },
  { id: "team",   short: "Talento senior",  prob: 2, impact: 1, tone: "primary", mitigation: "HK + remoto LATAM/EU · ESOP 12 %",          metric: "12 % equity", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM3 21v-2a6 6 0 0112 0v2" },
];

const toneBg: Record<Tone, string>     = { danger: "bg-danger", warn: "bg-warn", copper: "bg-copper", primary: "bg-primary", success: "bg-success" };
const toneText: Record<Tone, string>   = { danger: "text-danger", warn: "text-warn", copper: "text-copper", primary: "text-primary", success: "text-success" };
const toneBorder: Record<Tone, string> = { danger: "border-danger/40", warn: "border-warn/40", copper: "border-copper/40", primary: "border-primary/40", success: "border-success/40" };

const probLabels   = ["", "Baja", "Media", "Alta"];
const impactLabels = ["", "Bajo", "Medio", "Crítico"];

export const SlideRisks = () => {
  const [active, setActive] = useState<Risk>(risks[0]);

  return (
    <SlideShell chapter="08" chapterLabel="Riesgos">
      <Eyebrow color="danger">Mapa de riesgos</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        Probabilidad <span className="font-serif italic text-danger">×</span> impacto.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Heat matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="grid grid-cols-[28px_1fr] gap-3">
            <div className="flex items-center justify-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground -rotate-90 whitespace-nowrap">
                Impacto →
              </span>
            </div>

            <div className="grid grid-cols-3 grid-rows-3 gap-2 h-[340px]">
              {[3, 2, 1].map((impact) =>
                [1, 2, 3].map((prob) => {
                  const cell = risks.filter((r) => r.prob === prob && r.impact === impact);
                  const score = prob * impact;
                  const heat =
                    score >= 6 ? "bg-danger/15 border-danger/40"
                  : score >= 4 ? "bg-warn/15 border-warn/40"
                  : score >= 2 ? "bg-copper/10 border-copper/30"
                              : "bg-success/10 border-success/30";
                  return (
                    <div key={`${prob}-${impact}`} className={`relative rounded-xl border ${heat} p-2 flex flex-wrap gap-1.5 items-start content-start`}>
                      {cell.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => setActive(r)}
                          className={`group inline-flex items-center gap-1.5 rounded-full border ${
                            active.id === r.id
                              ? `${toneBg[r.tone]} text-white shadow-elevated scale-105 border-transparent`
                              : `bg-card ${toneBorder[r.tone]} ${toneText[r.tone]} hover:scale-105`
                          } px-2.5 py-1 text-xs font-semibold transition-all`}
                        >
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
                            <path d={r.icon} />
                          </svg>
                          {r.short}
                        </button>
                      ))}
                    </div>
                  );
                }),
              )}
            </div>

            <div />
            <div className="grid grid-cols-3 text-center pt-1">
              {[1, 2, 3].map((p) => (
                <span key={p} className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{probLabels[p]}</span>
              ))}
            </div>
          </div>

          <div className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Probabilidad →
          </div>
        </motion.div>

        {/* Detail */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }}
              className={`rounded-2xl border-l-4 ${toneBorder[active.tone]} bg-card p-6 shadow-elevated h-full flex flex-col`}
              style={{ borderLeftColor: `hsl(var(--${active.tone}))` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${toneBg[active.tone]} text-white shadow-card`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                    <path d={active.icon} />
                  </svg>
                </div>
                <span className={`rounded-full ${toneBg[active.tone]} px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white`}>
                  P:{probLabels[active.prob]} · I:{impactLabels[active.impact]}
                </span>
              </div>

              <h3 className="font-serif text-3xl text-foreground mb-5">{active.short}</h3>

              <div className="rounded-xl bg-muted/40 px-4 py-3 mb-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Mitigación</div>
                <p className="text-base font-medium text-foreground/95">{active.mitigation}</p>
              </div>

              <div className={`rounded-xl border ${toneBorder[active.tone]} bg-background/60 px-4 py-3 mt-auto`}>
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Métrica</div>
                <div className={`font-mono text-2xl font-bold ${toneText[active.tone]}`}>{active.metric}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </SlideShell>
  );
};
