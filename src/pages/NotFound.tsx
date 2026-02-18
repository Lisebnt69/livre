import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { site } from "../data/site";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-white to-slate-50">
        <Seo
            title="Page introuvable"
            description="Cette page n’existe pas."
            canonical={`${site.baseUrl}/404`}
            noindex
        />


      <h1 className="text-6xl font-black text-primaryRed mb-6">404</h1>

      <h2 className="text-2xl md:text-3xl font-bold text-primaryBlue mb-4">
        Oups… cette page n’existe pas.
      </h2>

      <p className="text-primaryBlue/70 max-w-md mb-8">
        Mais votre projet d’année aux États-Unis peut toujours réussir 😉
      </p>

      <Link
        to="/"
        className="bg-primaryBlue text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
      >
        Retour à l’accueil
      </Link>

    </main>
  );
}
