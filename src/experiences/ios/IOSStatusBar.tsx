"use client";

import { useEffect, useState } from "react";

type Props = {
  light?: boolean;
};

export function IOSStatusBar({ light = true }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString(undefined, {
          hour: "numeric",
          minute: "2-digit",
          hour12: false,
        }).replace(/^24:/, "00:"),
      );
    tick();
    const id = setInterval(tick, 10_000);
    return () => clearInterval(id);
  }, []);

  const color = light ? "text-white" : "text-black";

  return (
    <div
      className={`pointer-events-none absolute left-0 right-0 top-0 z-[95] flex h-[54px] items-end justify-between px-7 pb-1 text-[15px] font-semibold tracking-tight ${color}`}
      style={{ paddingTop: "max(12px, env(safe-area-inset-top))" }}
    >
      <span className="w-[54px] tabular-nums">{time || "9:41"}</span>
      <div className="flex items-center gap-[5px]" aria-hidden>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="currentColor" className="opacity-95">
          <rect x="0" y="3" width="3" height="9" rx="1" />
          <rect x="5" y="2" width="3" height="10" rx="1" />
          <rect x="10" y="1" width="3" height="11" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" className="opacity-95">
          <path d="M8 2.4C5.8 2.4 3.8 3.3 2.2 4.8L0.8 3.4C2.8 1.4 5.3 0.2 8 0.2s5.2 1.2 7.2 3.2l-1.4 1.4C10.2 3.3 8.2 2.4 8 2.4zm0 3.6c-1.4 0-2.6.6-3.6 1.4L2.8 5.8c1.4-1.2 3.2-2 5.2-2s3.8.8 5.2 2l-1.6 1.6c-1-.8-2.2-1.4-3.6-1.4zm0 3.6c-.8 0-1.4.3-2 .9L8 10.6l2-1.1c-.6-.6-1.2-.9-2-.9z" />
        </svg>
        <div className="flex h-[11px] w-[25px] items-center rounded-[3px] border border-current px-[2px] opacity-95">
          <div className="h-[7px] w-[18px] rounded-[1px] bg-current" />
        </div>
      </div>
    </div>
  );
}
