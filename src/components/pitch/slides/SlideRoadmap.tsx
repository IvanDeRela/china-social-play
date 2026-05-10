import { useMemo } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { Gauge } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { palette, baseOptions } from "../ChartTheme";

export const SlideRoadmap = () => {
  const labels = ["Y1", "Y2", "Y3", "Y4", "Y5"];

  const chartData = useMemo(() => ({
    labels,
    datasets: [
      { label: "Coste por usuario ($)", data: [56, 16, 11, 9, 9],
        borderColor: palette.copper(), backgroundColor: palette.copperAlpha(0.1),
        borderWidth: 3, tension: 0.35, pointRadius: 4, pointBackgroundColor: palette.copper(), fill: true },
      { label: "Ingreso por usuario ($)", data: [5, 7, 12, 16, 20],
        borderColor: palette.primary(), backgroundColor: palette.primaryAlpha(0.1),
        borderWidth: 3, tension: 0.35, pointRadius: 4, pointBackgroundColor: palette.primary(), fill: true },
    ],
  }), []);

  const opts = useMemo(() => baseOptions(), []);

  // Cuánto cuesta captar un usuario vs cuánto ingresa a lo largo de su vida
  const unit = [
    { label: "Coste de captar", value: "$2,5", size: 110, tone: "copper", note: "media año 3" },
    { label: "Valor que aporta", value: "$45",  size: 180, tone: "primary", note: "a lo largo de su vida" },
    { label: "Multiplicador",    value: "18×", size: 230, tone: "success", note: "saludable: 3-5×" },
  ];

  const milestones = [
    { y: "Año 1", k: "$56",  l: "Coste por usuario inicial",  tone: "copper"  },
    { y: "Año 2", k: "−30%", l: "Ahorro con la nube de Tencent", tone: "primary" },
    { y: "Año 3", k: "1×",   l: "Punto de equilibrio",         tone: "success" },
    { y: "Año 4", k: "$1,2", l: "Cada usuario invita a 2,4 amigos", tone: "primary" },
    { y: "Año 5", k: "4%",   l: "Ingresos por licencias deportivas", tone: "copper"  },
  ];
  const toneBg: Record<string, string>      = { primary: "bg-primary", copper: "bg-copper", success: "bg-success" };
  const toneText: Record<string, string>    = { primary: "text-primary", copper: "text-copper", success: "text-success" };
  const toneBorder: Record<string, string>  = { primary: "border-primary/40", copper: "border-copper/40", success: "border-success/40" };
  const toneRing: Record<string, string>    = { primary: "ring-primary", copper: "ring-copper", success: "ring-success" };

  return (
    <SlideShell chapter="08" chapterLabel="Escala" watermark="规">
      <div className="flex items-center gap-3 mb-2">
        <Gauge className="h-6 w-6 text-success" />
        <Eyebrow color="success">Economías de escala</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
        className="display-xl text-4xl md:text-5xl lg:text-6xl mt-4 mb-6 max-w-4xl"
      >
        Más usuarios = <span className="font-serif italic text-success">más margen</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* Unit economics CIRCULAR (concéntrico) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 rounded-2xl border border-border bg-card p-6 shadow-card flex flex-col items-center"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3 self-start">
            Coste vs valor del usuario · año 3
          </div>
          <div className="relative h-[260px] w-[260px] flex items-center justify-center">
            {unit.map((u, i) => (
              <motion.div
                key={u.label}
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.25, ease: "backOut" }}
                style={{ width: u.size, height: u.size }}
                className={`absolute rounded-full ${i === unit.length - 1 ? toneBg[u.tone] : "bg-card"} ring-2 ${toneRing[u.tone]} flex flex-col items-center justify-center shadow-elevated`}
              >
                {i === unit.length - 1 && (
                  <>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-white/80">{u.label}</span>
                    <span className="font-mono font-bold text-5xl text-white leading-none">{u.value}</span>
                  </>
                )}
              </motion.div>
            ))}
          </div>
          {/* Leyenda */}
          <div className="grid grid-cols-3 gap-3 mt-4 w-full">
            {unit.map((u) => (
              <div key={u.label} className="text-center">
                <div className={`font-mono text-[10px] uppercase tracking-wider ${toneText[u.tone]}`}>{u.label}</div>
                <div className={`font-mono font-bold text-2xl ${toneText[u.tone]}`}>{u.value}</div>
                <div className="text-[9px] text-muted-foreground mt-0.5">{u.note}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Coste vs ARPU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 shadow-card"
        >
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-3">
            Coste vs ingreso por usuario · equilibrio en el año 3
          </div>
          <div className="h-[360px]"><Line data={chartData} options={opts as any} /></div>
        </motion.div>
      </div>

      {/* Timeline arrow Y1→Y5 — flecha centrada en el centro del círculo en cualquier breakpoint.
          Centro vertical: pt-2 (8px) + (alto círculo / 2). Móvil: h-11 → 8+22=30. Desktop: h-16 → 8+32=40. */}
      <div className="relative pt-2">
        <div className="pointer-events-none absolute left-[10%] right-[10%] top-[26px] sm:top-[36px] h-1 z-0">
          <motion.div
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            style={{ transformOrigin: "left center" }}
            className="absolute inset-0 rounded-full bg-gradient-to-r from-copper via-primary to-success shadow-[0_0_16px_hsl(var(--primary)/0.45)]"
          />
          <motion.div
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.4 }}
            className="absolute -right-1 sm:-right-2 top-1/2 -translate-y-1/2 h-0 w-0 border-y-[7px] sm:border-y-[10px] border-y-transparent border-l-[11px] sm:border-l-[16px] border-l-success drop-shadow-[0_0_8px_hsl(var(--success)/0.6)]"
          />
        </div>

        <div className="relative grid grid-cols-5 gap-1 sm:gap-2">
          {milestones.map((m, i) => (
            <motion.div
              key={m.y}
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 + i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center cursor-pointer min-w-0"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`grid h-11 w-11 sm:h-16 sm:w-16 place-items-center rounded-full ${toneBg[m.tone]} text-white font-mono font-bold text-xs sm:text-base shadow-elevated relative z-10 ring-4 ring-background`}
                style={{ boxShadow: `0 0 24px hsl(var(--${m.tone}) / 0.5)` }}
              >
                {m.y}
                <span className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ boxShadow: `0 0 32px hsl(var(--${m.tone}) / 0.8)` }} />
              </motion.div>
              <div className={`mt-3 rounded-xl border ${toneBorder[m.tone]} bg-card px-3 py-2.5 w-full shadow-card transition-all group-hover:shadow-elevated group-hover:scale-[1.03]`}>
                <div className={`font-mono font-bold text-3xl md:text-4xl ${toneText[m.tone]}`}>{m.k}</div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground leading-tight">{m.l}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SlideShell>
  );
};
