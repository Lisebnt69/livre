/**
 * Mots importants : écrire **mot** dans un texte pour le mettre en rouge casier.
 * (rouge #A1232B sur fond clair, rose clair #FF9AA0 sur fond sombre : contraste AA dans les deux cas)
 */
export function Rich({ text, tone = "light" }: { text: string; tone?: "light" | "dark" | "red" }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  const cls = tone === "dark" ? "font-bold text-[#FF9AA0]" : tone === "red" ? "font-bold text-[#FFC2C6]" : "font-bold text-locker";
  return (
    <>
      {parts.map((p, i) =>
        i % 2 ? (
          <strong key={i} className={cls}>
            {p}
          </strong>
        ) : (
          p
        )
      )}
    </>
  );
}

/** Même texte sans balisage (méta, JSON-LD, attributs). */
export const plain = (text: string) => text.replace(/\*\*(.+?)\*\*/g, "$1");
