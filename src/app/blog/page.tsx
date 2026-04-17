import type { Metadata } from "next";
import Link from "next/link";
import { MeshGradient } from "@/components/MeshGradient";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — SwiftUI animation tutorials & deep-dives",
  description:
    "Deep-dives into SwiftUI animation techniques, UI engineering patterns and the stories behind the Zelcodes library.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <div className="relative">
      <MeshGradient intensity="soft" />
      <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-16 sm:px-6">
        <header className="mx-auto max-w-2xl text-center">
          <span className="glass inline-flex rounded-full px-3 py-1 text-xs text-muted">
            Zelcodes Blog
          </span>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-gradient">SwiftUI tutorials</span>, patterns
            and deep-dives
          </h1>
          <p className="mt-4 text-muted">
            Writing on iOS animation engineering, UI choreography and the
            techniques powering every animation in the Zelcodes library.
          </p>
        </header>

        <div className="mt-14 grid gap-4">
          {blogPosts.map((post) => (
            <article key={post.slug} className="glass rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3 text-xs text-muted">
                <span className="rounded-full bg-foreground/5 px-2.5 py-1 font-medium text-foreground">
                  {post.category}
                </span>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingMinutes} min read</span>
                {post.status === "draft" && (
                  <span className="ml-auto rounded-full bg-patreon/10 px-2 py-0.5 font-medium text-patreon">
                    Coming soon
                  </span>
                )}
              </div>
              <h2 className="mt-4 text-xl font-semibold tracking-tight sm:text-2xl">
                {post.status === "draft" ? (
                  <span className="text-foreground/80">{post.title}</span>
                ) : (
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-brand"
                  >
                    {post.title}
                  </Link>
                )}
              </h2>
              <p className="mt-3 text-sm text-muted">{post.excerpt}</p>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-surface-border p-8 text-center">
          <h3 className="text-lg font-semibold">
            More posts coming every week
          </h3>
          <p className="mt-2 text-sm text-muted">
            Subscribe on Patreon to get notified when each article goes live —
            plus the source code that backs every tutorial.
          </p>
        </div>
      </div>
    </div>
  );
}
