import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { Money } from "../Money";

/** Mejora 10 — apertura que conecta con HTML 1 (estudio del país). */
export const SlideContext = () => {
  return (
    <SlideShell chapter="02" chapterLabel="El Nicho">
      <Eyebrow color="primary">Vienes del estudio del país</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 max-w-5xl"
      >
        China es un mercado <span className="font-serif italic text-primary">maduro</span>.
        <br />Hemos detectado <span className="text-copper">un nicho vacío</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        Digital, energética y regulatoriamente lista. Pero hay un hueco evidente:
        <strong className="text-foreground font-medium"> 200 millones de aficionados al fútbol europeo en China sin ningún producto fantasy nativo en WeChat</strong>.
        Esto es lo que vamos a construir.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { val: "200", unit: "M", label: "Aficionados al fútbol europeo en China", sub: "iResearch · CNNIC 2024" },
          { val: "1.300", unit: "M", label: "Usuarios activos en WeChat", sub: "Tencent Investor Relations 2024" },
          { val: "0", unit: "", label: "Apps fantasy nativas legales en WeChat", sub: "App Annie · Sensor Tower 2024" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
            className="rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <Money value={s.val} unit={s.unit} size="xl" tone={i === 2 ? "copper" : "primary"} />
            <div className="mt-4 text-sm font-medium text-foreground">{s.label}</div>
            <div className="mt-1 text-xs text-muted-foreground font-mono uppercase tracking-wider">{s.sub}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-10 rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5"
      >
        <p className="text-base md:text-lg leading-relaxed text-foreground/90 max-w-4xl">
          <strong className="text-primary">El que llega primero define las reglas.</strong>{" "}
          Nadie ha construido todavía un fantasy nativo en chino, dentro de WeChat, alineado con el
          marco regulatorio de Pekín. Nosotros sí.
        </p>
      </motion.div>
    </SlideShell>
  );
};
