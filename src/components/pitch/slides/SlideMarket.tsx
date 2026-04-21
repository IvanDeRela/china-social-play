import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

const segments = [
  {
    label: "TAM",
    val: "320M",
    bar: 100,
    color: "primary",
    title: "Público total al que podríamos llegar",
    desc: "Jóvenes chinos de 18 a 35 años en grandes ciudades que ya usan WeChat a diario.",
  },
  {
    label: "SAM",
    val: "48M",
    bar: 55,
    color: "info",
    title: "Público realmente interesado",
    desc: "De ese total, los que siguen fútbol europeo o eSports y suelen pagar por servicios digitales.",
  },
  {
    label: "SOM",
    val: "1,2M",
    bar: 25,
    color: "gold",
    title: "Lo que esperamos captar en 2 años",
    desc: "Objetivo prudente arrancando solo en tres ciudades: Shanghái, Pekín y Chengdu.",
  },
];

export const SlideMarket = () => {
  return (
    <SlideShell chapter="05" chapterLabel="Mercado">
      <div className="grid flex-1 grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Eyebrow color="primary">Tamaño de mercado</Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6"
          >
            Un nicho
            <br />
            <span className="text-primary">muy grande,</span>
            <br />
            muy concreto.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            No vamos a por toda China. Apuntamos a{" "}
            <strong className="text-foreground font-medium">jóvenes de 18 a 35 años</strong> en las{" "}
            <strong className="text-foreground font-medium">grandes ciudades</strong>: el público con
            mayor renta, fans del fútbol europeo y los eSports, y ya activos en WeChat.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {[
              "🏙️ Shanghái",
              "🏙️ Pekín",
              "🏙️ Chengdu",
              "📱 WeChat Mini-Programs",
              "🎮 eSports hardcore",
              "⚽ LaLiga fans",
            ].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-primary/25 bg-primary/8 px-3 py-1.5 text-xs text-primary/90"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* TAM SAM SOM */}
        <div className="lg:col-span-7 flex flex-col justify-center gap-5">
          {segments.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm"
              style={{ borderColor: `hsl(var(--${s.color}) / 0.25)` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-baseline gap-4">
                  <span
                    className="font-mono text-xs font-bold tracking-[0.25em]"
                    style={{ color: `hsl(var(--${s.color}))` }}
                  >
                    {s.label}
                  </span>
                  <span className="font-serif text-4xl md:text-5xl text-foreground leading-none">
                    {s.val}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground/70 hidden sm:block">{s.title}</span>
              </div>

              <div className="h-1.5 rounded-full bg-muted/40 overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${s.bar}%` }}
                  transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, hsl(var(--${s.color})), hsl(var(--${s.color}) / 0.5))`,
                    boxShadow: `0 0 12px hsl(var(--${s.color}) / 0.5)`,
                  }}
                />
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
