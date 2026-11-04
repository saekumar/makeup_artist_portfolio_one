# Swarna Reddy Makeovers — Portfolio

High-end personal portfolio for Hyderabad bridal makeup artist [@swarna_reddy_makeovers](https://www.instagram.com/swarna_reddy_makeovers/).

Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**. UI language inspired by Aceternity UI, 21st.dev and vibrant.design: aurora/spotlight backgrounds, word-by-word text reveals, spotlight cards, magnetic buttons, infinite marquees and an animated lightbox gallery.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Structure

- `src/app` — layout (fonts, metadata), global theme tokens, single-page composition
- `src/components/sections` — Hero, Gallery, About, Services, Testimonials, InstagramFeed, Contact, Footer
- `src/components/ui` — reusable motion primitives (Reveal/TextReveal, CardSpotlight, MagneticButton, Marquee, Lightbox, Aurora/Spotlight, BrandIcons)
- `src/data/site.ts` — brand, links, services, process, testimonials, nav
- `src/data/looks.ts` — portfolio items (title, category, image, Instagram post URL, credits)
- `public/images` — portfolio imagery sourced from the artist's public Instagram posts

## Content notes

- Testimonials in `src/data/site.ts` are placeholders — replace with real client quotes before launch.
- Enquiry form opens WhatsApp with a pre-filled message (`site.whatsapp`); no backend required.
- Set `metadataBase` in `src/app/layout.tsx` once the production domain is known.
