import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, Info, Contrast, Eye } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
  { id: "reg",    short: "Regulación China",  prob: 2, impact: 3, tone: "danger",  mitigation: "Bufete local + cumplimiento legal en mes 3", metric: "$120K legal año 1", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
  { id: "bat",    short: "Que un gigante chino copie",       prob: 3, impact: 2, tone: "warn",    mitigation: "Ventaja de WeChat + datos propios + 24-36 meses de adelanto", metric: "Llegar primero", icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z" },
  { id: "wechat", short: "Bloqueo en WeChat",  prob: 1, impact: 3, tone: "danger",  mitigation: "Plan B en Douyin desde año 3 + acuerdo con Tencent",        metric: "Varios canales", icon: "M3 3l18 18M21 3L3 21" },
  { id: "cac",    short: "Sube el coste de captar usuarios",        prob: 2, impact: 2, tone: "copper",  mitigation: "Viralidad ×2,4 · influencers · grupos privados",  metric: "$3,2 → $1,2", icon: "M3 17l6-6 4 4 8-8M14 7h7v7" },
  { id: "season", short: "Estacionalidad del fútbol",  prob: 3, impact: 1, tone: "primary", mitigation: "Premier · LaLiga · NBA · eSports todo el año", metric: "4 ligas",    icon: "M12 2v20M2 12h20M5 5l14 14M19 5L5 19" },
  { id: "team",   short: "Captar talento sénior",  prob: 2, impact: 1, tone: "primary", mitigation: "Hong Kong + remoto LATAM/Europa · 12 % en acciones para el equipo",          metric: "12 % acciones", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM3 21v-2a6 6 0 0112 0v2" },
];

const probLabels   = ["", "Baja", "Media", "Alta"];
const impactLabels = ["", "Bajo", "Medio", "Crítico"];

type Mode = "default" | "contrast" | "cb";

// Severity → CSS color (HSL token names). Safe palette uses Okabe-Ito-inspired distinguishable hues.
const severityToken = (mode: Mode, level: "low" | "med" | "high" | "crit") => {
  if (mode === "cb") {
    // Colorblind-safe: blue → yellow → orange → magenta
    return { low: "primary", med: "warn", high: "copper", crit: "danger" }[level];
  }
  return { low: "success", med: "copper", high: "warn", crit: "danger" }[level];
};

export const SlideRisks = () => {
  const [active, setActive] = useState<Risk>(risks[0]);
  const [mode, setMode] = useState<Mode>("default");

  const high = mode === "contrast";
  const fillOpacity = high ? "0.55" : "0.25";
  const borderOpacity = high ? "1" : "0.7";
  const lightFillOp = high ? "0.45" : "0.20";
  const lightBordOp = high ? "0.95" : "0.6";

  // Map a risk's original tone to the active palette (so colorblind mode swaps consistently)
  const remapTone = (t: Tone): Tone => {
    if (mode !== "cb") return t;
    // success→primary, copper→warn, warn→copper, danger→danger, primary→primary
    const map: Record<Tone, Tone> = { success: "primary", copper: "warn", warn: "copper", danger: "danger", primary: "primary" };
    return map[t];
  };

  const cellStyle = (score: number) => {
    const level = score >= 6 ? "crit" : score >= 4 ? "high" : score >= 2 ? "med" : "low";
    const tok = severityToken(mode, level);
    const op = level === "crit" || level === "high" ? fillOpacity : lightFillOp;
    const bop = level === "crit" || level === "high" ? borderOpacity : lightBordOp;
    return {
      backgroundColor: `hsl(var(--${tok}) / ${op})`,
      borderColor: `hsl(var(--${tok}) / ${bop})`,
    };
  };

  const sevChip = (level: "low" | "med" | "high" | "crit", label: string, range: string, help: string) => {
    const tok = severityToken(mode, level);
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            className="inline-flex items-center gap-2 rounded-full border-2 px-3 py-1 font-semibold cursor-help"
            style={{
              borderColor: `hsl(var(--${tok}) / ${high ? 0.95 : 0.6})`,
              backgroundColor: `hsl(var(--${tok}) / ${high ? 0.4 : 0.18})`,
              color: `hsl(var(--${tok}))`,
            }}
          >
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: `hsl(var(--${tok}))` }} />
            {label} <span className="font-mono text-xs opacity-80">({range})</span>
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs">{help}</TooltipContent>
      </Tooltip>
    );
  };

  return (
    <SlideShell chapter="09" chapterLabel="Riesgos" watermark="险">
      <TooltipProvider delayDuration={150}>
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="h-6 w-6 text-danger" />
          <Eyebrow color="danger">Mapa de riesgos</Eyebrow>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="display-xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 sm:mt-6 mb-4 sm:mb-6 max-w-4xl"
        >
          Probabilidad <span className="font-serif italic text-danger">×</span> impacto.
        </motion.h2>

        {/* Microexplicación + toggles de accesibilidad */}
        <div className="mb-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <p className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground max-w-2xl">
            <Info className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>
              <strong className="text-foreground">Cómo leerlo:</strong> el eje <strong>X</strong> indica
              la <em>probabilidad</em> (qué tan probable es que ocurra) y el <strong>Y</strong> el{" "}
              <em>impacto</em> (qué tan grave sería). El color de cada celda sale de multiplicar ambos
              (P × I): a más oscuro y rojizo, más severo. Pulsa una etiqueta para ver mitigación y métrica.
            </span>
          </p>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setMode(mode === "contrast" ? "default" : "contrast")}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                mode === "contrast" ? "bg-foreground text-background border-foreground" : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
              aria-pressed={mode === "contrast"}
              title="Aumenta opacidad y bordes para proyección"
            >
              <Contrast className="h-3.5 w-3.5" /> Alto contraste
            </button>
            <button
              onClick={() => setMode(mode === "cb" ? "default" : "cb")}
              className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                mode === "cb" ? "bg-primary text-primary-foreground border-primary" : "border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
              aria-pressed={mode === "cb"}
              title="Paleta apta para daltonismo (Okabe-Ito)"
            >
              <Eye className="h-3.5 w-3.5" /> Paleta daltónica
            </button>
          </div>
        </div>

        {/* Leyenda visual con tooltips */}
        <div className="mb-5 flex flex-wrap items-center gap-2 sm:gap-3 text-sm">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mr-1">Severidad:</span>
          {sevChip("low",  "Baja",     "1-2", "Riesgo poco probable y de bajo impacto. Vigilar pero sin acción inmediata.")}
          {sevChip("med",  "Media",    "2-3", "Probabilidad o impacto moderado. Requiere mitigación planificada.")}
          {sevChip("high", "Alta",     "4-5", "Alta exposición. Plan de mitigación activo y métrica de seguimiento.")}
          {sevChip("crit", "Crítica",  "6+",  "Puede comprometer el negocio. Mitigación prioritaria con presupuesto asignado.")}
          <span className="ml-auto hidden md:inline font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
            puntuación = P × I
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Heat matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-8 rounded-3xl border border-border bg-gradient-to-br from-card to-card/60 p-3 sm:p-7 shadow-elevated relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-danger/10 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-success/10 blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-[44px_1fr] sm:grid-cols-[64px_1fr] gap-2 sm:gap-4">
              {/* Eje Y */}
              <div className="flex flex-col justify-between py-2">
                <Tooltip><TooltipTrigger asChild>
                  <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground font-bold text-right pr-1 cursor-help">Crítico</span>
                </TooltipTrigger><TooltipContent>Impacto que detendría el negocio o exigiría pivotar.</TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild>
                  <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground font-bold text-right pr-1 cursor-help">Medio</span>
                </TooltipTrigger><TooltipContent>Impacto gestionable con coste o retraso significativo.</TooltipContent></Tooltip>
                <Tooltip><TooltipTrigger asChild>
                  <span className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-foreground font-bold text-right pr-1 cursor-help">Bajo</span>
                </TooltipTrigger><TooltipContent>Impacto absorbible sin alterar el plan.</TooltipContent></Tooltip>
              </div>

              <div className="grid grid-cols-3 grid-rows-3 gap-2 sm:gap-3 h-[320px] sm:h-[480px]">
                {[3, 2, 1].map((impact) =>
                  [1, 2, 3].map((prob) => {
                    const cell = risks.filter((r) => r.prob === prob && r.impact === impact);
                    const score = prob * impact;
                    return (
                      <Tooltip key={`${prob}-${impact}`}>
                        <TooltipTrigger asChild>
                          <div
                            className="relative rounded-2xl border-2 p-2 sm:p-3 flex flex-wrap gap-1.5 sm:gap-2 items-start content-start transition-all min-w-0"
                            style={cellStyle(score)}
                          >
                            <span className="absolute top-1 right-1.5 sm:top-1.5 sm:right-2 font-mono text-[10px] sm:text-[11px] font-bold text-foreground/70">{score}</span>
                            {cell.map((r) => {
                              const tone = remapTone(r.tone);
                              const isActive = active.id === r.id;
                              return (
                                <button
                                  key={r.id}
                                  onClick={() => setActive(r)}
                                  className="group inline-flex items-center gap-1 sm:gap-1.5 rounded-full border-2 px-2 sm:px-2.5 py-1 sm:py-1.5 text-[10px] sm:text-[12px] font-bold transition-all hover:scale-105 max-w-full whitespace-normal text-left leading-tight"
                                  style={
                                    isActive
                                      ? { backgroundColor: `hsl(var(--${tone}))`, color: "white", borderColor: "transparent" }
                                      : { backgroundColor: "hsl(var(--card))", borderColor: `hsl(var(--${tone}) / 0.5)`, color: `hsl(var(--${tone}))` }
                                  }
                                >
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0">
                                    <path d={r.icon} />
                                  </svg>
                                  <span className="break-words">{r.short}</span>
                                </button>
                              );
                            })}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="text-xs">
                          P:{probLabels[prob]} · I:{impactLabels[impact]} · score <strong>{score}</strong>
                        </TooltipContent>
                      </Tooltip>
                    );
                  }),
                )}
              </div>

              <div />
              <div className="grid grid-cols-3 text-center pt-2">
                {[1, 2, 3].map((p) => (
                  <span key={p} className="font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.25em] text-foreground font-bold">{probLabels[p]}</span>
                ))}
              </div>
            </div>

            <div className="mt-3 sm:mt-4 flex items-center justify-between font-mono text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground font-bold">
              <span className="opacity-70">↑ Impacto</span>
              <span>Probabilidad →</span>
            </div>
          </motion.div>

          {/* Detail */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.3 }}
                className="rounded-2xl border-l-4 bg-card p-6 shadow-elevated h-full flex flex-col"
                style={{ borderLeftColor: `hsl(var(--${remapTone(active.tone)}))` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-card" style={{ backgroundColor: `hsl(var(--${remapTone(active.tone)}))` }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d={active.icon} />
                    </svg>
                  </div>
                  <span className="rounded-full px-3 py-1 text-[11px] font-mono font-bold uppercase tracking-wider text-white" style={{ backgroundColor: `hsl(var(--${remapTone(active.tone)}))` }}>
                    P:{probLabels[active.prob]} · I:{impactLabels[active.impact]}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-foreground mb-4">{active.short}</h3>

                <div className="rounded-xl bg-muted/40 px-4 py-3 mb-3">
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Mitigación</div>
                  <p className="text-sm font-medium text-foreground/95">{active.mitigation}</p>
                </div>

                <div className="rounded-xl border bg-background/60 px-4 py-3 mt-auto" style={{ borderColor: `hsl(var(--${remapTone(active.tone)}) / 0.4)` }}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Métrica</div>
                  <div className="font-mono text-3xl md:text-4xl font-bold" style={{ color: `hsl(var(--${remapTone(active.tone)}))` }}>{active.metric}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </TooltipProvider>
    </SlideShell>
  );
};
