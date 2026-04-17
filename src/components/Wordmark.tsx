import { useId } from "react";

type Props = {
  className?: string;
  height?: number;
};

/**
 * Inline SVG wordmark — inherits Inter from the page's font stack
 * (SVG loaded via <img> can't access the page's custom font).
 *
 * Gradient sandwiches a warm off-white highlight between the brand
 * stops (indigo → off-white → pink → sky) so the text has a subtle
 * pearlescent shimmer that feels on-theme without going neon.
 */
export function Wordmark({ className = "", height = 26 }: Props) {
  const uid = `wm-${useId().replace(/:/g, "")}`;

  return (
    <svg
      viewBox="0 0 260 52"
      height={height}
      className={className}
      role="img"
      aria-label="zelcodes"
    >
      <defs>
        <linearGradient
          id={uid}
          x1="0"
          y1="0"
          x2="260"
          y2="52"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6366f1" />
          <stop offset=".35" stopColor="#ec4899" />
          <stop offset=".65" stopColor="#f5f1e8" />
          <stop offset="1" stopColor="#f5f1e8" />
        </linearGradient>
      </defs>
      <text
        x="0"
        y="41"
        fontWeight={800}
        fontSize={42}
        style={{
          fontFamily:
            "var(--font-inter), Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          letterSpacing: "-0.055em",
        }}
        fill={`url(#${uid})`}
      >
        zelcodes
      </text>
    </svg>
  );
}
