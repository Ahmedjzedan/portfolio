import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "#home", label: "Home" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-center">
      <div className="bg-white/80 backdrop-blur-md border border-amber-100 shadow-lg shadow-amber-100/20 rounded-full px-6 py-3 flex items-center gap-6 md:gap-8 transition-all hover:border-amber-300">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-amber-600 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
