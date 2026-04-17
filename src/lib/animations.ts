export type Difficulty = "Beginner" | "Intermediate" | "Advanced";

export type Animation = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  difficulty: Difficulty;
  category: string;
  accentFrom: string;
  accentTo: string;
};

export const animations: Animation[] = [
  {
    slug: "apple-store-tab-scroll",
    title: "Apple Store Tab Scroll",
    description:
      "A tab bar that intelligently hides and reveals itself based on scroll direction and velocity.",
    longDescription:
      "Mirrors the Apple Store app: the tab bar disappears when the user scrolls down and reappears when scrolling up, respecting both direction and velocity so it never feels twitchy.",
    tags: ["Scroll", "TabBar", "iOS"],
    difficulty: "Intermediate",
    category: "Navigation",
    accentFrom: "#60a5fa",
    accentTo: "#a78bfa",
  },
  {
    slug: "apple-tv-carousel",
    title: "Apple TV Carousel",
    description:
      "Hero carousel with parallax scrolling, smooth fades, and cinematic focus transitions.",
    longDescription:
      "Recreates the Apple TV app hero rail — large poster artwork, parallax content offset, snappy paging and soft fades between focused items.",
    tags: ["Carousel", "Hero", "Scroll"],
    difficulty: "Intermediate",
    category: "Showcase",
    accentFrom: "#f472b6",
    accentTo: "#fb7185",
  },
  {
    slug: "ap-transition",
    title: "App Store Transition",
    description:
      "Expandable card that opens into a full-screen detail view, App Store style.",
    longDescription:
      "The iconic App Store Today tab transition — a grid card smoothly morphs into a full-screen detail page with matched geometry and a swipe-to-dismiss gesture.",
    tags: ["Transition", "Hero", "iOS"],
    difficulty: "Intermediate",
    category: "Transition",
    accentFrom: "#38bdf8",
    accentTo: "#818cf8",
  },
  {
    slug: "books-hero-effect",
    title: "Books Hero Effect",
    description:
      "Matched-geometry hero transition with blur, scale and opacity choreography.",
    longDescription:
      "An Apple Books-style book cover animation — matched geometry, depth blur, opacity crossfades and a subtle scale to sell the physicality of the object.",
    tags: ["Transition", "Hero", "Gesture"],
    difficulty: "Advanced",
    category: "Transition",
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
  },
  {
    slug: "concentric-rectangle",
    title: "Concentric Rectangle",
    description:
      "Interactive concentric clipping shapes that morph with drag gestures.",
    longDescription:
      "A playful demo of the new ConcentricRectangle shape reacting to drag gestures, radius interpolation and live clipping.",
    tags: ["Gesture", "Shape", "Advanced"],
    difficulty: "Advanced",
    category: "Interaction",
    accentFrom: "#a78bfa",
    accentTo: "#ec4899",
  },
  {
    slug: "qr-scanner",
    title: "QR Scanner",
    description:
      "Drop-in QR scanner modifier with a clean camera overlay and callback API.",
    longDescription:
      "A reusable `.qrScanner` modifier powered by AVFoundation — plug it onto any view and receive the decoded string through a simple closure.",
    tags: ["Camera", "iOS", "Utility"],
    difficulty: "Intermediate",
    category: "Utility",
    accentFrom: "#10b981",
    accentTo: "#06b6d4",
  },
  {
    slug: "dynamic-island-toast",
    title: "Dynamic Island Toast",
    description:
      "Toast notifications that expand from the Dynamic Island with custom styling.",
    longDescription:
      "Toast messages originate from the Dynamic Island and expand outwards — fully customizable colors, icons and durations.",
    tags: ["Toast", "DynamicIsland", "iOS"],
    difficulty: "Intermediate",
    category: "Notification",
    accentFrom: "#0ea5e9",
    accentTo: "#22d3ee",
  },
  {
    slug: "fitness-tab-bar",
    title: "Fitness+ Tab Bar",
    description:
      "A tab bar that morphs into a full search field with keyboard-aware layout.",
    longDescription:
      "Inspired by Apple Fitness+ — the tab bar gracefully reshapes into a search field, animating layout, corners and icon opacity in one fluid transition.",
    tags: ["TabBar", "Search", "Gesture"],
    difficulty: "Intermediate",
    category: "Navigation",
    accentFrom: "#84cc16",
    accentTo: "#22c55e",
  },
  {
    slug: "image-color-background",
    title: "Image Color Background",
    description:
      "Dynamic gradient background sampled from image colors as you scroll.",
    longDescription:
      "Extracts dominant colors from the current image and interpolates the background gradient so it always feels in-sync with whatever the user is looking at.",
    tags: ["Scroll", "Color", "Hero"],
    difficulty: "Intermediate",
    category: "Showcase",
    accentFrom: "#fb7185",
    accentTo: "#f59e0b",
  },
  {
    slug: "ios-calendar-scroll",
    title: "iOS Calendar Scroll",
    description:
      "Interactive month-based calendar with gesture-driven scrolling and selection.",
    longDescription:
      "Native-feeling iOS calendar with momentum-based scrolling between months, selectable days and date highlighting that matches the system calendar.",
    tags: ["Calendar", "Scroll", "iOS"],
    difficulty: "Advanced",
    category: "Components",
    accentFrom: "#ef4444",
    accentTo: "#f97316",
  },
  {
    slug: "ios-onboarding",
    title: "iOS Style Onboarding",
    description:
      "Multi-page onboarding with zooming screenshots and progress indicator.",
    longDescription:
      "Clean, App Store-like onboarding: paged content, zoom-in screenshot transitions, and a friendly progress indicator that reacts to scroll.",
    tags: ["Onboarding", "iOS"],
    difficulty: "Intermediate",
    category: "Onboarding",
    accentFrom: "#60a5fa",
    accentTo: "#38bdf8",
  },
  {
    slug: "mac-onboarding",
    title: "macOS Onboarding",
    description:
      "Full-screen Mac-style onboarding window with animated zoom transitions.",
    longDescription:
      "An AppKit-inspired onboarding window for SwiftUI on macOS — full-bleed imagery, layered motion and a polished continue flow.",
    tags: ["Onboarding", "macOS"],
    difficulty: "Advanced",
    category: "Onboarding",
    accentFrom: "#8b5cf6",
    accentTo: "#6366f1",
  },
  {
    slug: "morphing-tab-bar",
    title: "Morphing Tab Bar",
    description:
      "Tab bar that morphs shape to reveal an action menu when toggled.",
    longDescription:
      "A shape-morphing tab bar that expands into a quick-action menu, using matched geometry and spring animations to tie the two states together.",
    tags: ["TabBar", "Gesture", "iOS"],
    difficulty: "Advanced",
    category: "Navigation",
    accentFrom: "#ec4899",
    accentTo: "#8b5cf6",
  },
  {
    slug: "paywall-3d",
    title: "Paywall 3D Effect",
    description:
      "Sheet-based paywall with 3D rotating SF Symbols and pricing animations.",
    longDescription:
      "Eye-catching paywall — 3D rotating SF Symbols, animated pricing tiers and a smooth sheet presentation that sells the value proposition.",
    tags: ["Paywall", "Sheet", "3D"],
    difficulty: "Advanced",
    category: "Monetization",
    accentFrom: "#facc15",
    accentTo: "#f59e0b",
  },
  {
    slug: "permission-animation",
    title: "Permission Animation",
    description:
      "Custom animated permission request with configurable buttons and iconography.",
    longDescription:
      "A friendlier alternative to the stock iOS permission dialog — pre-primes the user with context, custom icon animation and call-to-action.",
    tags: ["Permission", "iOS"],
    difficulty: "Intermediate",
    category: "Permission",
    accentFrom: "#06b6d4",
    accentTo: "#3b82f6",
  },
  {
    slug: "photos-transition",
    title: "Photos Transition",
    description:
      "Grid-to-detail transition with interactive drag-to-dismiss and glass overlays.",
    longDescription:
      "Apple Photos-style grid-to-detail transition — matched geometry, interactive drag-to-dismiss with live rubber-banding and glass overlays.",
    tags: ["Transition", "Gesture", "Grid"],
    difficulty: "Advanced",
    category: "Transition",
    accentFrom: "#f472b6",
    accentTo: "#c084fc",
  },
  {
    slug: "positional-pad-slider",
    title: "Positional Pad Slider",
    description:
      "Two-dimensional X/Y slider with live shadow feedback and haptics.",
    longDescription:
      "A 2D pad slider for controlling paired values — position feedback via shadow offset, haptic ticks and a satisfying spring return.",
    tags: ["Slider", "Gesture", "iOS"],
    difficulty: "Intermediate",
    category: "Controls",
    accentFrom: "#22d3ee",
    accentTo: "#a78bfa",
  },
  {
    slug: "recorder-ui",
    title: "Chat Recorder UI",
    description:
      "Chat composer with sliding record button and real-time waveform animation.",
    longDescription:
      "A WhatsApp-inspired audio recorder — press-and-hold, slide-to-cancel, live waveform and state-driven animation of every control.",
    tags: ["Audio", "Gesture", "Chat"],
    difficulty: "Intermediate",
    category: "Components",
    accentFrom: "#10b981",
    accentTo: "#14b8a6",
  },
  {
    slug: "screenshot-preventer",
    title: "Screenshot Preventer",
    description:
      "Prevent screenshots of sensitive views using a secure text field trick.",
    longDescription:
      "A tiny utility that wraps any view in a secure text field layer so iOS redacts it from screenshots and screen recordings.",
    tags: ["Security", "Utility"],
    difficulty: "Intermediate",
    category: "Utility",
    accentFrom: "#64748b",
    accentTo: "#334155",
  },
  {
    slug: "scroll-toolbar-effect",
    title: "Scroll Toolbar Effect",
    description:
      "Toolbar that transitions between states based on scroll position.",
    longDescription:
      "A scroll-aware toolbar that morphs title, background blur and button styles depending on how far the user has scrolled.",
    tags: ["Scroll", "Header", "Toolbar"],
    difficulty: "Advanced",
    category: "Navigation",
    accentFrom: "#0ea5e9",
    accentTo: "#6366f1",
  },
  {
    slug: "sheet-interaction",
    title: "Sheet Interaction",
    description:
      "Interactive sheet with dynamic detents and parallax content offset.",
    longDescription:
      "Custom sheet with multiple detents, parallax content offset while dragging and a backdrop that dims in proportion to sheet height.",
    tags: ["Sheet", "Gesture", "iOS"],
    difficulty: "Advanced",
    category: "Components",
    accentFrom: "#8b5cf6",
    accentTo: "#3b82f6",
  },
  {
    slug: "sortable-grid",
    title: "Sortable Grid",
    description:
      "Drag-and-drop reorderable grid with custom preview and dynamic columns.",
    longDescription:
      "Long-press to pick up, drag to reorder — a full sortable grid with custom drag preview, live reflow and configurable column counts.",
    tags: ["Grid", "Gesture", "DragDrop"],
    difficulty: "Advanced",
    category: "Components",
    accentFrom: "#f59e0b",
    accentTo: "#ef4444",
  },
  {
    slug: "stock-scroller",
    title: "Stock Scroller",
    description:
      "Auto-scrolling infinite ticker with inline charts and crisp typography.",
    longDescription:
      "An infinitely looping stock ticker with built-in sparkline charts, smooth auto-scroll and pause-on-interaction.",
    tags: ["Scroll", "Carousel", "Finance"],
    difficulty: "Intermediate",
    category: "Showcase",
    accentFrom: "#22c55e",
    accentTo: "#14b8a6",
  },
  {
    slug: "telegram-header",
    title: "Telegram Header",
    description:
      "Scroll-aware header that hides and reveals with smooth edge blur.",
    longDescription:
      "A Telegram-style large title header with scroll-aware collapse, edge blur and an avatar that scales in sync.",
    tags: ["Scroll", "Header", "iOS"],
    difficulty: "Intermediate",
    category: "Navigation",
    accentFrom: "#38bdf8",
    accentTo: "#0ea5e9",
  },
  {
    slug: "threads-dismiss",
    title: "Threads Dismiss",
    description:
      "Swipe-up interactive dismiss with live rubber-banding, Threads style.",
    longDescription:
      "Recreates the Threads app dismiss interaction — drag a thread upwards, feel live resistance, release to dismiss or snap back.",
    tags: ["Dismiss", "Gesture", "iOS"],
    difficulty: "Intermediate",
    category: "Transition",
    accentFrom: "#0f172a",
    accentTo: "#475569",
  },
  {
    slug: "undo-helper",
    title: "Undo Helper",
    description:
      "Property-wrapper powered undo/redo for any @State value.",
    longDescription:
      "A lightweight property wrapper that gives any @State value a proper undo/redo stack — zero boilerplate, works with SwiftUI's environment.",
    tags: ["Utility", "State"],
    difficulty: "Intermediate",
    category: "Utility",
    accentFrom: "#6366f1",
    accentTo: "#8b5cf6",
  },
  {
    slug: "xcode-onboarding",
    title: "Xcode Onboarding Effect",
    description:
      "Xcode-inspired onboarding with geometric shapes and animated grid lines.",
    longDescription:
      "A nod to Xcode's own welcome screen — animated grid lines, geometric shape choreography and a gently animating logo.",
    tags: ["Onboarding", "macOS"],
    difficulty: "Advanced",
    category: "Onboarding",
    accentFrom: "#6366f1",
    accentTo: "#a855f7",
  },
];

export const categories = Array.from(
  new Set(animations.map((a) => a.category)),
).sort();

export const difficulties: Difficulty[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export function getAnimation(slug: string) {
  return animations.find((a) => a.slug === slug);
}
