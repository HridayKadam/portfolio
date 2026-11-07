"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { AppId } from "@/config/placeholders";
import { bringToFront, createWindow } from "@/experiences/macos/windowStore";
import type { MacWindowState } from "@/experiences/macos/types";

type WindowContextValue = {
  windows: MacWindowState[];
  openApps: Set<AppId>;
  openApp: (appId: AppId) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
  updateWindowPosition: (id: string, x: number, y: number) => void;
};

const WindowContext = createContext<WindowContextValue | null>(null);

export function MacWindowProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<MacWindowState[]>([]);

  const openApp = useCallback((appId: AppId) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.appId === appId && !w.minimized);
      if (existing) {
        return bringToFront(prev, existing.id).map((w) =>
          w.id === existing.id ? { ...w, minimized: false } : w,
        );
      }
      const minimized = prev.find((w) => w.appId === appId && w.minimized);
      if (minimized) {
        return bringToFront(prev, minimized.id).map((w) =>
          w.id === minimized.id ? { ...w, minimized: false } : w,
        );
      }
      return [...prev, createWindow(appId, prev.length)];
    });
  }, []);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  }, []);

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => bringToFront(prev, id));
  }, []);

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
  }, []);

  const toggleMaximize = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, maximized: !w.maximized } : w)),
    );
  }, []);

  const updateWindowPosition = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, x, y } : w)));
  }, []);

  const openApps = useMemo(() => new Set(windows.map((w) => w.appId)), [windows]);

  const value = useMemo(
    () => ({
      windows,
      openApps,
      openApp,
      closeWindow,
      focusWindow,
      minimizeWindow,
      toggleMaximize,
      updateWindowPosition,
    }),
    [
      windows,
      openApps,
      openApp,
      closeWindow,
      focusWindow,
      minimizeWindow,
      toggleMaximize,
      updateWindowPosition,
    ],
  );

  return <WindowContext.Provider value={value}>{children}</WindowContext.Provider>;
}

export function useMacWindows() {
  const ctx = useContext(WindowContext);
  if (!ctx) throw new Error("useMacWindows must be used within MacWindowProvider");
  return ctx;
}
