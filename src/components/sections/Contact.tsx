"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Instagram, Youtube } from "@/components/ui/BrandIcons";
import { Aurora } from "@/components/ui/Backgrounds";
import { Reveal, SectionHeading } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const field =
  "w-full rounded-2xl border border-cream/10 bg-ink-2/70 px-5 py-4 text-sm text-cream placeholder:text-muted/70 outline-none transition focus:border-gold/60 focus:ring-2 focus:ring-gold/20";

export function Contact() {
  const [form, setForm] = useState({ name: "", date: "", event: "Bridal (Wedding day)", city: "", message: "" });

  function submit(e: FormEvent) {
    e.preventDefault();
    const text = [
      `Hi Swarna! I'd love to book you.`,
      `Name: ${form.name}`,
      `Event: ${form.event}`,
      `Date: ${form.date}`,
      `City / venue: ${form.city}`,
      form.message && `Notes: ${form.message}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.open(`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`, "_blank");
  }

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <Aurora className="opacity-70" />
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Book your date"
            title="Let's plan your bridal glow."
            description="Wedding dates for 2026 and 2027 are filling up. Share your details and I'll get back within 24 hours with availability and a quote."
          />
          <Reveal>
            <div className="flex flex-col gap-4">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-ink-2/60 px-6 py-5 transition hover:border-gold/50"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <MessageCircle className="text-gold" />
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted">WhatsApp</span>
                    <span className="block truncate font-display text-xl text-cream sm:text-2xl">{site.whatsappDisplay}</span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-ink-2/60 px-6 py-5 transition hover:border-gold/50"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Instagram className="text-gold" />
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted">Instagram</span>
                    <span className="block truncate font-display text-xl text-cream sm:text-2xl">@{site.handle}</span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </a>
              <a
                href={site.youtube}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-cream/10 bg-ink-2/60 px-6 py-5 transition hover:border-gold/50"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <Youtube className="text-gold" />
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.3em] text-muted">YouTube</span>
                    <span className="block truncate font-display text-xl text-cream sm:text-2xl">Swarna Reddy Makeovers</span>
                  </span>
                </span>
                <ArrowUpRight className="shrink-0 text-muted transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-gold" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={submit}
            className="relative rounded-[2rem] border border-gold/20 bg-ink-2/50 p-7 backdrop-blur-xl sm:p-10"
          >
            <div className="pointer-events-none absolute -inset-px rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-rose/10 opacity-60" />
            <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input required placeholder="Your name" value={form.name} onChange={update("name")} className={field} />
              <input required type="date" value={form.date} onChange={update("date")} className={field} />
              <select value={form.event} onChange={update("event")} className={field}>
                {["Bridal (Wedding day)", "Pellikuthuru / Haldi", "Reception / Sangeet", "Engagement / Mehendi", "Destination wedding", "Family / party glam"].map((o) => (
                  <option key={o} className="bg-ink-2">{o}</option>
                ))}
              </select>
              <input required placeholder="City or venue" value={form.city} onChange={update("city")} className={field} />
              <textarea
                rows={4}
                placeholder="Tell me about your outfits, jewellery and the look you're dreaming of…"
                value={form.message}
                onChange={update("message")}
                className={`${field} sm:col-span-2`}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="relative mt-6 flex w-full items-center justify-center gap-2 overflow-hidden rounded-full py-4 text-sm font-semibold text-ink"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-2 via-gold to-[#c89b2a]" />
              <span className="relative flex items-center gap-2">
                Send enquiry on WhatsApp <ArrowUpRight size={16} />
              </span>
            </motion.button>
            <p className="relative mt-4 text-center text-xs text-muted">
              Opens WhatsApp with your details pre-filled. No spam, ever.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
