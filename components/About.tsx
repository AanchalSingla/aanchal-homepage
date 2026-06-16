"use client";

import React from "react";
import { motion } from "framer-motion";

const stories = [
  {
    emoji: "🏙️",
    title: "Born & Raised in Delhi",
    text: "Grew up in New Delhi, where my love for learning, people, and good food took root.",
    bg: "#F4C2C2",
  },
  {
    emoji: "✈️",
    title: "Moved to LA at 18",
    text: "Packed my bags and flew to Los Angeles to study Neuroscience at UCLA — one of the best decisions I ever made.",
    bg: "#D6C9E8",
  },
  {
    emoji: "🔬",
    title: "Built a Career in LA",
    text: "Spent two years in Los Angeles working in healthcare, managing clinic operations and patient care at Retina Eye Specialists.",
    bg: "#F9D5A7",
  },
  {
    emoji: "🇮🇳",
    title: "Came Home, Then Level Up",
    text: "Returned to India, spent a year in client success at Stunning Dentistry, then decided it was MBA time. Now at XIMB, Bhubaneswar.",
    bg: "#C8DFC4",
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-warmwhite">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-8" style={{ fontFamily: "var(--font-display)", color: "#3D3535" }}>
          A Little About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="prose max-w-none text-gray-800">
            <p>
              I'm Aanchal — currently pursuing an MBA at XIMB and a UCLA Neuroscience graduate. I have a background in healthcare operations and client-facing roles where I've combined analytical problem solving with compassionate stakeholder management to improve patient experience and operational efficiency.
            </p>
          </motion.div>

          <div className="space-y-4">
            {stories.map((story) => (
              <motion.div
                key={story.title}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl p-5"
                style={{ background: story.bg }}
              >
                <div className="text-lg font-semibold" style={{ fontFamily: "var(--font-accent)" }}>
                  {story.emoji} {story.title}
                </div>
                <p className="mt-2 text-sm text-gray-800">{story.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Leadership",
            "Relationship Management",
            "Operations",
            "Communication & Interpersonal Skills",
            "Medical Billing & Terminology",
            "Research & Analysis",
          ].map((s) => (
            <span key={s} className="px-4 py-2 rounded-full text-sm" style={{ background: "#F4C2C2" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
