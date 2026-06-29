"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { homeContent } from "@/content/home";

export function OutcomesScroller() {
  const { outcomes } = homeContent;

  // Duplicate the phrases for a seamless infinite marquee
  const marqueeItems = [...outcomes, ...outcomes];

  const sectionRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);

  const [cycleWidth, setCycleWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isCentered, setIsCentered] = useState(false);
  const [prefersReduced, setPrefersReduced] = useState(false);

  const isPaused = isHovering || isDragging || isCentered;

  // Calm auto-scroll speed (px per second)
  const SPEED = 42;

  const computeCycleWidth = useCallback(() => {
    if (!trackRef.current) return;
    const totalWidth = trackRef.current.scrollWidth;
    setCycleWidth(totalWidth / 2);
  }, []);

  // Measure width for seamless looping (run after layout settles)
  useEffect(() => {
    const measure = () => {
      requestAnimationFrame(() => {
        computeCycleWidth();
        requestAnimationFrame(computeCycleWidth);
      });
    };

    measure();
    const handleResize = () => measure();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [computeCycleWidth]);

  // Respect reduced motion
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(media.matches);

    const listener = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  // Continuous auto-scroll loop
  useAnimationFrame((_, delta) => {
    if (isPaused || cycleWidth === 0 || prefersReduced) return;

    const move = (SPEED * delta) / 1000;
    let next = x.get() - move;

    if (next <= -cycleWidth) {
      next += cycleWidth;
    }
    x.set(next);
  });

  // Pause when the section is centered in the viewport
  const checkIfCentered = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return false;

    const rect = el.getBoundingClientRect();
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = window.innerHeight / 2;

    // Pause when roughly centered (the primary viewing zone)
    const tolerance = 200;
    return Math.abs(elementCenter - viewportCenter) < tolerance;
  }, []);

  // Watch page scroll to pause/resume based on center position
  useEffect(() => {
    let rafId: number;

    const updateCentered = () => {
      setIsCentered(checkIfCentered());
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateCentered);
    };

    updateCentered();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateCentered);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateCentered);
    };
  }, [checkIfCentered]);

  // Pause on hover + drag + wheel
  const handlePointerEnter = () => {
    setIsHovering(true);
    if (marqueeRef.current) {
      marqueeRef.current.style.setProperty('--x', '50%');
      marqueeRef.current.style.setProperty('--y', '50%');
    }
  };
  const handlePointerLeave = () => setIsHovering(false);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleWheel = () => {
    if (!isDragging) {
      setIsDragging(true);
      setTimeout(() => setIsDragging(false), 850);
    }
  };

  // Cursor-following glow (similar to Hero's accent glow)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!marqueeRef.current) return;
    const rect = marqueeRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    marqueeRef.current.style.setProperty('--x', `${x}%`);
    marqueeRef.current.style.setProperty('--y', `${y}%`);
  };

  return (
    <section ref={sectionRef} className="py-12 lg:py-14">
      {/* Minimal header matching the clean reference style */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 mb-8 text-center">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-ink-300">
          Real outcomes
        </span>
      </div>

      {/* Clean full-width-ish marquee band */}
      <div
        ref={marqueeRef}
        className="relative bg-ink-900/30 border border-white/10 backdrop-blur-xl py-5 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
      >
        {/* Cursor-following glow overlay (radial spot that follows mouse) */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(56,189,248,0.4) 0%, transparent 65%)`,
            opacity: isHovering ? 1 : 0,
            transition: 'opacity 150ms',
          }}
        />

        <div
          ref={viewportRef}
          className="overflow-hidden"
          onWheel={handleWheel}
          aria-label="Client outcomes scrolling marquee"
        >
          <motion.div
            ref={trackRef}
            className="flex items-center gap-8 sm:gap-12 cursor-grab active:cursor-grabbing text-ink-100"
            style={{ x }}
            drag="x"
            dragElastic={0.05}
            dragTransition={{ power: 0.18, timeConstant: 160 }}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onPointerMove={handlePointerMove}
          >
            {marqueeItems.map((phrase, index) => (
              <div key={`${phrase}-${index}`} className="flex items-center gap-8 sm:gap-12 whitespace-nowrap py-1">
                <span className="text-[15px] sm:text-[16px] tracking-tight drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                  {phrase}
                </span>
                <span className="text-white/25 select-none text-lg leading-none">·</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Soft edge fades to hide the seam */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink-900/60 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink-900/60 to-transparent"
          aria-hidden
        />
      </div>
    </section>
  );
}
