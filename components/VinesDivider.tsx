"use client";

import React from "react";

interface VinesDividerProps {
  className?: string;
}

const SAGE = "#B5C9B7";

const VinesDivider: React.FC<VinesDividerProps> = ({ className }) => {
  return (
    <div className={`w-full flex justify-center ${className ?? ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80%"
        height="48"
        viewBox="0 0 800 48"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M0 24 C120 4 200 44 320 24 C440 4 520 44 640 24 C720 12 800 24 800 24"
          stroke={SAGE}
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
        />

        {/* Leaf sprouts at three intervals */}
        <g transform="translate(200,18) rotate(-28)">
          <path d="M0 0 C6 -6 18 -6 24 0 C18 6 6 6 0 0Z" fill={SAGE} />
        </g>

        <g transform="translate(400,16) rotate(8)">
          <path d="M0 0 C6 -6 18 -6 24 0 C18 6 6 6 0 0Z" fill={SAGE} />
        </g>

        <g transform="translate(600,20) rotate(25)">
          <path d="M0 0 C6 -6 18 -6 24 0 C18 6 6 6 0 0Z" fill={SAGE} />
        </g>
      </svg>
    </div>
  );
};

export default VinesDivider;
