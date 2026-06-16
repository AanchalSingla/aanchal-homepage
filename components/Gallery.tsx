"use client";

import React from "react";
import Image from "next/image";

const items = [
  { src: '/images/professional_photo.jpeg', label: 'Professional Mode 💼' },
  { src: '/images/aanchal_mountain.jpeg', label: 'Mountain Days 🏔️' },
  { src: '/images/aanchal_casual.jpeg', label: 'Just Me 🌸' },
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-display)', color: '#3D3535' }}>A Few Moments</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl overflow-hidden">
              <Image src={it.src} alt={it.label} width={800} height={600} className="object-cover w-full h-56" />
              <div className="p-3" style={{ fontFamily: 'var(--font-accent)' }}>{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
