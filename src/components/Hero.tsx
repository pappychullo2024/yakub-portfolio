"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Yakub Ojoawo
          </h1>

          <p className="mt-6 text-[17px] leading-relaxed text-gray-300">
            Frontend Engineer focused on building clean, scalable, and
            high-performance web applications using React and Next.js.
            <br />I care deeply about UX, performance, and maintainable code.
          </p>

          <div className="mt-12 flex justify-center gap-6">
            <a
              href="#projects"
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors duration-200 hover:bg-white/90"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="text-sm font-medium text-gray-300 underline-offset-4 hover:underline"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
