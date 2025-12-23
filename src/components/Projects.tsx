"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Projects
          </h2>
          <p className="mt-4 text-gray-400">
            A selection of real-world products I’ve built from production
            e-commerce platforms to AI-powered applications.
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              direction={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
