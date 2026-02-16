import { Review } from "../data/reviews";

const Stars = ({ rating = 5 }: { rating?: number }) => {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} étoiles`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-yellow-200"}>
          ★
        </span>
      ))}
    </div>
  );
};

export default function ReviewCards({
  reviews,
  showRating = false,
}: {
  reviews: Review[];
  showRating?: boolean;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {reviews.map((r, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border border-black/5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold text-[#384c8b]/70 uppercase tracking-wide">
                {r.source} · {r.role}
              </p>
              <p className="mt-1 text-sm font-bold text-[#384c8b]">
                {r.author}
              </p>
            </div>
            {showRating && r.rating ? <Stars rating={r.rating} /> : null}
          </div>

          <p className="mt-4 text-[#384c8b]/85 leading-relaxed">
            “{r.text}”
          </p>
        </div>
      ))}
    </div>
  );
}
