"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate, type PanInfo } from "framer-motion";
import { profile } from "@/config/content";
import { IOSWallpaper } from "@/experiences/ios/IOSWallpaper";

type Props = {
  onUnlock: () => void;
};

export function IOSLockScreen({ onUnlock }: Props) {
  const [now, setNow] = useState(() => new Date());
  const dragY = useMotionValue(0);
  const contentY = useTransform(dragY, [0, -180], [0, -40]);
  const hintOpacity = useTransform(dragY, [-80, 0], [0, 1]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: false,
  });
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const tryUnlock = (info: PanInfo) => {
    if (info.offset.y < -90 || info.velocity.y < -650) {
      animate(dragY, -400, { duration: 0.28, ease: [0.32, 0.72, 0, 1] }).then(onUnlock);
    } else {
      animate(dragY, 0, { type: "spring", stiffness: 420, damping: 32 });
    }
  };

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <IOSWallpaper />
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />

      <motion.div className="relative flex h-full flex-col pt-20 text-white" style={{ y: contentY }}>
        <div className="flex flex-col items-center px-6">
          <p className="text-[20px] font-medium text-white/85">{date}</p>
          <p
            className="mt-[-4px] text-[82px] font-extralight leading-none tracking-[-0.04em] tabular-nums"
            style={{ fontFeatureSettings: '"tnum"' }}
          >
            {time}
          </p>
        </div>

        <div className="mx-5 mt-8">
          <div className="rounded-[20px] bg-white/15 p-4 backdrop-blur-2xl">
            <p className="text-[13px] font-semibold uppercase tracking-wide text-white/60">
              Building
            </p>
            <p className="mt-1 text-[17px] font-semibold">{profile.name}</p>
            <p className="mt-0.5 text-[15px] text-white/75">{profile.lockSubtitle}</p>
          </div>
        </div>

        <div className="mt-auto flex justify-between px-8 pb-10">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl"
            aria-label="Flashlight"
          >
            <span className="text-lg">🔦</span>
          </button>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 backdrop-blur-xl"
            aria-label="Camera"
          >
            <span className="text-lg">📷</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-2 left-0 right-0 z-20 flex flex-col items-center pb-6 pt-16"
        style={{ y: dragY, opacity: hintOpacity }}
        drag="y"
        dragConstraints={{ top: -320, bottom: 0 }}
        dragElastic={0.12}
        onDragEnd={(_, info) => tryUnlock(info)}
      >
        <p className="mb-4 text-[15px] font-medium text-white/70">Swipe up to unlock</p>
        <div className="h-[5px] w-[134px] rounded-full bg-white/90" />
      </motion.div>
    </div>
  );
}
