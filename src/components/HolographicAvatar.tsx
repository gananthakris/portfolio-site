"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";

export function HolographicAvatar() {
  const outerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const el = outerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;   // 0–1
        const py = (e.clientY - rect.top) / rect.height;   // 0–1

        const rotateY = (px - 0.5) * 32;   // ±16 deg
        const rotateX = -(py - 0.5) * 32;  // ±16 deg

        el.style.setProperty("--rx", `${rotateX}deg`);
        el.style.setProperty("--ry", `${rotateY}deg`);
        el.style.setProperty("--px", `${px * 100}%`);
        el.style.setProperty("--py", `${py * 100}%`);
        el.style.setProperty("--hue", `${(px - 0.5) * 40}deg`); // ±20° warm shift only
      });
    },
    []
  );

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    const el = outerRef.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--px", "50%");
    el.style.setProperty("--py", "50%");
    el.style.setProperty("--hue", "0deg");
  }, []);

  return (
    <div
      ref={outerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="holo-outer"
    >
      {/* Neon glow halo */}
      <div className="holo-glow" />

      {/* Rotating rainbow ring */}
      <div className="holo-ring">
        {/* Avatar + holographic overlays */}
        <div className="holo-card">
          <Image
            src="/Gokul.jpeg"
            alt="Gokulkrishna A - AI Automation Engineer"
            width={200}
            height={200}
            className="holo-image"
            priority
          />
          {/* Iridescent shimmer layer */}
          <div className="holo-shimmer" />
          {/* Specular highlight */}
          <div className="holo-specular" />
          {/* Scan lines */}
          <div className="holo-scanlines" />
        </div>
      </div>
    </div>
  );
}
