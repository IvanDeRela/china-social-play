import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";
import { PartnerLogos } from "../PartnerLogos";

export const SlideLegal = () => {
  const comps = [
    { name: "FanDuel",       value: 22000, label: "$22B",  note: "Filial de Flutter (cotiza en Londres)", tone: "primary" as const, isUs: false },
    { name: "DraftKings",    value: 18000, label: "$18B",  note: "Cotiza en NASDAQ",                       tone: "primary" as const, isUs: false },
    { name: "Sorare",        value: 4300,  label: "$4,3B", note: "Ronda liderada por SoftBank",            tone: "copper" as const,  isUs: false },
    { name: "Genius Sports", value: 1500,  label: "$1,5B", note: "Cotiza en NYSE",                         tone: "copper" as const,  isUs: false },
    { name: "FantasyChina",  value: 200,   label: "$200M", note: "Nuestro objetivo de ingresos · año 5",   tone: "success" as const, isUs: true },
  ];
  const max = 22000;

  return (
    <SlideShell chapter="09" chapterLabel="Comparables" watermark="估">
      <div className="flex items-center gap-3 mb-2">
        <Trophy className="h-6 w-6 text-copper" />
        <Eyebrow color="copper">Comparables públicos</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-4 mb-8 max-w-4xl"
      >
        El mercado <span className="font-serif italic text-primary">ya valora</span> esto.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Bar chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-8 rounded-2xl border border-border bg-card p-7 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-5">
            Valoración (USD)
          </div>
          <div className="space-y-4">
            {comps.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                className={c.isUs ? "rounded-xl bg-success/10 px-3 py-2 -mx-3 border border-success/30" : ""}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className={`font-serif text-xl ${c.isUs ? "text-success font-bold" : "text-foreground"}`}>
                    {c.isUs && "★ "}{c.name}
                  </span>
                  <Money value={c.label} size="md" tone={c.tone} />
                </div>
                <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.max(2, (c.value / max) * 100)}%` }}
                    transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 rounded-full ${c.tone === "primary" ? "bg-primary" : c.tone === "copper" ? "bg-copper" : "bg-success"}`}
                  />
                </div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{c.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Defensibilidad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-4 space-y-3"
        >
          <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-5">
            <div className="eyebrow text-primary mb-3">Nuestra ventaja defendible</div>
            <div className="space-y-2.5">
              {[
                { k: "Únicos", v: "fantasy fútbol nativo en WeChat" },
                { k: "78 %",  v: "margen bruto" },
                { k: "Legal", v: "cumplimiento normativo en China" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline gap-3">
                  <span className="font-mono font-bold text-3xl md:text-4xl text-primary shrink-0">{row.k}</span>
                  <span className="text-sm text-foreground/85">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-copper/30 bg-card p-5 shadow-card">
            <div className="eyebrow text-copper mb-3">Hitos de la ronda</div>
            <ul className="space-y-1.5 text-sm">
              {[
                ["Mes 3", "Cumplimiento legal"],
                ["Mes 6", "Primera versión en WeChat"],
                ["Mes 9", "Acuerdo con LaLiga Tech"],
                ["Mes 12", "100 000 usuarios diarios"],
              ].map(([m, t]) => (
                <li key={m} className="flex items-center gap-3">
                  <span className="font-mono text-xs text-copper bg-copper/10 rounded px-2 py-0.5 shrink-0">{m}</span>
                  <span className="text-foreground/90">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <PartnerLogos label="Target partners · ecosistema" />
    </SlideShell>
  );
};
