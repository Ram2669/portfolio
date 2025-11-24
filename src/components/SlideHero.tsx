"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Python Developer",
  "AI/LLM Engineer",
  "Backend Architect",
];

export default function SlideHero() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const full = roles[i];
    let idx = 0;
    const t = setInterval(() => {
      setText(full.slice(0, idx++));
      if (idx > full.length) {
        clearInterval(t);
        setTimeout(() => {
          setI((p) => (p + 1) % roles.length);
          setText("");
        }, 1200);
      }
    }, 70);
    return () => clearInterval(t);
  }, [i]);

  const goto = (id: string) => {
    const container = document.getElementById("h-scroll");
    const target = container?.querySelector<HTMLElement>(`section#${id}`);
    if (container && target) container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
  };

  return (
    <section id="home" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />

      {/* Hologram gradients */}
      <div className="pointer-events-none absolute -top-24 -left-32 w-80 h-80 rounded-full bg-[#00E3FF]/20 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -bottom-24 -right-32 w-80 h-80 rounded-full bg-[#7C4DFF]/20 blur-3xl animate-blob animation-delay-2000" />

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-[#00E3FF] to-[#7C4DFF]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ram Gopal Pampana
        </motion.h1>

        <motion.div
          className="mt-3 text-2xl md:text-3xl text-[var(--mission-accent)] h-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="font-medium">{text}</span>
          <motion.span
            className="inline-block w-[2px] h-7 bg-[var(--mission-accent)] ml-1 align-middle"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.div>

        <motion.p
          className="mt-6 text-[var(--mission-muted)] text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Building intelligent, production-ready systems: multi-agent architectures, RAG pipelines, and robust APIs with a quality-first mindset.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <button
            onClick={() => goto("about")}
            className="btn-neon"
          >
            Explore Portfolio
          </button>
          <a
            href="/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.pdf"
            download
            className="btn-ghost"
          >
            DOWNLOAD RESUME
          </a>
        </motion.div>

        <motion.div
          className="mt-12 text-[var(--mission-muted)]"
          animate={{ x: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          Swipe Right →
        </motion.div>
      </div>
    </section>
  );
}

