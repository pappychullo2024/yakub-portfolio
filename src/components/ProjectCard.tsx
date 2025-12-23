"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { Project } from "../data/projects";

type AnimationDirection = "left" | "right";

export default function ProjectCard({
  project,
  direction = "left",
}: {
  project: Project;
  direction?: AnimationDirection;
}) {
  const xOffset = direction === "left" ? -40 : 40;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/60 backdrop-blur"
    >
      {/* Image Preview */}
      <div className="relative h-40 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>

          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
            {project.status}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-gray-400">
          {project.description}
        </p>

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
            className="mt-6 inline-flex items-center text-sm text-white underline-offset-4 hover:underline"
          >
            View Live →
          </a>
        )}
      </div>
    </motion.div>
  );
}
