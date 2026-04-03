'use client';

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

export default function BuildClient({ projects }) {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">Galeri Proyek</h2>
        <p className="text-(--text-main)/70 font-montserrat max-w-2xl">
          Koleksi proyek konstruksi dan pembangunan yang telah kami selesaikan dengan standar kualitas tinggi.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`group relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
          >
            {/* Timeline Line */}
            {index < projects.length - 1 && (
              <div className="hidden md:block absolute left-1/2 top-full w-px h-12 bg-(--text-main)/10" />
            )}

            {/* Project Card */}
            <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) cursor-pointer">
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Overlay Info */}
              <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accent text-white text-xs font-montserrat rounded-full">
                    {index + 1}
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-(--text-main)/60 font-montserrat mb-3">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.year}
                  </span>
                </div>
                <h3 className="text-xl font-bold font-montserrat text-(--text-main) mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-(--text-main)/70 font-montserrat mb-4">
                  {project.description}
                </p>
                <button className="text-accent font-montserrat text-sm hover:text-accent/80 transition-colors">
                  Lihat Detail Proyek
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
