"use client";

import { useRef, type PointerEvent } from "react";
import { motion } from "framer-motion";
import { AppContent } from "@/apps/AppContent";
import { TrafficLights } from "@/components/TrafficLights";
import { appCatalog } from "@/config/placeholders";
import { windowTitle } from "@/experiences/macos/windowStore";
import { useMacWindows } from "@/experiences/macos/WindowContext";
import type { MacWindowState } from "@/experiences/macos/types";

type Props = { window: MacWindowState };

export function MacWindow({ window: win }: Props) {
  const { closeWindow, focusWindow, minimizeWindow, toggleMaximize, updateWindowPosition } =
    useMacWindows();
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(
    null,
  );

  const onTitlePointerDown = (e: PointerEvent) => {
    if (win.maximized) return;
    focusWindow(win.id);
    dragRef.current = {
      startX: e.clientX,
      startY: e.clientY,
      origX: win.x,
      origY: win.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onTitlePointerMove = (e: PointerEvent) => {
    if (!dragRef.current || win.maximized) return;
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;
    updateWindowPosition(win.id, dragRef.current.origX + dx, dragRef.current.origY + dy);
  };

  const onTitlePointerUp = (e: PointerEvent) => {
    dragRef.current = null;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
  };

  const maximizedStyle = win.maximized
    ? { left: 0, top: 28, width: "100%", height: "calc(100% - 28px - 88px)" }
    : { left: win.x, top: win.y, width: win.width, height: win.height };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 8 }}
      transition={{ type: "spring", stiffness: 420, damping: 32 }}
      className="absolute flex flex-col overflow-hidden rounded-window border border-white/10 bg-midnight-800/85 shadow-window backdrop-blur-2xl"
      style={{
        ...maximizedStyle,
        zIndex: win.zIndex,
        position: "absolute",
      }}
      onMouseDown={() => focusWindow(win.id)}
    >
      <div
        className="flex cursor-default items-center gap-3 border-b border-white/10 bg-white/[0.06] px-3 py-2"
        onPointerDown={onTitlePointerDown}
        onPointerMove={onTitlePointerMove}
        onPointerUp={onTitlePointerUp}
        onPointerCancel={onTitlePointerUp}
      >
        <TrafficLights
          onClose={() => closeWindow(win.id)}
          onMinimize={() => minimizeWindow(win.id)}
          onMaximize={() => toggleMaximize(win.id)}
        />
        <span className="flex-1 text-center text-xs font-medium text-white/75">
          {windowTitle(win.appId)}
        </span>
        <span
          className="h-3 w-3 rounded-sm opacity-60"
          style={{ background: appCatalog[win.appId].color }}
          aria-hidden
        />
      </div>
      <div className="scrollbar-thin flex-1 overflow-hidden p-4 text-white">
        <AppContent appId={win.appId} />
      </div>
    </motion.div>
  );
}
