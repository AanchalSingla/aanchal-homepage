"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "cookie", label: "Cookie" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);

  function handleNavClick(id?: string) {
    setOpen(false);
    if (!id) return;
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <header className="sticky top-0 z-50 bg-warmwhite border-b" style={{ borderColor: "#B5C9B7" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="text-2xl"
            onClick={() => handleNavClick("top")}
            aria-label="Home"
            style={{ fontFamily: "var(--font-accent)", color: "#E8A0A0" }}
          >
            Aanchal ✿
          </button>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => handleNavClick(l.id)}
              className="text-sm text-charcoal hover:underline"
              style={{ color: "#3D3535" }}
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3D3535" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden bg-warmwhite border-b"
            style={{ borderColor: "#B5C9B7" }}
          >
            <div className="px-6 pt-4 pb-6 flex flex-col gap-4">
              {links.map((l) => (
                <button
                  key={l.id}
                  onClick={() => handleNavClick(l.id)}
                  className="text-left w-full py-2"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
