import { useMemo } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { palette, baseOptions } from "../ChartTheme";

/** Escala — chart + flecha temporal Y1→Y5 con palancas de coste. */
export const SlideRoadmap = () => {
  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5"];

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      {
        label: "Coste por usuario ($)", data: [56, 16, 11, 9, 9],
        borderColor: palette.copper(), backgroundColor: palette.copperAlpha(0.1),
        borderWidth: 3, tension: 0.35, pointRadius: 4, pointBackgroundColor: palette.copper(), fill: true,
      },
      {
        label: "ARPU ($)", data: [5, 7, 12, 16, 20],
        borderColor: palette.primary(), backgroundColor: palette.primaryAlpha(0.1),
        borderWidth: 3, tension: 0.35, pointRadius: 4, pointBackgroundColor: palette.primary(), fill: true,
      },
    ],
  }), []);

  const opts = useMemo(() => baseOptions(), []);

  /** Timeline: Y1 → Y5 with cost-lever annotations. */
  const milestones = [
    { y: "Y1", k: "$56",  l: "coste/usuario",     tone: "copper"  },
    { y: "Y2", k: "−30%", l: "Cloud Tencent",     tone: "primary" },
    { y: "Y3", k: "1×",   l: "Breakeven",         tone: "success" },
    { y: "Y4", k: "$1,2", l: "CAC viral k=2,4×",  tone: "primary" },
    { y: "Y5", k: "4%",   l: "Licencias revenue", tone: "copper"  },
  ];
  const toneBg: Record<string, string> = {
    primary: "bg-primary",  copper: "bg-copper",  success: "bg-success",
  };
  const toneText: Record<string, string> = {
    primary: "text-primary", copper: "text-copper", success: "text-success",
  };
  const toneBorder: Record<string, string> = {
    primary: "border-primary/40", copper: "border-copper/40", success: "border-success/40",
  };

  return (
    <SlideShell chapter="07" chapterLabel="Escala">
      <Eyebrow color="success">Economías de escala</Eyebrow>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-6 mb-8 max-w-4xl"
      >
        Más usuarios = <span className="font-serif italic text-success">más margen</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Coste vs ARPU · breakeven Y3
          </div>
          <div className="h-[260px]"><Line data={chartData} options={opts as any} /></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }}
          className="lg:col-span-5 grid grid-cols-2 gap-3"
        >
          {[
            { v: "$2,5",    l: "CAC blended Y3", tone: "copper"  },
            { v: "$45",     l: "LTV Y3",         tone: "primary" },
            { v: "18×",     l: "LTV/CAC",        tone: "success", hint: "Sano: 3-5×" },
            { v: "4 meses", l: "Payback",        tone: "primary" },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className={`font-mono font-bold text-5xl md:text-6xl ${toneText[s.tone]}`}>{s.v}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              {s.hint && <div className="mt-1 text-[10px] font-mono uppercase tracking-wider text-success">{s.hint}</div>}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Timeline arrow Y1→Y5 */}
      <div className="relative">
        <div className="absolute left-4 right-4 top-[26px] h-0.5 bg-gradient-to-r from-copper via-primary to-success" />
        <div className="absolute right-2 top-[18px] h-0 w-0 border-y-[10px] border-y-transparent border-l-[14px] border-l-success" />

        <div className="relative grid grid-cols-5 gap-2">
          {milestones.map((m, i) => (
            <motion.div
              key={m.y}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className={`grid h-12 w-12 place-items-center rounded-full ${toneBg[m.tone]} text-white font-mono font-bold text-sm shadow-elevated relative z-10`}>
                {m.y}
              </div>
              <div className={`mt-3 rounded-xl border ${toneBorder[m.tone]} bg-card px-3 py-2.5 w-full shadow-card`}>
                <div className={`font-mono font-bold text-2xl ${toneText[m.tone]}`}>{m.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground leading-tight">{m.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
