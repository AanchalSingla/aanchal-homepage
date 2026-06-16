"use client";

import React from "react";
import { motion } from "framer-motion";

const EduCard: React.FC<{ school: string; degree: string; years: string; color: string; badge: string }>= ({ school, degree, years, color, badge }) => (
  <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-md p-6" style={{ borderTop: `6px solid ${color}` }}>
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-xl font-semibold">{school}</h3>
        <div className="text-sm text-gray-600">{degree}</div>
      </div>
      <div className="text-sm text-gray-500">{years}</div>
    </div>
    <div className="mt-3 inline-block px-3 py-1 rounded-full text-sm" style={{ background: color, color: '#fff' }}>{badge}</div>
  </motion.div>
);

const Education: React.FC = () => {
  return (
    <section id="education" className="py-16" style={{ background: 'rgba(214,201,232,0.2)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-8" style={{ fontFamily: 'var(--font-display)', color: '#3D3535' }}>Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <EduCard school="XIMB" degree="MBA" years="2025–Present" color="#B5C9B7" badge="🌱 Currently Enrolled" />
          <EduCard school="UCLA" degree="BS Neuroscience" years="2017–2021" color="#D6C9E8" badge="✓ Graduated" />
        </div>
      </div>
    </section>
  );
};

export default Education;
