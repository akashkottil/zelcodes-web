"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { animations, categories } from "@/lib/animations";
import { AnimationCard } from "./AnimationCard";

const filters = ["All", ...categories];

export function AnimationShowcase() {
  const [active, setActive] = useState<string>("All");

  const items = useMemo(
    () =>
      active === "All"
        ? animations
        : animations.filter((a) => a.category === active),
    [active],
  );

  return (
    <section
      id="animations"
      aria-labelledby="animations-title"
      className="relative mx-auto max-w-6xl px-4 pt-16 pb-16 sm:px-6 sm:pt-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2
          id="animations-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          The Zelcodes <span className="text-gradient">animation library</span>
        </h2>
        <p className="mt-4 text-muted">
          From tab-bar micro-interactions to full-screen hero transitions —
          every animation ships with clean, idiomatic SwiftUI source.
        </p>
      </motion.div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={isActive}
              className={`rounded-full px-4 py-1.5 text-sm transition ${
                isActive
                  ? "bg-foreground text-background"
                  : "glass text-muted hover:text-foreground"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a, i) => (
          <AnimationCard key={a.slug} animation={a} index={i} />
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-muted">
        + hundreds more building in the library — join Patreon to unlock every
        source file.
      </p>
    </section>
  );
}
