import { ReviewItem } from "../data/reviews";

type Props = {
  items: ReviewItem[];
};

export default function ReviewWall({ items }: Props) {
  const shots = items.filter((r) => r.kind === "screenshot" && !r.highlight);

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
      {shots.map((r) => (
        <figure
          key={r.id}
          className="mb-6 break-inside-avoid bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >
          <img
            src={r.image}
            alt={`Avis (capture) - ${r.source}`}
            className="w-full h-auto"
            loading="lazy"
          />
          <figcaption className="p-4 flex items-center justify-between">
            <span className="text-xs font-semibold text-primaryBlue/80">
              Capture • {r.source}
            </span>
            {r.dateLabel && (
              <span className="text-xs text-primaryBlue/60">{r.dateLabel}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
