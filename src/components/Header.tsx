// src/components/Header.tsx
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/livre", label: "Le livre" },
  { to: "/avis", label: "Avis" },
];

const amazonUrl = "https://www.amazon.fr/dp/B0GNHL49Q8";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActivePath = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

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
          <Link to="/" className="group flex flex-col leading-tight">
            <span className="text-base md:text-lg font-extrabold text-[#384c8b] group-hover:text-primaryRed transition">
              Stéphanie Oyarsabal
            </span>

            {/* ✅ Baseline masquée sur mobile, visible dès md */}
            <span className="hidden md:block text-xs text-[#384c8b]/70 font-semibold">
              Guide concret pour une année de High School aux États-Unis
            </span>
          </Link>


          {/* Desktop nav: underline premium */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  [
                    "relative text-sm font-semibold tracking-tight transition-colors",
                    isActive ? "text-[#384c8b]" : "text-[#384c8b]/80 hover:text-[#384c8b]",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <span className="relative">
                    {l.label}
                    {/* underline */}
                    <span
                      className={[
                        "absolute left-0 -bottom-2 h-[2px] rounded-full transition-all",
                        isActive
                          ? "w-full bg-primaryRed"
                          : "w-0 bg-primaryRed group-hover:w-full",
                      ].join(" ")}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href={amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold
                         bg-red-900 text-white
                         shadow-sm hover:shadow-md transition
                         hover:bg-red-700
                         ring-1 ring-red-900/20 hover:ring-red-700/30"
            >
              Acheter
              <span className="ml-2 opacity-90">↗</span>
            </a>

            {/* Mobile menu button */}
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

        {/* Mobile dropdown (premium + compact) */}
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
                    const active = isActivePath(l.to);
                    return (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        end={l.to === "/"}
                        className={[
                          "flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition",
                          active
                            ? "text-primaryRed bg-primaryRed/5"
                            : "text-[#384c8b] hover:bg-black/5 hover:text-primaryRed",
                        ].join(" ")}
                      >
                        <span>{l.label}</span>
                        <span className={active ? "text-primaryRed" : "text-[#384c8b]/40"}>›</span>
                      </NavLink>
                    );
                  })}
                </div>

                <a
                  href={amazonUrl}
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
