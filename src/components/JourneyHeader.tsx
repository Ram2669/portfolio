"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Certifications", href: "#certifications" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function JourneyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const container = document.getElementById("h-scroll");
    if (!container) return;

    const onScroll = () => {
      const left = container.scrollLeft;
      const max = Math.max(1, container.scrollWidth - container.clientWidth);
      setProgress(Math.min(1, left / max));
      setIsScrolled(left > 8);

      const sections = Array.from(
        container.querySelectorAll<HTMLElement>("section[id]")
      );
      let closestId = "home";
      let closestDist = Number.POSITIVE_INFINITY;
      for (const sec of sections) {
        const dist = Math.abs(sec.offsetLeft - left);
        if (dist < closestDist) {
          closestDist = dist;
          closestId = sec.id;
        }
      }
      setActive(`#${closestId}`);
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const container = document.getElementById("h-scroll");
    const target = container?.querySelector<HTMLElement>(`section#${id}`);
    if (container && target) {
      container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[rgba(10,15,31,0.6)] backdrop-blur-md border-b border-[var(--mission-border)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold tracking-wide text-[var(--mission-text)]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
              Ram Gopal Pampana
            </a>
          </motion.div>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                aria-current={active === item.href ? 'page' : undefined}
                className={`relative font-medium pb-1 transition-colors duration-200 border-b-2 ${
                  active === item.href
                    ? 'text-[var(--mission-accent)] border-[var(--mission-accent)]'
                    : 'text-[var(--mission-muted)] border-transparent hover:text-[var(--mission-accent)] hover:border-[var(--mission-accent)]'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--mission-text)] opacity-80 hover:text-[var(--mission-accent)] transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-4 pb-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                    aria-current={active === item.href ? 'page' : undefined}
                    className={`font-medium py-2 transition-colors duration-200 ${
                      active === item.href ? 'text-[var(--mission-accent)]' : 'text-[var(--mission-muted)] hover:text-[var(--mission-accent)]'
                    }`}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        <div className="mt-2 h-[2px] rounded-full bg-[var(--mission-border)] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00E3FF] to-[#7C4DFF]"
            style={{ width: `${Math.round(progress * 100)}%` }}
            aria-hidden="true"
          />
        </div>
      </nav>
    </motion.header>
  );
}

