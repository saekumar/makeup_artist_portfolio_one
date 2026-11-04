"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function MagneticButton({
  href,
  children,
  className,
  variant = "gold",
  external = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "gold" | "ghost";
  external?: boolean;
}) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 220, damping: 18 });
  const y = useSpring(my, { stiffness: 220, damping: 18 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.25);
    my.set((e.clientY - (r.top + r.height / 2)) * 0.35);
  }

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="inline-block"
    >
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={cn(
          "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]",
          variant === "gold"
            ? "text-ink shadow-[0_10px_40px_-10px_rgba(212,175,55,0.6)]"
            : "border border-cream/15 text-cream hover:border-gold/50",
          className,
        )}
      >
        {variant === "gold" && (
          <>
            <span className="absolute inset-0 bg-gradient-to-r from-gold-2 via-gold to-[#c89b2a]" />
            <span className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[120%]" />
          </>
        )}
        <span className="relative flex items-center gap-2">{children}</span>
      </Link>
    </motion.div>
  );
}
