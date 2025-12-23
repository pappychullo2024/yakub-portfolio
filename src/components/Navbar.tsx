"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

/* 🔹 Motion Variants */
const leftToCenter: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1], // ease-in
    },
  },
};

const rightToCenter: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 1, 1],
    },
  },
};

const mobileMenuVariants: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.42, 0, 1, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    transition: {
      duration: 0.3,
      ease: [0.42, 0, 1, 1],
    },
  },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LEFT: Logo */}
        <motion.div
          variants={leftToCenter}
          initial="hidden"
          animate="visible"
          className="text-lg font-semibold text-white"
        >
          <span className="flex items-center gap-1 text-lg font-semibold text-white">
            <span>Yakub</span>
            <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-xs text-gray-300">
              dev
            </span>
          </span>
        </motion.div>

        {/* RIGHT: Desktop Nav */}
        <motion.nav
          variants={rightToCenter}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-8 md:flex"
        >
          <NavLink href="#projects">Projects</NavLink>

          <NavLink href="#contact">Contact</NavLink>
        </motion.nav>

        {/* MOBILE: Hamburger */}
        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
          aria-label="Open menu"
        >
          <HiMenu size={26} />
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-cover bg-amber-950 bg-center px-6 pt-4 md:hidden"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/85" />

          <div className="relative">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1 text-lg font-semibold text-white">
                <span>Yakub</span>
                <span className="rounded-md bg-white/10 px-1.5 py-0.5 text-xs text-gray-300">
                  dev
                </span>
              </span>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <HiX size={28} />
              </button>
            </div>

            <div className="mt-4 flex flex-col gap-5 bg-black">
              <MobileNavLink href="#projects" onClick={() => setOpen(false)}>
                Projects
              </MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setOpen(false)}>
                Contact
              </MobileNavLink>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

/* 🔹 Desktop Nav Link */
function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-gray-300 transition-colors hover:text-white"
    >
      {children}
    </a>
  );
}

/* 🔹 Mobile Nav Link */
function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-2xl font-medium text-white"
    >
      {children}
    </a>
  );
}
