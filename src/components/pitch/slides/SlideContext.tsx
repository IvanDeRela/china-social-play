import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

export const SlideContext = () => {
  return (
    <SlideShell chapter="02" chapterLabel="El Nicho">
      <Eyebrow color="primary">Del estudio del país · al nicho</Eyebrow>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-5 mb-7 flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground"
      >
        <span className="rounded-full border border-border bg-card px-3 py-1">HTML 1 · País maduro</span>
        <span className="text-primary">→</span>
        <span className="rounded-full bg-primary/10 text-primary px-3 py-1">HTML 2 · El nicho</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="display-xl text-5xl md:text-6xl lg:text-7xl mb-12 max-w-5xl"
      >
        200 M fans. <span className="font-serif italic text-copper">0 productos</span>.
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { val: "200", unit: "M", label: "Fans fútbol europeo · China", sub: "iResearch · CNNIC 2024", tone: "primary" as const },
          { val: "1.300", unit: "M", label: "Usuarios WeChat", sub: "Tencent IR 2024", tone: "primary" as const },
          { val: "0", unit: "", label: "Apps fantasy nativas", sub: "Sensor Tower 2024", tone: "copper" as const },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
            className="rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <Money value={s.val} unit={s.unit} size="2xl" tone={s.tone} />
            <div className="mt-4 text-sm font-medium text-foreground">{s.label}</div>
            <div className="mt-1 text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-12 flex items-center justify-center gap-6"
      >
        <span className="font-serif text-2xl text-muted-foreground/70 line-through">competidores</span>
        <span className="text-3xl text-primary">→</span>
        <span className="font-serif italic text-3xl md:text-4xl text-primary">first mover</span>
      </motion.div>
    </SlideShell>
  );
};
