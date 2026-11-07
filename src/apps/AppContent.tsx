"use client";

import {
  aboutPlaceholder,
  contactPlaceholder,
  experiencePlaceholder,
  experimentsPlaceholder,
  finderPlaceholder,
  galleryPlaceholder,
  notesPlaceholder,
  projectsPlaceholder,
  terminalPlaceholder,
  type AppId,
} from "@/config/placeholders";

export function AppContent({ appId }: { appId: AppId }) {
  switch (appId) {
    case "finder":
      return <FinderView />;
    case "about":
      return <AboutView />;
    case "projects":
      return <ProjectsView />;
    case "experience":
      return <ExperienceView />;
    case "notes":
      return <NotesView />;
    case "gallery":
      return <GalleryView />;
    case "experiments":
      return <ExperimentsView />;
    case "contact":
      return <ContactView />;
    case "terminal":
      return <TerminalView />;
    default:
      return null;
  }
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight text-white">{children}</h2>;
}

function FinderView() {
  return (
    <div className="flex h-full gap-4 text-sm text-white/80">
      <aside className="w-40 shrink-0 space-y-4 border-r border-white/10 pr-4">
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/45">
            Favorites
          </p>
          <ul className="space-y-1">
            {finderPlaceholder.favorites.map((item) => (
              <li key={item} className="rounded-md px-2 py-1 hover:bg-white/10">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-white/45">
            Recents
          </p>
          <ul className="space-y-1 text-white/65">
            {finderPlaceholder.recent.map((item) => (
              <li key={item} className="truncate px-2 py-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </aside>
      <div className="scrollbar-thin flex-1 overflow-auto">
        <SectionTitle>Placeholder workspace</SectionTitle>
        <p className="mt-2 max-w-md text-white/55">
          Finder layout preview. Real folders and files will replace this grid later.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-3">
          {["Folder 01", "Folder 02", "File 01"].map((name) => (
            <div
              key={name}
              className="glass-panel flex aspect-square flex-col items-center justify-center rounded-xl text-center text-xs text-white/70"
            >
              <span className="mb-2 text-2xl opacity-80">📁</span>
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutView() {
  return (
    <div className="scrollbar-thin h-full overflow-auto">
      <SectionTitle>{aboutPlaceholder.title}</SectionTitle>
      <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-white/75">
        {aboutPlaceholder.paragraphs.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
      <ul className="mt-6 flex flex-wrap gap-2">
        {aboutPlaceholder.highlights.map((h) => (
          <li
            key={h}
            className="glass-panel rounded-full px-3 py-1 text-xs font-medium text-electric-glow"
          >
            {h}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectsView() {
  return (
    <div className="scrollbar-thin grid h-full gap-3 overflow-auto sm:grid-cols-2 lg:grid-cols-3">
      {projectsPlaceholder.items.map((p) => (
        <article
          key={p.id}
          className="glass-panel flex flex-col rounded-xl p-4 transition hover:border-electric/40"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-electric-glow">
            {p.subtitle}
          </p>
          <h3 className="mt-1 text-base font-semibold text-white">{p.title}</h3>
          <p className="mt-2 flex-1 text-sm text-white/60">{p.description}</p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] text-white/70">
                {t}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}

function ExperienceView() {
  return (
    <div className="scrollbar-thin h-full space-y-4 overflow-auto">
      {experiencePlaceholder.items.map((item) => (
        <div key={item.id} className="glass-panel rounded-xl p-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-semibold text-white">{item.role}</h3>
            <span className="text-xs text-white/45">{item.period}</span>
          </div>
          <p className="text-sm text-electric-glow">{item.organization}</p>
          <p className="mt-2 text-sm text-white/65">{item.summary}</p>
        </div>
      ))}
    </div>
  );
}

function NotesView() {
  return (
    <div className="flex h-full gap-3 overflow-hidden">
      <ul className="scrollbar-thin w-44 shrink-0 space-y-1 overflow-auto border-r border-white/10 pr-2">
        {notesPlaceholder.items.map((n, i) => (
          <li
            key={n.id}
            className={`cursor-default rounded-lg px-2 py-2 text-sm ${
              i === 0 ? "bg-electric/20 text-white" : "text-white/65 hover:bg-white/5"
            }`}
          >
            {n.title}
          </li>
        ))}
      </ul>
      <div className="scrollbar-thin flex-1 overflow-auto">
        <SectionTitle>{notesPlaceholder.items[0].title}</SectionTitle>
        <p className="mt-1 text-xs text-white/40">{notesPlaceholder.items[0].updated}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-white/75">
          {notesPlaceholder.items[0].body}
        </p>
      </div>
    </div>
  );
}

function GalleryView() {
  return (
    <div className="scrollbar-thin grid h-full grid-cols-2 gap-2 overflow-auto sm:grid-cols-3 md:grid-cols-4">
      {galleryPlaceholder.items.map((img) => (
        <div
          key={img.id}
          className={`glass-panel flex items-center justify-center rounded-lg text-xs text-white/50 ${
            img.aspect === "landscape" ? "col-span-2 aspect-[2/1]" : "aspect-square"
          }`}
        >
          {img.label}
        </div>
      ))}
    </div>
  );
}

function ExperimentsView() {
  return (
    <div className="scrollbar-thin h-full space-y-3 overflow-auto">
      {experimentsPlaceholder.items.map((e) => (
        <div key={e.id} className="glass-panel rounded-xl p-4">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-semibold text-white">{e.title}</h3>
            <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] uppercase text-white/60">
              {e.status}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/65">{e.description}</p>
        </div>
      ))}
    </div>
  );
}

function ContactView() {
  return (
    <div className="flex h-full flex-col justify-center">
      <SectionTitle>{contactPlaceholder.headline}</SectionTitle>
      <p className="mt-3 max-w-sm text-sm text-white/65">{contactPlaceholder.message}</p>
      <ul className="mt-8 space-y-2">
        {contactPlaceholder.links.map((link) => (
          <li key={link.id}>
            <a
              href={link.href}
              className="glass-panel inline-flex w-full max-w-xs items-center justify-between rounded-xl px-4 py-3 text-sm text-white/85 transition hover:border-electric/50"
              onClick={(e) => e.preventDefault()}
            >
              {link.label}
              <span className="text-white/35">→</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TerminalView() {
  return (
    <div className="h-full rounded-lg bg-black/60 p-4 font-mono text-[13px] leading-relaxed text-green-400/90">
      {terminalPlaceholder.lines.map((line, i) => (
        <div key={`${line}-${i}`} className={line.startsWith(">") ? "text-white/90" : ""}>
          {line}
        </div>
      ))}
      <span className="mt-2 inline-block animate-pulse text-white/80">▍</span>
    </div>
  );
}
