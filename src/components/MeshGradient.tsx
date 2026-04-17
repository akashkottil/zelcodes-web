"use client";

import { memo } from "react";

type Props = {
  className?: string;
  intensity?: "soft" | "bold";
};

function MeshGradientImpl({ className = "", intensity = "soft" }: Props) {
  const opacity = intensity === "bold" ? 0.85 : 0.55;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute -left-1/4 top-[-15%] h-[60vh] w-[60vh] rounded-full blur-[120px] animate-[mesh_18s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(99,102,241,0.55), transparent)",
          opacity,
        }}
      />
      <div
        className="absolute right-[-10%] top-[5%] h-[55vh] w-[55vh] rounded-full blur-[140px] animate-[mesh_22s_ease-in-out_infinite_reverse]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236,72,153,0.45), transparent)",
          opacity,
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] h-[65vh] w-[65vh] rounded-full blur-[140px] animate-[mesh_26s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(56,189,248,0.45), transparent)",
          opacity,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 65%, var(--background) 100%)",
        }}
      />
    </div>
  );
}

export const MeshGradient = memo(MeshGradientImpl);
