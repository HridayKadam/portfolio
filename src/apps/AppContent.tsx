"use client";

import {
  profile,
  ventures,
  products,
  collaborations,
  growth,
  community,
  earlyExperiments,
  notes,
  contact,
  finderFavorites,
  finderRecent,
  terminalLines,
} from "@/config/content";
import type { AppId } from "@/config/placeholders";
import {
  IOSAppCanvas,
  IOSGroup,
  IOSRow,
  IOSBodyText,
} from "@/experiences/ios/ios-ui/IOSGroupedList";

type Props = {
  appId: AppId;
  variant?: "desktop" | "ios" | "ipad";
};

export function AppContent({ appId, variant = "desktop" }: Props) {
  const isIOS = variant === "ios" || variant === "ipad";

  if (isIOS) {
    return <IOSAppViews appId={appId} />;
  }

  return <DesktopAppViews appId={appId} />;
}

function DesktopAppViews({ appId }: { appId: AppId }) {
  switch (appId) {
    case "about":
      return <DesktopAbout />;
    case "projects":
      return <DesktopProjects />;
    case "experience":
      return <DesktopExperience />;
    case "notes":
      return <DesktopNotes />;
    case "experiments":
      return <DesktopExperiments />;
    case "contact":
      return <DesktopContact />;
    case "finder":
      return <DesktopFinder />;
    case "gallery":
      return <DesktopGallery />;
    case "terminal":
      return <DesktopTerminal />;
    default:
      return null;
  }
}

function IOSAppViews({ appId }: { appId: AppId }) {
  switch (appId) {
    case "about":
      return <IOSAbout />;
    case "projects":
      return <IOSProjects />;
    case "experience":
      return <IOSExperienceApp />;
    case "notes":
      return <IOSNotes />;
    case "experiments":
      return <IOSExperiments />;
    case "contact":
      return <IOSContact />;
    case "finder":
      return <IOSFinder />;
    case "gallery":
      return <IOSGallery />;
    case "terminal":
      return <IOSTerminal />;
    default:
      return null;
  }
}

function IOSAbout() {
  return (
    <IOSAppCanvas title="About" largeTitle={profile.name}>
      <div className="mb-4 px-4">
        <p className="text-[20px] font-medium text-ios-secondary">{profile.tagline}</p>
      </div>
      {profile.bio.map((p) => (
        <IOSBodyText key={p.slice(0, 32)}>{p}</IOSBodyText>
      ))}
      <IOSGroup title="What matters">
        {profile.principles.map((item, i) => (
          <IOSRow key={item} title={item} last={i === profile.principles.length - 1} />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSProjects() {
  return (
    <IOSAppCanvas title="Projects" largeTitle="Projects">
      <IOSGroup title="Companies & ventures">
        {ventures.map((v, i) => (
          <IOSRow
            key={v.id}
            title={v.name}
            subtitle={`${v.role} — ${v.description}`}
            href={v.website}
            last={i === ventures.length - 1}
          />
        ))}
      </IOSGroup>
      <IOSGroup title="Products I've built">
        {products.map((p, i) => (
          <IOSRow
            key={p.id}
            title={p.name}
            subtitle={p.stat ? `${p.description} (${p.stat})` : p.description}
            detail={p.role}
            href={p.website}
            last={i === products.length - 1}
          />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSExperienceApp() {
  return (
    <IOSAppCanvas title="Experience" largeTitle="Experience">
      <IOSGroup title="Collaborations">
        {collaborations.map((c, i) => (
          <IOSRow
            key={c.id}
            title={c.name}
            subtitle={c.description}
            href={c.website}
            last={i === collaborations.length - 1}
          />
        ))}
      </IOSGroup>
      <IOSGroup title="Growth & distribution" footer={growth.footer}>
        <IOSRow title={growth.intro} last={false} />
        {growth.bullets.map((b, i) => (
          <IOSRow key={b} title={b} last={i === growth.bullets.length - 1} />
        ))}
      </IOSGroup>
      <IOSGroup title="Community & fellowships">
        {community.map((c, i) => (
          <IOSRow
            key={c.id}
            title={c.title}
            subtitle={`${c.subtitle} — ${c.description}`}
            last={i === community.length - 1}
          />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSNotes() {
  return (
    <IOSAppCanvas title="Notes" largeTitle="Notes">
      <IOSGroup>
        {notes.map((n, i) => (
          <IOSRow key={n.id} title={n.title} subtitle={n.body} detail={n.updated} last={i === notes.length - 1} />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSExperiments() {
  return (
    <IOSAppCanvas title="Experiments" largeTitle="Experiments">
      <IOSGroup title="Early builder days">
        <IOSRow title={earlyExperiments.title} subtitle={earlyExperiments.body} last />
      </IOSGroup>
      <IOSGroup title="Product experiments">
        {products.slice(2).map((p, i, arr) => (
          <IOSRow key={p.id} title={p.name} subtitle={p.description} last={i === arr.length - 1} />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSContact() {
  return (
    <IOSAppCanvas title="Contact" largeTitle="Contact">
      <IOSBodyText>{contact.message}</IOSBodyText>
      <IOSGroup title="Links">
        {contact.links.map((link, i) => (
          <IOSRow
            key={link.id}
            title={link.label}
            subtitle={link.subtitle}
            href={link.href}
            last={i === contact.links.length - 1}
          />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSFinder() {
  return (
    <IOSAppCanvas title="Files" largeTitle="Browse">
      <IOSGroup title="Favorites">
        {finderFavorites.map((f, i) => (
          <IOSRow key={f} title={f} last={i === finderFavorites.length - 1} />
        ))}
      </IOSGroup>
      <IOSGroup title="Recent">
        {finderRecent.map((r, i) => (
          <IOSRow key={r} title={r} last={i === finderRecent.length - 1} />
        ))}
      </IOSGroup>
    </IOSAppCanvas>
  );
}

function IOSGallery() {
  return (
    <IOSAppCanvas title="Photos" largeTitle="Photos">
      <div className="grid grid-cols-3 gap-0.5 px-0.5">
        {[
          ...ventures.map((v) => ({ id: v.id, label: v.name })),
          ...products.slice(0, 5).map((p) => ({ id: p.id, label: p.name })),
        ].map((item) => (
          <div
            key={item.id}
            className="flex aspect-square items-end bg-gradient-to-br from-[#007AFF]/30 to-[#5856D6]/40 p-2"
          >
            <span className="text-[11px] font-semibold text-white drop-shadow">{item.label}</span>
          </div>
        ))}
      </div>
    </IOSAppCanvas>
  );
}

function IOSTerminal() {
  return (
    <div className="min-h-full bg-black p-4 font-mono text-[13px] leading-relaxed text-[#30D158]">
      {terminalLines.map((line, i) => (
        <div key={`${line}-${i}`} className={line.startsWith(">") ? "text-white" : ""}>
          {line}
        </div>
      ))}
      <span className="animate-pulse text-white">▍</span>
    </div>
  );
}

/* ——— Desktop (dark glass) ——— */

function DesktopSection({ children }: { children: React.ReactNode }) {
  return <h2 className="text-lg font-semibold tracking-tight text-white">{children}</h2>;
}

function DesktopAbout() {
  return (
    <div className="scrollbar-thin h-full overflow-auto text-white/80">
      <DesktopSection>{profile.name}</DesktopSection>
      <p className="mt-2 text-electric-glow">{profile.tagline}</p>
      <div className="mt-4 space-y-3 text-[15px]">
        {profile.bio.map((p) => (
          <p key={p.slice(0, 24)}>{p}</p>
        ))}
      </div>
    </div>
  );
}

function DesktopProjects() {
  return (
    <div className="scrollbar-thin h-full space-y-6 overflow-auto">
      <div>
        <DesktopSection>Ventures</DesktopSection>
        {ventures.map((v) => (
          <div key={v.id} className="glass-panel mt-2 rounded-xl p-3">
            <strong>{v.name}</strong> — {v.role}
            <p className="mt-1 text-sm text-white/60">{v.description}</p>
          </div>
        ))}
      </div>
      <div>
        <DesktopSection>Products</DesktopSection>
        {products.map((p) => (
          <div key={p.id} className="glass-panel mt-2 rounded-xl p-3">
            <strong>{p.name}</strong>
            {p.stat && <span className="text-white/50"> · {p.stat}</span>}
            <p className="mt-1 text-sm text-white/60">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function DesktopExperience() {
  return (
    <div className="scrollbar-thin h-full space-y-3 overflow-auto">
      {collaborations.map((c) => (
        <div key={c.id} className="glass-panel rounded-xl p-3">
          <strong>{c.name}</strong>
          <p className="text-sm text-white/65">{c.description}</p>
        </div>
      ))}
      <div className="glass-panel rounded-xl p-3">
        <strong>Growth</strong>
        <ul className="mt-2 list-disc pl-5 text-sm text-white/65">
          {growth.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function DesktopNotes() {
  return (
    <div className="scrollbar-thin h-full space-y-2 overflow-auto">
      {notes.map((n) => (
        <div key={n.id} className="glass-panel rounded-xl p-3">
          <strong>{n.title}</strong>
          <p className="text-sm text-white/65">{n.body}</p>
        </div>
      ))}
    </div>
  );
}

function DesktopExperiments() {
  return (
    <div className="scrollbar-thin h-full overflow-auto">
      <p className="text-white/75">{earlyExperiments.body}</p>
    </div>
  );
}

function DesktopContact() {
  return (
    <ul className="space-y-2">
      {contact.links.map((l) => (
        <li key={l.id}>
          <a href={l.href} className="text-electric-glow underline" target="_blank" rel="noreferrer">
            {l.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

function DesktopFinder() {
  return (
    <p className="text-white/70">
      Favorites: {finderFavorites.join(", ")}. Recent: {finderRecent.join(", ")}.
    </p>
  );
}

function DesktopGallery() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {products.slice(0, 9).map((p) => (
        <div key={p.id} className="glass-panel flex aspect-square items-center justify-center text-xs">
          {p.name}
        </div>
      ))}
    </div>
  );
}

function DesktopTerminal() {
  return (
    <div className="font-mono text-sm text-green-400/90">
      {terminalLines.map((line, i) => (
        <div key={i}>{line}</div>
      ))}
    </div>
  );
}
