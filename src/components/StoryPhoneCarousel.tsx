import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Props = {
  images: string[];
  intervalMs?: number;
  className?: string;
};

const swipeConfidenceThreshold = 8000;

function swipePower(offset: number, velocity: number) {
  return Math.abs(offset) * velocity;
}

export default function StoryPhoneCarousel({
  images,
  intervalMs = 2500,
  className = "",
}: Props) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const lockRef = useRef(false);

  const goTo = (i: number) => {
    const next = ((i % count) + count) % count;
    setIndex(next);
  };

  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const current = useMemo(() => images[index], [images, index]);

  // Autoplay infini
  useEffect(() => {
    if (paused || count <= 1) return;

    const t = window.setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % count);
    }, intervalMs);

    return () => window.clearTimeout(t);
  }, [paused, intervalMs, count, index]);

  const safeNav = (fn: () => void) => {
    if (lockRef.current) return;
    lockRef.current = true;
    fn();
    setTimeout(() => (lockRef.current = false), 250);
  };

  if (!images?.length) return null;

  return (
    <div className={["relative w-full h-full", className].join(" ")}>
      {/* Barre progression */}
      <div className="absolute left-3 right-3 top-3 z-20 flex gap-1.5">
        {images.map((_, i) => {
          const isDone = i < index;
          const isActive = i === index;

          return (
            <div key={i} className="h-1 flex-1 rounded-full bg-black/25 overflow-hidden">
              {isDone && <div className="h-full w-full bg-white/90" />}
              {!isDone && !isActive && <div className="h-full w-0 bg-white/90" />}
              {isActive && !paused && (
                <motion.div
                  key={`progress-${index}`}
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

      {/* Image */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.img
          key={current}
          src={current}
          alt="Story Instagram"
          className="h-full w-full object-cover select-none"
          draggable={false}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
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

      {/* ⬅️ Flèche gauche */}
      <button
        onClick={() => safeNav(prev)}
        aria-label="Image précédente"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-30 
                   bg-black/40 hover:bg-black/60 text-white 
                   rounded-full p-2 backdrop-blur transition"
      >
        <ChevronLeft size={20} />
      </button>

      {/* ➡️ Flèche droite */}
      <button
        onClick={() => safeNav(next)}
        aria-label="Image suivante"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-30 
                   bg-black/40 hover:bg-black/60 text-white 
                   rounded-full p-2 backdrop-blur transition"
      >
        <ChevronRight size={20} />
      </button>

      {/* ⏸️ Pause / Play */}
      <button
        onClick={() => setPaused(!paused)}
        aria-label={paused ? "Reprendre la lecture" : "Mettre en pause"}
        className="absolute bottom-4 right-4 z-30 
                   bg-white/90 hover:bg-white 
                   text-primaryBlue rounded-full p-2 shadow-md transition"
      >
        {paused ? <Play size={18} /> : <Pause size={18} />}
      </button>

      {/* Overlay léger */}
      <div className="pointer-events-none absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-black/10" />
      </div>
    </div>
  );
}