"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/config/content";
import { appCatalog, allAppIds, type AppId } from "@/config/placeholders";
import { useMacWindows } from "@/experiences/macos/WindowContext";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function Spotlight({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const { openApp } = useMacWindows();

  useEffect(() => {
    if (!open) setQuery("");
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) onClose();
      }
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return allAppIds.slice(0, 5).map((id) => ({ type: "app" as const, id, label: appCatalog[id].name }));
    }
    const apps = allAppIds
      .filter((id) => appCatalog[id].name.toLowerCase().includes(q))
      .map((id) => ({ type: "app" as const, id, label: appCatalog[id].name }));
    const projects = products
      .filter((p) => p.name.toLowerCase().includes(q))
      .map((p) => ({ type: "project" as const, id: p.id, label: p.name }));
    return [...apps, ...projects];
  }, [query]);

  const launch = (type: string, id: string) => {
    if (type === "app") {
      openApp(id as AppId);
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            aria-label="Close spotlight"
            className="fixed inset-0 z-[700] bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            role="dialog"
            aria-modal
            aria-label="Spotlight search"
            className="glass-panel-dark fixed left-1/2 top-[18%] z-[710] w-[min(560px,calc(100%-32px))] -translate-x-1/2 overflow-hidden rounded-2xl shadow-window"
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
          >
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search apps and placeholders…"
              className="w-full border-b border-white/10 bg-transparent px-4 py-4 text-lg text-white outline-none placeholder:text-white/35"
            />
            <ul className="max-h-64 overflow-auto py-2">
              {results.length === 0 && (
                <li className="px-4 py-3 text-sm text-white/45">No results</li>
              )}
              {results.map((r) => (
                <li key={`${r.type}-${r.id}`}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm hover:bg-white/10"
                    onClick={() => launch(r.type, r.id)}
                  >
                    <span className="text-white/40">{r.type === "app" ? "App" : "Project"}</span>
                    <span className="text-white/90">{r.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
