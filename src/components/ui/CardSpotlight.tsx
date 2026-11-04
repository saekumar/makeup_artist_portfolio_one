"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CardSpotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(212,175,55,0.18), transparent 70%)`;
  const border = useMotionTemplate`radial-gradient(220px circle at ${x}px ${y}px, rgba(241,220,154,0.9), transparent 70%)`;

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-cream/10 bg-ink-2 p-px",
        className,
      )}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: border }}
      />
      <div className="relative h-full rounded-[23px] bg-ink-2">
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-[23px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: spotlight }}
        />
        <div className="relative h-full">{children}</div>
      </div>
    </div>
  );
}
