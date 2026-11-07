import { appCatalog, type AppId } from "@/config/placeholders";
import type { MacWindowState } from "@/experiences/macos/types";

let zCounter = 10;

export function createWindow(appId: AppId, index: number): MacWindowState {
  zCounter += 1;
  return {
    id: `${appId}-${Date.now()}`,
    appId,
    minimized: false,
    maximized: false,
    zIndex: zCounter,
    x: 80 + (index % 4) * 40,
    y: 48 + (index % 3) * 36,
    width: appId === "terminal" ? 620 : 720,
    height: appId === "gallery" ? 480 : 440,
  };
}

export function windowTitle(appId: AppId): string {
  return appCatalog[appId].name;
}

export function bringToFront(windows: MacWindowState[], id: string): MacWindowState[] {
  zCounter += 1;
  return windows.map((w) => (w.id === id ? { ...w, zIndex: zCounter } : w));
}
