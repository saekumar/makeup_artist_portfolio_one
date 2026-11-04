"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

const tags = { h1: motion.h1, h2: motion.h2, h3: motion.h3, p: motion.p } as const;

export function TextReveal({
  text,
  className,
  delay = 0,
  as = "h1",
}: {
  text: string;
  className?: string;
  delay?: number;
  as?: keyof typeof tags;
}) {
  const Tag = tags[as];
  const words = text.split(" ");
  return (
    <Tag
      className={cn("flex flex-wrap", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((w, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden pb-[0.08em]">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotate: 4, opacity: 0 },
              show: {
                y: 0,
                rotate: 0,
                opacity: 1,
                transition: {
                  duration: 0.9,
                  delay: delay + i * 0.045,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </span>
      </Reveal>
      <TextReveal
        as="h2"
        text={title}
        className={cn(
          "font-display text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl",
          align === "center" && "justify-center",
        )}
      />
      {description && (
        <Reveal delay={0.2}>
          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
