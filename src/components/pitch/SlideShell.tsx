import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlideShellProps {
  children: React.ReactNode;
  className?: string;
  /** chapter number, e.g. "01" */
  chapter?: string;
  /** chapter label, e.g. "CONTEXTO" */
  chapterLabel?: string;
}

/**
 * Wrapper for every slide. Provides consistent padding, max-width
 * and an optional chapter marker fixed in the top-right of the slide canvas.
 */
export const SlideShell = ({ children, className, chapter, chapterLabel }: SlideShellProps) => (
  <section
    className={cn(
      "relative min-h-screen w-full",
      "px-6 pt-28 pb-20 md:px-16 md:pt-32 md:pb-24",
      "flex flex-col",
      className,
    )}
  >
    {chapter && (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute right-6 top-24 hidden md:flex flex-col items-end gap-1 text-right"
      >
        <span className="font-serif text-6xl leading-none text-primary/15">{chapter}</span>
        {chapterLabel && (
          <span className="eyebrow text-muted-foreground/60">{chapterLabel}</span>
        )}
      </motion.div>
    )}
    <div className="relative z-10 mx-auto w-full max-w-[1280px] flex-1 flex flex-col">
      {children}
    </div>
  </section>
);
