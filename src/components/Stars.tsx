type Props = { value?: 4 | 5 };

export default function Stars({ value }: Props) {
  if (!value) return null;
  const stars = Array.from({ length: 5 }, (_, i) => i < value);
  return (
    <div className="flex items-center gap-1" aria-label={`${value} sur 5`}>
      {stars.map((on, i) => (
        <span
          key={i}
          className={on ? "text-primaryRed" : "text-slate-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
