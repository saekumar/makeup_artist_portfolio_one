"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart, X } from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";
import type { Look } from "@/data/looks";

export function Lightbox({
  items,
  index,
  onClose,
  onIndex,
}: {
  items: Look[];
  index: number | null;
  onClose: () => void;
  onIndex: (i: number) => void;
}) {
  const open = index !== null;
  const i = index ?? 0;
  const look = open ? items[i] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndex((i + 1) % items.length);
      if (e.key === "ArrowLeft") onIndex((i - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, i, items.length, onClose, onIndex]);

  return (
    <AnimatePresence>
      {look && (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/90 p-4 backdrop-blur-xl"
          onClick={onClose}
        >
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-5 top-5 grid size-11 place-items-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold"
          >
            <X size={18} />
          </button>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((i - 1 + items.length) % items.length);
            }}
            className="absolute left-4 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold md:grid"
          >
            <ChevronLeft />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onIndex((i + 1) % items.length);
            }}
            className="absolute right-4 top-1/2 hidden size-12 -translate-y-1/2 place-items-center rounded-full border border-cream/15 text-cream transition hover:border-gold hover:text-gold md:grid"
          >
            <ChevronRight />
          </button>

          <motion.div
            key={look.id}
            layoutId={`look-${look.id}`}
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            className="grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl border border-cream/10 bg-ink-2 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
          >
            <div className="relative aspect-[9/14] max-h-[90vh] md:aspect-auto">
              <Image
                src={look.src}
                alt={look.title}
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.35em] text-gold">
                  {look.category} · {look.date}
                </span>
                <h3 className="mt-4 font-display text-4xl leading-tight text-cream sm:text-5xl">
                  {look.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-cream-2">{look.subtitle}</p>
                {look.credits && (
                  <p className="mt-5 text-xs leading-relaxed text-muted">{look.credits}</p>
                )}
              </div>
              <div className="flex items-center justify-between border-t border-cream/10 pt-6">
                <span className="inline-flex items-center gap-2 text-sm text-cream-2">
                  <Heart size={16} className="fill-rose text-rose" /> {look.likes}
                </span>
                <a
                  href={look.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-2 transition hover:bg-gold hover:text-ink"
                >
                  <Instagram size={14} /> View on Instagram
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
