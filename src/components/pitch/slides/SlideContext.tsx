import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";

export const SlideContext = () => {
  return (
    <SlideShell chapter="02" chapterLabel="Contexto">
      <div className="grid flex-1 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left column */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <Eyebrow color="violet">El punto de partida</Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6"
          >
            Para entender China,
            <br />
            hay que <span className="text-violet">olvidarse</span>
            <br />
            de Europa.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground"
          >
            En China <strong className="text-foreground font-medium">apostar dinero es ilegal</strong>.
            No es algo nuevo: es una norma con
            <strong className="text-foreground font-medium"> 75 años de vigencia</strong> y
            raíces culturales de <strong className="text-foreground font-medium">siglos</strong>.
            Cualquier negocio que ignore este punto, fracasa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-violet/30 bg-violet/5 px-4 py-2 text-xs"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            <span className="text-violet/90">Esto cambia toda la lógica del negocio</span>
          </motion.div>
        </div>

        {/* Right column — facts */}
        <div className="lg:col-span-7 flex flex-col gap-4 justify-center">
          {[
            {
              year: "1949",
              title: "Apostar queda prohibido",
              body: "Tras la Revolución, el Estado prohíbe cualquier forma de juego con dinero. La norma sigue intacta hoy.",
              color: "danger",
            },
            {
              year: "1987 · 1994",
              title: "Solo dos loterías estatales",
              body: "Las únicas excepciones legales. Se justifican como financiación pública, no como entretenimiento.",
              color: "warn",
            },
            {
              year: "Tradición",
              title: "Jugar por diversión, sí. Por dinero, no.",
              body: "Durante siglos, China toleró el juego social entre amigos, pero rechazó el lucro. Esa frontera cultural sigue marcando hoy lo que está permitido.",
              color: "primary",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.15 }}
              className="group relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/60"
            >
              <div
                className="absolute left-0 top-6 h-12 w-1 rounded-r-full"
                style={{ background: `hsl(var(--${item.color}))` }}
              />
              <div className="flex items-baseline justify-between mb-2">
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.25em]"
                  style={{ color: `hsl(var(--${item.color}))` }}
                >
                  {item.year}
                </span>
              </div>
              <h3 className="font-serif text-lg md:text-xl text-foreground mb-2">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
