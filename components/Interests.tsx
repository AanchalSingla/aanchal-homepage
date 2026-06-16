"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Interests: React.FC = () => {
  return (
    <section id="interests" className="py-16 bg-warmwhite">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-display)', color: '#3D3535' }}>What I'm Into</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="mb-3" style={{ fontFamily: 'var(--font-accent)' }}>Currently</h3>
            <ul className="space-y-2 text-gray-700">
              <li>📚 Reading non-fiction on consciousness & astronomy</li>
              <li>🧶 Knitting and crocheting</li>
              <li>🎲 Board games (strategy)</li>
              <li>🎬 Horror movies and anime</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-xl overflow-hidden">
              <div style={{ height: 160, position: 'relative' }}>
                <Image src="https://upload.wikimedia.org/wikipedia/en/1/11/Haikyuu_manga_vol1.jpg" alt="Haikyuu" unoptimized width={400} height={240} className="object-cover w-full h-full"/>
              </div>
              <div className="p-3">
                <div className="h-2" style={{ background: '#F4C2C2' }} />
                <h4 className="mt-2 font-semibold">Haikyuu!!</h4>
                <p className="text-sm">Volleyball, teamwork, and the most emotional sports anime you'll ever watch. Fly, little crow.</p>
                <div className="mt-2 text-xs text-gray-500">#Sports #Teamwork</div>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-xl overflow-hidden">
              <div style={{ height: 160, position: 'relative' }}>
                <Image src="https://upload.wikimedia.org/wikipedia/en/9/90/One_Piece%2C_Volume_61_Cover_%28Japanese%29.jpg" alt="One Piece" unoptimized width={400} height={240} className="object-cover w-full h-full"/>
              </div>
              <div className="p-3">
                <div className="h-2" style={{ background: '#F9D5A7' }} />
                <h4 className="mt-2 font-semibold">One Piece</h4>
                <p className="text-sm">900+ episodes in and somehow still the best adventure story ever told. The pirate king awaits.</p>
                <div className="mt-2 text-xs text-gray-500">#Adventure #Epic</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
