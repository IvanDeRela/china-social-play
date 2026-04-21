import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";

interface SlideClosingProps {
  onOpenDeepDive: () => void;
}

export const SlideClosing = ({ onOpenDeepDive }: SlideClosingProps) => {
  return (
    <SlideShell className="justify-center">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-8"
        >
          En resumen
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="display-xl text-4xl md:text-5xl lg:text-7xl max-w-5xl mb-10"
        >
          La pasión deportiva china{" "}
          <span className="text-muted-foreground/40">no tiene</span>
          <br />
          un canal legal para expresarse.
          <br />
          <span className="text-primary text-glow-primary">Nosotros lo construimos.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 max-w-4xl mb-12"
        >
          {[
            { val: "1.300M", sub: "Usuarios WeChat" },
            { val: "1,2M", sub: "SOM en 24 meses" },
            { val: "Mes 14", sub: "Break-even" },
            { val: "0%", sub: "Riesgo legal" },
          ].map((s) => (
            <div key={s.sub}>
              <div className="font-serif text-3xl md:text-4xl text-foreground mb-1">{s.val}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                {s.sub}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={onOpenDeepDive}
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
          >
            Anexo · Análisis profundo
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
          <span className="text-xs text-muted-foreground">
            Contexto histórico, legal y demográfico ampliado
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 text-xs text-muted-foreground/50"
        >
          <span className="font-mono uppercase tracking-[0.3em]">谢谢</span>
          <span className="h-px w-12 bg-border" />
          <span>Gracias</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono uppercase tracking-[0.3em]">Thank You</span>
        </motion.div>
      </div>
    </SlideShell>
  );
};
