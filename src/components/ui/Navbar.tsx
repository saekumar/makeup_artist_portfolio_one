"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 160 && !open);
    setScrolled(latest > 24);
  });

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: hidden ? -120 : 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500",
            scrolled
              ? "gold-border bg-ink/70 shadow-[0_8px_40px_-12px_rgba(212,175,55,0.25)] backdrop-blur-xl"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link href="#top" className="group flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-full border border-gold/40 bg-ink-2 font-display text-lg italic text-gold-2 transition group-hover:border-gold">
              S
            </span>
            <span className="hidden font-display text-lg tracking-wide text-cream sm:block">
              Swarna Reddy
              <span className="ml-1.5 text-xs font-sans uppercase tracking-[0.25em] text-muted">
                Makeovers
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative rounded-full px-4 py-2 text-sm text-cream-2 transition hover:text-cream"
                >
                  <span className="relative z-10">{l.label}</span>
                  <span className="absolute inset-0 rounded-full bg-cream/0 transition hover:bg-cream/5" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="relative hidden overflow-hidden rounded-full border border-gold/50 px-5 py-2 text-sm font-medium text-ink transition hover:scale-[1.03] sm:inline-flex"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-2 via-gold to-gold-2" />
              <span className="relative">Book your date</span>
            </Link>
            <button
              aria-label="Toggle menu"
              onClick={() => setOpen((o) => !o)}
              className="grid size-10 place-items-center rounded-full border border-cream/10 text-cream md:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex h-full flex-col items-center justify-center gap-8">
              {[...navLinks, { label: "Book your date", href: "#contact" }].map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-cream"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
              <li className="mt-6 text-xs uppercase tracking-[0.3em] text-muted">
                @{site.handle}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
