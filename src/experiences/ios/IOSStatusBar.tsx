"use client";

import { useEffect, useState } from "react";

type Props = {
  variant?: "overlay" | "solid";
};

export function IOSStatusBar({ variant = "overlay" }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(new Date().toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" }));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className={`absolute left-0 right-0 top-0 z-[80] flex h-12 items-end justify-between px-6 pb-1 text-[13px] font-semibold ${
        variant === "overlay" ? "text-white" : "text-white/90"
      }`}
    >
      <span>{time}</span>
      <span className="flex items-center gap-1 text-xs" aria-hidden>
        <span>▮▮▮</span>
        <span>Wi‑Fi</span>
        <span>▮</span>
      </span>
    </div>
  );
}
