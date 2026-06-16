"use client";

import React from "react";
import { motion } from "framer-motion";

type Entry = {
  company: string;
  role: string;
  dates: string;
  tags: string[];
  bullets: string[];
  borderColor?: string;
};

const entries: Entry[] = [
  {
    company: "Stunning Dentistry",
    role: "Senior Client Relationship Manager",
    dates: "Nov 2024–Sep 2025",
    tags: ["Healthcare", "Client Success"],
    bullets: [
      "Managed customer success for domestic and international leads",
      "Led client acquisition through follow-ups and negotiation",
      "Collaborated with cross-functional teams",
      "Developed long-term patient relationships",
    ],
    borderColor: "#F4C2C2",
  },
  {
    company: "Retina Eye Specialists",
    role: "Office Manager/Ophthalmic Technician",
    dates: "Nov 2021–Nov 2023",
    tags: ["Operations", "Medical Billing"],
    bullets: [
      "Led team of ophthalmic technicians",
      "Resolved complex claim denials and optimized billing",
      "Negotiated insurance contracts and implemented inventory system",
      "Performed diagnostic tests on 500+ patients",
    ],
    borderColor: "#F4C2C2",
  },
  {
    company: "Interaxon UCLA",
    role: "Outreach Associate/Content Creator",
    dates: "Jan–Dec 2020",
    tags: ["Education", "Neuroscience"],
    bullets: [
      "Neuroscience outreach to schools",
      "Lesson plans for high school students",
      "Collaborated on neuroscience YouTube animations",
    ],
    borderColor: "#F4C2C2",
  },
  {
    company: "UCLA Cal Teach",
    role: "Teaching Assistant",
    dates: "Jan–Mar 2019",
    tags: ["Teaching"],
    bullets: ["Worked 1-on-1 with ages 6–8 at UCLA Lab School", "Assisted with academic and behavioral assessments"],
    borderColor: "#F4C2C2",
  },
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-8" style={{ fontFamily: 'var(--font-display)', color: '#3D3535' }}>Experience</h2>

        <div className="relative">
          {/* Center dotted line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-transparent">
            <div className="w-px h-full mx-auto" style={{ backgroundImage: 'repeating-linear-gradient(#B5C9B7 0 4px, transparent 4px 8px)' }} />
          </div>

          <div className="space-y-8">
            {entries.map((e, idx) => (
              <motion.div key={e.company} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`md:flex md:items-start ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:px-6">
                  <div className="bg-warmwhite rounded-xl shadow-md p-6" style={{ borderLeft: `6px solid ${e.borderColor ?? '#F4C2C2'}` }}>
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">{e.company}</h3>
                        <div className="text-sm text-gray-600">{e.role}</div>
                      </div>
                      <div className="text-sm text-gray-500">{e.dates}</div>
                    </div>
                    <div className="mt-3 flex gap-2 text-sm">
                      {e.tags.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-100 rounded-full text-xs">{t}</span>
                      ))}
                    </div>
                    <ul className="mt-3 list-disc pl-5 text-sm">
                      {e.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <h3 className="text-2xl mb-4">Research Experience</h3>
            <div className="space-y-4">
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} className="bg-white rounded-xl p-4" style={{ borderLeft: '6px solid #D6C9E8' }}>
                <strong>Upsilon Club UCLA</strong> — May 2018–May 2019
              </motion.div>
              <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} className="bg-white rounded-xl p-4" style={{ borderLeft: '6px solid #D6C9E8' }}>
                <strong>Elegant Mind Club UCLA</strong> — Sep–Dec 2019
              </motion.div>
            </div>

            <h3 className="text-2xl mt-8 mb-4">Volunteer Work</h3>
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} className="bg-white rounded-xl p-4" style={{ borderLeft: '6px solid #C8DFC4' }}>
              <strong>ENGin Conversation Partner</strong> — Feb–Aug 2024
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
