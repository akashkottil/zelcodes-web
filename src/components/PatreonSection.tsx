"use client";

import { motion } from "framer-motion";
import { Check, Heart } from "lucide-react";
import { PATREON_URL } from "@/lib/links";

const perks = [
  "Access every SwiftUI animation source file — forever",
  "New animation drops every single week",
  "Request custom animations from the backlog",
  "Private GitHub access with updates and bug fixes",
  "Cancel anytime — no hidden fees, no lock-in",
];

export function PatreonSection() {
  return (
    <section
      id="patreon"
      aria-labelledby="patreon-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <div className="glass relative overflow-hidden rounded-[32px] p-8 sm:p-12">
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(249,104,84,0.45), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(129,140,248,0.35), transparent)",
          }}
        />

        <div className="relative grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-patreon/10 px-3 py-1 text-xs font-medium text-patreon">
              <Heart size={12} /> Support on Patreon
            </span>
            <h2
              id="patreon-title"
              className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl"
            >
              One subscription,{" "}
              <span className="text-gradient">every animation</span>
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              Zelcodes is independently funded by developers who want to ship
              better iOS apps, faster. Your Patreon subscription unlocks every
              animation in the library — plus the ones being built this week,
              next week and next month.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href={PATREON_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-patreon px-6 py-3 text-sm font-medium text-white shadow-lg shadow-patreon/25 transition hover:brightness-110"
              >
                <Heart size={14} /> Join on Patreon
              </a>
              <span className="text-xs text-muted">
                Starting at $9/mo · cancel anytime
              </span>
            </motion.div>
          </div>

          <ul className="grid gap-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-2 text-white">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
