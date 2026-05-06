import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Mejora 8 — equipo fundador con 4 roles. */
const team = [
  { initials: "IG", name: "Iván García del Toro", role: "CTO", area: "AI · Product",        color: "primary", bullets: ["TypeScript · Python · TF", "WeChat · Tencent Cloud"], duty: "Arquitectura · MVP · IA" },
  { initials: "AH", name: "Alberto Hernández",    role: "CEO", area: "Strategy · IR",       color: "copper",  bullets: ["Fundraising internacional", "LaLiga · ICEX · Casa Asia"], duty: "Capital · partnerships" },
  { initials: "RI", name: "Rafael Imbernón",      role: "CMO", area: "Growth · Community",  color: "primary", bullets: ["KOL · WeChat Moments", "Marketing digital Asia"], duty: "Adquisición · branding" },
  { initials: "PP", name: "Pedro Plaza",          role: "CFO", area: "Finance · Compliance",color: "success", bullets: ["Modelo · unit economics", "PIPL · CSL · ICP"], duty: "Ronda · legal · HK" },
] as const;

const colorClasses: Record<string, string> = {
  primary: "from-primary to-primary-glow text-primary-foreground",
  copper: "from-copper to-warn text-white",
  success: "from-success to-primary text-white",
};

export const SlideDemo = () => {
  return (
    <SlideShell chapter="10" chapterLabel="Equipo">
      <Eyebrow color="primary">El equipo fundador</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-8 max-w-4xl"
      >
        4 fundadores. <span className="font-serif italic text-primary">4 disciplinas</span>.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {team.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-full bg-gradient-to-br ${colorClasses[p.color]} font-serif text-xl shadow-card`}>
                {p.initials}
              </div>
              <div className="min-w-0 flex-1">
                <div className="font-serif text-lg text-foreground leading-tight">{p.name}</div>
                <div className={`text-xs font-mono uppercase tracking-wider mt-0.5 text-${p.color}`}>{p.role}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{p.area}</div>
              </div>
              
            </div>

            <ul className="space-y-1.5 text-xs text-muted-foreground mb-3 pl-1">
              {p.bullets.map((b) => (
                <li key={b} className="flex gap-2"><span className="text-primary">·</span><span>{b}</span></li>
              ))}
            </ul>

            <div className="rounded-lg bg-muted/40 px-3 py-2 text-xs text-foreground/85 leading-relaxed">
              <span className={`font-mono uppercase tracking-wider text-[10px] text-${p.color} mr-2`}>Rol</span>
              {p.duty}
            </div>
          </motion.div>
        ))}
      </div>
    </SlideShell>
  );
};
