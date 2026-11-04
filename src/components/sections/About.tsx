"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { site } from "@/data/site";

function Counter({ to, suffix = "", decimals = 0 }: { to: number; suffix?: string; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals) + suffix);
  useEffect(() => {
    if (inView) animate(mv, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1] });
  }, [inView, mv, to]);
  return <motion.span ref={ref}>{text}</motion.span>;
}

const stats = [
  { value: 10.1, decimals: 1, suffix: "K", label: "Instagram community" },
  { value: 300, suffix: "+", label: "Brides glammed" },
  { value: 8, suffix: "+", label: "Cities travelled" },
  { value: 2027, label: "Bookings open through" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      <div className="pointer-events-none absolute right-[-20%] top-0 h-[60vh] w-[60vw] rounded-full bg-gold/10 blur-[160px]" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2.5rem] border border-gold/25">
            <Image
              src="/images/hero-pink-gold-2.jpg"
              alt="Swarna Reddy bridal makeup"
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 top-10 rounded-2xl border border-gold/30 bg-ink/80 px-5 py-4 backdrop-blur-md sm:right-6"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted">Based in</div>
            <div className="font-display text-2xl text-cream">Hyderabad</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-2 bottom-16 rounded-2xl border border-rose/30 bg-ink/80 px-5 py-4 backdrop-blur-md sm:left-4"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted">Signature</div>
            <div className="font-display text-2xl text-cream">Skin-like base</div>
          </motion.div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Meet the artist"
            title="Hi, I'm Swarna — I make brides look like the best version of themselves."
          />
          <Reveal delay={0.1}>
            <p className="text-lg leading-relaxed text-cream-2/90">
              I believe wedding makeup should feel like skin, photograph like a
              dream and survive the muhurtham, the mandap heat and every happy
              tear. My work leans classic — luminous bases, softly sculpted
              eyes and that unmistakable South Indian bridal glow.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              From intimate Pellikuthuru mornings in Hyderabad to destination
              weddings abroad, I travel with a hand-picked team of hair,
              draping and styling partners so your day runs on one calm,
              coordinated timeline. {site.followers} brides and followers trust
              the process on Instagram — I&apos;d love for you to be next.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4 lg:grid-cols-2">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08}>
                <div className="border-l border-gold/30 pl-5">
                  <div className="font-display text-4xl text-cream sm:text-5xl">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.decimals} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
