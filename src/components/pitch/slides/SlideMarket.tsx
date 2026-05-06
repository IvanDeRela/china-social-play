import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

/** Mejora 4 — TAM/SAM/SOM con cifras grandes en USD. */
export const SlideMarket = () => {
  return (
    <SlideShell chapter="05" chapterLabel="Mercado">
      <Eyebrow color="primary">Tamaño de la oportunidad</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-10 max-w-4xl"
      >
        Un mercado <span className="font-serif italic text-primary">enorme</span>,
        <br />y un trozo capturable <span className="text-copper">creíble</span>.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
        {[
          {
            tag: "TAM",
            title: "Gaming en China · 2024",
            value: "45.000",
            unit: "M USD",
            sub: "Mercado total de videojuegos en China",
            source: "Niko Partners · China Audio-video Association",
            tone: "primary" as const,
          },
          {
            tag: "SAM",
            title: "Mobile Sports Gaming",
            value: "4.000",
            unit: "M USD",
            sub: "Segmento accesible para nuestro producto",
            source: "iResearch · Sensor Tower 2024",
            tone: "copper" as const,
          },
          {
            tag: "SOM Y5",
            title: "Captable a 5 años",
            value: "200-300",
            unit: "M USD ARR",
            sub: "Cuota objetivo realista en año 5",
            source: "Proyección propia · ver metodología",
            tone: "success" as const,
          },
        ].map((m, i) => (
          <motion.div
            key={m.tag}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 px-3 py-1 font-mono text-[10px] tracking-[0.3em] bg-foreground text-background rounded-bl-lg">
              {m.tag}
            </div>
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">{m.title}</div>
            <Money value={m.value} unit={m.unit} size="xl" tone={m.tone} />
            <p className="mt-4 text-sm text-foreground/80 leading-relaxed">{m.sub}</p>
            <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {m.source}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {[
          { val: "2", unit: "M", label: "MAU objetivo Y3", tone: "primary" as const },
          { val: "10", unit: "M", label: "MAU objetivo Y5", tone: "primary" as const },
          { val: "78", unit: "%", label: "Margen bruto objetivo", tone: "success" as const },
          { val: "+15", unit: "%/año", label: "Crecimiento eSports China", tone: "copper" as const },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-5">
            <Money value={s.val} unit={s.unit} size="md" tone={s.tone} />
            <div className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  );
};
