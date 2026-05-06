import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Mejora 2 — explicar el producto clarísimamente. */
export const SlideProblem = () => {
  const modules = [
    { n: "01", title: "Crea tu equipo", body: "Presupuesto virtual, fichajes, formación táctica jornada a jornada." },
    { n: "02", title: "Ligas privadas", body: "Compite con tu grupo de WeChat, con compañeros de oficina o en ligas públicas globales." },
    { n: "03", title: "Estadísticas en directo", body: "Datos jugada por jugada durante el partido, casi sin retraso." },
    { n: "04", title: "Tienda Premium", body: "Gemas, packs exclusivos y boosts. Suscripción VIP con análisis de IA." },
  ];

  const versus = [
    { rival: "DraftKings / FanDuel", them: "Apuestas con dinero · ilegales en China", us: "Competición de habilidad · 100 % legal" },
    { rival: "Sorare", them: "NFTs caros y especulativos", us: "Freemium accesible, sin barrera de entrada" },
    { rival: "Comunio / Biwenger", them: "Producto occidental en inglés / español", us: "Nativo en chino, dentro de WeChat" },
  ];

  return (
    <SlideShell chapter="03" chapterLabel="Producto">
      <Eyebrow color="primary">El producto · qué vendemos</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-4 max-w-4xl"
      >
        Una <span className="font-serif italic text-primary">app de juego</span> fantasy
        <br />dentro de WeChat.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-10"
      >
        El usuario forma su equipo virtual con jugadores reales de LaLiga, Premier o eSports y compite
        con sus amigos por puntos y recompensas. Modelo <strong className="text-foreground">SaaS gamificado</strong>, freemium, con suscripción Premium.
      </motion.p>

      {/* 4 modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {modules.map((m, i) => (
          <motion.div
            key={m.n}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/40 transition-colors"
          >
            <div className="font-mono text-[10px] tracking-[0.25em] text-primary mb-3">MÓDULO · {m.n}</div>
            <h3 className="font-serif text-xl text-foreground mb-2">{m.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{m.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Versus table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.85 }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-card"
      >
        <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <div className="px-5 py-3">Competidor</div>
          <div className="px-5 py-3">Su modelo</div>
          <div className="px-5 py-3 text-primary">FantasyChina</div>
        </div>
        {versus.map((v) => (
          <div key={v.rival} className="grid grid-cols-3 border-b border-border last:border-0 text-sm">
            <div className="px-5 py-4 font-serif text-foreground">{v.rival}</div>
            <div className="px-5 py-4 text-muted-foreground">{v.them}</div>
            <div className="px-5 py-4 text-foreground/90"><span className="text-primary mr-2">→</span>{v.us}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="mt-6 rounded-xl border border-danger/30 bg-danger/5 px-5 py-4 text-center"
      >
        <p className="text-sm md:text-base text-foreground">
          <strong className="text-danger">FantasyChina NO es una casa de apuestas.</strong>{" "}
          Es una competición de habilidad legal en China.
        </p>
      </motion.div>
    </SlideShell>
  );
};
