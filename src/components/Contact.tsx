"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaEnvelope,
  FaGoogle,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-36">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-12 md:grid-cols-2"
        >
          {/* LEFT: Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative h-80 w-65 overflow-hidden rounded-xl border border-white/10">
              <Image
                src="/yakub.png"
                alt="Yakub Ojoawo"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* RIGHT: Text + Links */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white">
              Let’s work together
            </h2>

            <p className="mt-4 text-gray-400 max-w-md">
              I’m open to remote roles, freelance projects, and collaborations.
              Reach out through any platform below — I respond fast.
            </p>
            {/* Contact Icons */}
            <div className="mt-8 flex flex-wrap gap-5 text-gray-500 ">
              <ContactIcon
                href="mailto:yakubojawo@gmail.com"
                icon={<FaGoogle />}
                label="Gmail"
                hoverColor="group-hover:text-red-500"
              />

              <ContactIcon
                href="mailto:korede.larry@yahoo.com"
                icon={<FaEnvelope />}
                label="Yahoo Mail"
                hoverColor="group-hover:text-purple-500"
              />
              <ContactIcon
                href="https://wa.me/2347081654681"
                icon={<FaWhatsapp />}
                label="WhatsApp"
                hoverColor="group-hover:text-green-500"
              />

              <ContactIcon
                href="https://t.me/yakubojoawo"
                icon={<FaTelegramPlane />}
                label="Telegram"
                hoverColor="group-hover:text-sky-400"
              />
              <ContactIcon
                href="https://www.linkedin.com/in/yakub-akorede-615233139"
                icon={<FaLinkedin />}
                label="LinkedIn"
                hoverColor="group-hover:text-sky-500"
              />
              <ContactIcon
                href="https://github.com/"
                icon={<FaGithub />}
                label="GitHub"
                hoverColor="group-hover:text-white"
              />
              <ContactIcon
                href="https://www.instagram.com/koredelarry"
                icon={<FaInstagram />}
                label="Instagram"
                hoverColor="group-hover:text-pink-500"
              />

              <ContactIcon
                href="https://www.facebook.com/share/1AXztcKr9f/"
                icon={<FaFacebook />}
                label="Facebook"
                hoverColor="group-hover:text-blue-500"
              />

              <ContactIcon
                href="https://www.tiktok.com/@meena_s_daddy"
                icon={<FaTiktok />}
                label="TikTok"
                hoverColor="group-hover:text-cyan-400"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* 🔹 Reusable Icon Component */
function ContactIcon({
  href,
  icon,
  label,
  hoverColor,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  hoverColor: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-gray-500 transition-all hover:border-white/30 hover:-translate-y-1"
    >
      <span className={`text-xl transition-colors duration-200 ${hoverColor}`}>
        {icon}
      </span>
    </a>
  );
}
