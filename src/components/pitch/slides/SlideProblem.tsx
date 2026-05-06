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

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-start">
        {/* Mockup WeChat Mini-Program */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-4 flex justify-center"
        >
          <div className="relative w-[220px] rounded-[32px] border-[6px] border-foreground/85 bg-foreground p-1 shadow-elevated">
            <div className="absolute left-1/2 top-1 z-10 h-3.5 w-16 -translate-x-1/2 rounded-b-xl bg-foreground" />
            <div className="rounded-[24px] bg-background overflow-hidden" style={{ fontFamily: "'Noto Sans SC', 'PingFang SC', sans-serif" }}>
              {/* Header */}
              <div className="flex items-center justify-between bg-primary px-3 pt-5 pb-2 text-[10px] text-primary-foreground">
                <span>‹</span>
                <span className="font-semibold">FantasyChina</span>
                <span>⋯</span>
              </div>
              {/* Hero */}
              <div className="px-3 py-3 bg-gradient-to-br from-primary/15 to-copper/10">
                <div className="text-[9px] font-mono text-muted-foreground">MATCHDAY 24</div>
                <div className="font-serif text-sm text-foreground leading-tight mt-0.5">Real Madrid <span className="text-muted-foreground/60 mx-1">vs</span> Barça</div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="text-[9px] text-muted-foreground">Mi equipo</div>
                  <div className="font-mono text-xs text-primary font-bold">128 pts</div>
                </div>
              </div>
              {/* Players */}
              <div className="px-3 py-2 space-y-1.5">
                {[
                  { n: "Vinicius Jr.", p: "+24" },
                  { n: "Bellingham", p: "+18" },
                  { n: "Lewandowski", p: "−6" },
                ].map((pl) => (
                  <div key={pl.n} className="flex items-center justify-between rounded-md bg-muted/50 px-2 py-1.5">
                    <div className="flex items-center gap-1.5">
                      <div className="h-4 w-4 rounded-full bg-primary/30" />
                      <span className="text-[10px] text-foreground">{pl.n}</span>
                    </div>
                    <span className={`font-mono text-[10px] font-bold ${pl.p.startsWith("+") ? "text-success" : "text-danger"}`}>{pl.p}</span>
                  </div>
                ))}
              </div>
              {/* Tab bar */}
              <div className="grid grid-cols-4 border-t border-border py-1.5 text-center text-[8px] text-muted-foreground">
                <div className="text-primary font-semibold">Equipo</div>
                <div>Liga</div>
                <div>Live</div>
                <div className="text-copper">VIP</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 modules */}
        <div className="lg:col-span-8 grid grid-cols-2 gap-3">
          {modules.map((m, i) => (
            <motion.div
              key={m.n}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/40 transition-colors"
            >
              <div className="font-mono text-[10px] tracking-[0.25em] text-primary mb-3">{m.n}</div>
              <h3 className="font-serif text-xl text-foreground mb-1.5">{m.title}</h3>
              <p className="text-xs text-muted-foreground">{m.body}</p>
            </motion.div>
          ))}
        </div>
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
        className="mt-5 rounded-xl border border-danger/40 bg-danger/5 px-5 py-3 text-center"
      >
        <p className="text-base font-bold text-danger tracking-wide">
          NO apuestas · 100 % habilidad
        </p>
      </motion.div>
    </SlideShell>
  );
};
