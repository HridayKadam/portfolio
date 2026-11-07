export type DeviceExperience = "macos" | "ios" | "ipados";

export type DeviceSignals = {
  width: number;
  height: number;
  ua: string;
  touch: boolean;
  orientation: "portrait" | "landscape";
};
