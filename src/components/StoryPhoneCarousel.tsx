import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: string[];
  intervalMs?: number; // durée par slide
  className?: string;
  alt?: string;
};

const swipeConfidenceThreshold = 8000;

function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}

export default function StoryPhoneCarousel({
  images,
  intervalMs = 2200, // ✅ plus “story”
  className = "",
  alt = "Story Instagram",
}: Props) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // pour éviter les clicks multiples trop rapides
  const lockRef = useRef(false);

  const goTo = (i: number) => {
    if (count <= 0) return;
    const next = ((i % count) + count) % count; // ✅ boucle infinie
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = useMemo(() => images[index], [images, index]);

  // ✅ Autoplay fiable (timeout, pas interval)
  useEffect(() => {
    if (paused || count <= 1) return;

    const t = window.setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % count);
    }, intervalMs);

    return () => window.clearTimeout(t);
  }, [paused, intervalMs, count, index]);

  // si images change et index out of range
  useEffect(() => {
    if (index >= count && count > 0) setIndex(0);
  }, [count, index]);

  const safeNav = (fn: () => void) => {
    if (lockRef.current) return;
    lockRef.current = true;
    fn();
    window.setTimeout(() => {
      lockRef.current = false;
    }, 250);
  };

  if (!images || images.length === 0) {
    return (
      <div
        className={[
          "relative grid place-items-center bg-black text-white/70",
          className,
        ].join(" ")}
      >
        Aucune image
      </div>
    );
  }

  return (
    <div
      className={["relative w-full h-full", className].join(" ")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
    >
      {/* ✅ Barres de progression style story */}
      <div className="absolute left-3 right-3 top-3 z-20 flex gap-1.5">
        {images.map((_, i) => {
          const isDone = i < index;
          const isActive = i === index;

          return (
            <div
              key={i}
              className="h-1 flex-1 overflow-hidden rounded-full bg-black/25"
            >
              {/* déjà vues */}
              {isDone && <div className="h-full w-full bg-white/90" />}

              {/* pas encore vues */}
              {!isDone && !isActive && <div className="h-full w-0 bg-white/90" />}

              {/* active : repart à 0 à chaque slide */}
              {isActive && (
                <motion.div
                  key={`progress-${index}`} // ✅ reset à chaque image
                  className="h-full bg-white/90"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: intervalMs / 1000, ease: "linear" }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* ✅ Zones tap/click (gauche/droite) */}
      <button
        aria-label="Précédent"
        onClick={() => safeNav(prev)}
        className="absolute inset-y-0 left-0 z-20 w-1/3 bg-transparent"
      />
      <button
        aria-label="Suivant"
        onClick={() => safeNav(next)}
        className="absolute inset-y-0 right-0 z-20 w-1/3 bg-transparent"
      />

      {/* ✅ Image animée + swipe */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={current}
          src={current}
          alt={alt}
          className="h-full w-full object-cover select-none"
          draggable={false}
          initial={{ opacity: 0, x: 40, scale: 1.01 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -40, scale: 1.01 }}
          transition={{ type: "spring", stiffness: 420, damping: 36 }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.25}
          onDragEnd={(_, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) safeNav(next);
            else if (swipe > swipeConfidenceThreshold) safeNav(prev);
          }}
        />
      </AnimatePresence>

      {/* ✅ Overlay premium */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/18 via-transparent to-black/10" />
      </div>
    </div>
  );
}