"use client";

import type { CSSProperties } from "react";
import { AnimatedLogo } from "./AnimatedLogo";

type Props = {
  className?: string;
  fontSize?: number;
};

// Single continuous diagonal gradient that spans z → s.
// Applied to the OUTER lockup so colour flows across both text chunks.
const CONTINUOUS_COLOR =
  "linear-gradient(115deg, #6366f1 0%, #ec4899 32%, #38bdf8 70%, #f5f1e8 100%)";

// Bubble-glass overlays — applied per text chunk.
// A strong bright top → soft fade through the middle = convex highlight.
const BUBBLE_TOP =
  "linear-gradient(175deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.75) 12%, rgba(255,255,255,0.32) 30%, rgba(255,255,255,0.06) 48%, rgba(255,255,255,0) 62%)";

// Dark bottom vignette → gives each letter volume (convex bubble shape).
const BUBBLE_DEPTH =
  "linear-gradient(180deg, rgba(0,0,0,0) 45%, rgba(0,0,0,0.18) 72%, rgba(0,0,0,0.42) 100%)";

// Signature bubble-glass specular "dot" — small bright blob at upper-left of each letter mass.
const BUBBLE_SPECULAR =
  "radial-gradient(ellipse 28% 18% at 32% 14%, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.4) 40%, rgba(255,255,255,0) 70%)";

// Moving streak that sweeps across — "live" reflection on the glass surface.
const BUBBLE_STREAK =
  "linear-gradient(100deg, rgba(255,255,255,0) 43%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 57%)";

/**
 * Liquid-glass text lockup — the orb replaces the "o" in "zelcodes" and
 * the glyphs read as inflated 3D glass bubbles with a single continuous
 * diagonal colour flow from z to s.
 */
export function Logotype({ className = "", fontSize = 24 }: Props) {
  const orbSize = Math.round(fontSize * 0.95);

  const baseText: CSSProperties = {
    fontFamily:
      "var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 800,
    fontSize: `${fontSize}px`,
    letterSpacing: "-0.055em",
    lineHeight: 1,
    color: "transparent",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundRepeat: "no-repeat",
  };

  return (
    <span
      className={`liquid-text inline-flex items-center ${className}`}
      role="img"
      aria-label="zelcodes"
      style={{
        ...baseText,
        backgroundImage: CONTINUOUS_COLOR,
        // liquid-text class handles background-size + flow animation
        filter:
          "drop-shadow(0 2px 3px rgba(0,0,0,0.18)) drop-shadow(0 0 16px rgba(129,140,248,0.35))",
      }}
    >
      <BubbleChunk text="zelc" baseText={baseText} />

      <span
        className="inline-flex shrink-0 items-center"
        style={{
          marginLeft: "-0.05em",
          marginRight: "-0.05em",
          transform: "translateY(0.08em)",
        }}
      >
        <AnimatedLogo size={orbSize} />
      </span>

      <BubbleChunk text="des" baseText={baseText} />
    </span>
  );
}

/**
 * Renders a chunk of text where the colour comes from the parent's
 * continuous diagonal gradient (clipped through this span's text), and
 * bubble-glass overlays (sheen, depth, specular spot, moving streak)
 * are painted on top via absolutely positioned clipped spans.
 */
function BubbleChunk({
  text,
  baseText,
}: {
  text: string;
  baseText: CSSProperties;
}) {
  return (
    <span
      className="relative inline-block"
      // Parent colour gradient is clipped to child text automatically.
      // We just need to render the characters here; all background
      // styling on this span is omitted so the parent's clip applies.
      style={{ color: "transparent" }}
    >
      {text}

      {/* 1. Dark bottom vignette (convex volume) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ ...baseText, backgroundImage: BUBBLE_DEPTH }}
      >
        {text}
      </span>

      {/* 2. Bright top sheen (primary convex highlight) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ ...baseText, backgroundImage: BUBBLE_TOP }}
      >
        {text}
      </span>

      {/* 3. Signature specular highlight dot — the bubble-glass "pop" */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ ...baseText, backgroundImage: BUBBLE_SPECULAR }}
      >
        {text}
      </span>

      {/* 4. Travelling reflection streak */}
      <span
        aria-hidden
        className="liquid-sheen pointer-events-none absolute inset-0"
        style={{ ...baseText, backgroundImage: BUBBLE_STREAK }}
      >
        {text}
      </span>
    </span>
  );
}
