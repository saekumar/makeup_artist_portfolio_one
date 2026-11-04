"use client";

import { useCallback, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { Heart, Plus } from "lucide-react";
import { Lightbox } from "@/components/ui/Lightbox";
import { SectionHeading } from "@/components/ui/Reveal";
import { categories, looks, type LookCategory } from "@/data/looks";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [filter, setFilter] = useState<"All" | LookCategory>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? looks : looks.filter((l) => l.category === filter)),
    [filter],
  );

  const close = useCallback(() => setActive(null), []);
  const onIndex = useCallback((i: number) => setActive(i), []);

  return (
    <section id="portfolio" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Signature looks"
          title="A portfolio of brides, not trends."
          description="Pulled straight from the studio's most-loved work — Kanjeevaram golds, Pellikuthuru oranges and soft reception glam."
          className="mb-0"
        />
        <LayoutGroup id="filters">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition",
                  filter === c ? "text-ink" : "text-muted hover:text-cream",
                )}
              >
                {filter === c && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-2 to-gold"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>

      <motion.div layout className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
        <AnimatePresence mode="popLayout">
          {items.map((look, i) => (
            <motion.button
              layout
              key={look.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setActive(i)}
              className={cn(
                "group relative block w-full break-inside-avoid overflow-hidden rounded-[1.75rem] border border-cream/10 bg-ink-2 text-left",
                look.featured ? "aspect-[3/4.4]" : "aspect-[3/4]",
              )}
            >
              <Image
                src={look.src}
                alt={look.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition group-hover:opacity-95" />
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                <span className="rounded-full border border-cream/15 bg-ink/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-cream-2 backdrop-blur">
                  {look.category}
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-ink/40 px-2.5 py-1 text-xs text-cream backdrop-blur">
                  <Heart size={12} className="fill-rose text-rose" /> {look.likes}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div className="translate-y-2 transition duration-500 group-hover:translate-y-0">
                  <h3 className="font-display text-3xl leading-none text-cream">{look.title}</h3>
                  <p className="mt-2 max-w-[26ch] text-sm text-cream-2/80 opacity-0 transition duration-500 group-hover:opacity-100">
                    {look.subtitle}
                  </p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-gold/50 bg-ink/60 text-gold-2 transition duration-500 group-hover:rotate-90 group-hover:bg-gold group-hover:text-ink">
                  <Plus size={18} />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox items={items} index={active} onClose={close} onIndex={onIndex} />
    </section>
  );
}
