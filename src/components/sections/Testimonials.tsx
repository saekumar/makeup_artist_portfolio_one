import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import { SectionHeading } from "@/components/ui/Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-cream/10 bg-ink-2/40 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Kind words"
          title="What brides remember."
          align="center"
        />
      </div>
      <InfiniteMovingCards items={testimonials} duration={70} />
      <InfiniteMovingCards items={[...testimonials].reverse()} duration={80} reverse />
    </section>
  );
}
