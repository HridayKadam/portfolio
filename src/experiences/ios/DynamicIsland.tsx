"use client";

import { motion } from "framer-motion";

type Props = {
  subtitle?: string;
  expanded?: boolean;
};

export function DynamicIsland({ subtitle = "HridayOS", expanded = false }: Props) {
  return (
    <motion.div
      layout
      className="absolute left-1/2 z-[96] -translate-x-1/2"
      style={{ top: "max(11px, env(safe-area-inset-top))" }}
      animate={{ width: expanded ? 220 : 126, height: expanded ? 44 : 34 }}
      transition={{ type: "spring", stiffness: 500, damping: 38 }}
    >
      <div className="flex h-full w-full items-center justify-center gap-2 rounded-full bg-black px-3 shadow-lg shadow-black/50">
        <span className="h-2 w-2 rounded-full bg-[#30D158]" />
        {expanded && (
          <span className="truncate text-[13px] font-medium text-white/90">{subtitle}</span>
        )}
      </div>
    </motion.div>
  );
}
