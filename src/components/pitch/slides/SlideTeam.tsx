import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

/** Slide final · equipo fundador + nombre de empresa en grande para el cierre del pitch. */
export const SlideTeam = () => {
  const team = [
    { src: "/team/ivan.jpg",  name: "Iván García del Toro", role: "CTO · AI · Product" },
    { src: "/team/rafa.jpg",  name: "Rafael Imbernón",      role: "CMO · Growth · Community" },
    { src: "/team/pedro.jpg", name: "Pedro Plaza",          role: "CFO · Finance · Compliance" },
    { src: null,              name: "Alberto Hernández",    role: "CEO · Strategy · IR", initials: "AH" },
  ];

  return (
    <SlideShell chapter="11" chapterLabel="Equipo" watermark="队">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-6">
            El equipo fundador
          </div>
          <h2 className="display-xl text-7xl md:text-8xl lg:text-9xl leading-none">
            Fantasy<span className="text-primary">China</span>
          </h2>
          <div className="mt-4 font-serif text-2xl md:text-3xl text-muted-foreground italic">
            梦想中国 · Fantasy made in China
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-5xl"
        >
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex flex-col items-center gap-3"
            >
              {m.src ? (
                <img
                  src={m.src}
                  alt={m.name}
                  loading="lazy"
                  className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover border-[3px] border-primary/40 shadow-elevated"
                />
              ) : (
                <div className="h-32 w-32 md:h-40 md:w-40 rounded-full grid place-items-center bg-copper/15 text-copper font-serif font-bold text-5xl md:text-6xl border-[3px] border-copper/40 shadow-elevated">
                  {m.initials}
                </div>
              )}
              <div className="font-serif text-lg md:text-xl text-foreground leading-tight">{m.name}</div>
              <div className="font-mono text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-primary">
                {m.role}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center gap-3 text-xs text-muted-foreground"
        >
          <span className="font-mono uppercase tracking-[0.3em]">谢谢</span>
          <span className="h-px w-12 bg-border" />
          <span>Gracias</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono uppercase tracking-[0.3em]">Thank You</span>
        </motion.div>
      </div>
    </SlideShell>
  );
};
