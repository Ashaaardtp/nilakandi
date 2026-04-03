"use client";

import {
  PenTool,
  Building,
  Wrench,
  Trees,
  Sofa,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      icon: <PenTool className="w-10 h-10" />,
      title: "PERENCANAAN",
      desc: "Visi arsitektural yang terukur, estetis, dan fungsional.",
      highlight: false,
    },
    {
      icon: <Building className="w-10 h-10" />,
      title: "KONSTRUKSI",
      desc: "Eksekusi struktur presisi dengan standar keamanan tinggi.",
      highlight: true,
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: "RENOVASI",
      desc: "Pembaruan fungsi dan estetika modern pada bangunan Anda.",
      highlight: false,
    },
    {
      icon: <Trees className="w-10 h-10" />,
      title: "LANDSCAPE",
      desc: "Harmonisasi area terbuka untuk nilai visual properti.",
      highlight: false,
    },
    {
      icon: <Sofa className="w-10 h-10" />,
      title: "INTERIOR",
      desc: "Penataan ruang artistik yang mencerminkan karakter penghuni.",
      highlight: true,
    },
  ];

  return (
    <section id="services" className="w-full bg-(--bg-primary) text-(--text-main) px-6 py-12 md:px-16 md:py-20">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-10 md:mb-16 gap-4">
        {/* Kiri */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-2 text-3xl md:text-6xl font-bold font-montserrat tracking-tight">
          <span className="text-base md:text-2xl font-bold italic font-playfair text-accentt-2">
            K
          </span>
          OUR EXPERTISE
        </motion.h2>

        {/* Kanan */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:text-right">
          <p className="text-2xl md:text-4xl font-playfair italic text-accent">
            BEYOND
          </p>
          <p className="text-2xl md:text-4xl font-bold font-montserrat tracking-wide">
            CONSTRUCTION
          </p>
          <p className="text-sm md:text-base font-montserrat text-(--text-main)/70 mt-1">
            Comprehensive Solutions for Every
            Structure.
          </p>
        </motion.div>
      </div>

      {/* Cards — baris 1: 3 card, baris 2: 2 card di tengah */}
      <div className="flex flex-col gap-4">
        {/* Baris 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        {/* Baris 2 — 2 card di tengah */}
        <div className="flex justify-center gap-4 mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3">
            {services.slice(3, 5).map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index + 3}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={`rounded-2xl p-8 flex flex-col items-center text-center gap-4 cursor-pointer ${service.highlight ?
        "bg-(--bg-secondary) border border-accent/40"
        : "bg-(--bg-secondary)/60"
        }`}>
      <div
        className={
          service.highlight ?
            "text-accent"
            : "text-(--text-main)/60"
        }>
        {service.icon}
      </div>
      <h3 className="text-sm md:text-base font-bold font-montserrat tracking-widest">
        {service.title}
      </h3>
      <p className="text-xs md:text-sm font-montserrat text-(--text-main)/70 leading-relaxed">
        {service.desc}
      </p>
    </motion.div>
  );
}
