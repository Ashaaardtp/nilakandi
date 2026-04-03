import Link from "next/link";
import { ArrowLeft, Home, Palette, Sofa } from "lucide-react";
import { interiorProjects } from "../../data";
import InteriorClient from "./InteriorClient";

export const metadata = {
  title: "Interior Design Projects | Nilakandi",
  description: "Jelajahi koleksi proyek desain interior kami yang menakjubkan. Dari ruang hunian modern hingga komersial elegan.",
};

// Ambil hanya 3 proyek pertama
const projects = interiorProjects.slice(0, 3);

export default function InteriorPage() {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-main)">
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:px-16 md:py-32">
        {/* Back Button */}
        <Link
          href="/#project"
          className="inline-flex items-center gap-2 text-sm font-montserrat text-(--text-main)/70 hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portfolio
        </Link>

        {/* Welcome Content */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-accent/10 rounded-full">
              <Palette className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-montserrat tracking-widest uppercase text-accent">
              Our Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight mb-6">
            Interior Design
          </h1>

          <p className="text-lg md:text-xl font-montserrat text-(--text-main)/80 max-w-2xl leading-relaxed">
            <span className="italic font-playfair text-accent">Ruangan berkisah</span> — setiap sudut yang kami desain
            adalah cerminan gaya hidup dan kepribadian Anda. Dari konsep hingga eksekusi,
            kami menciptakan ruang yang tidak hanya indah, tetapi juga fungsional dan nyaman.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-(--text-main)/10">
            <div className="flex items-center gap-3">
              <Sofa className="w-8 h-8 text-accent" />
              <div>
                <p className="text-2xl font-bold font-montserrat">25+</p>
                <p className="text-sm text-(--text-main)/60">Proyek Interior</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Home className="w-8 h-8 text-accent" />
              <div>
                <p className="text-2xl font-bold font-montserrat">15+</p>
                <p className="text-sm text-(--text-main)/60">Ruang Komersial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Client Component */}
      <InteriorClient projects={projects} />

      {/* Coming Soon Section */}
      <section className="px-6 md:px-16 pb-20">
        <div className="bg-(--bg-secondary)/30 border border-(--text-main)/10 rounded-3xl p-12 md:p-20 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Palette className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            Proyek Segera Hadir
          </h2>
          <p className="text-(--text-main)/70 font-montserrat max-w-md mx-auto">
            Kami sedang menyiapkan showcase proyek interior terbaik kami.
            Kunjungi kembali untuk melihat hasil karya lengkap kami.
          </p>
        </div>
      </section>
    </div>
  );
}
