/**
 * Centralized placeholder content for HridayOS.
 * Replace values here in a later phase — do not edit individual app components.
 */

export const siteMeta = {
  systemName: "HridayOS",
  version: "0.1.0",
  tagline: "Device-adaptive portfolio shell",
};

export const aboutPlaceholder = {
  title: "Introduction",
  paragraphs: [
    "This is placeholder copy for an about section. Describe background, focus areas, and intent here later.",
    "The layout demonstrates typography, spacing, and glass materials without personal biography.",
  ],
  highlights: ["Focus area 01", "Focus area 02", "Focus area 03"],
};

export const projectsPlaceholder = {
  items: [
    {
      id: "project-01",
      title: "Project 01",
      subtitle: "Category placeholder",
      description: "Short project summary placeholder. Replace with real case study details later.",
      tags: ["Tag A", "Tag B"],
    },
    {
      id: "project-02",
      title: "Project 02",
      subtitle: "Category placeholder",
      description: "Another neutral project card for grid and list layouts across devices.",
      tags: ["Tag C", "Tag D"],
    },
    {
      id: "project-03",
      title: "Project 03",
      subtitle: "Category placeholder",
      description: "Third placeholder project for carousel, spotlight, and split-view demos.",
      tags: ["Tag E"],
    },
  ],
};

export const experiencePlaceholder = {
  items: [
    {
      id: "position-01",
      role: "Position 01",
      organization: "Organization placeholder",
      period: "20XX — Present",
      summary: "Responsibility and outcome placeholders only.",
    },
    {
      id: "position-02",
      role: "Position 02",
      organization: "Organization placeholder",
      period: "20XX — 20XX",
      summary: "Neutral timeline entry for résumé-style layouts.",
    },
    {
      id: "position-03",
      role: "Position 03",
      organization: "Organization placeholder",
      period: "20XX — 20XX",
      summary: "Additional row for scroll and sidebar patterns.",
    },
  ],
};

export const notesPlaceholder = {
  items: [
    {
      id: "note-01",
      title: "Note 01",
      body: "Placeholder note body. Use for thoughts, drafts, or short entries later.",
      updated: "Updated placeholder",
    },
    {
      id: "note-02",
      title: "Note 02",
      body: "Second note with neutral copy to test list selection and editing chrome.",
      updated: "Updated placeholder",
    },
    {
      id: "note-03",
      title: "Note 03",
      body: "Third note for three-column and mobile stack layouts.",
      updated: "Updated placeholder",
    },
  ],
};

export const galleryPlaceholder = {
  items: Array.from({ length: 8 }, (_, i) => ({
    id: `image-${String(i + 1).padStart(2, "0")}`,
    label: `Image ${String(i + 1).padStart(2, "0")}`,
    aspect: i % 3 === 0 ? "landscape" : "square",
  })),
};

export const experimentsPlaceholder = {
  items: [
    {
      id: "experiment-01",
      title: "Experiment 01",
      status: "Prototype",
      description: "Sandbox entry for prototypes and technical explorations.",
    },
    {
      id: "experiment-02",
      title: "Experiment 02",
      status: "Concept",
      description: "Placeholder for an idea or demo without fabricated results.",
    },
  ],
};

export const contactPlaceholder = {
  headline: "Contact",
  message: "Social and contact slots are placeholders until real links are provided.",
  links: [
    { id: "link-01", label: "Link placeholder 01", href: "#" },
    { id: "link-02", label: "Link placeholder 02", href: "#" },
    { id: "link-03", label: "Link placeholder 03", href: "#" },
  ],
};

export const finderPlaceholder = {
  favorites: ["About", "Projects", "Experience", "Notes"],
  recent: ["Project 01", "Note 02", "Experiment 01"],
};

export const terminalPlaceholder = {
  lines: [
    "HridayOS shell — placeholder terminal",
    "Type 'help' for available commands (demo).",
    "> help",
    "  clear  — clear screen",
    "  apps   — list applications",
    "  echo   — print text",
    "> apps",
    "  finder about projects experience notes gallery experiments contact terminal",
    "> echo Hello, visitor",
    "Hello, visitor",
  ],
};

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
  { id: AppId; name: string; shortName: string; color: string; symbol: string }
> = {
  finder: { id: "finder", name: "Finder", shortName: "Finder", color: "#3b9cff", symbol: "◆" },
  about: { id: "about", name: "About", shortName: "About", color: "#6e7cff", symbol: "◎" },
  projects: { id: "projects", name: "Projects", shortName: "Projects", color: "#2f7bff", symbol: "▣" },
  experience: { id: "experience", name: "Experience", shortName: "Experience", color: "#4d9dff", symbol: "▤" },
  notes: { id: "notes", name: "Notes", shortName: "Notes", color: "#f5d565", symbol: "▥" },
  gallery: { id: "gallery", name: "Gallery", shortName: "Gallery", color: "#ff8ec7", symbol: "▦" },
  experiments: { id: "experiments", name: "Experiments", shortName: "Lab", color: "#7cf0c6", symbol: "◇" },
  contact: { id: "contact", name: "Contact", shortName: "Contact", color: "#5b9cff", symbol: "✉" },
  terminal: { id: "terminal", name: "Terminal", shortName: "Term", color: "#1a1a1a", symbol: ">_" },
};

export const allAppIds = Object.keys(appCatalog) as AppId[];
