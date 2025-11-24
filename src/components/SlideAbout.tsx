"use client";

import { motion } from "framer-motion";

export default function SlideAbout() {
  return (
    <section id="about" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />

      <div className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          className="aspect-square rounded-3xl p-1 bg-gradient-to-br from-[#00E3FF]/40 to-[#7C4DFF]/40"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-full w-full rounded-[22px] border border-[var(--mission-border)] bg-[var(--mission-panel)] grid place-items-center">
            <div className="text-4xl font-bold text-[var(--mission-text)]">RG</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-4 glow-text">About</h2>
          <p className="text-[var(--mission-muted)] text-lg leading-relaxed">
            Software Test Engineer at Cisco with hands-on experience across automated testing, AI/LLM, and backend engineering. Passionate about building systems that are fast, reliable, and delightful to use.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "Certifications", v: "5+" },
              { k: "Key Projects", v: "3" },
              { k: "Focus", v: "AI/LLM" },
            ].map((m) => (
              <div key={m.k} className="rounded-xl p-4 border border-[var(--mission-border)] bg-[var(--mission-panel)] text-center">
                <div className="text-2xl font-bold text-[var(--mission-text)]">{m.v}</div>
                <div className="text-sm text-[var(--mission-muted)]">{m.k}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

