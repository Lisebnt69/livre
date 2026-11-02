import type { ReactNode } from "react";
import { book } from "../data/book";
import { openCookiePreferences } from "../lib/cookieConsent";

function LegalShell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="wrap py-14 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-display-xl !text-[clamp(2.2rem,5vw,3.8rem)]">{title}</h1>
        <div className="mt-10 space-y-10 text-[17px] leading-relaxed text-ink/90 [&_h2]:mb-2 [&_h2]:text-2xl">{children}</div>
      </div>
    </div>
  );
}

export function MentionsLegales() {
  return (
    <LegalShell title="Mentions légales">
      <section><h2>Éditeur du site</h2><p>{book.author}</p></section>
      <section><h2>Responsable de la publication</h2><p>{book.author}</p></section>
      <section><h2>Contact</h2><p>{book.email}</p></section>
      <section><h2>Conception et réalisation</h2><p>Lise Benoit</p></section>
      <section>
        <h2>Hébergement</h2>
        <p>
          Cloudflare, Inc.<br />101 Townsend Street<br />San Francisco, CA 94107<br />États-Unis<br />
          <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="link">https://www.cloudflare.com</a>
        </p>
      </section>
      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble des contenus présents sur ce site (textes, images, graphismes) est protégé par le droit d’auteur. Toute
          reproduction, représentation, modification ou adaptation, totale ou partielle, est interdite sans autorisation préalable.
        </p>
      </section>
      <section>
        <h2>Données personnelles</h2>
        <p>
          Ce site ne collecte pas de données personnelles sans votre consentement. Les outils de mesure d’audience sont
          activés uniquement après acceptation des cookies.
        </p>
      </section>
      <section>
        <h2>Affiliation</h2>
        <p>
          Ce site participe au Programme Partenaires d’Amazon EU, un programme d’affiliation conçu pour permettre à des sites de
          percevoir une rémunération grâce à la création de liens vers Amazon.fr. Certains liens sont des liens d’affiliation :
          si vous effectuez un achat via ces liens, une commission peut être perçue, sans que cela n’entraîne de coût
          supplémentaire pour vous.
        </p>
      </section>
    </LegalShell>
  );
}

export function PolitiqueConfidentialite() {
  return (
    <LegalShell title="Politique de confidentialité">
      <p className="text-muted">Ce site est un site vitrine. Nous appliquons le principe : minimum de données, maximum de clarté.</p>
      <section>
        <h2>1) Responsable de traitement</h2>
        <p>Responsable : <strong>{book.author}</strong>.<br />Contact : <strong>{book.email}</strong>.</p>
      </section>
      <section>
        <h2>2) Données collectées</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li><strong>Cookies nécessaires</strong> : fonctionnement du site et du module de consentement.</li>
          <li><strong>Mesure d’audience</strong> (optionnelle) : uniquement si vous l’acceptez.</li>
        </ul>
        <p className="mt-3 text-muted">Aucun compte, aucun paiement sur le site, pas de ciblage publicitaire via ce site. Les polices de caractères sont hébergées sur le site : aucune requête vers un service de polices tiers.</p>
      </section>
      <section>
        <h2>3) Base légale</h2>
        <ul className="mt-2 list-disc space-y-2 pl-5">
          <li>Cookies nécessaires : <strong>intérêt légitime</strong> (fonctionnement du site).</li>
          <li>Mesure d’audience : <strong>consentement</strong>.</li>
        </ul>
      </section>
      <section>
        <h2>4) Cookies : gérer vos choix</h2>
        <p>Vous pouvez accepter, refuser ou modifier votre choix à tout moment.</p>
        <button type="button" onClick={openCookiePreferences} className="btn-ghost mt-4">Gérer mes cookies</button>
      </section>
      <section>
        <h2>5) Durées de conservation</h2>
        <p>
          Les cookies sont conservés selon les durées standard du module de consentement et de l’outil d’audience. Vous pouvez
          aussi les supprimer via votre navigateur.
        </p>
      </section>
      <section>
        <h2>6) Vos droits</h2>
        <p>
          Vous pouvez retirer votre consentement (cookies) à tout moment via « Gérer mes cookies ».<br />
          Pour toute demande : <strong>{book.email}</strong>.
        </p>
      </section>
    </LegalShell>
  );
}
