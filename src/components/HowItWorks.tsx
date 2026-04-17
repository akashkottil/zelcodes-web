"use client";

import { motion } from "framer-motion";
import { Compass, MousePointerClick, Unlock } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "Browse the library",
    body: "Filter by category, difficulty or tag. Preview each animation directly in the browser — no downloads, no sign-up.",
  },
  {
    icon: MousePointerClick,
    title: "Pick what you need",
    body: "Click into any animation to read its description, see demo videos and understand the techniques behind it.",
  },
  {
    icon: Unlock,
    title: "Unlock the source on Patreon",
    body: "One subscription unlocks every source file, weekly new drops, and request access to future animations.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="how-title"
          className="text-3xl font-semibold tracking-tight sm:text-4xl"
        >
          From browser to <span className="text-gradient">Xcode</span> in 3
          steps
        </h2>
        <p className="mt-4 text-muted">
          Zelcodes is a showcase first — you can explore everything without
          signing up. When you want the code, Patreon does the rest.
        </p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass relative rounded-3xl p-6"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                <s.icon size={18} />
              </span>
              <span className="text-xs font-semibold tracking-wide text-muted uppercase">
                Step 0{i + 1}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">
              {s.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
