export default function SkillsSection() {
  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <span className="text-amber-500">01.</span> Tech Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Core Stack */}
        <div className="p-6 bg-white/50 backdrop-blur-sm border border-amber-100 rounded-2xl hover:border-amber-300 transition-all">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4">
            Core Architecture
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Next.js
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              React
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Turso
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Drizzle ORM
            </span>
          </div>
        </div>

        {/* Styling & Tools */}
        <div className="p-6 bg-white/50 backdrop-blur-sm border border-amber-100 rounded-2xl hover:border-amber-300 transition-all">
          <h3 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4">
            Design & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Tailwind CSS
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Framer Motion
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              tRPC
            </span>
            <span className="px-3 py-1 bg-white border border-slate-200 rounded text-sm font-semibold text-slate-700 shadow-sm">
              Zod
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
