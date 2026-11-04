"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Aurora, Spotlight } from "@/components/ui/Backgrounds";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { TextReveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yBig = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const ySmall = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const yMid = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[100svh] overflow-hidden pt-32 pb-20 sm:pt-40"
    >
      <Aurora />
      <Spotlight />
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div style={{ opacity: fade }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-ink-2/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-2 backdrop-blur"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            Bookings open · 2026 / 2027 brides
          </motion.div>

          <TextReveal
            text="Flawless, skin-like beauty for the bride who wants to look like herself."
            className="font-display text-[clamp(2.6rem,7vw,5.6rem)] font-light leading-[0.98] tracking-[-0.01em] text-cream"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream-2/90 sm:text-lg"
          >
            Swarna Reddy is a Hyderabad-based bridal makeup artist known for
            radiant, long-wear bases and timeless South Indian bridal looks —
            from Pellikuthuru mornings to reception glam. Travelling globally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact">
              Book your date <ArrowUpRight size={16} />
            </MagneticButton>
            <MagneticButton href="#portfolio" variant="ghost">
              View the portfolio
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-5 text-sm text-muted"
          >
            <li className="flex items-center gap-2">
              <MapPin size={14} className="text-gold" /> {site.location}
            </li>
            <li className="flex items-center gap-2">
              <Sparkles size={14} className="text-gold" /> {site.followers} brides & followers
            </li>
            <li className="flex items-center gap-2">
              <ArrowUpRight size={14} className="text-gold" /> Travels globally
            </li>
          </motion.ul>
        </motion.div>

        <div className="relative mx-auto h-[560px] w-full max-w-[520px] sm:h-[640px] lg:h-[720px]">
          <motion.div
            style={{ y: yBig }}
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 top-0 h-[78%] w-[66%] -translate-x-1/2 overflow-hidden rounded-[2rem] border border-gold/20 shadow-[0_40px_120px_-30px_rgba(212,175,55,0.35)]"
          >
            <Image
              src="/images/hero-pink-gold-1.jpg"
              alt="Bride in pink and gold by Swarna Reddy"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 34vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: ySmall }}
            initial={{ opacity: 0, x: -40, rotate: -8 }}
            animate={{ opacity: 1, x: 0, rotate: -6 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[6%] left-[-4%] h-[42%] w-[36%] overflow-hidden rounded-[1.5rem] border border-cream/10 shadow-2xl"
          >
            <Image
              src="/images/look-06.jpg"
              alt="Pellikuthuru look"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            style={{ y: yMid }}
            initial={{ opacity: 0, x: 40, rotate: 8 }}
            animate={{ opacity: 1, x: 0, rotate: 5 }}
            transition={{ duration: 1.2, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-[12%] right-[-2%] h-[46%] w-[36%] overflow-hidden rounded-[1.5rem] border border-cream/10 shadow-2xl"
          >
            <Image
              src="/images/look-09.jpg"
              alt="Soft and subtle bridal look"
              fill
              sizes="20vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 180, damping: 14 }}
            className="absolute right-[6%] top-[4%] grid size-28 place-items-center rounded-full border border-gold/40 bg-ink/70 backdrop-blur-md"
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 size-full animate-spin-slow">
              <defs>
                <path id="circ" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
              </defs>
              <text className="fill-gold-2 text-[9px] uppercase tracking-[0.3em]">
                <textPath href="#circ">bridal · soft glam · pellikuthuru · </textPath>
              </text>
            </svg>
            <span className="font-display text-3xl italic text-gold-2">S</span>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted md:flex"
      >
        Scroll
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }}>
          <ArrowDown size={14} />
        </motion.span>
      </motion.a>
    </section>
  );
}
