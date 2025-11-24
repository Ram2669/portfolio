"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const lines = [
  "> establish_connection",
  "connecting...",
  "connection: ok",
  "> send message",
];

export default function SlideContact() {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let out = "";
    let i = 0;
    const seq = lines.join("\n") + "\n";
    const t = setInterval(() => {
      out += seq[i++] || "";
      setDisplay(out);
      if (i >= seq.length) clearInterval(t);
    }, 25);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="contact" className="slide relative flex items-center justify-center">
      <div className="absolute inset-0 bg-grid mask-radial-faded" />

      <div className="relative z-10 w-full max-w-4xl px-6">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[var(--mission-text)] mb-6 glow-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Establish Connection
        </motion.h2>

        <div className="rounded-2xl p-5 border border-[var(--mission-border)] bg-[var(--mission-panel)] font-mono text-sm text-[var(--mission-text)] h-48 overflow-hidden">
          <pre className="whitespace-pre-wrap leading-6">{display}<span className="inline-block w-2 h-5 bg-[var(--mission-accent)] align-text-bottom animate-pulse" /></pre>
        </div>

        <form
          className="mt-6 grid md:grid-cols-2 gap-4"
          onSubmit={(e) => { e.preventDefault(); alert("Message queued. Thank you!"); }}
        >
          <input className="field" placeholder="Your Email" type="email" required />
          <input className="field" placeholder="Subject" required />
          <textarea className="field md:col-span-2" placeholder="Message" rows={4} required />
          <button className="btn-neon md:col-span-2" type="submit">SEND MESSAGE</button>
        </form>
      </div>
    </section>
  );
}

