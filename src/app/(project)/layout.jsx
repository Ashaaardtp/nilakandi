import Link from "next/link";
import { ArrowLeft, Home, Palette, Building2, Trees, Wrench } from "lucide-react";

const projectNav = [
  {
    id: "interior",
    label: "Interior",
    href: "/Interior",
    icon: Palette,
  },
  {
    id: "build",
    label: "Build",
    href: "/Build",
    icon: Building2,
  },
  {
    id: "exterior",
    label: "Exterior",
    href: "/Exterior",
    icon: Trees,
  },
  {
    id: "renovation",
    label: "Renovation",
    href: "/Renovation",
    icon: Wrench,
  },
];

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen bg-(--bg-primary) text-(--text-main)">
      {/* Project Navbar */}
      <header className="sticky top-0 z-50 bg-(--bg-primary)/90 backdrop-blur-md border-b border-(--text-main)/5">
        <div className="px-6 md:px-16 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/90 transition-colors">
                <Home className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-lg font-bold font-montserrat">Nilakandi</p>
                <p className="text-xs text-(--text-main)/50 font-montserrat">Projects</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {projectNav.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-montserrat text-(--text-main)/70 hover:text-accent hover:bg-accent/10 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Back Button */}
            <Link
              href="/#project"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-(--bg-secondary) rounded-full text-sm font-montserrat hover:bg-(--bg-secondary)/80 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back</span>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex md:hidden items-center gap-2 mt-4 overflow-x-auto pb-2 scrollbar-hide">
            {projectNav.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-full text-xs font-montserrat bg-(--bg-secondary) text-(--text-main)/80 whitespace-nowrap"
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-[calc(100vh-200px)]">{children}</main>

      {/* Project Footer */}
      <footer className="bg-(--bg-secondary)/30 border-t border-(--text-main)/5">
        <div className="px-6 md:px-16 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Home className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold font-montserrat">Nilakandi</span>
              </div>
              <p className="text-sm text-(--text-main)/60 font-montserrat leading-relaxed">
                Membangun impian Anda dengan kualitas terbaik dan desain yang memukau.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold font-montserrat mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="/" className="text-sm text-(--text-main)/60 hover:text-accent font-montserrat transition-colors">
                  Home
                </Link>
                <Link href="/#about" className="text-sm text-(--text-main)/60 hover:text-accent font-montserrat transition-colors">
                  About
                </Link>
                <Link href="/#project" className="text-sm text-(--text-main)/60 hover:text-accent font-montserrat transition-colors">
                  Portfolio
                </Link>
                <Link href="/#contact" className="text-sm text-(--text-main)/60 hover:text-accent font-montserrat transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            {/* Project Categories */}
            <div>
              <h4 className="text-sm font-bold font-montserrat mb-4">Categories</h4>
              <div className="flex flex-col gap-2">
                {projectNav.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-sm text-(--text-main)/60 hover:text-accent font-montserrat transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-(--text-main)/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-(--text-main)/50 font-montserrat">
              © 2026 Nilakandi. All rights reserved.
            </p>
            <Link
              href="/"
              className="flex items-center gap-2 text-xs text-(--text-main)/50 hover:text-accent font-montserrat transition-colors"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
