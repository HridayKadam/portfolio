"use client";

import { useEffect, useState } from "react";
import { siteMeta } from "@/config/placeholders";

type Props = {
  onSpotlight: () => void;
  activeApp?: string;
};

export function MenuBar({ onSpotlight, activeApp = "Finder" }: Props) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleString(undefined, {
          weekday: "short",
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="absolute left-0 right-0 top-0 z-[500] flex h-7 items-center justify-between border-b border-white/10 bg-black/25 px-3 text-[12px] text-white/85 backdrop-blur-xl">
      <div className="flex items-center gap-4">
        <span className="font-semibold">&#63743;</span>
        <span className="font-semibold">{activeApp}</span>
        <nav className="hidden items-center gap-3 text-white/60 sm:flex" aria-label="Menu">
          {["File", "Edit", "View", "Window", "Help"].map((item) => (
            <button key={item} type="button" className="hover:text-white/90">
              {item}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3 text-white/70">
        <button
          type="button"
          onClick={onSpotlight}
          className="rounded-md px-2 py-0.5 hover:bg-white/10"
          aria-label="Open Spotlight"
        >
          &#8984;K
        </button>
        <span className="hidden sm:inline">{siteMeta.systemName}</span>
        <span aria-live="polite">{time}</span>
      </div>
    </header>
  );
}
