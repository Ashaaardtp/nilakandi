"use client";

import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section id="contact" className="w-full bg-(--bg-primary) text-(--text-main) px-6 py-12 md:px-16 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl">
        {/* Gradient Background - Dark Blue to Red */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#c44536]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between p-8 md:p-12 lg:p-16 gap-6 md:gap-12">
          {/* Left Side */}
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-start gap-3">
              <span className="text-2xl md:text-3xl text-white/80">*</span>
              <div>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-montserrat text-white tracking-tight">
                  READY TO
                </h2>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-montserrat text-white tracking-tight">
                  CONSTRUCT
                </h2>
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold font-montserrat text-white tracking-tight">
                  YOUR VISION?
                </h2>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base font-montserrat text-white/80 max-w-md">
              From precise engineering to flawless execution.
            </motion.p>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 group cursor-pointer hover:opacity-80 transition-opacity">
            <span className="text-base md:text-xl font-bold font-montserrat text-white tracking-wide">
              START BUILDING
            </span>
            <motion.div
              whileHover={{ scale: 1.1, backgroundColor: "white" }}
              transition={{ duration: 0.2 }}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white flex items-center justify-center">
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-white group-hover:text-[#c44536]" />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
