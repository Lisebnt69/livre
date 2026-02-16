import Stars from "./Stars";
import { ReviewItem } from "../data/reviews";
import CTAButton from "./CTAButton";

type Props = {
  item: ReviewItem;
  amazonUrl: string;
};

export default function ReviewHighlight({ item, amazonUrl }: Props) {
  return (
    <section className="max-w-6xl mx-auto px-6 md:px-10 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Screenshot */}
        <div className="relative group">
          <div className="absolute -inset-3 bg-gradient-to-r from-primaryRed/25 to-primaryBlue/25 blur-2xl opacity-40 group-hover:opacity-60 transition" />
          <img
            src={item.image}
            alt="Avis lecteur"
            className="relative rounded-2xl shadow-2xl w-full"
            loading="lazy"
          />
          <p className="mt-3 text-xs text-primaryBlue/70">
            Capture d’écran d’un avis réel (source : {item.source})
          </p>
        </div>

        {/* Texte lisible + CTA */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-primaryBlue/70">
            Avis réel • {item.source} {item.dateLabel ? `• ${item.dateLabel}` : ""}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-black text-primaryBlue leading-tight">
            Le guide qui rassure avant le départ.
          </h2>

          <div className="mt-6 space-y-4 text-lg text-primaryBlue/80 leading-relaxed">
            <p>
              « Ce guide manquait sincèrement. J’aurais tellement aimé en avoir un avant le départ de ma fille.
              Un support concret, basé sur du vécu réel… c’est précieux. »
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <Stars value={5} />
            <span className="text-sm text-primaryBlue/70">Parent d’étudiant en échange</span>
          </div>

        
        </div>
      </div>
    </section>
  );
}
