"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

type Props = {
  onUnlock: () => void;
};

export function IOSLockScreen({ onUnlock }: Props) {
  const [now, setNow] = useState(() => new Date());
  const dragY = useMotionValue(0);
  const opacity = useTransform(dragY, [0, -120], [1, 0.2]);
  const hintOpacity = useTransform(dragY, [0, -40], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const time = now.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });
  const date = now.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <motion.div
      className="absolute inset-0 z-10 flex flex-col items-center px-6 pt-24 text-white"
      style={{ opacity }}
    >
      <p className="text-sm font-medium text-white/70">{date}</p>
      <p className="mt-1 text-7xl font-extralight tracking-tight tabular-nums">{time}</p>

      <div className="glass-panel mt-10 w-full max-w-sm rounded-2xl p-4 text-left">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/45">
          Widget placeholder
        </p>
        <p className="mt-1 text-sm text-white/75">Calendar and activity slots — content later.</p>
      </div>

      <motion.div
        className="absolute bottom-16 left-0 right-0 flex flex-col items-center"
        style={{ y: dragY, opacity: hintOpacity }}
        drag="y"
        dragConstraints={{ top: -200, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          if (info.offset.y < -72 || info.velocity.y < -400) {
            animate(dragY, -280, { duration: 0.25 }).then(onUnlock);
          } else {
            animate(dragY, 0, { type: "spring", stiffness: 400, damping: 30 });
          }
        }}
      >
        <div className="mb-3 h-1 w-28 rounded-full bg-white/50" />
        <p className="text-sm text-white/55">Swipe up to unlock</p>
      </motion.div>
    </motion.div>
  );
}
