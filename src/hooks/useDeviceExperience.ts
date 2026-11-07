"use client";

import { useEffect, useState } from "react";
import { detectDeviceExperience, readDeviceSignals } from "@/lib/detectDevice";
import type { DeviceExperience } from "@/types/device";

export function useDeviceExperience(): DeviceExperience | null {
  const [experience, setExperience] = useState<DeviceExperience | null>(null);

  useEffect(() => {
    const update = () => {
      setExperience(detectDeviceExperience(readDeviceSignals()));
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  return experience;
}
