"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Logotype } from "./Logotype";
import { PATREON_URL } from "@/lib/links";

const links = [
  { href: "/#animations", label: "Animations" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#patreon", label: "Patreon" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 w-full"
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="glass flex w-full items-center justify-between rounded-full px-4 py-2 sm:px-5">
          <Link
            href="/"
            className="group flex items-center"
            aria-label="Zelcodes home"
          >
            <Logotype fontSize={22} />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-muted transition hover:bg-foreground/5 hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href={PATREON_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-block"
            >
              Join Patreon
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
