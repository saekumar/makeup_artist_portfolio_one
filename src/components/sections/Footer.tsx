import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Instagram, Youtube } from "@/components/ui/BrandIcons";
import { navLinks, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="font-display text-3xl text-cream">
            Swarna Reddy <span className="italic text-gold-2">Makeovers</span>
          </div>
          <p className="mt-2 max-w-sm text-sm text-muted">
            Bridal makeup artist · {site.location} · Travels globally
          </p>
        </div>
        <ul className="flex flex-wrap gap-6 text-sm text-cream-2">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="transition hover:text-gold">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {[
            { href: site.instagram, Icon: Instagram, label: "Instagram" },
            { href: site.youtube, Icon: Youtube, label: "YouTube" },
            { href: `https://wa.me/${site.whatsapp}`, Icon: MessageCircle, label: "WhatsApp" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noreferrer"
              className="grid size-11 place-items-center rounded-full border border-cream/10 text-cream-2 transition hover:border-gold hover:text-gold"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-cream/5 px-6 py-6 text-xs text-muted sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} {site.brand}. All rights reserved.</span>
        <span>Photography & reels © their respective creators · @{site.handle}</span>
      </div>
      <div
        aria-hidden
        className="pointer-events-none select-none px-6 pb-4 text-center font-display text-[18vw] leading-none text-stroke opacity-[0.07]"
      >
        swarna
      </div>
    </footer>
  );
}
