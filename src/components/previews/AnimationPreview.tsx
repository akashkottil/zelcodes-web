"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Animation } from "@/lib/animations";
import { getVariant, type PreviewVariant } from "./variants";

type Props = {
  animation: Animation;
  className?: string;
  compact?: boolean;
};

export function AnimationPreview({
  animation,
  className = "",
  compact = false,
}: Props) {
  const variant = getVariant(animation);
  const { accentFrom, accentTo } = animation;

  return (
    <div
      className={`relative overflow-hidden rounded-[18px] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${accentFrom}22 0%, ${accentTo}22 100%), radial-gradient(120% 120% at 10% 0%, ${accentFrom}40 0%, transparent 55%), radial-gradient(120% 120% at 100% 100%, ${accentTo}40 0%, transparent 55%)`,
      }}
    >
      <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:16px_16px] dark:opacity-40" />
      <div className="relative flex h-full w-full items-center justify-center p-6">
        <Variant
          variant={variant}
          accentFrom={accentFrom}
          accentTo={accentTo}
          compact={compact}
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.08) 100%)",
        }}
      />
    </div>
  );
}

function Variant({
  variant,
  accentFrom,
  accentTo,
  compact,
}: {
  variant: PreviewVariant;
  accentFrom: string;
  accentTo: string;
  compact: boolean;
}) {
  const reduced = useReducedMotion();
  const stroke = "rgba(255,255,255,0.85)";

  if (variant === "carousel") {
    return (
      <div className="relative h-full w-full">
        <motion.div
          className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-3"
          animate={reduced ? undefined : { x: ["-30%", "-60%", "-30%"] }}
          transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
        >
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-24 w-20 rounded-xl shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                opacity: 1 - Math.abs(1.5 - i) * 0.25,
              }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "tabbar") {
    return (
      <div className="relative flex h-full w-full flex-col justify-end">
        <div className="glass mx-auto flex w-[78%] items-center justify-between rounded-full px-3 py-2 shadow-lg">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="rounded-full"
              animate={
                reduced
                  ? undefined
                  : {
                      width: i === 1 ? [20, 44, 20] : [20, 20, 20],
                      backgroundColor:
                        i === 1
                          ? [accentFrom, accentTo, accentFrom]
                          : ["rgba(255,255,255,0.5)", "rgba(255,255,255,0.5)", "rgba(255,255,255,0.5)"],
                    }
              }
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{ height: 8, backgroundColor: "rgba(255,255,255,0.5)" }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "transition") {
    return (
      <motion.div
        className="rounded-2xl shadow-xl"
        initial={false}
        animate={
          reduced
            ? undefined
            : {
                width: ["45%", "88%", "45%"],
                height: ["45%", "82%", "45%"],
                borderRadius: ["16px", "24px", "16px"],
              }
        }
        transition={{ duration: 5, ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
        style={{
          background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
        }}
      />
    );
  }

  if (variant === "sheet") {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-xl">
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, ${accentFrom}33, transparent)`,
          }}
        />
        <motion.div
          className="glass absolute inset-x-4 bottom-0 rounded-t-3xl p-4"
          initial={false}
          animate={reduced ? undefined : { y: ["60%", "10%", "60%"] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        >
          <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-white/50" />
          <div className="space-y-2">
            <div className="h-2 w-full rounded bg-white/30" />
            <div className="h-2 w-3/4 rounded bg-white/20" />
            <div className="h-2 w-2/3 rounded bg-white/20" />
          </div>
        </motion.div>
      </div>
    );
  }

  if (variant === "scroll") {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <motion.div
          className="absolute inset-x-4 flex flex-col gap-2"
          animate={reduced ? undefined : { y: ["0%", "-60%", "0%"] }}
          transition={{ duration: 7, ease: "easeInOut", repeat: Infinity }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="glass rounded-lg p-2"
            >
              <div
                className="h-2 rounded"
                style={{
                  width: `${40 + ((i * 13) % 55)}%`,
                  background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
                }}
              />
              <div className="mt-1 h-1.5 w-1/2 rounded bg-white/30" />
            </div>
          ))}
        </motion.div>
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-8"
          style={{
            background:
              "linear-gradient(180deg, var(--background), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10"
          style={{
            background:
              "linear-gradient(0deg, var(--background), transparent)",
          }}
        />
      </div>
    );
  }

  if (variant === "grid") {
    return (
      <div className="grid h-full w-full grid-cols-3 gap-2">
        {Array.from({ length: compact ? 6 : 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="rounded-lg"
            style={{
              background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            }}
            animate={
              reduced
                ? undefined
                : {
                    scale: [1, 1.08, 1],
                    opacity: [0.55, 1, 0.55],
                  }
            }
            transition={{
              duration: 2.6,
              delay: i * 0.12,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "shape") {
    return (
      <div className="relative grid place-items-center">
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute rounded-[28%]"
            style={{
              width: `${60 - i * 14}%`,
              height: `${60 - i * 14}%`,
              border: `2px solid ${i % 2 === 0 ? accentFrom : accentTo}`,
            }}
            animate={
              reduced
                ? undefined
                : {
                    rotate: [0, 12, -12, 0],
                    borderRadius: ["28%", "44%", "28%"],
                  }
            }
            transition={{
              duration: 6,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "toast") {
    return (
      <div className="relative h-full w-full">
        {/* Device frame hint */}
        <div className="absolute inset-x-6 top-2 bottom-6 rounded-[22px] border border-white/10 bg-white/[0.04]" />

        {/* Dynamic Island pill */}
        <motion.div
          className="absolute left-1/2 top-5 flex -translate-x-1/2 items-center gap-2 overflow-hidden rounded-full px-3 text-white shadow-[0_10px_30px_-8px_rgba(0,0,0,0.55)]"
          style={{
            background: "#0b0b14",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
          initial={{ width: 56, height: 22 }}
          animate={
            reduced
              ? undefined
              : {
                  width: [56, 180, 180, 56],
                  height: [22, 36, 36, 22],
                  borderRadius: [999, 999, 999, 999],
                }
          }
          transition={{
            duration: 4.2,
            times: [0, 0.25, 0.75, 1],
            ease: [0.65, 0, 0.35, 1],
            repeat: Infinity,
          }}
        >
          <motion.span
            className="inline-block h-2 w-2 shrink-0 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            }}
            animate={
              reduced
                ? undefined
                : { scale: [0.8, 1.15, 1.15, 0.8] }
            }
            transition={{
              duration: 4.2,
              times: [0, 0.28, 0.72, 1],
              repeat: Infinity,
            }}
          />
          <motion.span
            className="truncate text-[11px] font-medium tracking-tight whitespace-nowrap"
            animate={
              reduced
                ? undefined
                : { opacity: [0, 0, 1, 1, 0, 0] }
            }
            transition={{
              duration: 4.2,
              times: [0, 0.22, 0.32, 0.68, 0.78, 1],
              repeat: Infinity,
            }}
          >
            Now playing
          </motion.span>
        </motion.div>

        {/* Sound wave on the right */}
        <motion.div
          className="absolute right-10 top-[30px] flex items-end gap-[2px]"
          animate={
            reduced
              ? undefined
              : { opacity: [0, 0, 1, 1, 0, 0] }
          }
          transition={{
            duration: 4.2,
            times: [0, 0.3, 0.4, 0.7, 0.8, 1],
            repeat: Infinity,
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-[3px] rounded-full bg-white/70"
              animate={
                reduced
                  ? undefined
                  : { height: [4, 10, 6, 12, 4] }
              }
              transition={{
                duration: 1.1,
                delay: i * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ height: 4 }}
            />
          ))}
        </motion.div>
      </div>
    );
  }

  if (variant === "onboarding") {
    return (
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3">
        <motion.div
          className="glass flex h-24 w-24 items-center justify-center rounded-2xl shadow-xl"
          animate={
            reduced
              ? undefined
              : { scale: [0.9, 1, 0.9], rotate: [0, 4, -4, 0] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            className="h-10 w-10 rounded-xl"
            style={{
              background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            }}
          />
        </motion.div>
        <div className="flex items-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-1.5 rounded-full"
              animate={
                reduced
                  ? undefined
                  : {
                      width: i === 1 ? [6, 18, 6] : [6, 6, 6],
                      opacity: i === 1 ? [0.5, 1, 0.5] : [0.4, 0.4, 0.4],
                    }
              }
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                width: 6,
                background: i === 1 ? accentFrom : "rgba(255,255,255,0.45)",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "paywall") {
    return (
      <div className="relative grid place-items-center">
        <motion.div
          className="flex h-20 w-20 items-center justify-center rounded-2xl shadow-2xl"
          style={{
            background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
          }}
          animate={
            reduced
              ? undefined
              : { rotateY: [0, 360], rotateX: [0, 15, 0] }
          }
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2l2.5 6.5L21 10l-5 4.5L17.5 22 12 18.5 6.5 22 8 14.5 3 10l6.5-1.5L12 2z"
              fill={stroke}
            />
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === "slider") {
    return (
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="glass relative h-32 w-32 rounded-2xl p-2">
          <motion.div
            className="absolute h-6 w-6 rounded-full shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
            }}
            animate={
              reduced
                ? undefined
                : {
                    x: [6, 80, 80, 6, 6],
                    y: [6, 6, 80, 80, 6],
                  }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 rounded-2xl [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>
      </div>
    );
  }

  return null;
}
