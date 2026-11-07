/**
 * Portfolio content for HridayOS — edit this file to update copy across all devices.
 */

export const profile = {
  name: "Hriday Kadam",
  tagline: "Entrepreneur, builder & operator.",
  lockSubtitle: "entrepreneur, builder & operator",
  principles: [
    "Building things I genuinely enjoy.",
    "Working ridiculously hard because I'm passionate about what I'm doing.",
    "Experiencing as much of the world as possible with people I love working with.",
  ],
  bio: [
    "I've spent the last few years building products, experimenting with startups, working with early-stage companies and exploring the intersection of technology, growth and design. I've gone from building my first applications on MIT App Inventor to shipping software, launching products, working with startups and starting ventures of my own.",
    "I'm currently exploring product, design, AI and entrepreneurship. Always building something, breaking something or thinking about what to build next.",
    "I don't have everything figured out. That's kind of the fun part.",
  ],
};

export type Venture = {
  id: string;
  name: string;
  role: string;
  description: string;
  website?: string;
};

export const ventures: Venture[] = [
  {
    id: "redlify",
    name: "Redlify",
    role: "Co-founder",
    description:
      "Building an agency focused on answer engine optimization, AI search visibility and helping companies get discovered across the internet.",
  },
  {
    id: "voiceraft",
    name: "Voiceraft",
    role: "Venture",
    description:
      "Exploring voice AI and automation, building systems that make business workflows more intelligent.",
  },
  {
    id: "brainrot",
    name: "Brainrot Interactive",
    role: "Founder",
    description:
      "An independent gaming studio built around internet culture, absurd ideas and games that don't take themselves too seriously.",
  },
  {
    id: "x-launch",
    name: "X Launch Agency",
    role: "Founder",
    description:
      "Helping products and startups launch, get discovered and build momentum through strategic distribution and social media.",
  },
];

export type Product = {
  id: string;
  name: string;
  role: string;
  description: string;
  stat?: string;
  website?: string;
  tags?: string[];
};

export const products: Product[] = [
  {
    id: "mockcrack",
    name: "Mockcrack",
    role: "Founder / builder",
    description:
      "An AI-powered exam preparation platform designed to make studying more accessible and effective. Built around AI-assisted learning, mock examinations and document rendering.",
    stat: "85+ users · 130+ PDFs rendered",
    tags: ["AI", "EdTech"],
  },
  {
    id: "podbite",
    name: "Podbite",
    role: "Builder",
    description:
      "A podcast clipping tool designed to turn long-form conversations into short-form content.",
    tags: ["AI", "Content"],
  },
  {
    id: "logit",
    name: "Logit",
    role: "Builder",
    description: "A Chrome extension experiment focused on productivity and tracking everyday activity.",
    tags: ["Chrome"],
  },
  {
    id: "fizer",
    name: "Fizer Terminal",
    role: "Builder",
    description: "A command-line developer tool exploring faster and more efficient workflows.",
    tags: ["CLI", "DevTools"],
  },
  {
    id: "zippzag",
    name: "Zipp Zag",
    role: "Builder",
    description:
      "An interactive software experiment exploring reflexes, reactions and engaging user experiences.",
    tags: ["Games"],
  },
  {
    id: "shhh",
    name: "Shhh",
    role: "Developer",
    description:
      "An iOS application built for the Apple Swift Student Challenge 2025. An exploration of native app development and the Apple ecosystem.",
    tags: ["Swift", "iOS"],
  },
  {
    id: "chatcare",
    name: "Chatcare",
    role: "Builder",
    description:
      "A product focused on elderly care and making technology more accessible for people who need it most.",
    tags: ["Health"],
  },
  {
    id: "snapjuice",
    name: "Snapjuice",
    role: "Builder",
    description:
      "A student-focused product experiment built around solving everyday problems for the student community.",
    tags: ["Consumer"],
  },
];

export const collaborations = [
  {
    id: "mediscribe",
    name: "Mediscribe",
    description:
      "Worked on healthcare technology, AI modelling and product development, including a pilot associated with Tata Hospitals Mumbai.",
  },
  {
    id: "opengradient",
    name: "OpenGradient",
    description:
      "Technology and ecosystem-related work in the AI and decentralized technology space.",
  },
  {
    id: "polarcut",
    name: "Polarcut",
    description:
      "Startup and founder's office experience, working around early-stage company operations and execution.",
    website: "https://polarcut.io",
  },
];

export const earlyExperiments = {
  title: "50+ MIT App Inventor projects",
  body: "Before startups, before frameworks, before all the AI tools — there was just me trying to build applications. I started experimenting with software through MIT App Inventor, creating more than 50 applications. Looking back, this was probably where the obsession with building things started.",
};

export const growth = {
  intro:
    "I've spent a significant amount of time understanding how products get attention, how communities work and why some launches take off while others don't.",
  bullets: [
    "Organic growth and distribution",
    "Reddit and community-led marketing",
    "Product launch strategy",
    "Creator and influencer campaigns",
    "Founder-led distribution",
    "Content strategy and positioning",
    "Building growth systems for early-stage startups",
  ],
  footer:
    "I've worked with multiple funded companies and helped generate millions of impressions through organic distribution campaigns.",
};

export const community = [
  {
    id: "hack-club",
    title: "Hack Club Mumbai",
    subtitle: "Community leadership",
    description: "Organizing builders and helping people get started with technology.",
  },
  {
    id: "ya100",
    title: "Young Asians Fellowship 2025",
    subtitle: "Fellowship",
    description: "Focused on ambitious young builders and entrepreneurs.",
  },
  {
    id: "swift",
    title: "Apple Swift Student Challenge 2025",
    subtitle: "Participant & developer",
    description: "Native app development and the Apple ecosystem.",
  },
  {
    id: "ethglobal",
    title: "ETHGlobal New Delhi",
    subtitle: "Hackathon",
    description: "Hackathon and developer ecosystem participation.",
  },
  {
    id: "cal-hacks",
    title: "Cal Hacks 2025",
    subtitle: "Hackathon",
    description: "Hackathon participation and builder community.",
  },
];

export const notes = [
  {
    id: "building",
    title: "What matters",
    body: "Three things: build what I enjoy, work hard because I care, experience the world with people I love working with.",
    updated: "Pinned",
  },
  {
    id: "now",
    title: "Right now",
    body: "Exploring product, design, AI and entrepreneurship. Always building, breaking, or thinking about what to build next.",
    updated: "Today",
  },
  {
    id: "growth-note",
    title: "Distribution",
    body: growth.footer,
    updated: "Work",
  },
];

export const contact = {
  headline: "Say hello",
  message: "Mostly active on X. Links below.",
  links: [
    { id: "x", label: "X", href: "https://x.com/hridaykadam", subtitle: "@hridaykadam" },
    { id: "in", label: "LinkedIn", href: "https://linkedin.com/in/hridaykadam", subtitle: "hridaykadam" },
    { id: "gh", label: "GitHub", href: "https://github.com/hridaykadam", subtitle: "hridaykadam" },
    { id: "sub", label: "Substack", href: "https://substack.com/@hridaykadam/posts", subtitle: "Writing" },
  ],
};

export const siteMeta = {
  systemName: "HridayOS",
  version: "1.0.0",
  tagline: profile.tagline,
};

export const finderFavorites = ["About", "Projects", "Experience", "Notes"];
export const finderRecent = ["Mockcrack", "Redlify", "Hack Club Mumbai"];

export const terminalLines = [
  "HridayOS — welcome back, Hriday.",
  "> whoami",
  "  entrepreneur · builder · operator",
  "> apps",
  "  about projects experiments notes experience contact",
  "> ls ~/ventures",
  "  redlify  voiceraft  brainrot-interactive  x-launch-agency",
  "> ls ~/products",
  "  mockcrack  podbite  logit  fizer-terminal  shhh  ...",
  "> echo ship() || die",
  "ship() || die",
];
