"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { animations, type Animation } from "@/lib/animations";
import { AnimationPreview } from "./previews/AnimationPreview";

const featuredSlugs = [
  "apple-tv-carousel",
  "dynamic-island-toast",
  "morphing-tab-bar",
  "photos-transition",
  "stock-scroller",
  "paywall-3d",
  "ios-onboarding",
];

const featured: Animation[] = featuredSlugs
  .map((slug) => animations.find((a) => a.slug === slug))
  .filter((a): a is Animation => Boolean(a));

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = featured.length;

  const go = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i + dir + count) % count),
    [count],
  );

  useEffect(() => {
    if (paused) return;
    const t = window.setInterval(() => go(1), 4800);
    return () => window.clearInterval(t);
  }, [paused, go]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    const { offset, velocity } = info;
    const power = offset.x * velocity.x;
    if (offset.x < -60 || power < -6000) go(1);
    else if (offset.x > 60 || power > 6000) go(-1);
  };

  return (
    <div
      className="relative mx-auto mt-14 h-[400px] w-full max-w-3xl md:h-[440px] md:max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      aria-roledescription="carousel"
      aria-label="Featured Zelcodes animations"
    >
      {featured.map((animation, i) => {
        let diff = i - index;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        const abs = Math.abs(diff);
        const isActive = diff === 0;

        const xOffset = diff * 190;
        const scale = isActive ? 1 : abs === 1 ? 0.9 : 0.78;
        const rotate = diff * 5;
        const opacity = abs > 2 ? 0 : 1 - abs * 0.18;
        const y = isActive ? 0 : abs * 14;

        return (
          <motion.div
            key={animation.slug}
            animate={{
              x: xOffset,
              y,
              scale,
              rotate,
              opacity,
              zIndex: 30 - abs,
              filter: isActive ? "blur(0px)" : `blur(${abs * 0.8}px)`,
            }}
            transition={{ type: "spring", stiffness: 240, damping: 28 }}
            drag={isActive ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={onDragEnd}
            onClick={() => !isActive && setIndex(i)}
            className="absolute left-1/2 top-0 -ml-[140px] w-[280px] select-none md:w-[300px] md:-ml-[150px]"
            style={{
              cursor: isActive ? "grab" : "pointer",
              touchAction: "pan-y",
            }}
          >
            <div className="overflow-hidden rounded-[26px] border border-black/5 bg-background shadow-[0_30px_70px_-28px_rgba(17,17,44,0.35)] ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5 dark:shadow-[0_30px_70px_-12px_rgba(0,0,0,0.7)]">
              <div className="m-2 h-52 overflow-hidden rounded-[20px] md:h-56">
                <AnimationPreview
                  animation={animation}
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-center justify-between gap-3 px-4 pb-4">
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold tracking-[0.08em] text-muted uppercase">
                    {animation.category}
                  </div>
                  <div className="mt-0.5 truncate text-sm font-semibold">
                    {animation.title}
                  </div>
                </div>
                <span className="shrink-0 rounded-full bg-foreground/5 px-2 py-0.5 text-[10px] font-medium text-muted">
                  {animation.difficulty}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}

      <button
        type="button"
        aria-label="Previous animation"
        onClick={() => go(-1)}
        className="absolute left-0 top-[42%] z-40 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-background text-foreground shadow-lg transition hover:scale-105 md:left-2"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        type="button"
        aria-label="Next animation"
        onClick={() => go(1)}
        className="absolute right-0 top-[42%] z-40 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-surface-border bg-background text-foreground shadow-lg transition hover:scale-105 md:right-2"
      >
        <ChevronRight size={18} />
      </button>

      <div className="absolute bottom-0 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1.5">
        {featured.map((a, i) => (
          <button
            key={a.slug}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === index
                ? "w-7 bg-foreground"
                : "w-1.5 bg-foreground/25 hover:bg-foreground/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
