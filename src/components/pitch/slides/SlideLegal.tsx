import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

export const SlideLegal = () => {
  const comps = [
    { name: "DraftKings", value: "18.000", unit: "M USD", note: "Sports betting US", source: "NASDAQ DKNG" },
    { name: "FanDuel", value: "22.000", unit: "M USD", note: "Flutter sub.", source: "Flutter 10-K" },
    { name: "Sorare", value: "4.300", unit: "M USD", note: "Fantasy NFTs", source: "SoftBank Series B" },
    { name: "Genius Sports", value: "1.500", unit: "M USD", note: "Sports data B2B", source: "NYSE GENI" },
  ];

  return (
    <SlideShell chapter="09" chapterLabel="Comparables">
      <Eyebrow color="copper">Comparables públicos</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="display-xl text-3xl md:text-4xl lg:text-5xl mt-6 mb-10 max-w-4xl"
      >
        El mercado <span className="font-serif italic text-primary">ya valora</span> esto.
      </motion.h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {comps.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
            className="rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="font-serif text-xl text-foreground mb-3">{c.name}</div>
            <Money value={c.value} unit={c.unit} size="lg" tone="copper" />
            <div className="mt-3 text-xs text-foreground/80">{c.note}</div>
            <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {c.source}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="md:col-span-2 rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5"
        >
          <div className="eyebrow text-primary mb-3">Defensibilidad</div>
          <ul className="space-y-2 text-sm md:text-base text-foreground/90">
            <li className="flex gap-3"><span className="text-primary">→</span> Único fantasy nativo en WeChat</li>
            <li className="flex gap-3"><span className="text-primary">→</span> Margen bruto <Money value="78" unit="%" tone="success" size="sm" /></li>
            <li className="flex gap-3"><span className="text-primary">→</span> Compliance: PIPL · CSL · ICP</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="rounded-2xl border border-border bg-card p-5 shadow-card"
        >
          <div className="eyebrow text-copper mb-3">Hitos ronda</div>
          <ul className="space-y-1.5 text-sm text-foreground/90">
            <li>✓ Compliance · M3</li>
            <li>✓ MVP WeChat · M6</li>
            <li>✓ LaLiga Tech · M9</li>
            <li>✓ 100k DAU · M12</li>
          </ul>
        </motion.div>
      </div>
    </SlideShell>
  );
};
