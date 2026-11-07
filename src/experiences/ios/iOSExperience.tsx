"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppId } from "@/config/placeholders";
import { AppContent } from "@/apps/AppContent";
import { AppIcon } from "@/components/AppIcon";
import { Wallpaper } from "@/components/Wallpaper";
import { allAppIds } from "@/config/placeholders";
import { DynamicIsland } from "@/experiences/ios/DynamicIsland";
import { IOSDock } from "@/experiences/ios/IOSDock";
import { IOSLockScreen } from "@/experiences/ios/IOSLockScreen";
import { IOSStatusBar } from "@/experiences/ios/IOSStatusBar";

export function IOSExperience() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [islandText, setIslandText] = useState("HridayOS");

  const launchApp = useCallback((appId: AppId) => {
    setActiveApp(appId);
    setIslandText(`Opening ${appId}`);
    window.setTimeout(() => setIslandText("HridayOS"), 1600);
  }, []);

  const closeApp = useCallback(() => {
    setActiveApp(null);
    setIslandText("HridayOS");
  }, []);

  useEffect(() => {
    if (unlocked) return;
    const t = setTimeout(() => setIslandText("Swipe up to unlock"), 2200);
    return () => clearTimeout(t);
  }, [unlocked]);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden bg-black">
      <Wallpaper />
      <IOSStatusBar variant="overlay" />
      <DynamicIsland subtitle={islandText} />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <IOSLockScreen key="lock" onUnlock={() => setUnlocked(true)} />
        ) : activeApp ? (
          <motion.div
            key={activeApp}
            className="absolute inset-0 z-30 flex flex-col bg-midnight-900/95 pt-12"
            initial={{ opacity: 0, scale: 1.05, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: "spring", stiffness: 380, damping: 34 }}
          >
            <header className="flex items-center border-b border-white/10 px-4 pb-3">
              <button
                type="button"
                onClick={closeApp}
                className="text-sm font-medium text-electric-glow"
              >
                ← Home
              </button>
              <h1 className="flex-1 text-center text-sm font-semibold capitalize text-white/90">
                {activeApp}
              </h1>
              <span className="w-12" />
            </header>
            <div
              className="scrollbar-thin flex-1 overflow-auto p-4"
              onTouchStart={(e) => {
                const touch = e.touches[0];
                (e.currentTarget as HTMLElement).dataset.touchStartX = String(touch.clientX);
              }}
              onTouchEnd={(e) => {
                const startX = Number(
                  (e.currentTarget as HTMLElement).dataset.touchStartX ?? 0,
                );
                const endX = e.changedTouches[0]?.clientX ?? 0;
                if (endX - startX > 80 && startX < 28) closeApp();
              }}
            >
              <AppContent appId={activeApp} />
            </div>
            <div className="h-6 w-32 self-center rounded-full bg-white/30" aria-hidden />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            className="absolute inset-0 z-20 flex flex-col pt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="flex-1 overflow-auto px-5 pb-28 pt-4">
              <div className="grid grid-cols-4 gap-x-3 gap-y-6">
                {allAppIds.map((appId) => (
                  <AppIcon
                    key={appId}
                    appId={appId}
                    size="xl"
                    showLabel
                    labelSize="ios"
                    onClick={() => launchApp(appId)}
                  />
                ))}
              </div>
            </div>
            <IOSDock onLaunch={launchApp} />
            <button
              type="button"
              onClick={() => setUnlocked(false)}
              className="absolute bottom-1 left-1/2 z-40 -translate-x-1/2 rounded-full px-3 py-1 text-[10px] text-white/40"
            >
              Lock (demo)
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
