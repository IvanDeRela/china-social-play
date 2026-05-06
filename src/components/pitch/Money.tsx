import { cn } from "@/lib/utils";

interface MoneyProps {
  value: string;
  unit?: string;
  tone?: "primary" | "copper" | "success" | "danger" | "warn" | "foreground";
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
}

const toneMap = {
  primary: "text-primary",
  copper: "text-copper",
  success: "text-success",
  danger: "text-danger",
  warn: "text-warn",
  foreground: "text-foreground",
};

const sizeMap = {
  sm: "text-2xl",
  md: "text-3xl md:text-4xl",
  lg: "text-4xl md:text-5xl",
  xl: "text-5xl md:text-6xl",
  "2xl": "text-6xl md:text-7xl lg:text-8xl",
};

/** Numerical figure styled with mono font + accent color, with small unit label. */
export const Money = ({ value, unit, tone = "primary", size = "lg", className }: MoneyProps) => (
  <span className={cn("inline-flex items-baseline gap-1.5 font-mono font-semibold tracking-tight", toneMap[tone], sizeMap[size], className)}>
    <span>{value}</span>
    {unit && <span className="text-[0.5em] font-medium opacity-70">{unit}</span>}
  </span>
);
