// src/components/Header.tsx
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { book } from "../data/book";

type NavItem = { href: string; label: string };

const navLinks: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/livre/", label: "Le livre" },
  { href: "/avis/", label: "Avis" },
  // si tu crées ces pages en MPA aussi :
  // { href: "/politique-confidentialite/", label: "Confidentialité" },
  // { href: "/mentions-legales/", label: "Mentions légales" },
];

function normalizePath(pathname: string) {
  // enlève query/hash, force trailing slash pour comparer proprement
  let p = pathname.split("?")[0].split("#")[0] || "/";
  if (!p.endsWith("/")) p += "/";
  return p;
}

function isActive(currentPath: string, href: string) {
  const cur = normalizePath(currentPath);
  const target = normalizePath(href);

  if (target === "/") return cur === "/";
  return cur.startsWith(target);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath = useMemo(() => {
    if (typeof window === "undefined") return "/";
    return window.location.pathname || "/";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ferme le menu mobile quand on change de page (clic sur lien)
  // en MPA, la navigation recharge la page de toute façon, mais ça évite le flash
  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={[
          "bg-white/70 backdrop-blur-xl",
          scrolled
            ? "border-b border-black/10 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.35)]"
            : "border-b border-transparent",
        ].join(" ")}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="group flex flex-col leading-tight" onClick={handleNavClick}>
            <span className="text-base md:text-lg font-extrabold text-[#384c8b] group-hover:text-primaryRed transition">
              Stéphanie Oyarsabal
            </span>

            <span className="hidden md:block text-xs text-[#384c8b]/70 font-semibold">
              Guide concret pour une année de High School aux États-Unis
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = isActive(currentPath, l.href);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={handleNavClick}
                  className={[
                    "relative text-sm font-semibold tracking-tight transition-colors",
                    active ? "text-[#384c8b]" : "text-[#384c8b]/80 hover:text-[#384c8b]",
                  ].join(" ")}
                >
                  <span className="relative">
                    {l.label}
                    <span
                      className={[
                        "absolute left-0 -bottom-2 h-[2px] rounded-full transition-all",
                        active ? "w-full bg-primaryRed" : "w-0 bg-primaryRed hover:w-full",
                      ].join(" ")}
                    />
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold
                         bg-red-900 text-white
                         shadow-sm hover:shadow-md transition
                         hover:bg-red-700
                         ring-1 ring-red-900/20 hover:ring-red-700/30"
            >
              Acheter <span className="ml-2 opacity-90">↗</span>
            </a>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                         border border-black/10 bg-white/60 hover:bg-white transition"
              aria-label="Menu"
              aria-expanded={open}
            >
              <svg
                className="w-6 h-6 text-[#384c8b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="md:hidden border-t border-black/10 bg-white/85 backdrop-blur-xl"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
            >
              <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="rounded-2xl border border-black/10 bg-white shadow-sm p-2">
                  {navLinks.map((l) => {
                    const active = isActive(currentPath, l.href);
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={handleNavClick}
                        className={[
                          "flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition",
                          active
                            ? "text-primaryRed bg-primaryRed/5"
                            : "text-[#384c8b] hover:bg-black/5 hover:text-primaryRed",
                        ].join(" ")}
                      >
                        <span>{l.label}</span>
                        <span className={active ? "text-primaryRed" : "text-[#384c8b]/40"}>›</span>
                      </a>
                    );
                  })}
                </div>

                <a
                  href={book.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center w-full px-4 py-3 rounded-2xl text-white font-semibold
                             bg-red-900 hover:bg-red-700
                             shadow-sm hover:shadow-md transition
                             ring-1 ring-red-900/20 hover:ring-red-700/30"
                >
                  Acheter sur Amazon ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}