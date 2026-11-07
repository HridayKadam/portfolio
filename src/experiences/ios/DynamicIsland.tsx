"use client";

import { motion } from "framer-motion";

type Props = {
  subtitle?: string;
};

export function DynamicIsland({ subtitle = "HridayOS" }: Props) {
  return (
    <motion.div
      layout
      className="absolute left-1/2 top-3 z-[90] -translate-x-1/2"
      initial={false}
    >
      <motion.div
        layout
        className="glass-panel-dark flex min-w-[120px] items-center justify-center gap-2 rounded-full px-4 py-2 shadow-island"
        animate={{ scale: subtitle.length > 12 ? 1.05 : 1 }}
      >
        <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_8px_rgba(47,123,255,0.8)]" />
        <span className="truncate text-[11px] font-medium text-white/80">{subtitle}</span>
      </motion.div>
    </motion.div>
  );
}
