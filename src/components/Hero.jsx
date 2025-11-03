import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax fade on scroll
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
        .to(titleRef.current, { y: -40, opacity: 0.8, ease: 'none' }, 0)
        .to(subRef.current, { y: -30, opacity: 0.85, ease: 'none' }, 0)
        .to(ctaRef.current, { y: -20, opacity: 0.9, ease: 'none' }, 0);

      // Gentle floating for hero copy
      gsap.to([titleRef.current, subRef.current], {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 3.2,
        ease: 'sine.inOut',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/UngO8SNLfLcyPG7O/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
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
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl"
          >
            Motion built for impact
          </motion.h1>
          <motion.p
            ref={subRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }}
            className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
          >
            A modern portfolio with a futuristic 3D grid—sleek, minimal, and performance‑driven.
          </motion.p>

          <motion.div
            ref={ctaRef}
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
