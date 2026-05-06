import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

export const SlideProblem = () => {
  const modules = [
    { n: "01", title: "Crea equipo", body: "Fichajes · presupuesto · táctica" },
    { n: "02", title: "Liga privada", body: "Grupos WeChat · oficina · global" },
    { n: "03", title: "Live stats", body: "Datos jugada a jugada en directo" },
    { n: "04", title: "Premium", body: "VIP · análisis IA · tienda" },
  ];

  const versus = [
    { rival: "DraftKings", them: "Apuestas con dinero", us: "Habilidad · 100 % legal" },
    { rival: "Sorare", them: "NFTs caros", us: "Freemium accesible" },
    { rival: "Comunio", them: "Producto occidental", us: "Nativo WeChat · chino" },
  ];

  return (
    <SlideShell chapter="03" chapterLabel="Producto">
      <Eyebrow color="primary">El producto</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        Fantasy fútbol <span className="font-serif italic text-primary">dentro de WeChat</span>.
      </motion.h2>

      {/* 4 modules */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {modules.map((m, i) => (
          <motion.div
            key={m.n}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/40 transition-colors"
          >
            <div className="font-mono text-[10px] tracking-[0.25em] text-primary mb-3">{m.n}</div>
            <h3 className="font-serif text-xl text-foreground mb-1.5">{m.title}</h3>
            <p className="text-xs text-muted-foreground">{m.body}</p>
          </motion.div>
        ))}
      </div>

      {/* Versus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="rounded-2xl border border-border bg-card overflow-hidden shadow-card"
      >
        <div className="grid grid-cols-3 border-b border-border bg-muted/40 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <div className="px-5 py-2.5">Rival</div>
          <div className="px-5 py-2.5">Su modelo</div>
          <div className="px-5 py-2.5 text-primary">FantasyChina</div>
        </div>
        {versus.map((v) => (
          <div key={v.rival} className="grid grid-cols-3 border-b border-border last:border-0 text-sm">
            <div className="px-5 py-3 font-serif text-foreground">{v.rival}</div>
            <div className="px-5 py-3 text-muted-foreground">{v.them}</div>
            <div className="px-5 py-3 text-foreground/90"><span className="text-primary mr-2">→</span>{v.us}</div>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-5 rounded-xl border border-danger/30 bg-danger/5 px-5 py-3 text-center"
      >
        <p className="text-sm font-medium text-foreground">
          <span className="text-danger">NO somos casa de apuestas.</span> Competición de habilidad.
        </p>
      </motion.div>
    </SlideShell>
  );
};
