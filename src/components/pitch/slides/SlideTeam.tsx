import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

/** Slide final · equipo fundador + nombre de empresa en grande para el cierre del pitch. */
export const SlideTeam = () => {
  const team = [
    { src: "/team/ivan.jpg",  name: "Iván García",       role: "CTO · AI · Product" },
    { src: "/team/rafa.jpg",  name: "Rafael Imbernón",   role: "CMO · Growth · Community" },
    { src: "/team/pedro.jpg", name: "Pedro Plaza",       role: "CFO · Finance · Compliance" },
    { src: "/team/alberto.png", name: "Alberto Hernández", role: "CEO · Strategy · IR" },
  ];

  return (
    <SlideShell chapter="11" chapterLabel="Equipo" watermark="队">
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
            El equipo fundador
          </div>
          <h2 className="display-xl text-5xl md:text-6xl lg:text-7xl leading-none">
            Fantasy<span className="text-primary">China</span>
          </h2>
          <div className="mt-3 font-serif text-xl md:text-2xl text-muted-foreground italic">
            梦想中国 · Fantasy made in China
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 w-full max-w-5xl"
        >
          {team.map((m) => (
            <div key={m.name} className="flex flex-col items-center gap-2">
              {m.src ? (
                <img
                  src={m.src}
                  alt={m.name}
                  loading="lazy"
                  className="h-24 w-24 md:h-32 md:w-32 rounded-full object-cover border-[3px] border-primary/40 shadow-elevated"
                />
              ) : (
                <div className="h-24 w-24 md:h-32 md:w-32 rounded-full grid place-items-center bg-copper/15 text-copper font-serif font-bold text-4xl md:text-5xl border-[3px] border-copper/40 shadow-elevated">
                  {m.initials}
                </div>
              )}
              <div className="font-serif text-base md:text-lg text-foreground leading-tight">{m.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {m.role}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.3em]">谢谢</span>
          <span className="h-px w-12 bg-border" />
          <span>Gracias</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono uppercase tracking-[0.3em]">Thank You</span>
        </div>
      </div>
    </SlideShell>
  );
};
