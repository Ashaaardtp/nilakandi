"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Interior Design",
      count: "2",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80&h=900",
      category: "interior"
    },
    {
      id: 2,
      title: "Build",
      count: "4",
      image: "https://images.unsplash.com/photo-1541888946-42e6ddc7c792?w=600&q=80&h=900",
      category: "build"
    },
    {
      id: 3,
      title: "Exterior Design",
      count: "3",
      image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80&h=900",
      category: "exterior"
    },
    {
      id: 4,
      title: "Renovation",
      count: "3",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&q=80&h=900",
      category: "renovation"
    }
  ];

  return (
    <section id="project" className="w-full bg-(--bg-primary) text-(--text-main) px-6 py-12 md:px-16 md:py-20">
      {/* Heading */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 md:mb-16 gap-4">
        {/* Left */}
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-start gap-2 text-3xl md:text-6xl font-bold font-montserrat tracking-tight">
          <span className="text-base md:text-2xl font-bold italic font-playfair text-accentt-2">
            N
          </span>
          ROJECTS
        </motion.h2>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:text-right">
          <p className="text-2xl md:text-4xl font-playfair italic text-accent">
            OUR
          </p>
          <p className="text-2xl md:text-4xl font-bold font-montserrat tracking-wide">
            PORTFOLIO
          </p>
          <p className="text-sm md:text-base font-montserrat text-(--text-main)/70 mt-1">
            Explore our latest works and
            achievements.
          </p>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer overflow-hidden rounded-2xl bg-(--bg-secondary)/60 border border-(--text-main)/10 aspect-[3/4]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content Overlay */}
      <div className="relative z-10 p-4 md:p-6 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <h3 className="text-xs md:text-sm font-bold font-montserrat tracking-widest">
              {project.title}
            </h3>
            <motion.div
              animate={{ x: isHovered ? 4 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowRight className="w-2 h-2 md:w-3 md:h-3 text-accent" />
            </motion.div>
          </div>
          <span className="text-lg md:text-xl font-bold font-montserrat text-accent">
            {project.count}
          </span>
        </div>
      </div>

      {/* Image Overlay - Appears on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Hover Content */}
        <motion.div
          initial={false}
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
          <div className="flex justify-between items-end">
            <div>
              <h3 className="text-sm md:text-base font-bold font-montserrat text-white mb-1">
                {project.title}
              </h3>
              <p className="text-xs md:text-sm font-montserrat text-white/80">
                {project.count} Projects
              </p>
            </div>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Subtle border animation */}
      <motion.div
        initial={false}
        animate={{ borderColor: isHovered ? "rgba(218, 223, 247, 0.2)" : "transparent" }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-2xl border-2" />
    </motion.div>
  );
}
