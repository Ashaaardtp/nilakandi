"use client";

import {
  Building2,
  HardHat,
  Shield,
} from "lucide-react";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * Section About dengan animated gradient background berjalan.
 */
export default function About() {
  const sectionRef = useRef(null);

  // Animasi background gradient berjalan menggunakan CSS variable (inline style)
  useEffect(() => {
    let frame;
    let percent = 0;
    const section = sectionRef.current;

    function animate() {
      // Gradient akan di-shift secara horizontal menggunakan backgroundPosition
      percent = (percent + 0.12) % 100;
      if (section) {
        section.style.backgroundPosition = `${percent}% 0%`;
      }
      frame = requestAnimationFrame(animate);
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const services = [
    {
      icon: (
        <Building2 className="size-8 text-accent" />
      ),
      title: "Design Studio",
      desc: "Fokus pada pengembangan konsep arsitektural yang unik, perencanaan tata ruang (Interior), serta visualisasi 3D yang detail.",
    },
    {
      icon: (
        <HardHat className="size-8 text-accent" />
      ),
      title: "Engineering & Build",
      desc: "Fokus pada pengembangan konsep arsitektural yang unik, perencanaan tata ruang (Interior), serta visualisasi 3D yang detail.",
    },
    {
      icon: (
        <Shield className="size-8 text-accent" />
      ),
      title: "Legal & Expert",
      desc: "Beroperasi secara legal dan profesional, didukung oleh tim ahli yang memahami regulasi serta standar material bangunan terkini.",
    },
  ];

  // Custom gradient yang akan berjalan
  const gradient =
    "linear-gradient(120deg, #22d2a0 0%, #2962ff 33%, #0e6ea2 66%, #2FFFE1 100%)";

  return (
    <section
      id="about-us"
      ref={sectionRef}
      className="w-full relative text-[--text-main] px-6 py-12 md:px-16 md:py-20 overflow-hidden"
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% 100%",
        backgroundPosition: "0% 0%",
        transition:
          "background-position 0.2s linear",
      }}>
      {/* Overlay agar content tetap readable */}
      <div className="absolute inset-0 bg-primary/80 pointer-events-none z-0" />

      {/* Isi konten di atas overlay */}
      <div className="relative z-10">
        {/* Heading — rata kanan */}
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full text-end mb-10 md:mb-14">
          <span className="inline-flex items-end gap-1 text-3xl md:text-6xl font-bold tracking-tight">
            ABOUT NILAKANDI
            <span className="text-lg md:text-3xl font-playfair font-bold italic text-[--color-accent] mb-1">
              L
            </span>
          </span>
        </motion.h2>

        {/* Konten utama — 2 kolom di desktop */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 md:mb-16">
          {/* Kiri: Judul besar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-4 md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold leading-tight tracking-wide">
              INTEGRATED <br />
              <span className="font-playfair italic">
                ARCHITECTURE
              </span>{" "}
              &<br />
              CONSTRUCTION
            </h3>
            <p className="text-base md:text-lg font-(--font-montserrat) text-[--text-main]/70">
              Crafting Vision, Building Reality.
            </p>
          </motion.div>

          {/* Kanan: Deskripsi */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center gap-4 md:w-1/2">
            <p className="text-md md:text-xl font-semibold font-montserrat leading-relaxed">
              Hadir sejak 2022, PT. Nilakandi Nata
              Pradana mendefinisikan ulang sinergi
              antara estetika studio desain dan
              ketangguhan kontraktor. Kami
              menghadirkan solusi end-to-end yang
              transparan, menggabungkan inovasi
              arsitektural dengan presisi
              konstruksi yang tersertifikasi. Bagi
              kami, setiap proyek adalah dedikasi
              untuk menciptakan ruang yang
              fungsional, aman, dan menginspirasi.
            </p>
            <p className="text-md font-playfair italic">
              Est. 2022 — Modern Standard in
              Architecture
            </p>
          </motion.div>
        </div>

        {/* Cards — 3 kolom di desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="rounded-2xl p-6 flex flex-col gap-4 bg-(--bg-secondary) border border-accent/15 shadow-sm cursor-pointer"
            >
              <div>{service.icon}</div>
              <p className="text-sm font-(--font-montserrat) text-(--text-main) leading-relaxed">
                <span className="font-bold">
                  {service.title}:{" "}
                </span>
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
