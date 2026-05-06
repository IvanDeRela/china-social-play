import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

export const SlideSolution = () => {
  return (
    <SlideShell chapter="04" chapterLabel="Cliente">
      <Eyebrow color="primary">Public objetivo</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        Conoce a <span className="font-serif italic text-primary">Wei Liu</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Persona card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 rounded-3xl border border-border bg-card p-7 shadow-elevated"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground font-serif text-3xl shadow-card">
              WL
            </div>
            <div>
              <div className="font-serif text-2xl text-foreground">Wei Liu · 刘伟</div>
              <div className="text-sm text-muted-foreground">28 · Shanghái · Ingeniero</div>
            </div>
          </div>

          <ul className="space-y-2.5 text-sm text-foreground/90">
            {[
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-primary"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>), text: "USD 35.000 / año" },
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-primary"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18"/></svg>), text: "Real Madrid · iQIYI Sports" },
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-primary"><rect x="2" y="7" width="20" height="11" rx="3"/><path d="M7 12h2M8 11v2M15 12h.01M18 12h.01"/></svg>), text: "Honor of Kings · USD 30/mes en gemas" },
              { icon: (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-primary"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>), text: "8 amigos en WeChat" },
            ].map((row, i) => (
              <li key={i} className="flex items-center gap-3"><span className="shrink-0">{row.icon}</span><span>{row.text}</span></li>
            ))}
          </ul>
        </motion.div>

        {/* Segment stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-7 space-y-5"
        >
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-7">
            <div className="eyebrow text-primary mb-2">Segmento Tier 1-2</div>
            <Money value="25-40" unit="M" size="2xl" />
            <div className="mt-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">
              CNNIC · iResearch 2024
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { val: "USD 30", label: "Gasto gaming/mes" },
              { val: "78 %", label: "Sigue liga europea" },
              { val: "94 %", label: "Usa WeChat diario" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-card p-4">
                <div className="font-mono text-xl text-primary font-semibold">{s.val}</div>
                <div className="mt-1.5 text-[11px] leading-snug text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="rounded-xl border-l-4 border-copper bg-copper/5 px-5 py-3.5">
            <p className="text-sm md:text-base text-foreground/90">
              <strong className="text-copper">Wei trae a sus 8 amigos.</strong>{" "}
              <span className="font-mono text-copper">k = 2,4×</span>
            </p>
          </div>
        </motion.div>
      </div>
    </SlideShell>
  );
};
