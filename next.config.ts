import type { NextConfig } from "next";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export so the site can be deployed to GitHub Pages,
  // Netlify, or any static host.
  output: "export",

  // basePath is only set at build time via NEXT_PUBLIC_BASE_PATH
  // (so local `npm run dev` still runs at /, while the Pages build
  // is served from /zelcodes-web/ or similar).
  basePath,
  assetPrefix: basePath || undefined,

  // next/image isn't supported by the static exporter — fall back to
  // unoptimised <img> output so build doesn't fail.
  images: { unoptimized: true },

  // Export trailing-slash URLs so paths like /animations/foo/ work
  // cleanly on GitHub Pages (avoids the Pages serving nuance where
  // /animations/foo would otherwise need a redirect).
  trailingSlash: true,
};

export default nextConfig;
