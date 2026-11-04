"use client";

import { motion } from "framer-motion";
import { Crown, Flower2, Heart, Plane, Sparkles, Users, type LucideIcon } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { process, services } from "@/data/site";

const icons: Record<string, LucideIcon> = { Crown, Flower2, Heart, Plane, Sparkles, Users };

export function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <SectionHeading
        eyebrow="Services"
        title="Every ritual, one radiant you."
        description="From the first haldi smear to the last reception photo — looks designed to evolve with each ceremony."
        align="center"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.06}>
              <CardSpotlight className="h-full">
                <div className="flex h-full flex-col gap-6 p-8">
                  <span className="grid size-12 place-items-center rounded-2xl border border-gold/30 bg-ink text-gold-2 transition group-hover:bg-gold group-hover:text-ink">
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="font-display text-3xl text-cream">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">{s.blurb}</p>
                  </div>
                  <span className="mt-auto text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                    0{i + 1}
                  </span>
                </div>
              </CardSpotlight>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-32">
        <SectionHeading eyebrow="The process" title="Calm, considered, on time." />
        <div className="relative grid grid-cols-1 gap-10 md:grid-cols-4">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-6 hidden h-px origin-left bg-gradient-to-r from-gold/60 via-gold/30 to-transparent md:block"
          />
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.12}>
              <div className="relative">
                <span className="relative z-10 grid size-12 place-items-center rounded-full border border-gold/40 bg-ink font-display text-lg italic text-gold-2">
                  {p.step}
                </span>
                <h4 className="mt-6 font-display text-2xl text-cream">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
