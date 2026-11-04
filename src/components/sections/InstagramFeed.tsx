"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, Play } from "lucide-react";
import { Instagram } from "@/components/ui/BrandIcons";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { looks } from "@/data/looks";
import { site } from "@/data/site";

export function InstagramFeed() {
  const feed = looks.filter((l) => l.width < 1000).slice(0, 8);
  return (
    <section id="instagram" className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Journal"
          title="Latest from the studio."
          description={`Reels, trials and wedding-day stories — follow @${site.handle} for the daily glow.`}
          className="mb-0"
        />
        <Reveal>
          <MagneticButton href={site.instagram} external variant="ghost">
            <Instagram size={16} /> Follow on Instagram
          </MagneticButton>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {feed.map((l, i) => (
          <motion.a
            key={l.id}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            whileHover={{ y: -6 }}
            className="group relative aspect-[9/14] overflow-hidden rounded-2xl border border-cream/10"
          >
            <Image
              src={l.src}
              alt={l.title}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-ink/0 transition group-hover:bg-ink/40" />
            <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full bg-ink/60 text-cream backdrop-blur">
              <Play size={12} className="fill-current" />
            </span>
            <span className="absolute bottom-3 left-3 inline-flex items-center gap-1 rounded-full bg-ink/60 px-2.5 py-1 text-xs text-cream opacity-0 backdrop-blur transition group-hover:opacity-100">
              <Heart size={12} className="fill-rose text-rose" /> {l.likes}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
