"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const servicesLink = [
    "Perencanaan",
    "Konstruksi",
    "Renovasi",
    "Landscape",
    "Interior"
  ];
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about-us" },
    { label: "Services", href: "#services" },
    { label: "Project", href: "#project" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full bg-[#3a4a4f] text-white px-6 py-12 md:px-16 md:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold font-playfair italic tracking-wide">
              NLKND
            </h2>
            <h3 className="text-sm font-montserrat font-medium">
              Studio & Contractor
            </h3>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex gap-3 mt-4">
              <a
                href="https://instagram.com/nilakandi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-white/30 rounded flex items-center justify-center hover:border-white/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4">
            <h4 className="text-sm font-bold font-montserrat tracking-widest uppercase">
              Services
            </h4>
            <ul className="flex flex-col gap-2">
              {servicesLink.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="transition-transform">
                  <Link
                    href="#services"
                    className="text-sm font-montserrat text-white/80 hover:text-white transition-colors"
                  >
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-4">
            <h4 className="text-sm font-bold font-montserrat tracking-widest uppercase">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="transition-transform">
                  <Link
                    href={link.href}
                    className="text-sm font-montserrat text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-4">
            <h4 className="text-sm font-bold font-montserrat tracking-widest uppercase">
              Contact Us
            </h4>
            <div className="flex flex-col gap-3 text-sm font-montserrat text-white/80">
              <p>
                Jl. Khp Hasan Mustopa No.35, Neglasari,
                Kec. Cibeunying Kaler, Kota Bandung,
                Jawa Barat 40124
              </p>
              <motion.a
                href="https://wa.me/6281212345678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, color: "#ffffff" }}
                className="transition-colors"
              >
                +62 812-XXXX-XXXX
              </motion.a>
              <motion.a
                href="mailto:info@nilakandi.com"
                whileHover={{ scale: 1.02, color: "#ffffff" }}
                className="transition-colors"
              >
                info@nilakandi.com
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-8 border-t border-white/20">
          <p className="text-xs font-montserrat text-white/60 text-center md:text-left">
            © 2025 PT. NILAKANDI NATA PRADANA. ALL RIGHTS RESERVED.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center mt-4 md:mt-0 mx-auto md:mx-0"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
