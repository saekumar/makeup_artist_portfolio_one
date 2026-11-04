import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";
import { Gallery } from "@/components/sections/Gallery";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { InstagramFeed } from "@/components/sections/InstagramFeed";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Gallery />
      <About />
      <Services />
      <Testimonials />
      <InstagramFeed />
      <Contact />
      <Footer />
    </main>
  );
}
