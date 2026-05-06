import { motion } from "framer-motion";
import { Doughnut } from "react-chartjs-2";
import { Rocket } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Money } from "../Money";
import { palette, baseOptions } from "../ChartTheme";
import { PartnerLogos } from "../PartnerLogos";

interface SlideClosingProps {
  onOpenDeepDive: () => void;
}

/** Mejora 9 — "The Ask" clarísimo al cierre. */
export const SlideClosing = ({ onOpenDeepDive }: SlideClosingProps) => {
  const allocation = {
    labels: ["Equipo y salarios", "Marketing y adquisición", "Licencias deportivas", "Legal · compliance · HK"],
    datasets: [{
      data: [40, 30, 20, 10],
      backgroundColor: [palette.primary(), palette.copper(), palette.success(), palette.warn()],
      borderColor: "hsl(0 0% 100%)",
      borderWidth: 3,
    }],
  };

  const opts = {
    ...baseOptions(),
    cutout: "65%",
    plugins: {
      legend: {
        position: "right" as const,
        labels: {
          color: palette.fg(),
          font: { family: "Inter", size: 12 },
          usePointStyle: true,
          padding: 14,
        },
      },
    },
  };

  return (
    <SlideShell chapter="11" chapterLabel="Inversión" watermark="募">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/8 blur-[100px]" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.4em] text-primary mb-4">
            <Rocket className="h-4 w-4" /> Seed Round
          </div>
          <h2 className="display-xl text-7xl md:text-8xl lg:text-9xl">
            <Money value="USD 5" unit="M" size="2xl" tone="primary" className="text-primary text-glow-primary" />
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Valoración pre-money <span className="font-mono text-foreground">USD 20M</span>
            <span className="mx-3 text-muted-foreground/40">·</span>
            Runway <span className="font-mono text-foreground">18 meses</span> hasta Serie A
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Donut */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
              Distribución del capital
            </div>
            <div className="h-[240px]">
              <Doughnut data={allocation} options={opts as any} />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs font-mono">
              <div><span className="text-primary">●</span> 40 % · USD 2,0M</div>
              <div><span className="text-copper">●</span> 30 % · USD 1,5M</div>
              <div><span className="text-success">●</span> 20 % · USD 1,0M</div>
              <div><span className="text-warn">●</span> 10 % · USD 0,5M</div>
            </div>
          </motion.div>

          {/* Hitos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-6 rounded-2xl border border-primary/30 bg-primary/5 p-6"
          >
            <div className="eyebrow text-primary mb-4">Hitos comprometidos</div>
            <ul className="space-y-3">
              {[
                { m: "M3", t: "Compliance PIPL · CSL · ICP" },
                { m: "M6", t: "MVP WeChat live" },
                { m: "M9", t: "LaLiga Tech firmado" },
                { m: "M12", t: "100k DAU" },
                { m: "M18", t: "Serie A" },
              ].map((h) => (
                <li key={h.m} className="flex items-center gap-3 text-base text-foreground/95">
                  <span className="font-mono text-sm font-bold text-primary bg-primary/10 rounded px-2.5 py-0.5 shrink-0">{h.m}</span>
                  <span>{h.t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-4 shadow-card"
        >
          <div className="text-sm">
            <span className="font-mono uppercase tracking-wider text-[10px] text-muted-foreground mr-2">Contacto</span>
            <span className="font-mono text-foreground">ivan.garcia@um.es</span>
          </div>
          <button
            onClick={onOpenDeepDive}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            Anexo ampliado <span>→</span>
          </button>
        </motion.div>

        <div className="mt-6">
          <PartnerLogos label="Target partners · ecosistema" />
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-xs text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.3em]">谢谢</span>
          <span className="h-px w-12 bg-border" />
          <span>Gracias</span>
          <span className="h-px w-12 bg-border" />
          <span className="font-mono uppercase tracking-[0.3em]">Thank You</span>
        </div>
      </div>
    </SlideShell>
  );
};
