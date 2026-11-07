"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { AppId } from "@/config/placeholders";
import { allAppIds } from "@/config/placeholders";
import { AppContent } from "@/apps/AppContent";
import { AppIcon } from "@/components/AppIcon";
import { Wallpaper } from "@/components/Wallpaper";
import { IPadDock } from "@/experiences/ipados/IPadDock";
import { IOSStatusBar } from "@/experiences/ios/IOSStatusBar";

type SplitState = {
  primary: AppId | null;
  secondary: AppId | null;
  floating: AppId | null;
};

export function IPadOSExperience() {
  const [split, setSplit] = useState<SplitState>({
    primary: null,
    secondary: null,
    floating: null,
  });
  const [showHome, setShowHome] = useState(true);

  const openApp = useCallback((appId: AppId, mode: "full" | "split" | "float" = "full") => {
    setShowHome(false);
    if (mode === "float") {
      setSplit((s) => ({ ...s, floating: appId }));
      return;
    }
    if (mode === "split") {
      setSplit((s) =>
        s.primary
          ? { ...s, secondary: appId }
          : { primary: appId, secondary: null, floating: s.floating },
      );
      return;
    }
    setSplit({ primary: appId, secondary: null, floating: null });
  }, []);

  const closePanels = () => {
    setSplit({ primary: null, secondary: null, floating: null });
    setShowHome(true);
  };

  const [landscape, setLandscape] = useState(true);
  useEffect(() => {
    const update = () => setLandscape(window.innerWidth > window.innerHeight);
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <Wallpaper />
      <IOSStatusBar light />

      <AnimatePresence>
        {showHome && (
          <motion.div
            key="home"
            className="absolute inset-0 z-10 flex flex-col pt-14"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex-1 overflow-auto px-10 pb-32">
              <div
                className={`grid gap-6 ${
                  landscape ? "grid-cols-6" : "grid-cols-4"
                } max-w-4xl`}
              >
                {allAppIds.map((appId) => (
                  <AppIcon
                    key={appId}
                    appId={appId}
                    size="xl"
                    showLabel
                    labelSize="ipad"
                    onClick={() => openApp(appId, "full")}
                    onContextMenu={(e: React.MouseEvent) => {
                      e.preventDefault();
                      openApp(appId, "split");
                    }}
                    className="w-20"
                  />
                ))}
              </div>
              <p className="mt-8 text-center text-xs text-white/40">
                Long-press or right-click an icon to open in split view (demo).
              </p>
            </div>
            <IPadDock onLaunch={(id) => openApp(id, "full")} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showHome && (
        <div className="absolute inset-0 z-20 flex flex-col pt-12">
          <header className="flex items-center gap-3 border-b border-white/10 px-4 py-2">
            <button
              type="button"
              onClick={closePanels}
              className="rounded-lg bg-white/10 px-3 py-1.5 text-sm text-white/80"
            >
              Home
            </button>
            <div className="flex gap-2">
              <button
                type="button"
                className="text-xs text-white/50 hover:text-white/80"
                onClick={() => openApp("gallery", "split")}
              >
                + Split
              </button>
              <button
                type="button"
                className="text-xs text-white/50 hover:text-white/80"
                onClick={() => openApp("terminal", "float")}
              >
                Float window
              </button>
            </div>
          </header>

          <div
            className={`flex flex-1 gap-px overflow-hidden bg-white/10 p-2 ${
              split.secondary ? "flex-row" : ""
            }`}
          >
            {split.primary && (
              <IPadAppPanel
                appId={split.primary}
                className={split.secondary ? "w-1/2" : "w-full"}
                showSidebar={landscape}
              />
            )}
            {split.secondary && (
              <IPadAppPanel appId={split.secondary} className="w-1/2" showSidebar={false} />
            )}
          </div>

          <AnimatePresence>
            {split.floating && (
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20 }}
                className="glass-panel-dark absolute bottom-24 right-8 z-40 h-[320px] w-[min(420px,90vw)] overflow-hidden rounded-2xl shadow-window"
              >
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
                  <span className="text-sm font-medium capitalize text-white/85">
                    {split.floating}
                  </span>
                  <button
                    type="button"
                    className="text-white/50"
                    onClick={() => setSplit((s) => ({ ...s, floating: null }))}
                    aria-label="Close floating window"
                  >
                    ✕
                  </button>
                </div>
                <div className="scrollbar-thin h-[calc(100%-40px)] overflow-auto p-3">
                  <AppContent appId={split.floating} variant="ipad" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

function IPadAppPanel({
  appId,
  className,
  showSidebar,
}: {
  appId: AppId;
  className: string;
  showSidebar: boolean;
}) {
  return (
    <div
      className={`glass-panel-dark flex min-h-0 overflow-hidden rounded-xl ${className}`}
    >
      {showSidebar && (
        <aside className="hidden w-44 shrink-0 border-r border-white/10 p-3 text-sm text-white/60 md:block">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-white/35">
            Sidebar
          </p>
          <ul className="space-y-1">
            {["Overview", "Section 01", "Section 02"].map((item) => (
              <li key={item} className="rounded-lg px-2 py-1.5 hover:bg-white/10">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      )}
      <div className="scrollbar-thin min-h-0 flex-1 overflow-auto p-4">
        <AppContent appId={appId} variant="ipad" />
      </div>
    </div>
  );
}
