import { Link } from "react-router-dom";
import { guides } from "../data/guides";
import { AmazonButton } from "../components/Amazon";

export default function NotFound() {
  return (
    <div className="wrap py-20 sm:py-28">
      <p className="font-display text-7xl font-extrabold text-locker" style={{ fontStretch: "75%" }}>404</p>
      <h1 className="mt-4 max-w-2xl text-display-l">Cette page n’existe pas, mais votre projet peut encore réussir.</h1>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link to="/" className="btn-ink">Retour à l’accueil</Link>
        <AmazonButton placement="404" variant="ghost">Voir le livre sur Amazon</AmazonButton>
      </div>
      <ul className="mt-12 grid gap-2 sm:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}><Link to={g.path} className="link">{g.short}</Link></li>
        ))}
      </ul>
    </div>
  );
}
