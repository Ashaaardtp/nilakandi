"use client";

import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('/gambar.webp')",
      }}>
      <div className="backdrop-blur-md bg-(--bg-primary)/70 rounded-2xl px-6 py-8 md:px-16 md:py-14 mx-4 md:mx-8 flex flex-col items-start text-(--text-main) max-w-4xl w-full gap-4 md:gap-8">
        {/* Heading */}
        <h2 className="w-full">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-start gap-2 text-2xl md:text-6xl font-bold font-montserrat tracking-tight">
            <span className="text-base md:text-3xl font-bold italic font-playfair text-accent mt-1 md:mt-2">
              N
            </span>
            DESIGNED TO LAST
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-xl md:text-5xl font-playfair font-semibold italic tracking-wide text-accent mt-1 md:mt-2">
            Built to Inspire
          </motion.span>
        </h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-right text-lg md:text-xl font-montserrat text-(--text-main)/90 w-full leading-relaxed">
          Kami tidak hanya menggambar mimpi, kami
          membangunnya. Integrasi sempurna antara
          visi arsitektural dan eksekusi
          konstruksi yang presisi.
        </motion.p>

        {/* Button + Stats */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full gap-6 md:gap-0 mt-1 md:mt-2">
          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-accent text-(--bg-primary) font-bold font-montserrat px-4 py-2 md:px-8 md:py-3.5 rounded-full text-xs md:text-base shadow-lg hover:opacity-90 transition-opacity w-fit">
            Mulai Proyek Anda
            <ExternalLink className="w-3 h-3 md:w-5 md:h-5" />
          </motion.button>

          {/* Stats */}
          <div className="flex flex-row gap-6 md:gap-10">
            {[
              { number: "50+", label: "Proyek Selesai" },
              { number: "30+", label: "Klien Puas" },
              { number: "10+", label: "Tenaga Ahli" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                className="flex flex-col items-start md:items-center">
                <span className="text-2xl md:text-6xl font-bold font-montserrat">
                  {stat.number}
                </span>
                <span className="text-xs md:text-sm font-montserrat text-(--text-main)/80 mt-0.5 md:mt-1">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
