import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

type Line = { id: string; label: string; hint: string };

/** Postes tirés du sommaire du livre (chap. 1, 2 et 4). Aucun montant n'est prérempli. */
const LINES: Line[] = [
  { id: "programme", label: "Frais du programme ou de l’école", hint: "Organisme (J-1) ou scolarité et hébergement (F-1)" },
  { id: "assurance", label: "Assurance (base + complément éventuel)", hint: "Ce que le contrat inclut, et ce qu’il n’inclut pas" },
  { id: "visa", label: "Visa et formalités", hint: "Frais administratifs demandés dans votre dossier" },
  { id: "voyage", label: "Voyage aller-retour", hint: "Billets, bagages, éventuels déplacements en France" },
  { id: "sante", label: "Santé avant le départ", hint: "Vaccins, dossier de santé, médicaments" },
  { id: "poche", label: "Argent de poche et carte bancaire", hint: "Sur toute la durée du séjour" },
  { id: "telephone", label: "Téléphone et communications", hint: "Numéro américain, forfait, appels vers la France" },
  { id: "equipement", label: "Équipement et valise", hint: "Vêtements, articles pratiques à emporter" },
  { id: "cadeaux", label: "Cadeaux pour la famille d’accueil", hint: "Selon votre programme" },
  { id: "activites", label: "Activités et sorties", hint: "Sport, clubs, voyages scolaires : à demander à l’école ou à l’organisme" },
  { id: "autres", label: "Autres frais de votre devis", hint: "Tout ce qui figure au contrat et n’entre pas ci-dessus" },
];

const toNumber = (v: string) => {
  const n = parseFloat(v.replace(",", ".").replace(/\s/g, ""));
  return Number.isFinite(n) && n > 0 ? n : 0;
};

const fmt = (n: number) => n.toLocaleString("fr-FR", { maximumFractionDigits: 0 });

export function BudgetSimulator() {
  const [values, setValues] = useState<Record<string, string>>({});
  const [months, setMonths] = useState("");

  const total = useMemo(() => LINES.reduce((s, l) => s + toNumber(values[l.id] ?? ""), 0), [values]);
  const m = toNumber(months);

  return (
    <div className="rounded-4xl bg-card p-6 shadow-lift sm:p-9">
      <div className="flex items-start gap-3">
        <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lav text-ink">
          <Calculator size={20} aria-hidden="true" />
        </span>
        <div>
          <h2 className="text-display-m">
            Votre <span className="text-locker">simulateur de budget</span>
          </h2>
          <p className="mt-2 max-w-prose text-[16px] leading-relaxed text-muted">
            Tous les champs sont vides, volontairement : remplissez-les avec <strong className="font-semibold text-ink">vos propres devis</strong>.
            Rien n’est enregistré ni envoyé, le calcul reste dans votre navigateur.
          </p>
        </div>
      </div>

      <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()} aria-label="Simulateur de budget">
        {LINES.map((l) => (
          <div key={l.id}>
            <label htmlFor={`b-${l.id}`} className="block text-[15px] font-semibold text-ink">
              {l.label}
            </label>
            <p id={`h-${l.id}`} className="text-[13px] leading-snug text-muted">
              {l.hint}
            </p>
            <div className="mt-1.5 flex items-center rounded-2xl border border-rule bg-paper focus-within:border-locker">
              <input
                id={`b-${l.id}`}
                inputMode="decimal"
                autoComplete="off"
                aria-describedby={`h-${l.id}`}
                placeholder="0"
                value={values[l.id] ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [l.id]: e.target.value }))}
                className="min-w-0 flex-1 rounded-2xl bg-transparent px-4 py-3 text-[16px] text-ink outline-none tnum"
              />
              <span className="pr-4 text-muted">€</span>
            </div>
          </div>
        ))}
        <div>
          <label htmlFor="b-mois" className="block text-[15px] font-semibold text-ink">
            Durée du séjour (mois, facultatif)
          </label>
          <p className="text-[13px] leading-snug text-muted">Pour obtenir une moyenne par mois</p>
          <input
            id="b-mois"
            inputMode="numeric"
            autoComplete="off"
            placeholder="ex. durée de votre programme"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            className="mt-1.5 w-full rounded-2xl border border-rule bg-paper px-4 py-3 text-[16px] text-ink outline-none focus:border-locker tnum"
          />
        </div>
      </form>

      <div className="mt-8 rounded-3xl bg-blue p-6 text-card sm:p-7" aria-live="polite">
        <p className="text-sm font-medium text-card/80">Budget total de votre simulation</p>
        <p className="mt-1 text-4xl font-bold tracking-tight tnum sm:text-5xl">{fmt(total)} €</p>
        {m > 0 && total > 0 && <p className="mt-2 text-card/85 tnum">Soit environ {fmt(total / m)} € par mois sur {fmt(m)} mois.</p>}
        <p className="mt-4 text-[13px] leading-snug text-card/70">
          Simulation à titre indicatif, construite uniquement avec les montants que vous avez saisis. Elle ne remplace ni un devis ni
          le contrat de votre organisme.
        </p>
      </div>
    </div>
  );
}
