"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppId } from "@/config/placeholders";
import { iosHomeAppIds, appCatalog } from "@/config/placeholders";
import { AppContent } from "@/apps/AppContent";
import { AppIcon } from "@/components/AppIcon";
import { DynamicIsland } from "@/experiences/ios/DynamicIsland";
import { IOSDock } from "@/experiences/ios/IOSDock";
import { IOSHomeBar } from "@/experiences/ios/IOSHomeBar";
import { IOSLockScreen } from "@/experiences/ios/IOSLockScreen";
import { IOSPhoneFrame } from "@/experiences/ios/IOSPhoneFrame";
import { IOSStatusBar } from "@/experiences/ios/IOSStatusBar";
import { IOSWallpaper } from "@/experiences/ios/IOSWallpaper";
import { readDeviceSignals } from "@/lib/detectDevice";

export function IOSExperience() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeApp, setActiveApp] = useState<AppId | null>(null);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const [useFrame, setUseFrame] = useState(false);

  useEffect(() => {
    const s = readDeviceSignals();
    setUseFrame(!/iPhone|iPod|Android.*Mobile/i.test(s.ua) && s.width > 480);
  }, []);

  const launchApp = useCallback((appId: AppId) => {
    setIslandExpanded(true);
    window.setTimeout(() => {
      setActiveApp(appId);
      setIslandExpanded(false);
    }, 380);
  }, []);

  const goHome = useCallback(() => {
    setActiveApp(null);
    setIslandExpanded(false);
  }, []);

  const shell = (
    <div className="relative h-full w-full overflow-hidden bg-black select-none-touch">
      <IOSWallpaper dimmed={unlocked && !activeApp} />
      {!activeApp && <IOSStatusBar light />}
      <DynamicIsland
        subtitle={activeApp ? appCatalog[activeApp].name : "Hriday Kadam"}
        expanded={islandExpanded || !!activeApp}
      />

      <AnimatePresence mode="wait">
        {!unlocked ? (
          <IOSLockScreen key="lock" onUnlock={() => setUnlocked(true)} />
        ) : activeApp ? (
          <motion.div
            key={activeApp}
            className="absolute inset-0 z-30 flex flex-col bg-white"
            initial={{ opacity: 0, scale: 0.88, borderRadius: 32 }}
            animate={{ opacity: 1, scale: 1, borderRadius: 0 }}
            exit={{ opacity: 0, scale: 0.92, borderRadius: 28 }}
            transition={{ type: "spring", stiffness: 420, damping: 36 }}
            style={{ paddingTop: "env(safe-area-inset-top)" }}
          >
            <IOSStatusBar light={false} />
            <div className="flex-1 overflow-hidden pt-10">
              <AppContent appId={activeApp} variant="ios" />
            </div>
            <IOSHomeBar onHome={goHome} />
          </motion.div>
        ) : (
          <motion.div
            key="home"
            className="absolute inset-0 z-20 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="flex-1 overflow-auto px-[22px] pt-[72px] pb-32"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              <div className="grid grid-cols-4 gap-x-2 gap-y-5">
                {iosHomeAppIds.map((appId) => (
                  <AppIcon
                    key={appId}
                    appId={appId}
                    size="ios"
                    showLabel
                    labelSize="ios"
                    platform="ios"
                    onClick={() => launchApp(appId)}
                  />
                ))}
              </div>
            </div>
            <div className="pointer-events-none absolute bottom-[100px] left-0 right-0 flex justify-center">
              <div className="pointer-events-auto flex items-center gap-2 rounded-full bg-white/18 px-4 py-2 backdrop-blur-xl">
                <span className="text-white/80">⌕</span>
                <span className="text-[17px] text-white/70">Search</span>
              </div>
            </div>
            <IOSDock onLaunch={launchApp} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  if (useFrame) {
    return <IOSPhoneFrame>{shell}</IOSPhoneFrame>;
  }

  return <div className="h-[100dvh] w-full">{shell}</div>;
}
