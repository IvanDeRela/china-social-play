import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

/** Mejora 7 — comparables públicos verificables. */
export const SlideLegal = () => {
  const comps = [
    { name: "DraftKings", value: "18.000", unit: "M USD", source: "NASDAQ DKNG · cap. mercado", note: "Sports betting US" },
    { name: "FanDuel", value: "22.000", unit: "M USD", source: "Flutter Entertainment 10-K", note: "Subsidiary cap" },
    { name: "Sorare", value: "4.300", unit: "M USD", source: "Series B 2021 · SoftBank lead", note: "Fantasy NFTs" },
    { name: "Genius Sports", value: "1.500", unit: "M USD", source: "NYSE GENI · cap. mercado", note: "Sports data B2B" },
  ];

  return (
    <SlideShell chapter="08" chapterLabel="Comparables">
      <Eyebrow color="copper">Comparables públicos · valoraciones verificables</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-3 max-w-4xl"
      >
        El mercado <span className="font-serif italic text-primary">ya valora</span> compañías como ésta.
      </motion.h2>

      <p className="max-w-3xl text-base text-muted-foreground mb-10">
        No estamos inventando una categoría: estamos llevando un modelo probado a un mercado virgen.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {comps.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="font-serif text-xl text-foreground mb-3">{c.name}</div>
            <Money value={c.value} unit={c.unit} size="lg" tone="copper" />
            <div className="mt-4 text-xs text-foreground/80">{c.note}</div>
            <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {c.source}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="md:col-span-2 rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5"
        >
          <div className="eyebrow text-primary mb-2">¿Por qué somos defendibles?</div>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90">
            <li className="flex gap-3"><span className="text-primary">→</span> Único producto fantasy nativo dentro de WeChat (sin competidores legales en el SOM).</li>
            <li className="flex gap-3"><span className="text-primary">→</span> Margen bruto objetivo: <Money value="78" unit="%" tone="success" size="sm" /> · típico SaaS gaming.</li>
            <li className="flex gap-3"><span className="text-primary">→</span> Compliance estructural: PIPL + Cybersecurity Law + ICP listo desde M3.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <div className="eyebrow text-copper mb-3">Hitos comprometidos con la ronda</div>
          <ul className="space-y-2 text-sm text-foreground/90">
            <li>✓ MVP funcional WeChat · M6</li>
            <li>✓ Acuerdo LaLiga Tech · M9</li>
            <li>✓ 100k DAU · M12</li>
            <li>✓ Compliance completo · M3</li>
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  );
};
