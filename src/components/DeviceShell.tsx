"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { LoadingShell } from "@/components/LoadingShell";
import { useDeviceExperience } from "@/hooks/useDeviceExperience";
import { MacOSExperience } from "@/experiences/macos/MacOSExperience";
import { IOSExperience } from "@/experiences/ios/iOSExperience";
import { IPadOSExperience } from "@/experiences/ipados/iPadOSExperience";
import type { DeviceExperience } from "@/types/device";

function DeviceExperienceRouter() {
  const detected = useDeviceExperience();
  const params = useSearchParams();
  const override = params.get("device") as DeviceExperience | null;

  const experience = useMemo(() => {
    if (override === "macos" || override === "ios" || override === "ipados") {
      return override;
    }
    return detected;
  }, [detected, override]);

  if (!experience) {
    return <LoadingShell />;
  }

  if (experience === "ios") return <IOSExperience />;
  if (experience === "ipados") return <IPadOSExperience />;
  return <MacOSExperience />;
}

export function DeviceShell() {
  return (
    <Suspense fallback={<LoadingShell />}>
      <DeviceExperienceRouter />
    </Suspense>
  );
}
