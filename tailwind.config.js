/** @type {import('tailwindcss').Config} */
// DA inspirée d'Alan : fond crème, blocs pastel arrondis, une seule famille de police, titres en graisse moyenne.
// Couleurs de marque tirées de la couverture : marine (titre) et bordeaux (casiers) pour les mots importants.
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2350", // texte, marine profond
        navy: "#273472",
        locker: "#A1232B", // bordeaux : mots importants + CTA Amazon
        "locker-dark": "#7E1A21",
        paper: "#FFFCF5", // crème (fond de page)
        card: "#FFFFFF",
        rule: "#EBE3D3", // filets chauds
        muted: "#545B7A",
        // blocs pastel
        lav: "#E3E8FF",
        peach: "#FFE5D0",
        rose: "#FFE1E3",
        butter: "#FFF3B8",
        mint: "#D6F5E6",
        mist: "#E3E8FF", // alias de lav
        // alias historiques
        primaryRed: "#A1232B",
        primaryBlue: "#273472",
      },
      fontFamily: {
        display: ['"Figtree Variable"', "Helvetica Neue", "Arial", "sans-serif"],
        sans: ['"Figtree Variable"', "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 5.6vw, 4.6rem)", { lineHeight: "1.04", letterSpacing: "-0.028em" }],
        "display-l": ["clamp(2rem, 3.9vw, 3.3rem)", { lineHeight: "1.08", letterSpacing: "-0.024em" }],
        "display-m": ["clamp(1.5rem, 2.4vw, 2.1rem)", { lineHeight: "1.15", letterSpacing: "-0.018em" }],
      },
      maxWidth: { page: "76rem", prose: "38rem" },
      borderRadius: { "4xl": "2rem", "5xl": "2.5rem" },
      boxShadow: {
        book: "0 2px 4px rgba(27,35,80,.1), 0 24px 48px -16px rgba(27,35,80,.35)",
        lift: "0 1px 2px rgba(27,35,80,.06), 0 12px 28px -18px rgba(27,35,80,.3)",
      },
    },
  },
  plugins: [],
};
