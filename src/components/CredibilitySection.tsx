"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, ShieldCheck, Zap } from "lucide-react";

const traits = [
  {
    icon: Code2,
    title: "Idiomatic SwiftUI",
    body: "Hand-written, no external dependencies. Reads like the docs.",
  },
  {
    icon: Zap,
    title: "60fps on device",
    body: "Every animation is profiled on a real iPhone — never just the simulator.",
  },
  {
    icon: ShieldCheck,
    title: "Production-tested",
    body: "Patterns taken from shipped apps, not Dribbble concepts.",
  },
  {
    icon: Rocket,
    title: "Weekly drops",
    body: "A fresh animation lands on Patreon every week of the year.",
  },
];

export function CredibilitySection() {
  return (
    <section
      aria-labelledby="about-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted">
            Built by developers, for developers
          </span>
          <h2
            id="about-title"
            className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            Hi, I'm{" "}
            <span className="text-gradient">
              Akash Kottil — the engineer
            </span>{" "}
            behind Zelcodes.
          </h2>
          <p className="mt-5 text-muted">
            I've been shipping production iOS and SwiftUI apps for years, and
            Zelcodes is my way of giving every iOS developer the same animation
            toolkit I wish I'd had. No tutorial filler, no overengineered
            dependencies — just the patterns I actually use in real apps.
          </p>
          <p className="mt-4 text-muted">
            Every animation in the library has been ported from something real
            — an App Store release, a design we shipped, or an iOS interaction
            I reverse-engineered until it felt pixel-perfect.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {traits.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="glass rounded-2xl p-5"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand/80 to-brand-2/80 text-white">
                <t.icon size={16} />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{t.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
