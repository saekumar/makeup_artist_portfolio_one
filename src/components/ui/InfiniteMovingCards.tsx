"use client";

import { Marquee } from "./Marquee";
import { Quote } from "lucide-react";

type Item = { quote: string; name: string; role: string };

export function InfiniteMovingCards({
  items,
  duration = 60,
  reverse = false,
}: {
  items: Item[];
  duration?: number;
  reverse?: boolean;
}) {
  return (
    <Marquee duration={duration} reverse={reverse} className="py-4">
      {items.map((t, i) => (
        <figure
          key={i}
          className="relative mx-3 w-[320px] shrink-0 rounded-3xl border border-cream/10 bg-gradient-to-b from-ink-3 to-ink-2 p-7 sm:w-[400px]"
        >
          <Quote className="absolute right-6 top-6 size-8 text-gold/20" />
          <blockquote className="font-display text-xl leading-snug text-cream sm:text-2xl">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-gold/40 bg-ink font-display italic text-gold-2">
              {t.name[0]}
            </span>
            <div>
              <div className="text-sm font-semibold text-cream">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted">{t.role}</div>
            </div>
          </figcaption>
        </figure>
      ))}
    </Marquee>
  );
}
