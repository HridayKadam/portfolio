"use client";

import { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { DeviceShell } from "@/components/DeviceShell";
import { LoadingShell } from "@/components/LoadingShell";
import { PlainPortfolio } from "@/components/plain/PlainPortfolio";

function ExperienceGateInner() {
  const params = useSearchParams();
  const device = params.get("device");

  const showHridayOs = useMemo(
    () => device === "macos" || device === "ios" || device === "ipados",
    [device],
  );

  if (showHridayOs) {
    return (
      <div className="hridayos-shell">
        <DeviceShell />
      </div>
    );
  }

  return <PlainPortfolio />;
}

export function ExperienceGate() {
  return (
    <Suspense fallback={<LoadingShell />}>
      <ExperienceGateInner />
    </Suspense>
  );
}
