'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Download, Sparkles, Code, Brain, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Software Engineer",
    "AI & ML Enthusiast",
    "Cisco Certified DevNet Associate"
  ];
  const fullText = roles[currentRole];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        // After completing current text, wait and switch to next role
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setText('');
        }, 2000);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [currentRole, fullText, roles.length]);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--mission-surface)]">

      {/* Subtle grid overlay for depth */}
      <div className="absolute inset-0 bg-grid mask-radial-faded" />


      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full p-0.5 border border-[var(--mission-border)] bg-[rgba(0,227,255,.12)]">
              <div className="w-full h-full rounded-full bg-[var(--mission-panel)] flex items-center justify-center">
                <span className="text-2xl font-bold text-[var(--mission-text)]">RG</span>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-[var(--mission-text)] mb-4 glow-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.span
              className="text-[var(--mission-text)]"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              Ram Gopal Pampana
            </motion.span>
          </motion.h1>

          {/* Animated Title */}
          <motion.div
            className="text-2xl md:text-3xl text-[var(--mission-accent)] mb-6 h-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="font-medium">{text}</span>
            <motion.span
              className="inline-block w-0.5 h-8 bg-[var(--mission-accent)] ml-1"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl text-[var(--mission-muted)] mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Software Test Engineer at Cisco with expertise in automated testing, AI solutions, and full-stack development.
            Currently learning LangChain and LangGraph for advanced AI applications.
          </motion.p>

              {/* Quick credibility metrics */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="rounded-xl border border-[var(--mission-border)] bg-[color:var(--mission-panel)]/70 backdrop-blur p-4 shadow-sm">
                  <div className="text-3xl font-bold text-[var(--mission-text)]">5+</div>
                  <div className="text-sm text-[var(--mission-muted)]">Certifications</div>
                </div>
                <div className="rounded-xl border border-[var(--mission-border)] bg-[color:var(--mission-panel)]/70 backdrop-blur p-4 shadow-sm">
                  <div className="text-3xl font-bold text-[var(--mission-text)]">3</div>
                  <div className="text-sm text-[var(--mission-muted)]">Key Projects</div>
                </div>
                <div className="rounded-xl border border-[var(--mission-border)] bg-[color:var(--mission-panel)]/70 backdrop-blur p-4 shadow-sm">
                  <div className="text-3xl font-bold text-[var(--mission-text)]">Cisco</div>
                  <div className="text-sm text-[var(--mission-muted)]">DevNet Associate</div>
                </div>
              </motion.div>




          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <motion.button
              onClick={scrollToAbout}
              className="bg-[var(--mission-accent)] text-black hover:brightness-110 px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Me
            </motion.button>

            <motion.a
              href="/Pampana_Siva_Surya_Ram_Gopal_Resume_2025.pdf"
              download="Pampana_Siva_Surya_Ram_Gopal_Resume_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[var(--mission-accent)] text-[var(--mission-accent)] hover:bg-[var(--mission-accent)] hover:text-black px-10 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
        >
          <motion.button
            onClick={scrollToAbout}
            className="text-[var(--mission-muted)] hover:text-[var(--mission-accent)] transition-colors duration-200"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
