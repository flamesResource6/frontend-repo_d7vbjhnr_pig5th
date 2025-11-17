import { Menu, Camera, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 shadow-lg">
                <Camera className="h-5 w-5 text-white" />
              </div>
              <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-lg font-semibold tracking-wide text-transparent">
                NEON LENS
              </span>
            </a>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/80 transition hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:brightness-110"
              >
                Book a shoot
              </a>
            </div>

            <button
              className="inline-flex items-center justify-center rounded-xl border border-white/10 p-2 text-white/80 md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden"
            >
              <div className="grid gap-3 border-t border-white/10 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl bg-white/5 px-4 py-3 text-white/90"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-600 to-cyan-500 px-4 py-3 text-center font-medium text-white"
                >
                  Book a shoot
                </a>
                <div className="mt-1 flex items-center justify-center gap-4 text-white/70">
                  <a href="#" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
                  <a href="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></a>
                  <a href="#" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
