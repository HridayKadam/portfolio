"use client";

import { AppIcon } from "@/components/AppIcon";
import { allAppIds } from "@/config/placeholders";
import { useMacWindows } from "@/experiences/macos/WindowContext";

export function DesktopIcons() {
  const { openApp } = useMacWindows();

  return (
    <div className="absolute right-6 top-10 z-[50] grid max-h-[calc(100%-120px)] grid-flow-col grid-rows-[repeat(auto-fill,minmax(88px,1fr))] gap-4">
      {allAppIds.map((appId) => (
        <AppIcon
          key={appId}
          appId={appId}
          size="lg"
          showLabel
          labelSize="mac"
          onClick={() => openApp(appId)}
          className="w-[76px]"
        />
      ))}
    </div>
  );
}
