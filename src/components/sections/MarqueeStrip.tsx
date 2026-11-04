import { Marquee } from "@/components/ui/Marquee";
import { marqueeWords } from "@/data/site";

export function MarqueeStrip() {
  return (
    <div className="relative border-y border-cream/10 bg-ink-2/60 py-5">
      <Marquee duration={40}>
        {marqueeWords.map((w) => (
          <span key={w} className="flex items-center">
            <span className="px-6 font-display text-3xl italic text-cream-2/80 sm:text-4xl">{w}</span>
            <span className="size-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
