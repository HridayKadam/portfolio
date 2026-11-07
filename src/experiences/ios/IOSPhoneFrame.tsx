"use client";

import type { ReactNode } from "react";

export function IOSPhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-[#0a0a0a] p-3 sm:p-6">
      <div
        className="relative h-[min(844px,100dvh)] w-[min(390px,100vw)] overflow-hidden rounded-[44px] border-[3px] border-[#3a3a3c] bg-black shadow-[0_0_0_2px_#1c1c1e,0_40px_80px_rgba(0,0,0,0.6)]"
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <div className="pointer-events-none absolute left-1/2 top-2 z-[100] h-[26px] w-[100px] -translate-x-1/2 rounded-full bg-black" />
        <div className="relative h-full w-full overflow-hidden">{children}</div>
      </div>
    </div>
  );
}
