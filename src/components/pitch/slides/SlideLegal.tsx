import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

/** Comparables públicos — versión visual: barras horizontales + chips de defensibilidad. */
export const SlideLegal = () => {
  const comps = [
    { name: "FanDuel",       value: 22000, label: "$22B", note: "Flutter sub.",    tone: "primary" as const },
    { name: "DraftKings",    value: 18000, label: "$18B", note: "NASDAQ DKNG",     tone: "primary" as const },
    { name: "Sorare",        value: 4300,  label: "$4,3B", note: "SoftBank Series B", tone: "copper" as const },
    { name: "Genius Sports", value: 1500,  label: "$1,5B", note: "NYSE GENI",      tone: "copper" as const },
  ];
  const max = 22000;

  return (
    <SlideShell chapter="09" chapterLabel="Comparables">
      <Eyebrow color="copper">Comparables públicos</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        El mercado <span className="font-serif italic text-primary">ya valora</span> esto.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar chart visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-8 rounded-2xl border border-border bg-card p-7 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-5">
            Valoración (USD)
          </div>
          <div className="space-y-5">
            {comps.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
              >
                <div className="flex items-baseline justify-between mb-1.5">
                  <span className="font-serif text-xl text-foreground">{c.name}</span>
                  <Money value={c.label} size="md" tone={c.tone} />
                </div>
                <div className="relative h-3 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${(c.value / max) * 100}%` }}
                    transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className={`absolute inset-y-0 left-0 rounded-full ${c.tone === "primary" ? "bg-primary" : "bg-copper"}`}
                  />
                </div>
                <div className="mt-1 text-[11px] font-mono uppercase tracking-wider text-muted-foreground">{c.note}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Defensibilidad chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
          className="lg:col-span-4 space-y-3"
        >
          <div className="rounded-2xl border-l-4 border-primary bg-primary/5 p-5">
            <div className="eyebrow text-primary mb-3">Foso</div>
            <div className="space-y-2.5">
              {[
                { k: "Único", v: "fantasy nativo WeChat" },
                { k: "78 %", v: "margen bruto" },
                { k: "PIPL", v: "CSL · ICP compliance" },
              ].map((row) => (
                <div key={row.k} className="flex items-baseline gap-3">
                  <span className="font-mono font-bold text-2xl text-primary shrink-0">{row.k}</span>
                  <span className="text-sm text-foreground/85">{row.v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-copper/30 bg-card p-5 shadow-card">
            <div className="eyebrow text-copper mb-3">Hitos ronda</div>
            <ul className="space-y-1.5 text-sm">
              {[
                ["M3", "Compliance"],
                ["M6", "MVP WeChat"],
                ["M9", "LaLiga Tech"],
                ["M12", "100k DAU"],
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
    </SlideShell>
  );
};
