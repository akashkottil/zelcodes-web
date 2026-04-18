"use client";

import type { CSSProperties } from "react";
import { AnimatedLogo } from "./AnimatedLogo";

type Props = {
  className?: string;
  fontSize?: number;
};

/**
 * Continuous diagonal gradient + subtle glass sheen, both applied to the
 * OUTER span and clipped to text. The orb sits between `zelc` and `des`
 * but the gradients span the full lockup width, so colour flows smoothly
 * from the leading z to the trailing s without any visible seam.
 */
export function Logotype({ className = "", fontSize = 24 }: Props) {
  const orbSize = Math.round(fontSize * 0.95);

  const style: CSSProperties = {
    fontFamily:
      "var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
    fontWeight: 800,
    fontSize: `${fontSize}px`,
    letterSpacing: "-0.055em",
    lineHeight: 1,
    color: "transparent",
    // Breathing room for the ink extent of `z` and `s` beyond their
    // advance widths — without this, tight tracking + background-clip:text
    // clip the rightmost pixel of the `s`.
    paddingLeft: "0.06em",
    paddingRight: "0.14em",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    backgroundImage: [
      // 1. Top specular sheen (static)
      "linear-gradient(180deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0) 60%)",
      // 2. Continuous diagonal colour gradient (animated via .liquid-glass-text)
      "linear-gradient(115deg, #6366f1 0%, #ec4899 32%, #38bdf8 70%, #f5f1e8 100%)",
    ].join(", "),
    backgroundSize: "100% 100%, 220% 100%",
    backgroundRepeat: "no-repeat, no-repeat",
    filter:
      "drop-shadow(0 2px 3px rgba(0,0,0,0.18)) drop-shadow(0 0 18px rgba(129,140,248,0.38))",
  };

  return (
    <span
      className={`liquid-glass-text inline-flex items-center ${className}`}
      role="img"
      aria-label="zelcodes"
      style={style}
    >
      zelc
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
      des
    </span>
  );
}
