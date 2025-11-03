import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const awards = [
  { year: '2024', name: 'Cannes Lions — Shortlisted' },
  { year: '2023', name: 'Webby Awards — Best Video' },
  { year: '2023', name: 'Vimeo Staff Pick' },
  { year: '2022', name: 'ADC Awards — Merit' },
];

export default function Awards() {
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const tween = gsap.to(trackRef.current, {
      xPercent: -50,
      repeat: -1,
      duration: 24,
      ease: 'linear',
    });
    return () => tween.kill();
  }, []);

  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Recognition</h2>
          <p className="text-xs text-neutral-500">Awards & selections</p>
        </div>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />

          <div className="flex gap-6" ref={trackRef}>
            {[...awards, ...awards].map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="whitespace-nowrap rounded-full border border-white/15 bg-black/60 px-5 py-2 text-sm text-white/80"
              >
                <span className="text-white/60">{a.year}</span> — {a.name}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
