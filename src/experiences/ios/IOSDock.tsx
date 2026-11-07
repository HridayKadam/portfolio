"use client";

import type { AppId } from "@/config/placeholders";
import { iosDockAppIds } from "@/config/placeholders";
import { AppIcon } from "@/components/AppIcon";

type Props = {
  onLaunch: (appId: AppId) => void;
};

export function IOSDock({ onLaunch }: Props) {
  return (
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 px-3"
      style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
    >
      <div
        className="pointer-events-auto mx-auto flex max-w-[340px] items-center justify-around rounded-[32px] border border-white/20 px-3 py-2"
        style={{
          background: "rgba(255,255,255,0.22)",
          backdropFilter: "blur(40px) saturate(180%)",
          WebkitBackdropFilter: "blur(40px) saturate(180%)",
        }}
      >
        {iosDockAppIds.map((appId) => (
          <AppIcon key={appId} appId={appId} size="md" platform="ios" onClick={() => onLaunch(appId)} />
        ))}
      </div>
    </div>
  );
}
