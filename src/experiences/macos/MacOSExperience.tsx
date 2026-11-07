"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Wallpaper } from "@/components/Wallpaper";
import { DesktopIcons } from "@/experiences/macos/DesktopIcons";
import { Dock } from "@/experiences/macos/Dock";
import { MacWindow } from "@/experiences/macos/MacWindow";
import { MenuBar } from "@/experiences/macos/MenuBar";
import { Spotlight } from "@/experiences/macos/Spotlight";
import { MacWindowProvider, useMacWindows } from "@/experiences/macos/WindowContext";
import { appCatalog } from "@/config/placeholders";

function MacOSDesktop() {
  const [spotlightOpen, setSpotlightOpen] = useState(false);
  const { windows, openApp } = useMacWindows();

  const toggleSpotlight = useCallback(() => setSpotlightOpen((v) => !v), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSpotlightOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const topWindow = [...windows]
    .filter((w) => !w.minimized)
    .sort((a, b) => b.zIndex - a.zIndex)[0];
  const activeApp = topWindow ? appCatalog[topWindow.appId].name : "Finder";

  const booted = useRef(false);
  useEffect(() => {
    if (booted.current) return;
    booted.current = true;
    const t = setTimeout(() => openApp("finder"), 400);
    return () => clearTimeout(t);
  }, [openApp]);

  return (
    <div className="relative h-[100dvh] w-full select-none overflow-hidden">
      <Wallpaper />
      <MenuBar onSpotlight={toggleSpotlight} activeApp={activeApp} />
      <DesktopIcons />
      <div className="absolute inset-0 pt-7 pb-24">
        <AnimatePresence>
          {windows
            .filter((w) => !w.minimized)
            .map((w) => (
              <MacWindow key={w.id} window={w} />
            ))}
        </AnimatePresence>
      </div>
      <Dock />
      <Spotlight open={spotlightOpen} onClose={() => setSpotlightOpen(false)} />
    </div>
  );
}

export function MacOSExperience() {
  return (
    <MacWindowProvider>
      <MacOSDesktop />
    </MacWindowProvider>
  );
}
