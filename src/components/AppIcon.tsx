"use client";

import type { MouseEvent } from "react";
import { appCatalog, type AppId } from "@/config/placeholders";
import { motion } from "framer-motion";

type Props = {
  appId: AppId;
  size?: "sm" | "md" | "lg" | "xl" | "ios";
  showLabel?: boolean;
  labelSize?: "mac" | "ios" | "ipad";
  platform?: "mac" | "ios" | "ipad";
  onClick?: () => void;
  onContextMenu?: (e: MouseEvent) => void;
  className?: string;
};

const sizes = {
  sm: { box: "h-10 w-10 text-[11px]", label: "text-[10px]", gap: "gap-1" },
  md: { box: "h-12 w-12 text-[13px]", label: "text-[11px]", gap: "gap-1" },
  lg: { box: "h-14 w-14 text-[15px]", label: "text-xs", gap: "gap-1.5" },
  xl: { box: "h-[60px] w-[60px] text-[17px]", label: "text-[11px]", gap: "gap-1.5" },
  ios: { box: "h-[60px] w-[60px] text-[15px]", label: "text-[11px]", gap: "gap-1" },
};

export function AppIcon({
  appId,
  size = "md",
  showLabel = false,
  labelSize = "mac",
  platform = "mac",
  onClick,
  onContextMenu,
  className = "",
}: Props) {
  const app = appCatalog[appId];
  const s = sizes[size];
  const isIOS = platform === "ios" || platform === "ipad";

  const Wrapper = onClick ? motion.button : motion.div;

  return (
    <Wrapper
      type={onClick ? "button" : undefined}
      onClick={onClick}
      onContextMenu={onContextMenu}
      whileTap={onClick ? { scale: 0.9 } : undefined}
      transition={{ type: "spring", stiffness: 520, damping: 26 }}
      className={`group flex flex-col items-center ${s.gap} border-0 bg-transparent p-0 ${className}`}
      aria-label={app.name}
    >
      <div
        className={`${s.box} ios-icon-mask relative flex items-center justify-center font-semibold text-white`}
        style={{
          background: isIOS
            ? `linear-gradient(180deg, ${app.color} 0%, ${app.colorEnd} 100%)`
            : `linear-gradient(145deg, ${app.color} 0%, ${app.colorEnd} 100%)`,
          boxShadow: isIOS
            ? "0 2px 8px rgba(0,0,0,0.28)"
            : "0 8px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.25)",
        }}
      >
        <span className="drop-shadow-sm" aria-hidden>
          {app.symbol}
        </span>
      </div>
      {showLabel && (
        <span
          className={`${s.label} max-w-[76px] truncate text-center font-medium leading-tight ${
            labelSize === "ios"
              ? "text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
              : "text-white/90"
          }`}
        >
          {app.iosLabel && isIOS ? app.iosLabel : app.shortName}
        </span>
      )}
    </Wrapper>
  );
}
