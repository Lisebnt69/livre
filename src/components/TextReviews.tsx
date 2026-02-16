import Stars from "./Stars";
import { ReviewItem } from "../data/reviews";

export default function TextReviews({ items }: { items: ReviewItem[] }) {
  const texts = items.filter((r) => r.kind === "text");

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {texts.map((r) => (
        <article
          key={r.id}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold text-primaryBlue/70 uppercase tracking-widest">
              {r.source}
            </p>
            <Stars value={r.rating} />
          </div>

          <p className="mt-4 text-primaryBlue/85 leading-relaxed">
            “{r.text}”
          </p>

          <div className="mt-5 text-xs text-primaryBlue/65">
            {r.role ? <span className="font-semibold">{r.role}</span> : null}
            {r.role && (r.name || r.dateLabel) ? " • " : null}
            {r.name ? <span>{r.name}</span> : null}
            {(r.name && r.dateLabel) ? " • " : null}
            {r.dateLabel ? <span>{r.dateLabel}</span> : null}
          </div>
        </article>
      ))}
    </div>
  );
}
