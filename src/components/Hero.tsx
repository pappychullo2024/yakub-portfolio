"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Yakub Ojoawo
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          Frontend Engineer specializing in React & Next.js.
          <br />I build scalable, high-performance web applications and
          AI-powered products.
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <a
            href="#projects"
            className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black hover:bg-white/90 transition-colors"
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
    </section>
  );
}
