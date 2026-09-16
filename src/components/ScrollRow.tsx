"use client";

import { useRef, useState, type ReactNode } from "react";

export default function ScrollRow({ children }: { children: ReactNode[] }) {
  const ref = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);
  const count = children.length;

  function handleScroll() {
    const el = ref.current;
    const card = el?.children[0] as HTMLElement | undefined;
    if (!el || !card) return;
    const step = card.offsetWidth + 16;
    const index = Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), count - 1));
  }

  function scrollToIndex(i: number) {
    const el = ref.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) {
      el.scrollLeft = card.offsetLeft - el.offsetLeft;
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <ul
        ref={ref}
        onScroll={handleScroll}
        className="flex scroll-smooth gap-4 overflow-x-auto p-1 -m-1 snap-x snap-mandatory"
      >
        {children}
      </ul>

      {count > 1 && (
        <div className="flex justify-center gap-1.5">
          {Array.from({ length: count }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to item ${i + 1} of ${count}`}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === active
                  ? "w-5 bg-black/70 dark:bg-white/70"
                  : "w-1.5 bg-black/20 hover:bg-black/40 dark:bg-white/20 dark:hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
