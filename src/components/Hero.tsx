"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Abstract background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Portrait layer – desktop only */}
      <div className="absolute inset-y-0 left-0 hidden w-1/2 md:block">
        <div className="relative h-full w-full">
          <Image
            src="/hero-portrait.png"
            alt="Yakub Ojoawo portrait"
            fill
            priority
            className="
  object-cover
  grayscale
  opacity-80
  contrast-90
  mask-[linear-gradient(to_right,black,transparent)]
"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="ml-auto max-w-xl"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Yakub Ojoawo
          </h1>

          <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-gray-300">
            Frontend Engineer specializing in React & Next.js.
            <br />I build scalable, high-performance web and AI-powered
            applications.
          </p>

          <div className="mt-12 flex gap-6">
            <a
              href="#projects"
              className="rounded-md bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-white/90"
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
