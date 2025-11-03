import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Tf9WOIaWs6LOezG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="text-white">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70"
          >
            ATLAS FILM — Direction & Cinematography
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Motion built for impact
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            A modern portfolio for high‑energy, precision filmmaking—sleek, minimal, and performance‑driven.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
            className="mt-8 flex gap-3"
          >
            <a
              href="#reel"
              className="rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Watch Reel
            </a>
            <a
              href="#work"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              View Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
