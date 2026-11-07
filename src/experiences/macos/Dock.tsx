"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AppIcon } from "@/components/AppIcon";
import { allAppIds, type AppId } from "@/config/placeholders";
import { useMacWindows } from "@/experiences/macos/WindowContext";

const DOCK_ITEM = 52;
const MAG_RANGE = 140;

function scaleForDistance(distance: number): number {
  if (distance >= MAG_RANGE) return 1;
  const t = 1 - distance / MAG_RANGE;
  return 1 + t * t * 0.65;
}

export function Dock() {
  const { openApp, openApps, windows } = useMacWindows();
  const [hoverX, setHoverX] = useState<number | null>(null);

  const minimizedApps = new Set(
    windows.filter((w) => w.minimized).map((w) => w.appId),
  );

  return (
    <div
      className="pointer-events-none absolute bottom-3 left-1/2 z-[600] -translate-x-1/2"
      onMouseLeave={() => setHoverX(null)}
    >
      <motion.div
        layout
        className="glass-panel pointer-events-auto flex items-end gap-1.5 rounded-dock border border-white/15 px-3 pb-2 pt-2 shadow-dock"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setHoverX(e.clientX - rect.left);
        }}
      >
        {allAppIds.map((appId) => {
          let scale = 1;
          if (hoverX !== null) {
            const index = allAppIds.indexOf(appId);
            const itemCenter = index * (DOCK_ITEM + 6) + DOCK_ITEM / 2 + 12;
            scale = scaleForDistance(Math.abs(hoverX - itemCenter));
          }
          const isOpen = openApps.has(appId);
          const hasDot = isOpen && !minimizedApps.has(appId as AppId);

          return (
            <motion.div
              key={appId}
              animate={{ scale, y: -(scale - 1) * 18 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              className="relative flex flex-col items-center"
            >
              <AppIcon appId={appId} size="md" onClick={() => openApp(appId)} />
              {hasDot && (
                <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-white/70" aria-hidden />
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
