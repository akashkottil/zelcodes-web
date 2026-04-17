export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingMinutes: number;
  status: "published" | "draft";
};

export const blogPosts: BlogPost[] = [
  {
    slug: "hero-transitions-swiftui",
    title: "Building App Store-style hero transitions in SwiftUI",
    excerpt:
      "A deep dive into matchedGeometryEffect, gesture-driven dismiss, and the choreography behind a convincing hero animation.",
    category: "Tutorial",
    publishedAt: "2026-03-14",
    readingMinutes: 8,
    status: "draft",
  },
  {
    slug: "dynamic-island-toast-pattern",
    title: "The Dynamic Island toast pattern — a reusable component",
    excerpt:
      "How to animate a notification pill out of the Dynamic Island with a single modifier, without breaking on older devices.",
    category: "Pattern",
    publishedAt: "2026-03-07",
    readingMinutes: 6,
    status: "draft",
  },
  {
    slug: "scroll-aware-nav-bars",
    title: "Scroll-aware navigation bars without UIKit",
    excerpt:
      "Implementing a Telegram/Apple Store-style scroll-responsive header in pure SwiftUI using ScrollView offset tracking.",
    category: "Tutorial",
    publishedAt: "2026-02-21",
    readingMinutes: 10,
    status: "draft",
  },
  {
    slug: "sortable-grids-drag-and-drop",
    title: "Building a sortable grid with drag-and-drop reflow",
    excerpt:
      "Long-press gestures, drop destinations and a sensible animation curve for reorderable grids in SwiftUI.",
    category: "Tutorial",
    publishedAt: "2026-02-14",
    readingMinutes: 9,
    status: "draft",
  },
];
