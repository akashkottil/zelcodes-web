import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Lock, ArrowUpRight } from "lucide-react";
import { animations, getAnimation } from "@/lib/animations";
import { AnimationPreview } from "@/components/previews/AnimationPreview";
import { MeshGradient } from "@/components/MeshGradient";
import { PATREON_URL } from "@/lib/links";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return animations.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const animation = getAnimation(slug);
  if (!animation) return {};

  return {
    title: `${animation.title} — SwiftUI animation`,
    description: animation.longDescription,
    alternates: { canonical: `/animations/${animation.slug}` },
    openGraph: {
      title: `${animation.title} · Zelcodes`,
      description: animation.longDescription,
      type: "article",
    },
  };
}

export default async function AnimationDetail({ params }: PageProps) {
  const { slug } = await params;
  const animation = getAnimation(slug);
  if (!animation) notFound();

  const related = animations
    .filter(
      (a) => a.slug !== animation.slug && a.category === animation.category,
    )
    .slice(0, 3);

  return (
    <div className="relative">
      <MeshGradient intensity="soft" />
      <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-16 sm:px-6">
        <Link
          href="/#animations"
          className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
        >
          <ArrowLeft size={14} /> Back to library
        </Link>

        <header className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
          <div className="glass relative overflow-hidden rounded-[28px] p-3">
            <div className="h-[320px] overflow-hidden rounded-[22px] sm:h-[420px]">
              <AnimationPreview
                animation={animation}
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="text-xs font-medium tracking-wide text-muted uppercase">
              {animation.category}
            </span>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              {animation.title}
            </h1>
            <p className="mt-4 text-muted">{animation.longDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {Array.from(
                new Set([animation.difficulty, ...animation.tags]),
              ).map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-surface-border px-2.5 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <a
                href={PATREON_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-patreon px-6 py-3 text-sm font-medium text-white shadow-lg shadow-patreon/25 transition hover:brightness-110 sm:w-auto"
              >
                <Lock size={14} /> Unlock source on Patreon
              </a>
              <p className="text-xs text-muted">
                The full Xcode project ships with the Patreon subscription —
                one sub unlocks every animation.
              </p>
            </div>
          </div>
        </header>

        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="text-xl font-semibold tracking-tight">
              More in {animation.category}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/animations/${r.slug}`}
                  className="glass group relative block overflow-hidden rounded-2xl p-2 transition hover:-translate-y-0.5"
                >
                  <div className="h-36 overflow-hidden rounded-xl">
                    <AnimationPreview
                      animation={r}
                      compact
                      className="h-full w-full"
                    />
                  </div>
                  <div className="flex items-center justify-between p-3">
                    <span className="text-sm font-semibold">{r.title}</span>
                    <ArrowUpRight
                      size={14}
                      className="text-muted transition group-hover:text-foreground"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
