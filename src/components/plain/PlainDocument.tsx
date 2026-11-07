import type { ReactNode } from "react";

export function BracketLink({
  href,
  children,
  external = true,
}: {
  href: string;
  children: ReactNode;
  external?: boolean;
}) {
  return (
    <span>
      {"[ "}
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
      {" ]"}
    </span>
  );
}

export function BracketLinks({
  links,
}: {
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <p className="plain-links mt-0.5 text-sm">
      {links.map((link, i) => (
        <span key={link.href}>
          {i > 0 ? " " : null}
          <BracketLink href={link.href} external={link.external ?? true}>
            {link.label}
          </BracketLink>
        </span>
      ))}
    </p>
  );
}

export function PlainSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="plain-section-title mb-3 text-sm font-bold underline underline-offset-4">
        {title}
      </p>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function PlainEntry({
  title,
  subtitle,
  description,
  links,
  stat,
}: {
  title: string;
  subtitle?: string;
  description: string;
  stat?: string;
  links?: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="text-sm">
        <span className="font-bold">{title}</span>
        {subtitle ? <> — {subtitle}</> : null}
      </p>
      {description ? <p className="mt-0.5 text-sm">{description}</p> : null}
      {stat ? <p className="mt-0.5 text-sm">{stat}</p> : null}
      {links && links.length > 0 ? <BracketLinks links={links} /> : null}
    </div>
  );
}
