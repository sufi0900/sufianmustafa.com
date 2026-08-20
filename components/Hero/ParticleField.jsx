// components/Hero/ParticleField.jsx
"use client";

import { useEffect, useRef } from "react";

/* The canvas is intentionally static on touch/mobile devices. Desktop keeps
   the ambient movement, capped at 30 paints per second, and pauses when the
   hero or browser tab is not visible. */
export default function ParticleField({ accent, isDesktop }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const shouldAnimate = isDesktop && !prefersReducedMotion;

    const particles = Array.from({ length: isDesktop ? 16 : 10 }, (_, id) => ({
      id,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      opacity: Math.random() * 0.45 + 0.1,
      // Percentage of the canvas travelled per second.
      speed: Math.random() * 0.72 + 0.24,
      drift: (Math.random() - 0.5) * 0.48,
    }));

    let animId = null;
    const pState = particles.map((p) => ({
      ...p,
      fillStyle: `${accent}${Math.round(p.opacity * 255).toString(16).padStart(2, "0")}`,
    }));

    let isInView = true;
    let isPageVisible = !document.hidden;
    let lastPaint = 0;
    const frameInterval = 1000 / 30;

    const draw = (deltaSeconds = 0) => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      pState.forEach((p) => {
        const px = (p.x / 100) * width, py = (p.y / 100) * height;
        ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.fillStyle;
        ctx.fill();

        p.y -= p.speed * deltaSeconds;
        p.x += p.drift * deltaSeconds;
        if (p.y < -2) p.y = 102; if (p.x < -2) p.x = 102; if (p.x > 102) p.x = -2;
      });
    };

    const stop = () => {
      if (animId !== null) cancelAnimationFrame(animId);
      animId = null;
      lastPaint = 0;
    };

    const render = (now) => {
      animId = null;
      if (!shouldAnimate || !isInView || !isPageVisible) return;

      if (!lastPaint || now - lastPaint >= frameInterval) {
        const deltaSeconds = lastPaint
          ? Math.min((now - lastPaint) / 1000, 0.05)
          : 0;
        draw(deltaSeconds);
        lastPaint = now;
      }

      animId = requestAnimationFrame(render);
    };

    const start = () => {
      if (
        shouldAnimate &&
        isInView &&
        isPageVisible &&
        animId === null
      ) {
        animId = requestAnimationFrame(render);
      }
    };

    const resize = () => {
      const width = Math.max(1, Math.round(canvas.offsetWidth));
      const height = Math.max(1, Math.round(canvas.offsetHeight));

      if (canvas.width !== width) canvas.width = width;
      if (canvas.height !== height) canvas.height = height;
      draw(0);
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    let io = null;
    if (shouldAnimate && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([entry]) => {
        isInView = entry.isIntersecting;
        if (isInView) start();
        else stop();
      }, { threshold: 0 });
      io.observe(canvas);
    } else if (shouldAnimate) {
      start();
    }

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      if (isPageVisible) start();
      else stop();
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      ro.disconnect();
      io?.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [accent, isDesktop]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-100"
    />
  );
}
