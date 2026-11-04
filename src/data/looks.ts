export type LookCategory = "Bridal" | "Pellikuthuru" | "Soft Glam" | "Reception";

export type Look = {
  id: string;
  title: string;
  subtitle: string;
  category: LookCategory;
  src: string;
  width: number;
  height: number;
  date: string;
  likes: string;
  url: string;
  credits?: string;
  featured?: boolean;
};

const ig = (code: string) => `https://www.instagram.com/p/${code}/`;

export const looks: Look[] = [
  {
    id: "DfRCIALSnOF",
    title: "The Wedding Look",
    subtitle: "Gold-on-gold Kanjeevaram with a luminous, skin-like base.",
    category: "Bridal",
    src: "/images/look-03.jpg",
    width: 361,
    height: 640,
    date: "Nov 2026",
    likes: "493",
    url: ig("DfRCIALSnOF"),
    featured: true,
  },
  {
    id: "DeinEuGSIx1",
    title: "Royal Heritage",
    subtitle: "Draped in gold, accented with emeralds.",
    category: "Bridal",
    src: "/images/look-04.jpg",
    width: 360,
    height: 640,
    date: "Oct 2026",
    likes: "271",
    url: ig("DeinEuGSIx1"),
    credits: "Styling @stylingbykarthikaswin · Outfit @shaanvidesignersstudio · Jewels @seetagoldanddiamonds",
  },
  {
    id: "DeOxs2nye7E",
    title: "Pellikuthuru Magic",
    subtitle: "Timeless tradition, radiant glow.",
    category: "Pellikuthuru",
    src: "/images/look-06.jpg",
    width: 361,
    height: 640,
    date: "Oct 2026",
    likes: "561",
    url: ig("DeOxs2nye7E"),
    credits: "Outfit @charanipalli_label · Jewels @seetagoldanddiamonds · Hair @prasad_hairstylist",
    featured: true,
  },
  {
    id: "DebD7T5yVdk",
    title: "The Orange Muse",
    subtitle: "A South Indian muse wrapped in the richness of orange and gold.",
    category: "Pellikuthuru",
    src: "/images/look-05.jpg",
    width: 360,
    height: 640,
    date: "Oct 2026",
    likes: "93",
    url: ig("DebD7T5yVdk"),
  },
  {
    id: "DeJvBBqSftu",
    title: "Golden Hour",
    subtitle: "A collaboration with stylist Karthik Aswin — 2.3K hearts and counting.",
    category: "Reception",
    src: "/images/look-07.jpg",
    width: 360,
    height: 640,
    date: "Oct 2026",
    likes: "2,340",
    url: ig("DeJvBBqSftu"),
    credits: "Styling @stylingbykarthikaswin · Outfit @charanipalli_label",
    featured: true,
  },
  {
    id: "Dbx1qv8yRWA",
    title: "Soft & Subtle",
    subtitle: "Curated soft and subtle makeup for the bride-to-be.",
    category: "Soft Glam",
    src: "/images/look-09.jpg",
    width: 360,
    height: 640,
    date: "Aug 2026",
    likes: "1,947",
    url: ig("Dbx1qv8yRWA"),
    credits: "Saree @amrinkhanofficial · Jewels @pmj_jewels · Hair @prasad_hairstylist",
    featured: true,
  },
  {
    id: "DZFR-qrSvJZ",
    title: "Dreamy Bridal Glow",
    subtitle: "Blending royalty with radiance.",
    category: "Bridal",
    src: "/images/look-00.jpg",
    width: 361,
    height: 640,
    date: "Jun 2026",
    likes: "280",
    url: ig("DZFR-qrSvJZ"),
    credits: "Saree @krushithacouture · Jewellery @mangatraineeraj · Location @tavaro.resorts",
  },
  {
    id: "DbxtKd9SmF2",
    title: "Effortlessly Bridal",
    subtitle: "Enhancing natural beauty for the big day.",
    category: "Soft Glam",
    src: "/images/look-10.jpg",
    width: 360,
    height: 640,
    date: "Aug 2026",
    likes: "332",
    url: ig("DbxtKd9SmF2"),
  },
  {
    id: "DRCjkVIDCEX",
    title: "Shades of Pink & Gold",
    subtitle: "Every piece of jewellery holds a little sparkle of tradition.",
    category: "Reception",
    src: "/images/hero-pink-gold-1.jpg",
    width: 1440,
    height: 1920,
    date: "Nov 2025",
    likes: "409",
    url: ig("DRCjkVIDCEX"),
    credits: "Hair @vicky_hairstylist_official · Saree @sarika_designer_studio · Jewellery @mangatraineeraj · Photo @manish_linga_photography",
  },
  {
    id: "DTFv1M2klnL",
    title: "Soft Glam, Traditional Twist",
    subtitle: "Glowing skin, defined eyes and elegant detailing.",
    category: "Soft Glam",
    src: "/images/look-01.jpg",
    width: 360,
    height: 640,
    date: "Jan 2026",
    likes: "188",
    url: ig("DTFv1M2klnL"),
    credits: "Saree @krushithacouture · Jewellery @manjulajewellers",
  },
  {
    id: "Db8AZ63SzTV",
    title: "Emerald & Gold",
    subtitle: "Soft, subtle and draped in gold.",
    category: "Soft Glam",
    src: "/images/look-08.jpg",
    width: 360,
    height: 640,
    date: "Aug 2026",
    likes: "65",
    url: ig("Db8AZ63SzTV"),
  },
  {
    id: "DbnkVvSyNfd",
    title: "Behind the Glam",
    subtitle: "Every detail tells a story of tradition, grace and celebration.",
    category: "Bridal",
    src: "/images/look-11.jpg",
    width: 360,
    height: 640,
    date: "Aug 2026",
    likes: "106",
    url: ig("DbnkVvSyNfd"),
  },
];

export const categories: ("All" | LookCategory)[] = [
  "All",
  "Bridal",
  "Pellikuthuru",
  "Soft Glam",
  "Reception",
];
