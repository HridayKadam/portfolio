"use client";

export function IOSWallpaper({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <div className={`ios-wallpaper absolute inset-0 ${dimmed ? "brightness-75" : ""}`} aria-hidden>
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0.5px, transparent 0.5px)",
          backgroundSize: "4px 4px",
        }}
      />
    </div>
  );
}
