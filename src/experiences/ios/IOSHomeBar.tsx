"use client";

import { motion, useMotionValue, animate, type PanInfo } from "framer-motion";

type Props = {
  onHome: () => void;
};

export function IOSHomeBar({ onHome }: Props) {
  const y = useMotionValue(0);

  const onEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y < -48 || info.velocity.y < -400) {
      onHome();
    }
    animate(y, 0, { type: "spring", stiffness: 500, damping: 35 });
  };

  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 z-50 flex justify-center pb-2 pt-6"
      style={{ paddingBottom: "max(6px, env(safe-area-inset-bottom))" }}
      drag="y"
      dragConstraints={{ top: -80, bottom: 0 }}
      dragElastic={0.15}
      onDragEnd={onEnd}
    >
      <div className="h-[5px] w-[134px] rounded-full bg-black/35" />
    </motion.div>
  );
}
