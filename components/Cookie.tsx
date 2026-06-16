"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const paw = (x: number, y: number, r: number) => (
  <svg key={`${x}-${y}`} width="24" height="24" viewBox="0 0 24 24" className="absolute" style={{ left: x, top: y }}>
    <path d="M12 13c-2 0-5 2-5 4v1h10v-1c0-2-3-4-5-4z" fill="#E8A0A0" />
  </svg>
);

const Cookie: React.FC = () => {
  const paws = [ {x:20,y:20},{x:300,y:40},{x:120,y:160},{x:20,y:220},{x:360,y:200} ];

  return (
    <section id="cookie" className="py-16" style={{ background: 'rgba(249,213,167,0.3)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-2" style={{ fontFamily: 'var(--font-display)', color: '#3D3535' }}>Meet Cookie 🐾</h2>
        <div className="text-sm mb-6" style={{ fontFamily: 'var(--font-accent)', color: '#B5C9B7' }}>My shih tzu, my best friend, my co-pilot</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <motion.div whileHover={{ rotate: 2, scale: 1.02 }} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(244,194,194,0.35)' }}>
            <Image src="/images/cookie_car.jpeg" alt="Cookie in car" width={800} height={600} className="object-cover w-full h-full"/>
          </motion.div>

          <motion.div whileHover={{ rotate: 2, scale: 1.02 }} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(244,194,194,0.35)' }}>
            <Image src="/images/cookie_bed.jpeg" alt="Cookie on bed" width={800} height={600} className="object-cover w-full h-full"/>
          </motion.div>

          <motion.div whileHover={{ rotate: 2, scale: 1.02 }} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 20px 40px rgba(244,194,194,0.35)' }}>
            <Image src="/images/aanchal_mountain.jpeg" alt="Cookie and mountain" width={800} height={600} className="object-cover w-full h-full"/>
          </motion.div>
        </div>

        <p className="mt-6 max-w-3xl">Cookie is a shih tzu with the personality of a golden retriever and the energy of a toddler who found coffee. She travels with me, photobombs my meetings, and firmly believes she owns every bed she encounters.</p>

        <div className="relative mt-6 h-0">
          {paws.map((p, i) => (
            <div key={i} className="absolute" style={{ left: p.x, top: p.y }}>
              <svg width="28" height="28" viewBox="0 0 24 24">
                <path d="M12 13c-2 0-5 2-5 4v1h10v-1c0-2-3-4-5-4z" fill="#E8A0A0" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cookie;
