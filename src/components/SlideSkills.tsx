"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "Python / FastAPI", level: 90, subs: ["LangChain", "Pydantic", "Asyncio"] },
  { name: "AI/LLMs & RAG", level: 85, subs: ["Azure OpenAI", "LangGraph", "Embeddings"] },
  { name: "Backend APIs", level: 80, subs: ["REST", "Auth", "Caching"] },
  { name: "Databases", level: 78, subs: ["MySQL", "Cosmos DB", "SQL"] },
  { name: "Testing & QA", level: 92, subs: ["Selenium", "Pytest", "CI"] },
];

export default function SlideSkills() {
  return (
    <section id="skills" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />
      <div className="relative z-10 w-full max-w-5xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-8 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Systems Skills Telemetry
        </motion.h2>

        <div className="space-y-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="rounded-xl p-4 border border-[var(--mission-border)] bg-[var(--mission-panel)] holo-border"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="text-[var(--mission-text)] font-semibold tracking-wide uppercase">
                  {s.name}
                </div>
                <div className="text-[var(--mission-accent)] font-bold">{s.level}%</div>
              </div>
              <div className="h-3 rounded-md bg-[rgba(200,209,229,.06)] border border-[var(--mission-border)] overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#00E3FF] to-[#7C4DFF]"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 1 }}
                />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.subs.map((sub) => (
                  <span
                    key={sub}
                    className="px-3 py-1 rounded-full text-xs border border-[var(--mission-border)] bg-[rgba(200,209,229,.06)] text-[var(--mission-text)]"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

