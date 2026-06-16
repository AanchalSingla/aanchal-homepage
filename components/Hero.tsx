"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import FloatingLeaf from "./FloatingLeaf";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Hero: React.FC = () => {
  return (
    <section id="top" className="py-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.p variants={itemVariants} className="text-sm mb-2" style={{ fontFamily: "var(--font-accent)", color: "#B5C9B7" }}>
              ✦ Hello, I'm
            </motion.p>

            <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-display)" }} className="text-4xl md:text-6xl font-serif mb-4 text-charcoal">
              Aanchal Singla
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-base md:text-lg mb-4 text-gray-700" style={{ fontFamily: "var(--font-body)" }}>
              MBA Candidate @ XIMB · Neuroscientist · Dog Mom · Anime Enthusiast
            </motion.h2>

            <motion.p variants={itemVariants} className="mb-6 text-gray-700 max-w-xl" style={{ fontFamily: "var(--font-body)" }}>
              I'm a UCLA Neuroscience grad now navigating the world of business at XIMB. I believe in leading with curiosity — whether that's in a boardroom, a research lab, or a knitting circle.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="inline-block px-4 py-2 rounded-full" style={{ background: "#B5C9B7", color: "#fff", fontFamily: "var(--font-body)" }} onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
                View My Work ↓
              </button>
            </motion.div>
          </div>

          <div className="relative flex items-center justify-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="relative" style={{ width: 360, height: 360 }}>
                <Image
                  src="/images/professional_photo.jpeg"
                  alt="Aanchal"
                  width={360}
                  height={360}
                  className="rounded-[2rem] object-cover"
                  style={{ boxShadow: "0 20px 40px rgba(244,194,194,0.35)" }}
                />

                {/* Floating leaves around image */}
                <div className="absolute -left-6 -top-6">
                  <FloatingLeaf size={48} color="#B5C9B7" delay={0.2} />
                </div>
                <div className="absolute -right-6 -bottom-6">
                  <FloatingLeaf size={36} color="#C8DFC4" delay={0.6} />
                </div>
                <div className="absolute -right-10 -top-10">
                  <FloatingLeaf size={28} color="#D6C9E8" delay={1} />
                </div>

                {/* Badge overlapping corner */}
                <div className="absolute right-4 top-4">
                  <svg width="96" height="36" viewBox="0 0 96 36" xmlns="http://www.w3.org/2000/svg">
                    <rect width="96" height="36" rx="12" fill="#ffffff" opacity="0.9" />
                    <text x="12" y="22" style={{ fontFamily: "var(--font-accent)", fontSize: 14 }} fill="#2b2b2b">🌿 XIMB '26</text>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
