import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
// si tu as book data : décommente
// import { book } from "../data/book";

type FAQItem = {
  question: string;
  answer: string;
  tag?: string;
};

const spring = {
  type: "spring",
  stiffness: 420,
  damping: 36,
  mass: 0.7,
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = useMemo<FAQItem[]>(
    () => [
      {
        tag: "Visa J-1 vs F-1",
        question: "Quelle sont les différences entre un visa américain J-1 et F-1 ?",
        answer:
          "Le visa J-1, c’est un peu l’aventure américaine dans sa version la plus authentique. Supervisé par le Département d’État, ce programme d’échange te place dans une famille bénévole et te permet d’aller au lycée public sans frais de scolarité. Tu es plongé à 100 % dans la vie locale, mais il faut savoir lâcher prise : tu ne choisis ni l’État ni l’école, et ton séjour est limité à 10 mois, sans possibilité de prolongation. Le visa F-1, lui, correspond davantage à une scolarité classique aux États-Unis, dans le privé ou le public payant. L’avantage, c’est que tu peux souvent choisir ton établissement, opter pour un programme sportif ou artistique, et étaler tes études sur plusieurs années. En contrepartie, le budget est bien plus élevé, et l’hébergement se fait soit en internat, soit dans une famille d’accueil rémunérée.",
      },
      {
        tag: "Famille d’accueil",
        question: "Comment choisit-on les familles d'accueil ?",
        answer:
          "Un coordinateur local, mandaté par l'organisme américain, rencontre chaque famille. Il visite leur maison, discute de leurs motivations et s'assure que leur environnement est chaleureux et sécurisé pour le jeune. Ces familles participent bénévolement au programme J-1, avec une vraie envie de partage culturel. Leur profil est varié : on y trouve des couples avec enfants, des parents seuls, des retraités ou des personnes ayant déjà vécu l'expérience. Le placement est personnalisé. On étudie attentivement le dossier du jeune, sa lettre, ses photos, ses résultats, pour trouver une famille dont les valeurs et le mode de vie lui correspondent. Car au fond, la clé d'un séjour réussi réside dans cette relation humaine, qui se construit jour après jour grâce à une communication ouverte et une adaptation réciproque.",
      },
        {
        tag: "Budget",
        question: "Combien coûte une année scolaire aux États-unis ?",
        answer:
          "Le prix varie selon le programme que tu choisis. Pour un échange J-1 en famille d'accueil bénévole, il faut généralement compter entre 12 000 € et 16 000 € par an. Cette somme inclut les frais du programme, l'assurance, les billets d'avion et tes dépenses personnelles. Si tu optes pour un visa F-1 dans une école privée ou un internat, le budget monte assez vite : ça peut aller de 20 000 à 60 000 € par an, tout dépend de l'établissement et du type d'hébergement.",
      },
        {
        tag: "Assurance",
        question: "L'assurance santé pour étudier aux États-Unis est-elle importante ?",
        answer:
          "Mieux vaut ne pas négliger la question de l’assurance santé. Sur place, les frais médicaux sont très élevés, et une simple visite aux urgences peut vite coûter plusieurs centaines de dollars. Heureusement, la plupart des programmes incluent déjà une couverture de base, qui prend généralement en charge l’hospitalisation, les urgences et la responsabilité civile. Mais attention : tous les postes ne sont pas forcément couverts. Les soins dentaires, les sports à risque ou encore certaines franchises peuvent rester à votre charge. Pour les séjours longs ou si vous pratiquez un sport régulièrement, une assurance complémentaire ou une option rapatriement est souvent recommandée.",
       },
        {
        tag: "Sport-Études",
        question: "Comment préparer une scolarité sport-études aux Etats-Unis ?",
        answer:
          "S’engager dans un High School sport-études demande de l’anticipation et de la rigueur. Les écoles recherchent des élèves motivés, en mesure de conjuguer performance sportive et résultats scolaires. Avoir un bon dossier sportif (vidéos, statistiques, recommandations d’entraîneurs) est recommandé ainsi qu’un bon niveau académique. La rigueur s’avère nécessaire pour combiner entraînements quotidiens, compétitions ainsi que déplacements. Les différents programmes F-1 permettent d’intégrer des académies sportives ou boarding schools offrant infrastructures de haut niveau et suivi personnel.",
      },
      {
        tag: "Bourse",
        question: "Comment avoir une bourse sportive en High School américaine ?",
        answer:
          "Quelques établissements privés aux États-Unis proposent des aides financières sportives totales ou partielles afin d’attirer des athlètes du monde entier. Celles-ci peuvent couvrir les dépenses d’inscription, de résidence ou une portion des sommes associées au cursus. Les disciplines les plus convoitées englobent le basketball, le soccer, le tennis, la natation et l’athlétisme. L’aptitude sportive doit être remarquable et s’accompagner d’un bon historique scolaire et de conduite. Une aide financière exige une implication sérieuse : des pratiques forcées, de la rigueur et la conservation des notes scolaires.",
      },
      {
        tag: "Timing",
        question: "Quand faut-il commencer à se préparer ?",
        answer:
          "L’idéal est de commencer plusieurs mois à l’avance. Plus tu anticipes, plus tu gardes le contrôle sur les démarches. S’y prendre à la dernière minute, c’est ajouter du stress inutile.",
      },
      {
        tag: "Achat",
        question: "Où acheter le livre ?",
        answer:
          "Le livre est disponible sur Amazon, en version broché et Kindle. Tu choisis ton format, tu commandes, et tu passes à l’action.",
      },
      {
        tag: "Format",
        question: "Le livre existe en quelle version ?",
        answer:
          "Disponible en version broché (papier) et en version Kindle. Le broché est idéal pour annoter et surligner. La version Kindle est parfaite si tu préfères lire sur tablette ou téléphone, partout, à ton rythme.",
      }
    ],
    []
  );

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative mx-auto max-w-5xl px-6 ">
      {/* 🌸 BACKGROUND BRAND (rose + primaryRed) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* glow top */}
        <div className="absolute left-1/2 top-[-60px] h-72 w-[680px] -translate-x-1/2 rounded-full bg-primaryRed/12 blur-3xl" />
        {/* glow side */}
        <div className="absolute right-[-80px] top-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        {/* gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-pink-50/70 via-white to-white" />
        {/* divider */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primaryRed/20 to-transparent" />
      </div>

      {/* HEADER */}
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primaryRed/20 bg-white/70 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
          <Sparkles className="h-4 w-4 text-primaryRed" />
          FAQ 
        </div>

        <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-primaryBlue/85 sm:text-4xl">
          Questions fréquentes
        </h2>


      </div>

      {/* ACCORDION */}
      <div className="space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              layout
              transition={spring}
              className={[
                "group relative overflow-hidden rounded-2xl border",
                "bg-white/70 backdrop-blur-xl shadow-sm",
                "border-primaryRed/15",
                "hover:border-primaryRed/30 hover:shadow-md",
              ].join(" ")}
            >
              {/* subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-primaryRed/10 blur-2xl" />
                <div className="absolute right-[-80px] bottom-[-80px] h-56 w-56 rounded-full bg-pink-200/40 blur-2xl" />
              </div>

              {/* top shine */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />

              <button
                onClick={() => toggle(index)}
                className={[
                  "relative w-full px-6 py-5 text-left",
                  "focus:outline-none focus-visible:ring-2 focus-visible:ring-primaryRed/30 focus-visible:ring-offset-2 focus-visible:ring-offset-white",
                ].join(" ")}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {item.tag && (
                      <span className="mb-2 inline-flex items-center rounded-full border border-primaryRed/20 bg-white/80 px-3 py-1 text-xs font-semibold text-primaryRed">
                        {item.tag}
                      </span>
                    )}

                    <h3 className="text-base font-semibold text-primaryBlue sm:text-lg">
                      {item.question}
                    </h3>
                  </div>

                  <motion.span
                    className={[
                      "mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl",
                      "border border-primaryRed/15 bg-white/85 shadow-sm",
                      "group-hover:border-primaryRed/25",
                    ].join(" ")}
                    animate={{ rotate: isOpen ? 180 : 0, scale: isOpen ? 1.02 : 1 }}
                    transition={spring}
                  >
                    <ChevronDown className="h-5 w-5 text-primaryRed" />
                  </motion.span>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="relative overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-primaryRed/15 to-transparent" />
                      <p className="mt-4 text-sm leading-relaxed text-primaryBlue/85 sm:text-base text-justify" >
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* micro-lift */}
              <motion.div
                className="absolute inset-0 -z-10"
                animate={{ y: isOpen ? -1 : 0 }}
                transition={spring}
              />
            </motion.div>
          );
        })}
      </div>
      <br />

    </section>
  );
}