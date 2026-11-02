/** @type {import('tailwindcss').Config} */
// Palette tirée de la couverture du livre : bleu marine du titre,
// rouge des casiers, bleu denim de la veste. Neutres teintés (jamais #000 / #fff purs).
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1B2350", // texte principal, marine profond
        navy: "#273472", // marine de la couverture
        locker: "#A1232B", // rouge casier (CTA)
        "locker-dark": "#7E1A21",
        denim: "#5D7FB0", // bleu veste en jean
        mist: "#E4E9F3", // fond bleuté clair
        paper: "#F6F6F3", // fond de page
        card: "#FDFDFB", // surfaces
        rule: "#D5D8E2", // filets
        muted: "#545B7A", // texte secondaire (AA sur paper)

        // alias historiques (encore utilisés par quelques composants)
        primaryRed: "#A1232B",
        primaryBlue: "#273472",
      },
      fontFamily: {
        display: ['"Archivo Variable"', "Arial Narrow", "sans-serif"],
        sans: ['"Public Sans Variable"', "Helvetica Neue", "Arial", "sans-serif"],
      },
      fontSize: {
        // échelle avec de vrais écarts
        "display-xl": ["clamp(2.4rem, 5.2vw, 4.6rem)", { lineHeight: "0.98", letterSpacing: "-0.015em" }],
        "display-l": ["clamp(2rem, 4.2vw, 3.6rem)", { lineHeight: "1.02", letterSpacing: "-0.01em" }],
        "display-m": ["clamp(1.5rem, 2.6vw, 2.25rem)", { lineHeight: "1.1" }],
      },
      maxWidth: {
        page: "76rem",
        prose: "38rem",
      },
      boxShadow: {
        book: "0 1px 1px rgba(27,35,80,.08), 0 18px 40px -12px rgba(27,35,80,.35), 0 40px 80px -40px rgba(27,35,80,.35)",
        lift: "0 1px 0 rgba(27,35,80,.06), 0 8px 24px -16px rgba(27,35,80,.35)",
      },
    },
  },
  plugins: [],
};
