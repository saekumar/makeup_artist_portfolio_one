"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute -left-[10%] top-[-20%] h-[60vh] w-[60vw] rounded-full bg-gold/15 blur-[120px]"
        animate={{ x: [0, 60, -30, 0], y: [0, 40, 10, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-10%] top-[10%] h-[55vh] w-[45vw] rounded-full bg-rose-2/20 blur-[130px]"
        animate={{ x: [0, -50, 20, 0], y: [0, 30, -40, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] left-[30%] h-[50vh] w-[50vw] rounded-full bg-[#5a3d1a]/30 blur-[140px]"
        animate={{ x: [0, 40, -40, 0], scale: [1, 1.2, 1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function Spotlight({ className }: { className?: string }) {
  return (
    <svg
      className={cn(
        "pointer-events-none absolute -top-40 left-0 h-[170%] w-[140%] opacity-0 animate-[spotlight_2s_ease_0.6s_forwards] lg:w-[84%]",
        className,
      )}
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <style>{`@keyframes spotlight{from{opacity:0;transform:translate(-72%,-62%) scale(.5)}to{opacity:1;transform:translate(-50%,-40%) scale(1)}}`}</style>
      <g filter="url(#sf)">
        <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill="#f1dc9a" fillOpacity="0.18" />
      </g>
      <defs>
        <filter id="sf" x="0" y="0" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="b" />
          <feBlend in="SourceGraphic" in2="b" result="s" />
          <feGaussianBlur stdDeviation="151" result="g" />
        </filter>
      </defs>
    </svg>
  );
}
