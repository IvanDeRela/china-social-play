import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { PhoneMockup } from "../PhoneMockup";

export const SlideDemo = () => {
  return (
    <SlideShell chapter="09" chapterLabel="Demo">
      <div className="grid flex-1 grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <div className="lg:col-span-6">
          <Eyebrow color="primary">Visión de producto</Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-6"
          >
            Así lo verá
            <br />
            <span className="text-primary">el usuario chino</span>.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-base md:text-lg leading-relaxed text-muted-foreground mb-8"
          >
            Esta es la pantalla del{" "}
            <strong className="text-foreground font-medium">Centro VIP (会员中心)</strong>: tal
            cual aparecería dentro de WeChat, en chino y con la estética que ese público espera de
            una app premium.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="space-y-4"
          >
            {[
              {
                icon: "🤖",
                title: "Predicciones con IA",
                body: "Análisis exclusivo para VIP que estima el rendimiento de cada jugador.",
              },
              {
                icon: "📊",
                title: "Datos en directo",
                body: "Estadísticas avanzadas durante el partido, casi sin retraso.",
              },
              {
                icon: "🏆",
                title: "Ligas privadas",
                body: "Crea torneos cerrados para competir con tu grupo de amigos o de oficina.",
              },
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-lg">
                  {f.icon}
                </div>
                <div>
                  <div className="font-serif text-base text-foreground">{f.title}</div>
                  <div className="text-sm text-muted-foreground">{f.body}</div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-4 py-2 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Maqueta interactiva · pulsa el botón dorado para probarla
          </motion.div>
        </div>

        {/* Right — phone */}
        <div className="lg:col-span-6 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float"
          >
            <PhoneMockup scale={1.1} />
          </motion.div>
        </div>
      </div>
    </SlideShell>
  );
};
