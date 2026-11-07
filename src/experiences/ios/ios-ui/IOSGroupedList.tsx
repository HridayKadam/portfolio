import type { ReactNode } from "react";

export function IOSAppCanvas({
  title,
  largeTitle,
  children,
}: {
  title: string;
  largeTitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-full bg-ios-bg pb-8">
      <div className="sticky top-0 z-10 border-b border-black/5 bg-ios-bg/90 px-4 py-2 backdrop-blur-xl">
        <p className="text-center text-[17px] font-semibold text-ios-label">{title}</p>
      </div>
      {largeTitle && (
        <h1 className="px-4 pb-2 pt-3 text-[34px] font-bold leading-tight tracking-tight text-ios-label">
          {largeTitle}
        </h1>
      )}
      {children}
    </div>
  );
}

export function IOSGroup({
  title,
  children,
  footer,
}: {
  title?: string;
  children: ReactNode;
  footer?: string;
}) {
  return (
    <section className="mb-6">
      {title && (
        <p className="mb-1.5 px-8 text-[13px] uppercase tracking-wide text-ios-secondary">
          {title}
        </p>
      )}
      <div className="mx-4 overflow-hidden rounded-[12px] bg-white shadow-sm shadow-black/5">
        {children}
      </div>
      {footer && <p className="mt-2 px-8 text-[13px] leading-snug text-ios-secondary">{footer}</p>}
    </section>
  );
}

export function IOSRow({
  title,
  subtitle,
  detail,
  href,
  onClick,
  last,
}: {
  title: string;
  subtitle?: string;
  detail?: string;
  href?: string;
  onClick?: () => void;
  last?: boolean;
}) {
  const inner = (
    <>
      <div className="min-w-0 flex-1 py-3 pl-4">
        <p className="text-[17px] text-ios-label">{title}</p>
        {subtitle && (
          <p className="mt-0.5 text-[15px] leading-snug text-ios-secondary">{subtitle}</p>
        )}
      </div>
      {detail && <span className="pr-1 text-[17px] text-ios-secondary">{detail}</span>}
      {(href || onClick) && (
        <span className="pr-3 text-ios-chevron" aria-hidden>
          ›
        </span>
      )}
    </>
  );

  const className = `flex w-full items-center text-left ${!last ? "border-b border-black/[0.08]" : ""}`;

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {inner}
      </a>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={className}>
        {inner}
      </button>
    );
  }

  return <div className={className}>{inner}</div>;
}

export function IOSBodyText({ children }: { children: ReactNode }) {
  return <p className="px-4 text-[17px] leading-relaxed text-ios-label">{children}</p>;
}
