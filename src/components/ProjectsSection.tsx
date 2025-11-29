import { ShoppingCart, Lock } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
        <span className="text-amber-500">02.</span> Selected Work
      </h2>

      <div className="space-y-20">
        {/* Project 1: Tech Hub */}
        <article className="group relative p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-amber-200 transition-all">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-slate-100 rounded-lg aspect-video flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden">
              <div className="text-center">
                <ShoppingCart className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                <span className="text-slate-400 font-mono text-xs">
                  Tech Hub
                </span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Tech Hub
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A commerce app built with Next.js and hooked to a database. It
                serves as a store that sells tech products, featuring product
                listings, a shopping cart, and checkout functionality.
              </p>
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-amber-700">
                <li>Next.js</li>
                <li>Database</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="pt-2 flex gap-4">
                <a
                  href="https://techhubstore-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-900 border-b-2 border-amber-400 hover:border-amber-600"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/Ahmedjzedan/TechHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-500 hover:text-slate-900"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Project 2: Mnemonic Lock */}
        <article className="group relative p-6 md:p-8 rounded-2xl border border-slate-200 bg-slate-50/50 hover:border-amber-200 transition-all">
          <div className="absolute -inset-4 bg-gradient-to-r from-amber-100 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="order-1 md:order-2 bg-slate-100 rounded-lg aspect-video flex items-center justify-center border border-slate-200 shadow-inner overflow-hidden">
              <div className="text-center">
                <Lock className="w-12 h-12 mx-auto mb-2 text-slate-400" />
                <span className="text-slate-400 font-mono text-xs">
                  Mnemonic Lock
                </span>
              </div>
            </div>
            <div className="order-2 md:order-1 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                Mnemonic Lock
              </h3>
              <p className="text-slate-600 leading-relaxed">
                A client-side encryption website where the user answers
                questions about themselves, and the application generates a
                cryptic password that is easy for the client to remember but
                hard to crack.
              </p>
              <ul className="flex flex-wrap gap-3 text-xs font-mono text-amber-700">
                <li>React</li>
                <li>Client-side Encryption</li>
                <li>Tailwind CSS</li>
              </ul>
              <div className="pt-2 flex gap-4">
                <a
                  href="https://mnemonic-lock.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-900 border-b-2 border-amber-400 hover:border-amber-600"
                >
                  View Live
                </a>
                <a
                  href="https://github.com/Ahmedjzedan/MnemonicLock"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-slate-500 hover:text-slate-900"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
