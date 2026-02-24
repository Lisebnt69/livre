// src/components/Header.tsx
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { book } from "../data/book";

type NavItem = { href: string; label: string };

const navLinks: NavItem[] = [
  { href: "/", label: "Accueil" },
  { href: "/livre/", label: "Le livre" },
  { href: "/avis/", label: "Avis" },
];

const INSTAGRAM_URL = "https://www.instagram.com/high_school_aux_usa/";
const INSTAGRAM_ICON_SRC = "/instagram_logo_bleu.png"; 

function normalizePath(pathname: string) {
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

const easeOut = [0.16, 1, 0.3, 1] as const;

const menuVariants = {
  hidden: { height: 0, opacity: 0, transition: { duration: 0.18, ease: easeOut } },
  show: { height: "auto", opacity: 1, transition: { duration: 0.22, ease: easeOut } },
};

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.02 } },
};

const itemVariants = {
  hidden: { y: 6, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.18, ease: easeOut } },
};

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
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // UX: quand le menu mobile est ouvert, on évite de scroller derrière
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.documentElement.style.overflow;
    if (open) document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = prev;
    };
  }, [open]);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50">
      <motion.div
        className={[
          "bg-white/70 backdrop-blur-xl",
          scrolled
            ? "border-b border-black/10 shadow-[0_16px_40px_-28px_rgba(0,0,0,0.35)]"
            : "border-b border-transparent",
        ].join(" ")}
        initial={false}
        animate={{ y: 0 }}
        transition={{ duration: 0.18, ease: easeOut }}
      >
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="group flex flex-col leading-tight" onClick={handleNavClick}>
            <motion.span
              className="text-base md:text-lg font-extrabold text-[#384c8b] group-hover:text-primaryRed transition"
              whileHover={{ y: -1 }}
              transition={{ duration: 0.18, ease: easeOut }}
            >
              Stéphanie Oyarsabal
            </motion.span>

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

                    {/* underline animé */}
                    <span className="absolute left-0 -bottom-2 h-[2px] w-full">
                      <motion.span
                        className="absolute left-0 top-0 h-[2px] rounded-full bg-primaryRed"
                        initial={false}
                        animate={{ width: active ? "100%" : "0%" }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.18, ease: easeOut }}
                      />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Instagram (desktop) */}
            <motion.a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="hidden md:inline-flex items-center justify-center h-10 w-10 rounded-xl
                         border border-black/10 bg-white/60 hover:bg-white transition overflow-hidden"
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.18, ease: easeOut }}
            >
              <img
                src={INSTAGRAM_ICON_SRC}
                alt="Instagram"
                className="h-5 w-5 object-contain"
                loading="lazy"
              />
            </motion.a>

            {/* CTA Amazon (desktop) */}
            <motion.a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-4 py-2 rounded-xl text-sm font-semibold
                         bg-red-900 text-white
                         shadow-sm hover:shadow-md transition
                         hover:bg-red-700
                         ring-1 ring-red-900/20 hover:ring-red-700/30"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.18, ease: easeOut }}
            >
              Acheter <span className="ml-2 opacity-90">↗</span>
            </motion.a>

            {/* Burger (mobile) */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl
                         border border-black/10 bg-white/60 hover:bg-white transition"
              aria-label="Menu"
              aria-expanded={open}
            >
              <motion.svg
                className="w-6 h-6 text-[#384c8b]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={false}
                animate={{ rotate: open ? 90 : 0 }}
                transition={{ duration: 0.18, ease: easeOut }}
              >
                {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
              </motion.svg>
            </button>
          </div>
        </nav>

        {/* Mobile dropdown + overlay */}
        <AnimatePresence>
          {open && (
            <>
              {/* overlay cliquable */}
              <motion.button
                aria-label="Fermer le menu"
                className="md:hidden fixed inset-0 z-40 bg-black/20"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.16, ease: easeOut }}
              />

              <motion.div
                className="md:hidden relative z-50 border-t border-black/10 bg-white/85 backdrop-blur-xl"
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={menuVariants}
              >
                <div className="max-w-6xl mx-auto px-6 py-5">
                  <motion.div
                    className="rounded-2xl border border-black/10 bg-white shadow-sm p-2"
                    variants={listVariants}
                    initial="hidden"
                    animate="show"
                  >
                    {navLinks.map((l) => {
                      const active = isActive(currentPath, l.href);
                      return (
                        <motion.a
                          key={l.href}
                          href={l.href}
                          onClick={handleNavClick}
                          variants={itemVariants}
                          className={[
                            "flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition",
                            active
                              ? "text-primaryRed bg-primaryRed/5"
                              : "text-[#384c8b] hover:bg-black/5 hover:text-primaryRed",
                          ].join(" ")}
                        >
                          <span>{l.label}</span>
                          <span className={active ? "text-primaryRed" : "text-[#384c8b]/40"}>›</span>
                        </motion.a>
                      );
                    })}

                    {/* Instagram (mobile) */}
                    <motion.a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleNavClick}
                      variants={itemVariants}
                      className="flex items-center justify-between px-4 py-3 rounded-xl font-semibold transition
                                 text-[#384c8b] hover:bg-black/5 hover:text-primaryRed"
                    >
                      <span className="flex items-center gap-3">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl border border-black/10 bg-white overflow-hidden">
                          <img
                            src={INSTAGRAM_ICON_SRC}
                            alt="Instagram"
                            className="h-5 w-5 object-contain"
                            loading="lazy"
                          />
                        </span>
                        Instagram
                      </span>
                      <span className="text-[#384c8b]/40">↗</span>
                    </motion.a>
                  </motion.div>

                  {/* CTA Amazon (mobile) */}
                  <motion.a
                    href={book.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center justify-center w-full px-4 py-3 rounded-2xl text-white font-semibold
                               bg-red-900 hover:bg-red-700
                               shadow-sm hover:shadow-md transition
                               ring-1 ring-red-900/20 hover:ring-red-700/30"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18, ease: easeOut }}
                  >
                    Acheter sur Amazon ↗
                  </motion.a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}