"use client";

import type { AppId } from "@/config/placeholders";
import { AppIcon } from "@/components/AppIcon";

const dockApps: AppId[] = [
  "finder",
  "about",
  "projects",
  "experience",
  "notes",
  "contact",
];

type Props = {
  onLaunch: (appId: AppId) => void;
};

export function IPadDock({ onLaunch }: Props) {
  return (
    <div className="pointer-events-none absolute bottom-5 left-1/2 z-30 -translate-x-1/2">
      <div className="glass-panel pointer-events-auto flex items-end gap-2 rounded-2xl border border-white/15 px-4 py-2 shadow-dock">
        {dockApps.map((appId) => (
          <AppIcon key={appId} appId={appId} size="md" onClick={() => onLaunch(appId)} />
        ))}
      </div>
    </div>
  );
}
