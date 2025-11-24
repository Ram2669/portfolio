"use client";

import { motion } from "framer-motion";
import { Zap, Search, Shield, Code2 } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Chatbot for Infrastructure Management",
    desc: "Multi-agent architecture with Azure OpenAI, RAG via Azure AI Search, and SQL agent for MySQL/Cosmos DB.",
    icon: Zap,
    badge: "Currently Implementing",
  },
  {
    title: "Network Based Pattern Searching",
    desc: "Client–server Python app that searches files over the network with JSON protocol.",
    icon: Search,
    badge: "Completed",
  },
  {
    title: "Self-Fuel Dispensing via RFID",
    desc: "RFID-based self-service fuel system with security and real-time processing.",
    icon: Shield,
    badge: "Completed",
  },
];

export default function SlideProjects() {
  return (
    <section id="projects" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />

      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-8 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Mission Gallery
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="rounded-2xl p-6 border border-[var(--mission-border)] bg-[var(--mission-panel)] holo-border tilt-hover"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl grid place-items-center bg-[#00E3FF]/10 border border-[var(--mission-border)]">
                      <Icon className="text-[var(--mission-accent)]" />
                    </div>
                    <div className="text-lg font-semibold text-[var(--mission-text)]">{p.title}</div>
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs border border-[var(--mission-border)] bg-[rgba(200,209,229,.06)] text-[var(--mission-text)]">{p.badge}</span>
                </div>
                <p className="text-sm text-[var(--mission-muted)] leading-relaxed">{p.desc}</p>
                <div className="mt-4">
                  <a className="inline-flex items-center gap-2 text-[var(--mission-accent)] text-sm" href="#" aria-disabled>
                    <Code2 size={16} /> View Case Study →
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

