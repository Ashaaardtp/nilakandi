"use client";

import { motion } from "framer-motion";

export default function HouseSketch() {
  return (
    <section className="w-full bg-(--bg-primary) text-(--text-main) px-6 py-12 md:px-16 md:py-20">
      {/* 2D House Sketch Container */}
      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
          className="relative w-full max-w-4xl">
          <svg
            viewBox="0 0 800 600"
            className="w-full h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background */}
            <rect width="800" height="600" fill="var(--bg-primary)" />

            {/* Ground */}
            <rect x="0" y="450" width="800" height="150" fill="#8B7355" opacity="0.3" />

            {/* House Base */}
            <rect x="200" y="250" width="400" height="200" fill="#F5E6D3" stroke="#8B7355" strokeWidth="3" />

            {/* Roof */}
            <polygon points="150,250 400,100 650,250" fill="#8B4513" stroke="#654321" strokeWidth="3" />

            {/* Roof Details */}
            <line x1="400" y1="100" x2="400" y2="250" stroke="#654321" strokeWidth="2" />
            <polygon points="150,250 200,200 250,250" fill="#654321" opacity="0.3" />
            <polygon points="550,250 600,200 650,250" fill="#654321" opacity="0.3" />

            {/* Door */}
            <rect x="350" y="350" width="100" height="100" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <circle cx="430" cy="400" r="3" fill="#FFD700" />

            {/* Windows */}
            <rect x="250" y="300" width="60" height="60" fill="#87CEEB" stroke="#8B7355" strokeWidth="2" />
            <line x1="280" y1="300" x2="280" y2="360" stroke="#8B7355" strokeWidth="2" />
            <line x1="250" y1="330" x2="310" y2="330" stroke="#8B7355" strokeWidth="2" />

            <rect x="490" y="300" width="60" height="60" fill="#87CEEB" stroke="#8B7355" strokeWidth="2" />
            <line x1="520" y1="300" x2="520" y2="360" stroke="#8B7355" strokeWidth="2" />
            <line x1="490" y1="330" x2="550" y2="330" stroke="#8B7355" strokeWidth="2" />

            {/* Chimney */}
            <rect x="500" y="150" width="40" height="80" fill="#8B4513" stroke="#654321" strokeWidth="2" />
            <rect x="495" y="140" width="50" height="20" fill="#654321" />

            {/* Trees */}
            <ellipse cx="100" cy="400" rx="40" ry="60" fill="#228B22" opacity="0.8" />
            <rect x="90" y="400" width="20" height="50" fill="#8B4513" />

            <ellipse cx="700" cy="400" rx="40" ry="60" fill="#228B22" opacity="0.8" />
            <rect x="690" y="400" width="20" height="50" fill="#8B4513" />

            {/* Path */}
            <rect x="380" y="450" width="40" height="100" fill="#D2691E" opacity="0.5" />

            {/* Clouds */}
            <ellipse cx="150" cy="80" rx="30" ry="20" fill="white" opacity="0.7" />
            <ellipse cx="180" cy="85" rx="25" ry="18" fill="white" opacity="0.7" />
            <ellipse cx="650" cy="60" rx="35" ry="22" fill="white" opacity="0.7" />
            <ellipse cx="680" cy="65" rx="28" ry="20" fill="white" opacity="0.7" />

            {/* Sun */}
            <circle cx="720" cy="100" r="30" fill="#FFD700" opacity="0.8" />

            {/* Birds */}
            <path d="M 300 50 Q 310 45 320 50" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M 340 60 Q 350 55 360 60" stroke="#333" strokeWidth="2" fill="none" />
            <path d="M 320 70 Q 330 65 340 70" stroke="#333" strokeWidth="2" fill="none" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
