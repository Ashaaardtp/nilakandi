'use client';

import { motion } from "framer-motion";

export default function InteriorClient({ projects }) {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">Galeri Proyek</h2>
        <p className="text-(--text-main)/70 font-montserrat max-w-2xl">
          Koleksi karya interior design terbaik kami yang telah menyelesaikan berbagai ruang hunian dan komersial.
        </p>
      </div>

      {/* Featured Project - Large */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <div className="group relative overflow-hidden rounded-3xl bg-(--bg-secondary) cursor-pointer">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
              <img
                src={projects[0]?.image}
                alt={projects[0]?.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-(--bg-secondary) to-(--bg-primary)">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-montserrat rounded-full uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-xs font-montserrat text-(--text-main)/50">
                  {projects[0]?.location} • {projects[0]?.year}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-montserrat text-(--text-main) mb-4">
                {projects[0]?.title}
              </h3>
              <p className="text-(--text-main)/70 font-montserrat mb-6 leading-relaxed">
                {projects[0]?.description}
              </p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-montserrat text-sm rounded-full hover:bg-accent/90 transition-colors w-fit">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Secondary Projects - Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.slice(1).map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="group relative overflow-hidden rounded-2xl bg-(--bg-secondary) cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-montserrat text-white/60 mb-2 block">{project.location} • {project.year}</span>
              <h3 className="text-lg font-bold font-montserrat text-white mb-1">{project.title}</h3>
              <p className="text-sm text-white/80 font-montserrat">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
