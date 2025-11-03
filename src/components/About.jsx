import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="grid gap-10 sm:grid-cols-5"
        >
          <div className="sm:col-span-2">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">About</h2>
          </div>
          <div className="sm:col-span-3 text-neutral-300">
            <p className="leading-relaxed">
              Filmmaker and cinematographer crafting refined visuals with a focus on composition, movement, and natural light. 
              Work spans commercials, music videos, and short-form narratives. Minimalist by design—intentional by nature.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-neutral-400 sm:grid-cols-3">
              <div className="rounded-lg border border-white/10 p-4">Direction</div>
              <div className="rounded-lg border border-white/10 p-4">Cinematography</div>
              <div className="rounded-lg border border-white/10 p-4">Color & Finishing</div>
              <div className="rounded-lg border border-white/10 p-4">Commercial</div>
              <div className="rounded-lg border border-white/10 p-4">Music Video</div>
              <div className="rounded-lg border border-white/10 p-4">Narrative</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
