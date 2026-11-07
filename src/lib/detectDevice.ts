import type { DeviceExperience, DeviceSignals } from "@/types/device";

function isIPhoneUA(ua: string): boolean {
  return /iPhone|iPod/i.test(ua) || (/\bAndroid\b/i.test(ua) && /Mobile/i.test(ua));
}

function isIPadUA(ua: string): boolean {
  if (/iPad/i.test(ua)) return true;
  // iPadOS desktop UA
  if (/\bMacintosh\b/i.test(ua) && typeof navigator !== "undefined" && navigator.maxTouchPoints > 1) {
    return true;
  }
  return /Android/i.test(ua) && !/Mobile/i.test(ua);
}

export function detectDeviceExperience(signals: DeviceSignals): DeviceExperience {
  const { width, ua, touch } = signals;

  if (isIPhoneUA(ua) || (touch && width < 768)) {
    return "ios";
  }

  if (isIPadUA(ua) || (touch && width >= 768 && width < 1200)) {
    return "ipados";
  }

  if (width < 900 && touch) {
    return "ipados";
  }

  return "macos";
}

export function readDeviceSignals(): DeviceSignals {
  if (typeof window === "undefined") {
    return { width: 1280, height: 800, ua: "", touch: false, orientation: "landscape" };
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight,
    ua: navigator.userAgent,
    touch: "ontouchstart" in window || navigator.maxTouchPoints > 0,
    orientation: window.innerHeight >= window.innerWidth ? "portrait" : "landscape",
  };
}
