"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" }
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="font-semibold tracking-tight">Harish V</a>
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-gray-900 text-gray-600">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="container py-3 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-gray-700" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
