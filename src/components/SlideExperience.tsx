"use client";

import { motion } from "framer-motion";

const stops = [
  { id: "s1", label: "Cisco — Test Eng Trainee", meta: "Nov 2024 → Present", x: "10%" },
  { id: "s2", label: "AI/LLM Projects", meta: "2024", x: "45%" },
  { id: "s3", label: "B.Tech ECE", meta: "2019–2023", x: "80%" },
];

export default function SlideExperience() {
  return (
    <section id="experience" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-12 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Journey Timeline
        </motion.h2>

        <div className="relative h-48">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[var(--mission-border)]" />
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#00E3FF] to-[#7C4DFF]" style={{ clipPath: "inset(0 50% 0 0)" }} aria-hidden="true" />

          {stops.map((s, i) => (
            <motion.div
              key={s.id}
              className="absolute -translate-y-1/2"
              style={{ left: s.x, top: "50%" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="telemetry-dot mx-auto" />
              <div className="mt-3 rounded-xl p-4 border border-[var(--mission-border)] bg-[var(--mission-panel)] text-[var(--mission-text)] text-sm w-56 shadow-md">
                <div className="font-semibold">{s.label}</div>
                <div className="text-[var(--mission-muted)]">{s.meta}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

