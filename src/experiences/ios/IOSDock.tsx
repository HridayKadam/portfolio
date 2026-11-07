"use client";

import type { AppId } from "@/config/placeholders";
import { AppIcon } from "@/components/AppIcon";

const dockApps: AppId[] = ["finder", "projects", "notes", "contact"];

type Props = {
  onLaunch: (appId: AppId) => void;
};

export function IOSDock({ onLaunch }: Props) {
  return (
    <div className="pointer-events-none absolute bottom-4 left-4 right-4 z-30">
      <div className="glass-panel pointer-events-auto mx-auto flex max-w-md items-center justify-around rounded-[26px] border border-white/20 px-4 py-2 shadow-dock">
        {dockApps.map((appId) => (
          <AppIcon key={appId} appId={appId} size="md" onClick={() => onLaunch(appId)} />
        ))}
      </div>
    </div>
  );
}
