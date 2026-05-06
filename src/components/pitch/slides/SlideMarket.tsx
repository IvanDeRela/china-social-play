import { motion } from "framer-motion";
import { Target } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

/** Mercado — TAM/SAM/SOM como embudo visual descendente. */
export const SlideMarket = () => {
  const funnel = [
    { tag: "TAM", value: "$45B",  sub: "Gaming China · Niko Partners",  width: "100%", tone: "primary" },
    { tag: "SAM", value: "$4B",   sub: "Mobile Sports · iResearch",      width: "78%",  tone: "copper" },
    { tag: "SOM", value: "$200M", sub: "ARR Y5 · Proyección propia",     width: "62%",  tone: "success" },
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "bg-primary",  text: "text-primary",  border: "border-primary/40" },
    copper:  { bg: "bg-copper",   text: "text-copper",   border: "border-copper/40" },
    success: { bg: "bg-success",  text: "text-success",  border: "border-success/40" },
  };

  return (
    <SlideShell chapter="05" chapterLabel="Mercado" watermark="市">
      <div className="flex items-center gap-3 mb-2">
        <Target className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">Tamaño de la oportunidad</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-5xl md:text-6xl lg:text-7xl mt-6 mb-12 max-w-4xl"
      >
        Enorme. <span className="font-serif italic text-copper">Capturable</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Funnel */}
        <div className="lg:col-span-7 space-y-3">
          {funnel.map((f, i) => {
            const c = colorMap[f.tone];
            return (
              <motion.div
                key={f.tag}
                initial={{ opacity: 0, scaleX: 0.3, x: -40 }}
                animate={{ opacity: 1, scaleX: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 + i * 0.6, ease: "easeOut" }}
                style={{ width: f.width, transformOrigin: "center" }}
                className={`relative mx-auto rounded-3xl ${c.bg} text-white shadow-elevated px-8 py-7 flex items-center justify-between overflow-hidden`}
              >
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.6 }}
                >
                  <div className="font-mono text-sm uppercase tracking-[0.3em] opacity-90 font-bold">{f.tag}</div>
                  <div className="text-xs uppercase tracking-wider opacity-90 mt-1">{f.sub}</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.6, ease: "backOut" }}
                  className="font-mono font-bold text-7xl md:text-8xl"
                >
                  {f.value}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* KPIs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 2.4 }}
          className="lg:col-span-5 grid grid-cols-2 gap-3"
        >
          {[
            { v: "10M", l: "MAU Y5", tone: "primary" },
            { v: "2M",  l: "MAU Y3", tone: "primary" },
            { v: "78%", l: "margen bruto", tone: "success" },
            { v: "+15%", l: "eSports/año", tone: "copper" },
          ].map((s) => {
            const c = colorMap[s.tone];
            return (
              <div key={s.l} className={`rounded-2xl border ${c.border} bg-card p-5 shadow-card`}>
                <div className={`font-mono font-bold text-6xl ${c.text}`}>{s.v}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </SlideShell>
  );
};
