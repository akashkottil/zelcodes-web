"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Animation } from "@/lib/animations";

type Props = {
  animation: Animation;
  className?: string;
  compact?: boolean;
};

type PProps = {
  from: string;
  to: string;
  reduced: boolean;
};

const FADE = { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

export function AnimationPreview({ animation, className = "" }: Props) {
  const reducedNull = useReducedMotion();
  const reduced = reducedNull ?? false;
  const { accentFrom, accentTo } = animation;

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accentFrom}22 0%, ${accentTo}22 100%), radial-gradient(120% 120% at 10% 0%, ${accentFrom}40 0%, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${accentTo}40 0%, transparent 55%)`,
      }}
    >
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:16px_16px] dark:opacity-40" />
      <div className="relative flex h-full w-full items-center justify-center p-5">
        <Dispatcher slug={animation.slug} from={accentFrom} to={accentTo} reduced={reduced} />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.08) 100%)",
        }}
      />
    </div>
  );
}

function Dispatcher({ slug, from, to, reduced }: { slug: string } & PProps) {
  const p = { from, to, reduced };
  switch (slug) {
    case "apple-store-tab-scroll": return <AppleStoreTabScroll {...p} />;
    case "apple-tv-carousel":       return <AppleTVCarousel {...p} />;
    case "ap-transition":           return <APTransition {...p} />;
    case "books-hero-effect":       return <BooksHero {...p} />;
    case "concentric-rectangle":    return <ConcentricRectangle {...p} />;
    case "qr-scanner":              return <QRScanner {...p} />;
    case "dynamic-island-toast":    return <DynamicIslandToast {...p} />;
    case "fitness-tab-bar":         return <FitnessTabBar {...p} />;
    case "image-color-background":  return <ImageColorBackground {...p} />;
    case "ios-calendar-scroll":     return <IOSCalendarScroll {...p} />;
    case "ios-onboarding":          return <IOSOnboarding {...p} />;
    case "mac-onboarding":          return <MacOnboarding {...p} />;
    case "morphing-tab-bar":        return <MorphingTabBar {...p} />;
    case "paywall-3d":              return <Paywall3D {...p} />;
    case "permission-animation":    return <PermissionAnimation {...p} />;
    case "photos-transition":       return <PhotosTransition {...p} />;
    case "positional-pad-slider":   return <PositionalPadSlider {...p} />;
    case "recorder-ui":             return <RecorderUI {...p} />;
    case "screenshot-preventer":    return <ScreenshotPreventer {...p} />;
    case "scroll-toolbar-effect":   return <ScrollToolbar {...p} />;
    case "sheet-interaction":       return <SheetInteraction {...p} />;
    case "sortable-grid":           return <SortableGrid {...p} />;
    case "stock-scroller":          return <StockScroller {...p} />;
    case "telegram-header":         return <TelegramHeader {...p} />;
    case "threads-dismiss":         return <ThreadsDismiss {...p} />;
    case "undo-helper":             return <UndoHelper {...p} />;
    case "xcode-onboarding":        return <XcodeOnboarding {...p} />;
    default:                        return <ConcentricRectangle {...p} />;
  }
}

/* =================================================================
   1. Apple Store Tab Scroll — tab bar hides on scroll-down, reveals
   ================================================================= */
function AppleStoreTabScroll({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute inset-x-4 top-0 flex flex-col gap-1.5"
        animate={reduced ? undefined : { y: [0, -70, -40, -110, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="glass rounded-md p-1.5">
            <div
              className="h-1.5 rounded"
              style={{
                width: `${45 + ((i * 17) % 50)}%`,
                background: `linear-gradient(90deg, ${from}, ${to})`,
              }}
            />
            <div className="mt-1 h-1 w-1/2 rounded bg-white/30" />
          </div>
        ))}
      </motion.div>
      {/* Tab bar hides when scrolling down */}
      <motion.div
        className="glass absolute inset-x-4 bottom-2 flex items-center justify-around rounded-full px-3 py-2 shadow-lg"
        animate={reduced ? undefined : { y: [0, 0, 48, 48, 0] }}
        transition={{ duration: 7, times: [0, 0.15, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-1.5 w-5 rounded-full"
            style={{ background: i === 0 ? `linear-gradient(90deg, ${from}, ${to})` : "rgba(255,255,255,0.4)" }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   2. Apple TV Carousel — hero row with parallax content offset
   ================================================================= */
function AppleTVCarousel({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 flex -translate-y-1/2 gap-3"
        animate={reduced ? undefined : { x: [-20, -110, -200, -110, -20] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="relative h-28 w-[88px] shrink-0 overflow-hidden rounded-xl shadow-xl"
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          >
            <motion.div
              className="absolute inset-x-2 bottom-2 space-y-1"
              animate={reduced ? undefined : { x: [0, 6, 0, -6, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-1.5 w-3/4 rounded bg-white/80" />
              <div className="h-1 w-1/2 rounded bg-white/40" />
            </motion.div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   3. App Store Transition — card morphs into full detail page
   ================================================================= */
function APTransition({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-xl"
        initial={false}
        animate={reduced ? undefined : {
          width: ["38%", "38%", "90%", "90%", "38%"],
          height: ["40%", "40%", "88%", "88%", "40%"],
          borderRadius: ["16px", "16px", "20px", "20px", "16px"],
        }}
        transition={{
          duration: 5,
          times: [0, 0.18, 0.48, 0.82, 1],
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
        }}
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <motion.div
          className="absolute inset-3 space-y-2"
          animate={reduced ? undefined : { opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.3, 0.55, 0.78, 1], repeat: Infinity }}
        >
          <div className="h-2 w-3/4 rounded bg-white/85" />
          <div className="h-1.5 w-full rounded bg-white/35" />
          <div className="h-1.5 w-5/6 rounded bg-white/35" />
          <div className="h-1.5 w-2/3 rounded bg-white/35" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   4. Books Hero Effect — matched-geometry cover zoom with blur
   ================================================================= */
function BooksHero({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* Blurred backdrop that intensifies as the book grows */}
      <motion.div
        className="absolute inset-0"
        style={{ background: `radial-gradient(circle at 50% 50%, ${from}88, ${to}44 60%, transparent)` }}
        animate={reduced ? undefined : { opacity: [0, 0, 0.9, 0.9, 0] }}
        transition={{ duration: 5, times: [0, 0.15, 0.5, 0.78, 1], repeat: Infinity }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden shadow-2xl"
        initial={false}
        animate={reduced ? undefined : {
          width: ["22%", "22%", "58%", "58%", "22%"],
          height: ["40%", "40%", "78%", "78%", "40%"],
          rotate: [0, 0, -2, -2, 0],
        }}
        transition={{ duration: 5, times: [0, 0.18, 0.5, 0.82, 1], ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
          borderRadius: 6,
        }}
      >
        <div className="absolute left-0 top-0 h-full w-1.5 bg-black/30" />
        <motion.div
          className="absolute inset-x-2 bottom-2 space-y-1"
          animate={reduced ? undefined : { opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.3, 0.55, 0.78, 1], repeat: Infinity }}
        >
          <div className="h-1.5 w-2/3 rounded bg-white/80" />
          <div className="h-1 w-1/2 rounded bg-white/50" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   5. Concentric Rectangle — nested squircles morphing radii
   ================================================================= */
function ConcentricRectangle({ from, to, reduced }: PProps) {
  return (
    <div className="relative grid h-full w-full place-items-center">
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={i}
          className="absolute border-2"
          style={{
            width: `${85 - i * 13}%`,
            height: `${85 - i * 13}%`,
            borderColor: i % 2 ? from : to,
          }}
          animate={
            reduced
              ? undefined
              : {
                  borderRadius: ["12%", "50%", "28%", "12%"],
                  rotate: [0, 10, -10, 0],
                }
          }
          transition={{
            duration: 6,
            delay: i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

/* =================================================================
   6. QR Scanner — L-shaped corner viewfinder with sweeping scan line
   ================================================================= */
function QRScanner({ from, to, reduced }: PProps) {
  const frame = 110;
  return (
    <div className="relative h-full w-full">
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: frame, height: frame }}
      >
        {/* 4 corner brackets */}
        {[
          { t: 0, l: 0, rotate: 0 },
          { t: 0, r: 0, rotate: 90 },
          { b: 0, r: 0, rotate: 180 },
          { b: 0, l: 0, rotate: 270 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute h-5 w-5"
            style={{
              top: pos.t, left: pos.l, right: pos.r, bottom: pos.b,
              borderTop: "2.5px solid #ffffff",
              borderLeft: "2.5px solid #ffffff",
              transform: `rotate(${pos.rotate}deg)`,
              transformOrigin: "center",
            }}
          />
        ))}
        {/* Sweeping scan line */}
        <motion.div
          className="absolute inset-x-2 h-0.5 rounded"
          style={{ background: `linear-gradient(90deg, transparent, ${from}, ${to}, transparent)` }}
          animate={reduced ? undefined : { y: [0, frame - 4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Glow halo that follows the line */}
        <motion.div
          className="absolute inset-x-0 h-8"
          style={{ background: `linear-gradient(180deg, ${from}55, transparent)` }}
          animate={reduced ? undefined : { y: [-4, frame - 8, -4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* =================================================================
   7. Dynamic Island Toast — pill expands from notch, collapses
   ================================================================= */
function DynamicIslandToast({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-6 top-2 bottom-6 rounded-[22px] border border-white/10 bg-white/[0.04]" />
      <motion.div
        className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-2 overflow-hidden rounded-full px-3 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)]"
        style={{
          background: "#0b0b14",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
        initial={{ width: 56, height: 22 }}
        animate={reduced ? undefined : {
          width: [56, 180, 180, 56],
          height: [22, 36, 36, 22],
        }}
        transition={{
          duration: 4.2,
          times: [0, 0.25, 0.75, 1],
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
        }}
      >
        <motion.span
          className="inline-block h-2 w-2 shrink-0 rounded-full"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          animate={reduced ? undefined : { scale: [0.8, 1.15, 1.15, 0.8] }}
          transition={{ duration: 4.2, times: [0, 0.28, 0.72, 1], repeat: Infinity }}
        />
        <motion.span
          className="truncate text-[11px] font-medium tracking-tight whitespace-nowrap"
          animate={reduced ? undefined : { opacity: [0, 0, 1, 1, 0, 0] }}
          transition={{ duration: 4.2, times: [0, 0.22, 0.32, 0.68, 0.78, 1], repeat: Infinity }}
        >
          Now playing
        </motion.span>
      </motion.div>
      <motion.div
        className="absolute right-10 top-[30px] flex items-end gap-[2px]"
        animate={reduced ? undefined : { opacity: [0, 0, 1, 1, 0, 0] }}
        transition={{ duration: 4.2, times: [0, 0.3, 0.4, 0.7, 0.8, 1], repeat: Infinity }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-[3px] rounded-full bg-white/70"
            animate={reduced ? undefined : { height: [4, 10, 6, 12, 4] }}
            transition={{ duration: 1.1, delay: i * 0.12, repeat: Infinity, ease: "easeInOut" }}
            style={{ height: 4 }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   8. Fitness+ Tab Bar — tab bar morphs into a search field
   ================================================================= */
function FitnessTabBar({ from, to, reduced }: PProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end">
      {/* Tab bar that expands to a search field */}
      <motion.div
        className="glass relative mx-auto mb-2 flex items-center overflow-hidden rounded-full shadow-lg"
        initial={{ width: "80%", height: 36 }}
        animate={reduced ? undefined : { width: ["80%", "90%", "90%", "80%"] }}
        transition={{ duration: 5, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        {/* 4 tab dots that fade out */}
        <motion.div
          className="flex w-full items-center justify-around px-4"
          animate={reduced ? undefined : { opacity: [1, 0, 0, 1] }}
          transition={{ duration: 5, times: [0, 0.25, 0.75, 1], repeat: Infinity }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ background: i === 1 ? `linear-gradient(90deg, ${from}, ${to})` : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </motion.div>
        {/* Search field that fades in */}
        <motion.div
          className="absolute inset-y-0 left-0 flex w-full items-center gap-2 px-4"
          animate={reduced ? undefined : { opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.3, 0.7, 1], repeat: Infinity }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5">
            <circle cx="11" cy="11" r="7" />
            <path d="M20 20L16.5 16.5" strokeLinecap="round" />
          </svg>
          <motion.div
            className="h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.5)" }}
            animate={reduced ? undefined : { width: ["0%", "55%", "55%", "0%"] }}
            transition={{ duration: 5, times: [0, 0.4, 0.7, 1], repeat: Infinity }}
          />
          <motion.div
            className="h-3 w-[1.5px] bg-white/80"
            animate={reduced ? undefined : { opacity: [0, 1, 1, 0] }}
            transition={{ duration: 5, times: [0, 0.4, 0.7, 1], repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   9. Image Color Background — bg gradient shifts with scroll position
   ================================================================= */
function ImageColorBackground({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Radial glow that follows image */}
      <motion.div
        className="absolute inset-0"
        style={{ background: `radial-gradient(60% 80% at 50% 40%, ${from}aa, ${to}44 40%, transparent)` }}
        animate={reduced ? undefined : {
          background: [
            `radial-gradient(60% 80% at 50% 40%, ${from}aa, ${to}44 40%, transparent)`,
            `radial-gradient(60% 80% at 50% 40%, ${to}aa, ${from}44 40%, transparent)`,
            `radial-gradient(60% 80% at 50% 40%, ${from}aa, ${to}44 40%, transparent)`,
          ],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-2"
        animate={reduced ? undefined : { x: [0, -80, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {[from, to, from, to].map((c, i) => (
          <div
            key={i}
            className="h-24 w-20 rounded-xl shadow-xl"
            style={{ background: `linear-gradient(135deg, ${c}, ${i % 2 ? from : to})` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   10. iOS Calendar Scroll — grid with selection cycling, month label
   ================================================================= */
function IOSCalendarScroll({ from, to, reduced }: PProps) {
  const selectedIndex = [4, 10, 17, 23, 4];
  return (
    <div className="relative h-full w-full px-2">
      <motion.div
        className="text-center text-[10px] font-semibold text-white/80"
        animate={reduced ? undefined : { opacity: [1, 0.3, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        October
      </motion.div>
      <div className="mt-2 grid grid-cols-7 gap-[3px]">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.div
            key={i}
            className="glass flex h-4 items-center justify-center rounded text-[8px] text-white/70"
            animate={reduced ? undefined : {
              background: selectedIndex.map((si) =>
                i === si ? `linear-gradient(135deg, ${from}, ${to})` : "var(--surface)"
              ),
              color: selectedIndex.map((si) => (i === si ? "#fff" : "rgba(255,255,255,0.7)")),
            }}
            transition={{ duration: 6, repeat: Infinity, times: [0, 0.25, 0.5, 0.75, 1] }}
          >
            {i + 1}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   11. iOS Onboarding — phone frame with zooming screenshots + dots
   ================================================================= */
function IOSOnboarding({ from, to, reduced }: PProps) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
      {/* Phone frame */}
      <div className="relative h-24 w-14 rounded-[12px] border-[1.5px] border-white/60 p-1">
        <div className="relative h-full w-full overflow-hidden rounded-[8px]">
          <motion.div
            className="absolute inset-0"
            animate={reduced ? undefined : {
              scale: [1, 1.25, 1, 1.25, 1],
              background: [
                `linear-gradient(135deg, ${from}, ${to})`,
                `linear-gradient(135deg, ${to}, ${from})`,
                `linear-gradient(135deg, ${from}, ${to})`,
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-x-1 bottom-1 space-y-0.5"
            animate={reduced ? undefined : { opacity: [1, 0.4, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="h-0.5 w-3/4 rounded bg-white/70" />
            <div className="h-0.5 w-1/2 rounded bg-white/40" />
          </motion.div>
        </div>
      </div>
      {/* Progress dots */}
      <div className="flex items-center gap-1.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="h-1.5 rounded-full"
            animate={reduced ? undefined : {
              width: i === 1 ? [4, 18, 4] : [4, 4, 4],
              background:
                i === 1 ? [from, to, from] : ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.4)", "rgba(255,255,255,0.4)"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{ width: 4, background: "rgba(255,255,255,0.4)" }}
          />
        ))}
      </div>
    </div>
  );
}

/* =================================================================
   12. macOS Onboarding — window with traffic lights + zooming content
   ================================================================= */
function MacOnboarding({ from, to, reduced }: PProps) {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="relative h-28 w-40 overflow-hidden rounded-lg border border-white/15 bg-white/5 shadow-xl">
        {/* Title bar with traffic lights */}
        <div className="flex h-4 items-center gap-1 border-b border-white/10 px-2">
          <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
          <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
        </div>
        <div className="relative h-[calc(100%-16px)] w-full overflow-hidden">
          <motion.div
            className="absolute inset-0"
            animate={reduced ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          />
          <motion.div
            className="absolute inset-x-4 bottom-3 space-y-1"
            animate={reduced ? undefined : { opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="h-1 w-2/3 rounded bg-white/80" />
            <div className="h-0.5 w-1/2 rounded bg-white/60" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* =================================================================
   13. Morphing Tab Bar — tab bar expands upward into action menu
   ================================================================= */
function MorphingTabBar({ from, to, reduced }: PProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end">
      <motion.div
        className="glass relative mx-auto mb-2 overflow-hidden rounded-3xl shadow-lg"
        style={{ width: "80%" }}
        animate={reduced ? undefined : {
          height: [36, 36, 90, 90, 36],
          borderRadius: [36, 36, 18, 18, 36],
        }}
        transition={{ duration: 5, times: [0, 0.2, 0.45, 0.8, 1], repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      >
        {/* Base tab bar icons */}
        <motion.div
          className="absolute inset-x-0 bottom-0 flex h-9 items-center justify-around px-4"
          animate={reduced ? undefined : { opacity: [1, 1, 0.3, 0.3, 1] }}
          transition={{ duration: 5, times: [0, 0.2, 0.45, 0.8, 1], repeat: Infinity }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-2 w-2 rounded-full"
              style={{ background: i === 1 ? `linear-gradient(90deg, ${from}, ${to})` : "rgba(255,255,255,0.5)" }}
            />
          ))}
        </motion.div>
        {/* Expanded action menu */}
        <motion.div
          className="absolute inset-x-2 top-2 flex flex-col gap-1.5"
          animate={reduced ? undefined : { opacity: [0, 0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.35, 0.55, 0.8, 1], repeat: Infinity }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 rounded-xl bg-white/10 p-1.5"
            >
              <div
                className="h-3 w-3 rounded-md"
                style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
              />
              <div className="h-1 w-8 rounded bg-white/50" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   14. Paywall 3D Effect — sheet rises with 3D-rotating symbol
   ================================================================= */
function Paywall3D({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* 3D rotating star */}
      <motion.div
        className="absolute left-1/2 top-[20%] -translate-x-1/2"
        style={{ perspective: 400 }}
      >
        <motion.div
          className="flex h-12 w-12 items-center justify-center rounded-xl shadow-xl"
          style={{
            background: `linear-gradient(135deg, ${from}, ${to})`,
            transformStyle: "preserve-3d",
          }}
          animate={reduced ? undefined : { rotateY: [0, 360], rotateX: [0, 15, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "linear" }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2l2.5 6.5L21 10l-5 4.5L17.5 22 12 18.5 6.5 22 8 14.5 3 10l6.5-1.5L12 2z" />
          </svg>
        </motion.div>
      </motion.div>
      {/* Sheet rising */}
      <motion.div
        className="glass absolute inset-x-3 rounded-t-2xl p-3"
        initial={false}
        animate={reduced ? undefined : { bottom: [-8, "20%", "20%", -8] }}
        transition={{ duration: 5, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="mx-auto h-1 w-8 rounded-full bg-white/50" />
        <motion.div
          className="mt-2 space-y-1"
          animate={reduced ? undefined : { opacity: [0, 1, 1, 0] }}
          transition={{ duration: 5, times: [0, 0.4, 0.7, 1], repeat: Infinity }}
        >
          <div
            className="h-1.5 w-2/3 rounded"
            style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
          />
          <div className="h-1 w-1/2 rounded bg-white/40" />
        </motion.div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   15. Permission Animation — alert with animated bell/lock icon
   ================================================================= */
function PermissionAnimation({ from, to, reduced }: PProps) {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="glass w-32 rounded-2xl p-3 text-center shadow-xl">
        <motion.div
          className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          animate={reduced ? undefined : { rotate: [0, -15, 15, -10, 10, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.4, ease: "easeInOut" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </motion.div>
        <div className="space-y-1">
          <div className="mx-auto h-1.5 w-16 rounded bg-white/70" />
          <div className="mx-auto h-1 w-20 rounded bg-white/35" />
        </div>
        <div className="mt-2 flex gap-1">
          <div className="h-4 flex-1 rounded-md bg-white/15" />
          <div
            className="h-4 flex-1 rounded-md"
            style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
          />
        </div>
      </div>
    </div>
  );
}

/* =================================================================
   16. Photos Transition — grid cell expands to full, then returns
   ================================================================= */
function PhotosTransition({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* Grid (dims while detail shown) */}
      <motion.div
        className="absolute inset-2 grid grid-cols-3 gap-1"
        animate={reduced ? undefined : { opacity: [1, 1, 0.4, 0.4, 1] }}
        transition={{ duration: 5, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity }}
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="rounded-md"
            style={{
              background:
                i === 4
                  ? `linear-gradient(135deg, ${from}, ${to})`
                  : "rgba(255,255,255,0.2)",
            }}
          />
        ))}
      </motion.div>
      {/* Detail that expands from center */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl shadow-2xl"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        animate={reduced ? undefined : {
          width: ["20%", "20%", "85%", "85%", "20%"],
          height: ["20%", "20%", "85%", "85%", "20%"],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          times: [0, 0.2, 0.5, 0.75, 1],
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

/* =================================================================
   17. Positional Pad Slider — 2D pad with draggable knob + shadow
   ================================================================= */
function PositionalPadSlider({ from, to, reduced }: PProps) {
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="glass relative h-32 w-32 overflow-hidden rounded-2xl">
        {/* Grid lines */}
        <div className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px]" />
        {/* Center crosshair */}
        <div className="absolute left-1/2 top-1/2 h-[1px] w-10 -translate-x-1/2 -translate-y-1/2 bg-white/25" />
        <div className="absolute left-1/2 top-1/2 h-10 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/25" />
        {/* Draggable knob */}
        <motion.div
          className="absolute h-5 w-5 rounded-full shadow-lg"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          animate={reduced ? undefined : {
            x: [54, 96, 96, 12, 12, 54],
            y: [54, 12, 96, 96, 12, 54],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

/* =================================================================
   18. Chat Recorder UI — mic slides + live waveform
   ================================================================= */
function RecorderUI({ from, to, reduced }: PProps) {
  return (
    <div className="relative flex h-full w-full flex-col justify-end">
      <div className="glass relative mx-auto mb-2 flex h-10 w-[85%] items-center gap-2 rounded-full pl-3 pr-1 shadow-lg">
        {/* Input / waveform area */}
        <motion.div
          className="relative flex h-4 flex-1 items-center gap-0.5"
          animate={reduced ? undefined : { opacity: [1, 1, 0.4, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          {/* Text placeholder */}
          <motion.div
            className="h-1.5 rounded-full bg-white/45"
            animate={reduced ? undefined : { width: ["60%", "60%", "0%", "60%"], opacity: [1, 1, 0, 1] }}
            transition={{ duration: 5, times: [0, 0.2, 0.4, 1], repeat: Infinity }}
          />
          {/* Waveform bars */}
          <motion.div
            className="absolute inset-y-0 left-0 flex items-center gap-0.5"
            animate={reduced ? undefined : { opacity: [0, 0, 1, 0] }}
            transition={{ duration: 5, times: [0, 0.2, 0.5, 0.8], repeat: Infinity }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.span
                key={i}
                className="w-[2px] rounded-full"
                style={{ background: `linear-gradient(180deg, ${from}, ${to})` }}
                animate={reduced ? undefined : { height: [3, 12, 4, 10, 5] }}
                transition={{ duration: 0.9, delay: i * 0.04, repeat: Infinity, ease: "easeInOut" }}
              />
            ))}
          </motion.div>
        </motion.div>
        {/* Mic button that scales/slides */}
        <motion.div
          className="flex h-8 w-8 items-center justify-center rounded-full shadow-md"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          animate={reduced ? undefined : { scale: [1, 1, 1.25, 1], x: [0, 0, -4, 0] }}
          transition={{ duration: 5, times: [0, 0.2, 0.45, 0.9], repeat: Infinity }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#fff">
            <rect x="9" y="3" width="6" height="12" rx="3" />
            <path d="M5 11v1a7 7 0 0 0 14 0v-1M12 19v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" fill="none" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

/* =================================================================
   19. Screenshot Preventer — redaction blocks masking text
   ================================================================= */
function ScreenshotPreventer({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full px-4 py-2">
      <div className="space-y-1.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <div key={i} className="relative flex h-2.5 items-center">
            <div className="h-1.5 w-full rounded bg-white/25" />
            <motion.div
              className="absolute inset-y-0 rounded"
              style={{
                background: `linear-gradient(90deg, ${from}, ${to})`,
                right: 0,
              }}
              animate={reduced ? undefined : { width: ["0%", `${[65, 85, 60, 90, 55][i]}%`, "0%"] }}
              transition={{ duration: 4, delay: i * 0.1, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
      <motion.div
        className="mt-3 flex items-center justify-center gap-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/70"
        animate={reduced ? undefined : { opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
        Protected
      </motion.div>
    </div>
  );
}

/* =================================================================
   20. Scroll Toolbar — large title collapses to compact + blur
   ================================================================= */
function ScrollToolbar({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* Toolbar */}
      <motion.div
        className="absolute inset-x-2 top-2 rounded-xl border border-white/15"
        animate={reduced ? undefined : {
          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)", "rgba(255,255,255,0)"],
          backdropFilter: ["blur(0px)", "blur(6px)", "blur(0px)"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="px-3 py-2 font-semibold"
          animate={reduced ? undefined : { fontSize: ["22px", "13px", "22px"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            background: `linear-gradient(90deg, ${from}, ${to})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Inbox
        </motion.div>
      </motion.div>
      {/* Scrolling list below */}
      <motion.div
        className="absolute inset-x-4 flex flex-col gap-1"
        style={{ top: 54 }}
        animate={reduced ? undefined : { y: [0, -40, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass rounded-md p-1.5">
            <div className="h-1 w-3/4 rounded bg-white/60" />
            <div className="mt-1 h-0.5 w-1/2 rounded bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   21. Sheet Interaction — bottom sheet snaps between detents
   ================================================================= */
function SheetInteraction({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* Content behind sheet that parallaxes */}
      <motion.div
        className="absolute inset-2 rounded-lg"
        style={{ background: `linear-gradient(135deg, ${from}55, ${to}55)` }}
        animate={reduced ? undefined : { scale: [1, 0.93, 0.9, 0.93, 1] }}
        transition={{ duration: 6, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Sheet sliding between detents */}
      <motion.div
        className="glass absolute inset-x-2 rounded-t-2xl p-2 shadow-2xl"
        animate={reduced ? undefined : { top: ["70%", "40%", "15%", "40%", "70%"] }}
        transition={{ duration: 6, times: [0, 0.25, 0.5, 0.75, 1], repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
        style={{ bottom: -8 }}
      >
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/60" />
        <div className="space-y-1.5">
          <div
            className="h-1.5 w-2/3 rounded"
            style={{ background: `linear-gradient(90deg, ${from}, ${to})` }}
          />
          <div className="h-1 w-3/4 rounded bg-white/35" />
          <div className="h-1 w-1/2 rounded bg-white/30" />
        </div>
      </motion.div>
    </div>
  );
}

/* =================================================================
   22. Sortable Grid — drag-to-reorder with cell reflow
   ================================================================= */
function SortableGrid({ from, to, reduced }: PProps) {
  const order = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7, 8],
  ];
  return (
    <div className="relative grid h-full w-full grid-cols-3 gap-1.5 px-3 py-2">
      {Array.from({ length: 9 }).map((_, i) => {
        // Cell 0 gets "picked up" and moves
        const isPicked = i === 0;
        return (
          <motion.div
            key={i}
            className="aspect-square rounded-md shadow-md"
            style={{
              background: `linear-gradient(135deg, ${from}, ${to})`,
              opacity: isPicked ? 1 : 0.6,
            }}
            animate={
              reduced
                ? undefined
                : isPicked
                  ? {
                      scale: [1, 1.12, 1.12, 1],
                      x: [0, 70, 0, 0],
                      y: [0, 30, 0, 0],
                      zIndex: [1, 5, 5, 1],
                    }
                  : {
                      opacity: [0.6, 0.6, 0.8, 0.6],
                    }
            }
            transition={{ duration: 5, times: [0, 0.3, 0.6, 1], repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
          />
        );
      })}
    </div>
  );
}

/* =================================================================
   23. Stock Scroller — infinite horizontal ticker with sparklines
   ================================================================= */
function StockScroller({ from, to, reduced }: PProps) {
  const rows = [
    { name: "AAPL", price: "193", up: true,  curve: "M0 18 L8 12 L16 15 L24 8 L32 10 L40 4" },
    { name: "TSLA", price: "247", up: false, curve: "M0 4 L8 10 L16 8 L24 14 L32 12 L40 18" },
    { name: "NVDA", price: "521", up: true,  curve: "M0 16 L8 14 L16 10 L24 12 L32 6 L40 4" },
    { name: "MSFT", price: "412", up: true,  curve: "M0 15 L8 12 L16 14 L24 10 L32 11 L40 6" },
    { name: "META", price: "486", up: false, curve: "M0 6 L8 11 L16 9 L24 13 L32 14 L40 17" },
  ];
  // Triple the list so x animating 0% → -33.333% loops seamlessly.
  const loop = [...rows, ...rows, ...rows];
  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="absolute top-1/2 left-0 flex -translate-y-1/2 items-center gap-2 whitespace-nowrap"
        animate={reduced ? undefined : { x: ["0%", "-33.333%"] }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((row, i) => (
          <div
            key={i}
            className="glass flex shrink-0 items-center gap-2 rounded-md px-2.5 py-1 text-[9px] font-semibold"
          >
            <span className="text-white/85">{row.name}</span>
            <svg width="42" height="20" viewBox="0 0 42 22" fill="none">
              <path
                d={row.curve}
                stroke={row.up ? from : to}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ color: row.up ? from : to }}>${row.price}</span>
          </div>
        ))}
      </motion.div>
      {/* Soft edge fades so tickers slide in / out gracefully */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-8"
        style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.35), transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-8"
        style={{ background: "linear-gradient(-90deg, rgba(0,0,0,0.35), transparent)" }}
      />
    </div>
  );
}

/* =================================================================
   24. Telegram Header — large title collapses with blur as you scroll
   ================================================================= */
function TelegramHeader({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      {/* Header */}
      <motion.div
        className="absolute inset-x-2 top-2 flex items-center gap-2 rounded-xl border border-white/15 px-2"
        animate={reduced ? undefined : {
          height: [54, 30, 54],
          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,0.12)", "rgba(255,255,255,0)"],
          backdropFilter: ["blur(0px)", "blur(8px)", "blur(0px)"],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="shrink-0 rounded-full shadow-md"
          style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
          animate={reduced ? undefined : { width: [30, 18, 30], height: [30, 18, 30] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="flex-1">
          <motion.div
            className="font-semibold"
            animate={reduced ? undefined : { fontSize: ["14px", "10px", "14px"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: `linear-gradient(90deg, ${from}, ${to})`,
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Messages
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="absolute inset-x-4 flex flex-col gap-1"
        style={{ top: 62 }}
        animate={reduced ? undefined : { y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="glass rounded-md p-1.5">
            <div className="h-1 w-3/4 rounded bg-white/65" />
            <div className="mt-1 h-0.5 w-1/2 rounded bg-white/30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* =================================================================
   25. Threads Dismiss — card drag-up with rubber-band snap
   ================================================================= */
function ThreadsDismiss({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full">
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl shadow-xl"
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
          width: "70%",
          height: "72%",
        }}
        animate={reduced ? undefined : {
          y: [0, -26, -14, -50, 0],
          scale: [1, 0.98, 1, 0.94, 1],
          opacity: [1, 1, 1, 0.55, 1],
        }}
        transition={{ duration: 5, times: [0, 0.25, 0.4, 0.7, 1], repeat: Infinity, ease: [0.65, 0, 0.35, 1] }}
      >
        <div className="absolute inset-x-3 top-3 flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-white/70" />
          <div className="h-1 w-12 rounded bg-white/60" />
        </div>
        <div className="absolute inset-x-3 bottom-4 space-y-1">
          <div className="h-1 w-5/6 rounded bg-white/50" />
          <div className="h-1 w-2/3 rounded bg-white/40" />
          <div className="h-1 w-1/2 rounded bg-white/30" />
        </div>
      </motion.div>
      {/* Up arrow hint */}
      <motion.div
        className="absolute left-1/2 top-2 -translate-x-1/2 text-white/50"
        animate={reduced ? undefined : { y: [0, -3, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </motion.div>
    </div>
  );
}

/* =================================================================
   26. Undo Helper — value with undo/redo arrows cycling
   ================================================================= */
function UndoHelper({ from, to, reduced }: PProps) {
  return (
    <div className="relative flex h-full w-full items-center justify-center gap-3">
      <motion.div
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70"
        animate={reduced ? undefined : { scale: [1, 1.15, 1], color: ["rgba(255,255,255,0.7)", "#ffffff", "rgba(255,255,255,0.7)"] }}
        transition={{ duration: 3, times: [0, 0.1, 0.3], repeat: Infinity }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 14L4 9l5-5" />
          <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
        </svg>
      </motion.div>
      <motion.div
        className="text-3xl font-bold tabular-nums"
        style={{
          background: `linear-gradient(135deg, ${from}, ${to})`,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
        animate={reduced ? undefined : {
          scale: [1, 1.08, 1, 1.08, 1],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.span
          animate={reduced ? undefined : { opacity: [1, 0, 1, 0, 1] }}
          transition={{ duration: 3, times: [0, 0.2, 0.4, 0.6, 0.8], repeat: Infinity }}
          style={{ display: "inline-block" }}
        >
          <CounterText reduced={reduced} />
        </motion.span>
      </motion.div>
      <motion.div
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70"
        animate={reduced ? undefined : { scale: [1, 1, 1.15, 1], color: ["rgba(255,255,255,0.7)", "rgba(255,255,255,0.7)", "#ffffff", "rgba(255,255,255,0.7)"] }}
        transition={{ duration: 3, times: [0, 0.55, 0.7, 0.9], repeat: Infinity }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 14l5-5-5-5" />
          <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
        </svg>
      </motion.div>
    </div>
  );
}

function CounterText({ reduced }: { reduced: boolean }) {
  const values = ["1", "2", "1", "2", "1"];
  return (
    <>
      {values.map((v, i) => (
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={reduced ? undefined : { opacity: [0, 1, 0] }}
          transition={{ duration: 3, delay: i * 0.6, times: [0, 0.15, 0.3], repeat: Infinity }}
        >
          {v}
        </motion.span>
      ))}
      <span className="opacity-0">2</span>
    </>
  );
}

/* =================================================================
   27. Xcode Onboarding — animated blueprint grid + geometric shapes
   ================================================================= */
function XcodeOnboarding({ from, to, reduced }: PProps) {
  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Blueprint grid that draws in */}
      <motion.div
        className="absolute inset-0 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:18px_18px]"
        animate={reduced ? undefined : { opacity: [0, 0.7, 0.7, 0] }}
        transition={{ duration: 6, times: [0, 0.25, 0.75, 1], repeat: Infinity }}
      />
      {/* Central geometric shape that morphs */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl"
        style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
        animate={reduced ? undefined : {
          width: [12, 48, 48, 12],
          height: [12, 48, 48, 12],
          borderRadius: ["50%", "24%", "8%", "50%"],
          rotate: [0, 90, 180, 360],
        }}
        transition={{ duration: 6, times: [0, 0.3, 0.7, 1], repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Orbiting dots */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
          style={{ background: i % 2 ? from : to }}
          animate={reduced ? undefined : { rotate: 360 }}
          transition={{ duration: 6 - i, repeat: Infinity, ease: "linear" }}
          transformTemplate={(_, t) => `translate(-50%, -50%) ${t}`}
        >
          <span
            className="absolute block h-1.5 w-1.5 rounded-full"
            style={{
              background: i % 2 ? from : to,
              left: 40 + i * 10,
              top: 0,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
