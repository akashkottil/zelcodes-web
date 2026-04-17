"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MeshGradient } from "./MeshGradient";
import { HeroCarousel } from "./HeroCarousel";
import { PATREON_URL } from "@/lib/links";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-24 sm:pt-20 lg:pt-28">
      <MeshGradient intensity="bold" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted">
            <Sparkles size={12} className="text-brand" />
            Hand-crafted SwiftUI animations · updated weekly
          </span>

          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">500+ UI Animations</span>
            <br />
            for SwiftUI developers
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            Copy, customize, and ship faster with ready-to-use animation code —
            transitions, tab bars, sheets, onboarding flows and more.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="#animations"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-90"
            >
              Browse Animations
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={PATREON_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-6 py-3 text-sm font-medium backdrop-blur-md transition hover:border-patreon/60"
            >
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-patreon"
              />
              Unlock All on Patreon
            </a>
          </div>

          <p className="mt-5 text-xs text-muted">
            Production-ready Swift code · SwiftUI 5+ · iOS 17+ · macOS 14+
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroCarousel />
        </motion.div>

        <p className="mt-8 text-center text-xs text-muted">
          Drag a card, tap the arrows, or let it auto-play.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-2 sm:gap-6"
        >
          {[
            { k: "500+", v: "Animations" },
            { k: "27", v: "Categories" },
            { k: "Weekly", v: "New drops" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-surface-border bg-background px-3 py-4 text-center shadow-sm sm:py-5"
            >
              <div className="text-xl font-semibold tracking-tight sm:text-2xl">
                {s.k}
              </div>
              <div className="mt-1 text-xs text-muted sm:text-sm">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
