import { motion } from "framer-motion";
import { SlideShell } from "../SlideShell";
import { Watermark } from "../Watermark";

interface SlideDividerProps {
  num: string;
  title: string;
  kicker: string;
  hanzi?: string;
  tone?: "primary" | "copper" | "success" | "danger";
}

const toneText: Record<string, string> = {
  primary: "text-primary", copper: "text-copper", success: "text-success", danger: "text-danger",
};

export const SlideDivider = ({ num, title, kicker, hanzi = "章", tone = "primary" }: SlideDividerProps) => (
  <SlideShell className="justify-center">
    <Watermark char={hanzi} className="left-[-4rem] top-1/2 -translate-y-1/2" />

    <div className="relative z-10 flex flex-col items-start justify-center min-h-[60vh] gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
        className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span className={`font-serif text-7xl ${toneText[tone]} not-italic`}>{num}</span>
        <span className="h-px w-20 bg-border" />
        <span>{kicker}</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
        className={`display-xl text-7xl md:text-9xl lg:text-[160px] leading-[0.9] ${toneText[tone]}`}
      >
        {title}
      </motion.h1>
    </div>
  </SlideShell>
);
