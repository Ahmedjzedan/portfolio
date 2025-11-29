export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-2xl">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
        <span className="text-amber-500">03.</span> About
      </h2>
      <div className="prose prose-slate prose-lg">
        <p>
          I am a Full Stack Developer based in Iraq, obsessed with building clean,
          minimalist digital experiences. My background is actually in{" "}
          <strong>Pharmacy</strong>, which means I&apos;m uniquely good at
          reading terrible handwriting and handling high-pressure
          environments—skills that transfer surprisingly well to debugging
          complex codebases.
        </p>
        <p>
          Currently, I&apos;m focused on mastering the <strong>T3 Stack</strong>{" "}
          and exploring creative coding with Canvas (like the background of this
          site).
        </p>

        <div className="mt-8 pt-8 border-t border-slate-200 space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">
            Education
          </h4>
          
          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">Pharmacy</span>
              <span className="text-sm text-amber-600 font-mono">
                2020 - Present
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Studying remotely while shipping code.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">CS50: Introduction to Computer Science</span>
              <span className="text-sm text-amber-600 font-mono">
                Graduated
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Harvard University (edX)
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-slate-900">Full Stack Bootcamp</span>
              <span className="text-sm text-amber-600 font-mono">
                Completed
              </span>
            </div>
            <p className="text-sm text-slate-500">
              Computiq (in collaboration with GIZ Germany)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
