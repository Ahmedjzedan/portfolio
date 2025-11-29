import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-mono font-bold text-amber-600 tracking-wider uppercase">
            Open for Work
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Ahmed Abd <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400">
            Aljbar Zedan
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-slate-600 leading-relaxed">
          Full Stack Developer specializing in the React ecosystem. I build
          scalable, high-performance web applications using{" "}
          <strong className="text-slate-900">Next.js</strong>,{" "}
          <strong className="text-slate-900">TypeScript</strong>, and{" "}
          <strong className="text-slate-900">Tailwind CSS</strong>. I focus on
          architecting complete, type-safe solutions—from database design to the
          user interface.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="#projects"
            className="group relative px-6 py-3 bg-slate-900 text-white font-bold rounded-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-amber-200"
          >
            <div className="absolute inset-0 w-full h-full bg-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              View Work
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
          <a
            href="mailto:contact@ahmedzedan.dev"
            className="px-6 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-lg hover:border-amber-400 hover:text-amber-700 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
