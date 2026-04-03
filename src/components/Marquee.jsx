"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  const items = [
    "Design Studio",
    "Architecture",
    "Engineering & Build",
    "Construction",
    "Legal & Expert",
    "Interior Design",
    "3D Visualization",
    "Renovation",
  ];

  return (
    <div className="w-full bg-(--bg-secondary) py-3 overflow-hidden border-y border-accent/20">
      <div className="flex animate-marquee whitespace-nowrap">
        {/* Duplikat 2x agar loop terasa mulus */}
        {[...items, ...items].map(
          (item, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, color: "#dadff7" }}
              className="flex items-center gap-4 mx-6 text-sm font-bold tracking-widest uppercase font-montserrat text-(--text-main)/70 cursor-default">
              {item}
              <span className="text-accent text-lg">
                ✦
              </span>
            </motion.span>
          ),
        )}
      </div>
    </div>
  );
}
