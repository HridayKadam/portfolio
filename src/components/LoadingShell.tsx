"use client";

import { Wallpaper } from "@/components/Wallpaper";

export function LoadingShell() {
  return (
    <div className="relative h-[100dvh] w-full overflow-hidden">
      <Wallpaper />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="glass-panel rounded-2xl px-6 py-4 text-sm text-white/70">
          Starting HridayOS…
        </div>
      </div>
    </div>
  );
}
