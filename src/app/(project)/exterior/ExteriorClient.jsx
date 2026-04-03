'use client';

import { motion } from "framer-motion";
import { Trees, Mountain } from "lucide-react";

export default function ExteriorClient({ projects }) {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">Galeri Proyek</h2>
        <p className="text-(--text-main)/70 font-montserrat max-w-2xl">
          Koleksi desain eksterior dan landscape terbaik yang memadukan keindahan arsitektur dengan alam sekitar.
        </p>
      </div>

      {/* Horizontal Scroll Cards */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw]"
            >
              <div className="group relative h-[500px] overflow-hidden rounded-3xl bg-(--bg-secondary) cursor-pointer">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                
                {/* Top Badge */}
                <div className="absolute top-6 left-6">
                  <div className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full">
                    <Trees className="w-4 h-4 text-accent" />
                    <span className="text-xs font-montserrat text-white">{project.year}</span>
                  </div>
                </div>

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold font-montserrat text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/70 font-montserrat text-sm">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white/60 text-xs font-montserrat">
                    <Mountain className="w-3 h-3" />
                    <span>{project.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-12 grid grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-6 bg-(--bg-secondary)/50 rounded-2xl"
        >
          <p className="text-3xl font-bold font-montserrat text-accent mb-1">30+</p>
          <p className="text-xs text-(--text-main)/60 font-montserrat">Desain Landscape</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center p-6 bg-(--bg-secondary)/50 rounded-2xl"
        >
          <p className="text-3xl font-bold font-montserrat text-accent mb-1">20+</p>
          <p className="text-xs text-(--text-main)/60 font-montserrat">Fasad Modern</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center p-6 bg-(--bg-secondary)/50 rounded-2xl"
        >
          <p className="text-3xl font-bold font-montserrat text-accent mb-1">100%</p>
          <p className="text-xs text-(--text-main)/60 font-montserrat">Ramah Lingkungan</p>
        </motion.div>
      </div>
    </section>
  );
}
