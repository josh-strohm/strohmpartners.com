"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/motion";
import { homeContent } from "@/content/home";

export function Hero() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-mesh" aria-hidden />
      <div
        className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        aria-hidden
      />
      {/* Accent glow */}
      <div
        className="absolute -top-40 left-1/2 h-[600px] w-[1100px] -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-7xl px-6 pt-24 pb-24 sm:px-8 sm:pt-32 sm:pb-32 lg:px-12 lg:pt-40 lg:pb-40"
      >
        <motion.div variants={fadeUp} className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-ink-700/60 backdrop-blur px-4 py-1.5 border border-ink-400/20 text-xs font-mono uppercase tracking-[0.18em] text-ink-100">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="mt-8 font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-center text-ink-50 balance"
        >
          {hero.titleStart}{" "}
          <span className="italic text-accent-300">{hero.titleAccent}</span>{" "}
          {hero.titleEnd}
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-8 max-w-2xl text-center text-lg sm:text-xl text-ink-200 leading-relaxed pretty"
        >
          {hero.description}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href={hero.primaryCta.href} size="lg" variant="primary">
            {hero.primaryCta.label}
            <span aria-hidden>→</span>
          </Button>
          <Link
            href={hero.secondaryCta.href}
            className="group inline-flex items-center gap-2 text-sm text-ink-200 hover:text-ink-50 transition-colors"
          >
            {hero.secondaryCta.label}
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </motion.div>

        {/* Stat row */}
        <motion.div
          variants={scaleIn}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-ink-600/50 border border-ink-400/30 md:grid-cols-4"
        >
          {[
            { k: "1", v: "Dedicated AI partner" },
            { k: "100%", v: "Personal attention" },
            { k: "0", v: "Vendor lock-in commitments" },
            { k: "5–500", v: "Employee range I serve" },
          ].map((s) => (
            <div
              key={s.k}
              className="bg-ink-800/80 backdrop-blur px-6 py-5 text-center"
            >
              <div className="font-display text-2xl text-ink-50">{s.k}</div>
              <div className="mt-1 text-xs text-ink-300 uppercase tracking-wider font-mono">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
