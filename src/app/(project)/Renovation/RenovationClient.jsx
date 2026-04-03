'use client';

import { motion } from "framer-motion";
import { Sparkles, Wrench } from "lucide-react";

export default function RenovationClient({ projects }) {
  return (
    <section className="px-6 md:px-16 pb-20">
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">Galeri Proyek</h2>
        <p className="text-(--text-main)/70 font-montserrat max-w-2xl">
          Koleksi proyek renovasi yang telah mengubah ruang lama menjadi area baru yang fungsional dan menawan.
        </p>
      </div>

      {/* Staggered Grid Layout */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className={`group relative overflow-hidden rounded-3xl bg-(--bg-secondary) cursor-pointer ${
              index === 1 ? 'md:ml-12 md:mr-[-3rem]' : ''
            }`}
          >
            <div className="grid md:grid-cols-12 gap-0">
              {/* Image Section */}
              <div className={`md:col-span-7 aspect-[4/3] md:aspect-auto overflow-hidden relative`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Transformation Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-white" />
                    <span className="text-xs font-montserrat text-white font-semibold">Transformed</span>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
              </div>

              {/* Content Section */}
              <div className="md:col-span-5 p-6 md:p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <div className="flex items-center gap-2 text-accent text-xs font-montserrat mb-3">
                    <Wrench className="w-3 h-3" />
                    <span>Renovation Project</span>
                  </div>
                  <h3 className="text-2xl font-bold font-montserrat text-(--text-main) mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-(--text-main)/60 font-montserrat mb-4">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-(--text-main)/80 font-montserrat leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-(--text-main)/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-(--text-main)/50 font-montserrat">Hasil</p>
                      <p className="text-sm font-montserrat font-semibold text-(--text-main)">100% Transformed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
