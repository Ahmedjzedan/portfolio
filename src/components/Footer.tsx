export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-200 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        Let&apos;s build something.
      </h2>
      <a
        href="mailto:contact@ahmedzedan.dev"
        className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-400 hover:to-amber-600 transition-all"
      >
        Say Hello
      </a>

      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/Ahmedjzedan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-amber-600 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/ahmed-a-zedan-70153a35b/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-amber-600 transition-colors"
        >
          LinkedIn
        </a>
      </div>

      <p className="text-xs text-slate-400 mt-12 font-mono">
        Designed & Built by Ahmed Abd Aljbar Zedan <br />
        Next.js · Tailwind · Canvas · Turso · Drizzle
      </p>
    </footer>
  );
}
