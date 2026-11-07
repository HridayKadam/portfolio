"use client";

export function Wallpaper({ className = "" }: { className?: string }) {
  return (
    <div
      className={`wallpaper-midnight absolute inset-0 ${className}`}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  );
}
