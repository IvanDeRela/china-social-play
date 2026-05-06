import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  color?: "primary" | "copper" | "info" | "warn" | "danger" | "violet" | "success";
  className?: string;
}

const colorMap = {
  primary: "text-primary",
  copper: "text-copper",
  info: "text-info",
  warn: "text-warn",
  danger: "text-danger",
  violet: "text-violet",
  success: "text-success",
};

export const Eyebrow = ({ children, color = "primary", className }: EyebrowProps) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={cn("eyebrow flex items-center gap-3", colorMap[color], className)}
  >
    <span className="h-px w-8 bg-current opacity-60" />
    {children}
  </motion.div>
);
