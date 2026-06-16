"use client";

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8" style={{ background: 'rgba(181,201,183,0.4)' }}>
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20 }}>Aanchal Singla</div>
        <div style={{ fontFamily: 'var(--font-accent)', marginTop: 6 }}>Made with matcha, anime, and Cookie's moral support 🐾</div>
        <div className="mt-4 text-sm">aanchal.singla04@gmail.com | +91-9971235386</div>
        <div className="mt-1 text-sm">New Delhi · Bhubaneswar</div>
        <div className="mt-3 text-xs">© 2026 Aanchal Singla</div>
      </div>
    </footer>
  );
};

export default Footer;
