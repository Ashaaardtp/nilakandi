import Link from "next/link";
import { ArrowLeft, Building2, HardHat, Ruler } from "lucide-react";
import { buildProjects } from "../../data";
import BuildClient from "./BuildClient";

export const metadata = {
  title: "Build Projects | Nilakandi",
  description: "Temukan proyek konstruksi dan pembangunan kami. Dari fondasi hingga finishing, kami membangun dengan presisi.",
};

// Ambil hanya 3 proyek pertama
const projects = buildProjects.slice(0, 3);

export default function BuildPage() {
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
              <Building2 className="w-6 h-6 text-accent" />
            </div>
            <span className="text-sm font-montserrat tracking-widest uppercase text-accent">
              Our Projects
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-montserrat tracking-tight mb-6">
            Build & Construction
          </h1>

          <p className="text-lg md:text-xl font-montserrat text-(--text-main)/80 max-w-2xl leading-relaxed">
            <span className="italic font-playfair text-accent">Membangun masa depan</span> — setiap struktur yang kami
            dirikan adalah bukti komitmen kami terhadap kualitas dan keselamatan.
            Dari hunian pribadi hingga bangunan komersial, kami membangun dengan hati.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-(--text-main)/10">
            <div className="flex items-center gap-3">
              <Building2 className="w-8 h-8 text-accent" />
              <div>
                <p className="text-2xl font-bold font-montserrat">40+</p>
                <p className="text-sm text-(--text-main)/60">Bangunan Selesai</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Ruler className="w-8 h-8 text-accent" />
              <div>
                <p className="text-2xl font-bold font-montserrat">5000+</p>
                <p className="text-sm text-(--text-main)/60">m² Dibangun</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Client Component */}
      <BuildClient projects={projects} />

      {/* Coming Soon Section */}
      <section className="px-6 md:px-16 pb-20">
        <div className="bg-(--bg-secondary)/30 border border-(--text-main)/10 rounded-3xl p-12 md:p-20 text-center">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HardHat className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            Proyek Segera Hadir
          </h2>
          <p className="text-(--text-main)/70 font-montserrat max-w-md mx-auto">
            Kami sedang menyiapkan dokumentasi proyek konstruksi terbaik kami.
            Lihat proses pembangunan dari awal hingga akhir.
          </p>
        </div>
      </section>
    </div>
  );
}
