"use client";

import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  tech: string[];
  live: string | null;
  status: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-sm text-gray-400">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-black/50 px-2 py-1 text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block text-sm text-white underline-offset-4 hover:underline"
          >
            View Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}
