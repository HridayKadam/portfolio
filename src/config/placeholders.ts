/**
 * App registry + re-exports. Portfolio copy lives in content.ts.
 */

export * from "@/config/content";

export type AppId =
  | "finder"
  | "about"
  | "projects"
  | "experience"
  | "notes"
  | "gallery"
  | "experiments"
  | "contact"
  | "terminal";

export const appCatalog: Record<
  AppId,
  {
    id: AppId;
    name: string;
    shortName: string;
    color: string;
    colorEnd: string;
    symbol: string;
    iosLabel?: string;
  }
> = {
  about: {
    id: "about",
    name: "About",
    shortName: "About",
    iosLabel: "About",
    color: "#8E8E93",
    colorEnd: "#636366",
    symbol: "HK",
  },
  projects: {
    id: "projects",
    name: "Projects",
    shortName: "Projects",
    iosLabel: "Projects",
    color: "#007AFF",
    colorEnd: "#0055D4",
    symbol: "◫",
  },
  experiments: {
    id: "experiments",
    name: "Experiments",
    shortName: "Lab",
    iosLabel: "Experiments",
    color: "#AF52DE",
    colorEnd: "#8944B4",
    symbol: "⚗",
  },
  notes: {
    id: "notes",
    name: "Notes",
    shortName: "Notes",
    iosLabel: "Notes",
    color: "#FFCC00",
    colorEnd: "#E6A800",
    symbol: "✎",
  },
  experience: {
    id: "experience",
    name: "Experience",
    shortName: "Work",
    iosLabel: "Experience",
    color: "#34C759",
    colorEnd: "#248A3D",
    symbol: "▤",
  },
  contact: {
    id: "contact",
    name: "Contact",
    shortName: "Contact",
    iosLabel: "Contact",
    color: "#32ADE6",
    colorEnd: "#1C96C6",
    symbol: "✉",
  },
  finder: {
    id: "finder",
    name: "Files",
    shortName: "Files",
    iosLabel: "Files",
    color: "#64D2FF",
    colorEnd: "#0A84FF",
    symbol: "📁",
  },
  gallery: {
    id: "gallery",
    name: "Photos",
    shortName: "Photos",
    iosLabel: "Photos",
    color: "#FF6482",
    colorEnd: "#D43F5C",
    symbol: "❀",
  },
  terminal: {
    id: "terminal",
    name: "Terminal",
    shortName: "Terminal",
    iosLabel: "Terminal",
    color: "#1C1C1E",
    colorEnd: "#000000",
    symbol: ">_",
  },
};

/** Primary home-screen apps (iOS). */
export const iosHomeAppIds: AppId[] = [
  "about",
  "projects",
  "experiments",
  "notes",
  "experience",
  "contact",
  "gallery",
  "finder",
];

export const iosDockAppIds: AppId[] = ["about", "projects", "notes", "contact"];

export const allAppIds = Object.keys(appCatalog) as AppId[];
