import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

export default function FeatureReel() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Feature Reel</h2>
            <p className="mt-2 text-sm text-neutral-400">A fast-cut showcase of commercial, narrative, and branded work.</p>
          </div>
          <a href="#work" className="hidden rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:bg-white/10 sm:inline-block">See All</a>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <div className="relative aspect-video w-full">
            <img
              src="https://images.unsplash.com/photo-1508898578281-774ac4893bd0?q=80&w=1600&auto=format&fit=crop"
              alt="Cinematic still"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            <button
              onClick={() => setOpen(true)}
              className="group absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-4 text-black backdrop-blur transition hover:bg-white"
              aria-label="Play reel"
            >
              <Play size={28} className="transition group-hover:scale-105" />
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                className="w-full max-w-5xl overflow-hidden rounded-xl border border-white/10 bg-black"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video w-full">
                  <iframe
                    src="https://player.vimeo.com/video/76979871?autoplay=1&title=0&byline=0&portrait=0"
                    className="h-full w-full"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Feature Reel"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
