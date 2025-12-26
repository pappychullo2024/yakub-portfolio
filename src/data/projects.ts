// data/projects.ts

export type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string | null;
  status: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Petclaws Essentials E-Commerce ",
    description:
      "A production-ready pet-focused platform designed to improve pet care, discovery, and engagement.",
    tech: ["Next.js", "React", "MongoDB"],
    live: "https://petclaws.com.ng",
    status: "Live",
    image: "/petclaws-background.png",
  },
  {
    title: "Pompeo Pottery E-Commerce",
    description:
      "A production-ready e-commerce platform for handcrafted porcelain and pottery, featuring custom scroll animations, product discovery, and a refined shopping experience.",
    tech: ["React", "Framer Motion", "CSS Modules"],
    live: "https://webflow-pompeo.netlify.app/",
    status: "Live",
    image: "/pompeo-background.png",
  },
  {
    title: "Analytics Admin Dashboard",
    description:
      "A product-style analytics dashboard inspired by modern analytics platforms, featuring KPI cards, interactive area charts, filter controls, and a scalable admin layout.",
    tech: [
      "Next.js (App Router)",
      "React",
      "Tailwind CSS",
      "Recharts",
      "Framer Motion",
    ],
    live: "https://analytics-admin-dashboard-five.vercel.app/dashboard",
    status: "Live",
    image: "/analytics-dashboard.png",
  },
  {
    title: "PetAI",
    description:
      "An AI-powered application for generating memes, transforming images into animations, and creative visual effects.",
    tech: ["Next.js", "AI APIs", "MongoDB"],
    live: null,
    status: "In Progress",
    image: "/ai-chat.png",
  },
];

// export const projects = [
//   {
//     title: "PetClaws",
//     description:
//       "A production-ready pet-focused platform designed to improve pet care, discovery, and engagement.",
//     tech: ["Next.js", "React", "MongoDB"],
//     live: "https://petclaws.com.ng",
//     status: "Production",
//   },
//   {
//     title: "PetAI",
//     description:
//       "An AI-powered application for generating memes, transforming images into animations, and creative visual effects.",
//     tech: ["Next.js", "AI APIs", "MongoDB"],
//     live: null,
//     status: "In Progress",
//   },
// ];
