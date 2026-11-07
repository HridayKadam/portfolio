"use client";

import type { MouseEvent } from "react";
import { appCatalog, type AppId } from "@/config/placeholders";
import { motion } from "framer-motion";

type Props = {
  appId: AppId;
  size?: "sm" | "md" | "lg" | "xl";
  showLabel?: boolean;
  labelSize?: "mac" | "ios" | "ipad";
  onClick?: () => void;
  onContextMenu?: (e: MouseEvent) => void;
  className?: string;
};

const sizes = {
  sm: { box: "h-10 w-10 text-sm", radius: "rounded-[10px]", label: "text-[10px]" },
  md: { box: "h-12 w-12 text-base", radius: "rounded-[12px]", label: "text-[11px]" },
  lg: { box: "h-14 w-14 text-lg", radius: "rounded-[14px]", label: "text-xs" },
  xl: { box: "h-[60px] w-[60px] text-xl", radius: "rounded-[15px]", label: "text-xs" },
};

export function AppIcon({
  appId,
  size = "md",
  showLabel = false,
  labelSize = "mac",
  onClick,
  onContextMenu,
  className = "",
}: Props) {
  const app = appCatalog[appId];
  const s = sizes[size];

  const Wrapper = onClick ? motion.button : motion.div;

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      onContextMenu={onContextMenu}
      whileTap={onClick ? { scale: 0.92 } : undefined}
      whileHover={onClick ? { scale: 1.04 } : undefined}
      className={`group flex flex-col items-center gap-1.5 border-0 bg-transparent p-0 ${className}`}
      aria-label={app.name}
    >
      <div
        className={`${s.box} ${s.radius} relative flex items-center justify-center font-semibold text-white shadow-lg`}
        style={{
          background: `linear-gradient(145deg, ${app.color} 0%, #1a2840 140%)`,
          boxShadow: "0 8px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      >
        <span aria-hidden>{app.symbol}</span>
      </div>
      {showLabel && (
        <span
          className={`${s.label} max-w-[72px] truncate text-center font-medium text-white/90 ${
            labelSize === "ios" ? "drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]" : ""
          }`}
        >
          {app.shortName}
        </span>
      )}
    </Wrapper>
  );
}
