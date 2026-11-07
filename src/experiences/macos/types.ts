import type { AppId } from "@/config/placeholders";

export type MacWindowState = {
  id: string;
  appId: AppId;
  minimized: boolean;
  maximized: boolean;
  zIndex: number;
  x: number;
  y: number;
  width: number;
  height: number;
};
