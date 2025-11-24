"use client";

import { motion } from "framer-motion";

const certs = [
  { title: "Cisco DevNet Associate", issuer: "Cisco (2023)", link: "https://drive.google.com/file/d/1jYhIJSlXs6xgIpc46KxSOn22RWEPmfV8/view?usp=drivesdk" },
  { title: "CCNA", issuer: "Cisco (2024)", link: "https://drive.google.com/file/d/14mL6K7LUpqbGLT-ooHuhrWnoHTQOBXfT/view?usp=drivesdk" },
  { title: "Python Programming", issuer: "NPTEL (2024)", link: "https://drive.google.com/file/d/1yAMGl6W62l1siimLQSd23Qr6o8HdZHrc/view?usp=drivesdk" },
];

export default function SlideCertifications() {
  return (
    <section id="certifications" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />
      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-10 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Certifications Ribbon
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-2xl p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)] holo-border block"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 6, translateZ: 8, scale: 1.02 }}
            >
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-[#00E3FF]/20 to-[#7C4DFF]/20 blur-lg" aria-hidden="true" />
              <div className="relative">
                <div className="text-lg font-semibold text-[var(--mission-text)]">{c.title}</div>
                <div className="text-sm text-[var(--mission-muted)]">{c.issuer}</div>
                <div className="mt-4 h-1.5 w-2/3 bg-gradient-to-r from-[#00E3FF] to-[#7C4DFF] rounded-full" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

