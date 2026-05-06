/** Decorative chinese-character watermark used as background motif on every slide. */
export const Watermark = ({ char = "中", className = "" }: { char?: string; className?: string }) => (
  <div
    aria-hidden
    className={`pointer-events-none absolute select-none font-serif text-foreground/[0.025] leading-none ${className}`}
    style={{ fontSize: "32rem", lineHeight: 0.8 }}
  >
    {char}
  </div>
);
