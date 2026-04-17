"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PATREON_URL } from "@/lib/links";

export function CTASection() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-[32px] p-10 text-center sm:p-16"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.15) 50%, rgba(56,189,248,0.15) 100%)",
          border: "1px solid var(--surface-border)",
        }}
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(600px circle at 20% 20%, rgba(129,140,248,0.35), transparent 60%), radial-gradient(600px circle at 80% 80%, rgba(244,114,182,0.35), transparent 60%)",
          }}
        />
        <div className="relative">
          <h2
            id="cta-title"
            className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl"
          >
            Stop building UI from scratch.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted">
            Your app deserves animations that feel like Apple built them. Join
            Zelcodes on Patreon and ship the polish that makes users notice.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={PATREON_URL}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:opacity-90"
            >
              Get Full Access
              <ArrowRight
                size={16}
                className="transition group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#animations"
              className="rounded-full px-5 py-3.5 text-sm text-muted transition hover:text-foreground"
            >
              or keep browsing →
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
