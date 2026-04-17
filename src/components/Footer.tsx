import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, XIcon, YouTubeIcon } from "./BrandIcons";
import { Logotype } from "./Logotype";
import {
  PATREON_URL,
  GITHUB_URL,
  TWITTER_URL,
  YOUTUBE_URL,
  CONTACT_EMAIL,
} from "@/lib/links";

export function Footer() {
  const year = new Date().getFullYear();

  const cols = [
    {
      title: "Product",
      links: [
        { href: "/#animations", label: "Animations" },
        { href: PATREON_URL, label: "Patreon", external: true },
        { href: "/#how-it-works", label: "How it works" },
      ],
    },
    {
      title: "Resources",
      links: [
        { href: "/blog", label: "Blog" },
        { href: GITHUB_URL, label: "GitHub", external: true },
        { href: `mailto:${CONTACT_EMAIL}`, label: "Contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacy", label: "Privacy" },
        { href: "/terms", label: "Terms" },
      ],
    },
  ];

  return (
    <footer className="relative mt-24 border-t border-surface-border/70">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center">
              <Logotype fontSize={28} />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted">
              Production-ready SwiftUI animations, transitions and UI effects
              for iOS and macOS developers.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <a
                href={GITHUB_URL}
                aria-label="GitHub"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <GitHubIcon size={15} />
              </a>
              <a
                href={TWITTER_URL}
                aria-label="X / Twitter"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <XIcon size={13} />
              </a>
              <a
                href={YOUTUBE_URL}
                aria-label="YouTube"
                target="_blank"
                rel="noreferrer"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <YouTubeIcon size={15} />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                aria-label="Email"
                className="glass inline-flex h-9 w-9 items-center justify-center rounded-full transition hover:scale-105"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold tracking-wide uppercase text-foreground/80">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-muted transition hover:text-foreground"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-sm text-muted transition hover:text-foreground"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-surface-border/70 pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <span>
            © {year} Zelcodes · Built by Akash Kottil — for SwiftUI developers.
          </span>
          <span>Crafted in Kerala, India · Shipped worldwide.</span>
        </div>
      </div>
    </footer>
  );
}
