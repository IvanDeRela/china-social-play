import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { SlideShell } from "../SlideShell";
import { Eyebrow } from "../Eyebrow";
import { CountUp } from "../CountUp";
import { ChinaMap } from "../ChinaMap";

export const SlideContext = () => {
  return (
    <SlideShell chapter="02" chapterLabel="El Nicho" watermark="国">
      <div className="flex items-center gap-3 mb-2">
        <Globe2 className="h-6 w-6 text-primary" />
        <Eyebrow color="primary">Del país · al nicho</Eyebrow>
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
        className="display-xl text-5xl md:text-6xl lg:text-7xl mb-8 max-w-5xl"
      >
        200 M fans. <span className="font-serif italic text-copper">0 productos</span>.
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Mapa China */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-8 rounded-2xl border border-border bg-card p-4 shadow-card relative"
        >
          <ChinaMap className="w-full h-[560px]" />
        </motion.div>

        {/* KPIs verticales */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-3">
          {[
            { val: 200, suf: "M", label: "Aficionados al fútbol europeo en China", sub: "Fuentes oficiales 2024", tone: "primary" },
            { val: 1300, suf: "M", label: "Usuarios de WeChat", sub: "Tencent · informe anual 2024", tone: "primary" },
            { val: 0, suf: "", label: "Apps de fantasy fútbol propias", sub: "Sensor Tower 2024", tone: "copper" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-card flex items-center gap-4"
            >
              <div className={`flex items-baseline font-mono font-bold leading-none ${s.tone === "primary" ? "text-primary" : "text-copper"}`}>
                <CountUp to={s.val} className="text-5xl md:text-6xl" />
                {s.suf && <span className="text-3xl md:text-4xl ml-1 opacity-90">{s.suf}</span>}
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-medium text-foreground leading-tight">{s.label}</div>
                <div className="mt-1 text-[10px] text-muted-foreground font-mono uppercase tracking-wider">{s.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-8 flex items-center justify-center gap-6"
      >
        <span className="font-serif text-2xl text-muted-foreground/70 line-through">competidores</span>
        <span className="text-3xl text-primary">→</span>
        <span className="font-serif italic text-3xl md:text-4xl text-primary">first mover</span>
      </motion.div>
    </SlideShell>
  );
};
