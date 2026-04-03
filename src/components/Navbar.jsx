"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navlinks = [
    { label: "About Us", href: "#about-us" },
    { label: "Service", href: "#services" },
    { label: "Project", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* ── NAVBAR BAR ── */}
      <nav className="bg-(--bg-primary) flex flex-row justify-between items-center py-4 px-4 md:px-6 sticky top-0 z-50">
        {/* Logo */}
        <div className="hidden md:flex flex-row gap-4 bg-accent py-2 px-4 rounded-full">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={40}
            height={40}
          />
          <Image
            src="/logo2.png"
            alt="Logo"
            width={40}
            height={40}
          />
        </div>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="text-(--text-main) font-bold tracking-widest cursor-pointer">
          <Link href="#home">
            <span className="font-playfair text-xl md:text-2xl">
              NLKND
            </span>
          </Link>
        </motion.h1>

        {/* Desktop Nav Links */}
        <ol className="hidden md:flex flex-row gap-10">
          {navlinks.map((link, index) => (
            <motion.li
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
              className="list-none">
              <Link
                href={link.href}
                className="text-(--text-main) font-montserrat font-bold text-lg tracking-wide hover:text-accent transition-colors duration-200">
                {link.label}
              </Link>
            </motion.li>
          ))}
        </ol>

        {/* Hamburger Button — mobile only */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu">
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-(--text-main) origin-center"
          />
          <motion.span
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
            transition={{ duration: 0.3 }}
            className="block w-6 h-0.5 bg-(--text-main) origin-center"
          />
        </motion.button>
      </nav>

      {/* ── FULL SCREEN MOBILE OVERLAY ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 z-40 bg-(--bg-primary) flex flex-col justify-between px-6 py-4"
          >
            {/* Header Overlay: Brand + Tombol Tutup */}
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-(--text-main) font-bold tracking-widest text-sm">
                NLKND
              </h1>
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="text-(--text-main) text-2xl cursor-pointer"
                aria-label="Close menu">
                ✕
              </motion.button>
            </div>

            {/* Nav Links — tengah layar */}
            <ol className="flex flex-col items-center gap-8">
              {navlinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="list-none">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-(--text-main) font-bold text-lg tracking-widest hover:text-accent transition-colors duration-200">
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ol>

            {/* Logo — bawah overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center pb-4">
              <div className="flex flex-row gap-4 bg-accent py-2 px-6 rounded-full">
                <Image
                  src="/logo1.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
                <Image
                  src="/logo2.png"
                  alt="Logo"
                  width={40}
                  height={40}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
