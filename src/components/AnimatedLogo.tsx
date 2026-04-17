"use client";

import { useId } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTime,
  useTransform,
} from "framer-motion";

type Props = {
  size?: number;
  className?: string;
};

// Diagonal elliptical orbit constants
const ORBIT_RX = 32;
const ORBIT_RY = 13;
const TILT_DEG = -30;
const TILT_RAD = (TILT_DEG * Math.PI) / 180;
const TILT_COS = Math.cos(TILT_RAD);
const TILT_SIN = Math.sin(TILT_RAD);

function ellipseX(a: number) {
  const x = ORBIT_RX * Math.sin(a);
  const y = -ORBIT_RY * Math.cos(a);
  return 36 + x * TILT_COS - y * TILT_SIN;
}
function ellipseY(a: number) {
  const x = ORBIT_RX * Math.sin(a);
  const y = -ORBIT_RY * Math.cos(a);
  return 36 + x * TILT_SIN + y * TILT_COS;
}

export function AnimatedLogo({ size = 32, className = "" }: Props) {
  const reduced = useReducedMotion();
  const uid = `zc-orb-${useId().replace(/:/g, "")}`;

  // Angle drives the photon's path along the tilted ellipse
  const liveTime = useTime();
  const staticAngle = useMotionValue(0);
  const timeSource = reduced ? staticAngle : liveTime;
  const angle = useTransform(timeSource, (t) => (t / 5000) * Math.PI * 2);

  const headCx = useTransform(angle, ellipseX);
  const headCy = useTransform(angle, ellipseY);
  const tail1Cx = useTransform(angle, (a) => ellipseX(a - 0.18));
  const tail1Cy = useTransform(angle, (a) => ellipseY(a - 0.18));
  const tail2Cx = useTransform(angle, (a) => ellipseX(a - 0.38));
  const tail2Cy = useTransform(angle, (a) => ellipseY(a - 0.38));

  // Depth → opacity/scale (front = larger cy = closer to viewer)
  const headOpacity = useTransform(headCy, [18, 54], [0.4, 1], { clamp: true });
  const headScale = useTransform(headCy, [18, 54], [0.7, 1.05], {
    clamp: true,
  });
  const haloOpacity = useTransform(headCy, [18, 54], [0.1, 0.28], {
    clamp: true,
  });

  return (
    <motion.div
      className={`relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 320, damping: 20 }}
    >
      <svg
        viewBox="0 0 72 72"
        width={size}
        height={size}
        className="relative overflow-visible"
        role="img"
        aria-label="Zelcodes"
      >
        <defs>
          <clipPath id={`${uid}-clip`}>
            <circle cx="36" cy="36" r="26" />
          </clipPath>
          <filter
            id={`${uid}-blur`}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <filter
            id={`${uid}-halo`}
            x="-60%"
            y="-60%"
            width="220%"
            height="220%"
          >
            <feGaussianBlur stdDeviation="8" />
          </filter>
          <radialGradient id={`${uid}-sheen`} cx=".3" cy=".22" r=".72">
            <stop offset="0" stopColor="#ffffff" stopOpacity=".65" />
            <stop offset=".35" stopColor="#ffffff" stopOpacity=".08" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <linearGradient
            id={`${uid}-rim`}
            x1="0"
            y1="0"
            x2="72"
            y2="72"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#ffffff" stopOpacity=".9" />
            <stop offset=".45" stopColor="#ffffff" stopOpacity=".1" />
            <stop offset="1" stopColor="#ffffff" stopOpacity=".6" />
          </linearGradient>
          <radialGradient id={`${uid}-inner-shadow`} cx=".5" cy=".5" r=".5">
            <stop offset=".75" stopColor="#000000" stopOpacity="0" />
            <stop offset="1" stopColor="#000000" stopOpacity=".45" />
          </radialGradient>
          <radialGradient id={`${uid}-photon`} cx=".5" cy=".5" r=".5">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset=".6" stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#a5b4fc" />
          </radialGradient>
        </defs>

        {/* Ambient colored halo */}
        <motion.g
          filter={`url(#${uid}-halo)`}
          animate={reduced ? undefined : { opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="24" cy="30" r="14" fill="#6366f1" opacity=".6" />
          <circle cx="48" cy="30" r="14" fill="#ec4899" opacity=".55" />
          <circle cx="36" cy="50" r="14" fill="#38bdf8" opacity=".55" />
        </motion.g>

        {/* Orb base — dark well so the mesh blobs pop */}
        <circle cx="36" cy="36" r="26" fill="#0b0b14" />

        {/* Living mesh gradient inside the orb */}
        <g clipPath={`url(#${uid}-clip)`}>
          <g filter={`url(#${uid}-blur)`}>
            <motion.circle
              cx="22"
              cy="28"
              r="18"
              fill="#6366f1"
              animate={
                reduced
                  ? undefined
                  : { cx: [22, 42, 28, 22], cy: [28, 22, 44, 28] }
              }
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="50"
              cy="26"
              r="17"
              fill="#ec4899"
              animate={
                reduced
                  ? undefined
                  : { cx: [50, 34, 54, 50], cy: [26, 46, 30, 26] }
              }
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.circle
              cx="34"
              cy="52"
              r="18"
              fill="#38bdf8"
              animate={
                reduced
                  ? undefined
                  : { cx: [34, 18, 48, 34], cy: [52, 36, 22, 52] }
              }
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </g>
          <circle
            cx="36"
            cy="36"
            r="26"
            fill={`url(#${uid}-inner-shadow)`}
          />
        </g>

        {/* Glass sheen highlight */}
        <circle cx="36" cy="36" r="26" fill={`url(#${uid}-sheen)`} />

        {/* Rim highlight */}
        <circle
          cx="36"
          cy="36"
          r="26"
          fill="none"
          stroke={`url(#${uid}-rim)`}
          strokeWidth="1.3"
        />

        {/* Specular pinch at top-left */}
        <ellipse
          cx="27"
          cy="22"
          rx="7"
          ry="3"
          fill="#ffffff"
          opacity=".45"
          transform="rotate(-30 27 22)"
        />

        {/* Diagonal elliptical orbit ring */}
        <motion.ellipse
          cx="36"
          cy="36"
          rx={ORBIT_RX}
          ry={ORBIT_RY}
          fill="none"
          stroke="#ffffff"
          strokeOpacity=".3"
          strokeWidth="1"
          strokeDasharray="2 3.5"
          transform={`rotate(${TILT_DEG} 36 36)`}
          animate={reduced ? undefined : { strokeDashoffset: [0, -55] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Comet trail: two fading dots at lagging angles */}
        <motion.circle
          cx={tail2Cx}
          cy={tail2Cy}
          r="1.2"
          fill="#ffffff"
          opacity=".18"
        />
        <motion.circle
          cx={tail1Cx}
          cy={tail1Cy}
          r="2"
          fill="#ffffff"
          opacity=".45"
        />

        {/* Comet head halo + core */}
        <motion.circle
          cx={headCx}
          cy={headCy}
          r="7"
          fill="#ffffff"
          style={{ opacity: haloOpacity }}
        />
        <motion.circle
          cx={headCx}
          cy={headCy}
          r="3.6"
          fill={`url(#${uid}-photon)`}
          style={{ opacity: headOpacity, scale: headScale }}
        />
        <motion.circle
          cx={headCx}
          cy={headCy}
          r="1.6"
          fill="#ffffff"
          style={{ opacity: headOpacity }}
        />
      </svg>
    </motion.div>
  );
}
