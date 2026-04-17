import type { Animation } from "@/lib/animations";

export type PreviewVariant =
  | "carousel"
  | "tabbar"
  | "transition"
  | "sheet"
  | "scroll"
  | "grid"
  | "shape"
  | "toast"
  | "onboarding"
  | "paywall"
  | "slider";

const slugToVariant: Record<string, PreviewVariant> = {
  "apple-store-tab-scroll": "scroll",
  "apple-tv-carousel": "carousel",
  "ap-transition": "transition",
  "books-hero-effect": "transition",
  "concentric-rectangle": "shape",
  "qr-scanner": "grid",
  "dynamic-island-toast": "toast",
  "fitness-tab-bar": "tabbar",
  "image-color-background": "carousel",
  "ios-calendar-scroll": "grid",
  "ios-onboarding": "onboarding",
  "mac-onboarding": "onboarding",
  "morphing-tab-bar": "tabbar",
  "paywall-3d": "paywall",
  "permission-animation": "toast",
  "photos-transition": "grid",
  "positional-pad-slider": "slider",
  "recorder-ui": "slider",
  "screenshot-preventer": "shape",
  "scroll-toolbar-effect": "scroll",
  "sheet-interaction": "sheet",
  "sortable-grid": "grid",
  "stock-scroller": "scroll",
  "telegram-header": "scroll",
  "threads-dismiss": "transition",
  "undo-helper": "shape",
  "xcode-onboarding": "onboarding",
};

export function getVariant(animation: Animation): PreviewVariant {
  return slugToVariant[animation.slug] ?? "shape";
}
