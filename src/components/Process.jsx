import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: 'Discovery', desc: 'Define goals, tone, and references to align on creative.' },
  { title: 'Pre‑Production', desc: 'Boards, shotlists, casting, locations, and schedule.' },
  { title: 'Production', desc: 'Lean crew, intentional motion, and precise lighting.' },
  { title: 'Post', desc: 'Edit, color, sound, and delivery in multiple formats.' },
];

export default function Process() {
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!wrapRef.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.process-step').forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            delay: i * 0.05,
          }
        );
      });

      // Accent bar that grows with scroll
      const bar = document.querySelector('#process-bar');
      if (bar) {
        gsap.fromTo(
          bar,
          { height: 0 },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: wrapRef.current,
              start: 'top 70%',
              end: 'bottom 30%',
              scrub: true,
            },
          }
        );
      }
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6" ref={wrapRef}>
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Process</h2>
            <p className="mt-2 text-sm text-neutral-400">A streamlined path from idea to delivery.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-5">
          <div className="relative sm:col-span-2">
            <div className="pointer-events-none absolute left-4 top-0 bottom-0 hidden w-px bg-white/10 sm:block" />
            <div id="process-bar" className="pointer-events-none absolute left-4 top-0 hidden w-px bg-gradient-to-b from-indigo-400 via-sky-400 to-cyan-300 sm:block" />
            <p className="max-w-sm text-sm text-neutral-400">Tight creative, small footprint, and cinematic discipline. No noise—just results.</p>
          </div>
          <div className="sm:col-span-3 grid gap-4">
            {steps.map((s, i) => (
              <motion.div key={i} className="process-step rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
