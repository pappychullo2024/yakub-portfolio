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
    title: "E-Commerce Platform",
    description:
      "A production-ready pet-focused platform designed to improve pet care, discovery, and engagement.",
    tech: ["Next.js", "React", "MongoDB"],
    live: "https://petclaws.com.ng",
    status: "Live",
    image: "/petclaws-background.png",
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
