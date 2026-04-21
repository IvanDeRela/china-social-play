import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

const streams = [
  {
    pct: "55%",
    title: "Publicidad In-App",
    sub: "Modelo display + native",
    desc: "Banners contextuales, contenido patrocinado dentro del feed deportivo y vídeos pre-partido. Targeting de altísima precisión gracias al perfil de fan.",
    color: "primary",
  },
  {
    pct: "25%",
    title: "Patrocinios de marca",
    sub: "Activaciones O2O",
    desc: "Marcas como Meituan o JD.com aportan los cupones-premio a cambio de visibilidad y datos de comportamiento. Win-win sin coste de adquisición.",
    color: "info",
  },
  {
    pct: "20%",
    title: "VIP Data SaaS",
    sub: "Suscripción premium",
    desc: "Pro Analytics con IA predictiva: ¥29/mes, ¥79/trimestre, ¥199/año. Conversión target 3% — el motor de margen del negocio.",
    color: "gold",
  },
];

export const SlideMonetization = () => {
  return (
    <SlideShell chapter="07" chapterLabel="Modelo">
      <Eyebrow color="gold">Modelo de monetización</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6 max-w-4xl"
      >
        Tres fuentes de ingreso,
        <br />
        <span className="text-gold">cero dependencia del usuario</span>.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-3xl text-base md:text-lg leading-relaxed text-muted-foreground mb-12"
      >
        El usuario juega gratis. La monetización viene de un mix balanceado entre publicidad,
        patrocinios de marca y un upsell premium SaaS. Esta diversificación reduce riesgo y nos hace
        atractivos a marcas y fondos por igual.
      </motion.p>

      {/* Revenue split bar */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10 flex h-3 w-full overflow-hidden rounded-full origin-left"
      >
        <div className="bg-primary" style={{ width: "55%" }} />
        <div className="bg-info" style={{ width: "25%" }} />
        <div className="bg-gold" style={{ width: "20%" }} />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 flex-1">
        {streams.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.12 }}
            className="relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm"
            style={{ borderColor: `hsl(var(--${s.color}) / 0.25)` }}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span
                className="font-serif text-5xl md:text-6xl leading-none"
                style={{ color: `hsl(var(--${s.color}))` }}
              >
                {s.pct}
              </span>
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: `hsl(var(--${s.color}))` }}
              >
                {s.sub}
              </span>
            </div>
            <h3 className="font-serif text-xl text-foreground mb-2">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { label: "ARPU objetivo", val: "¥9,8" },
          { label: "Conversión VIP", val: "3%" },
          { label: "Patrocinadores Y1", val: "5–8" },
          { label: "Margen bruto", val: "78%" },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border bg-background/40 px-4 py-3 text-center"
          >
            <div className="font-serif text-2xl text-gold">{kpi.val}</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              {kpi.label}
            </div>
          </div>
        ))}
      </motion.div>
    </SlideShell>
  );
};
