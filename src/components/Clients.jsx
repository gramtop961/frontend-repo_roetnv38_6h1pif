import { motion } from 'framer-motion';

const clients = [
  'Nike',
  'Sony Music',
  'Red Bull',
  'BMW',
  'MoMA',
  'A24',
  'Vogue',
  'Spotify',
];

export default function Clients() {
  return (
    <section className="bg-black py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Clients</h2>
          <p className="text-xs text-neutral-500">Trusted by global brands</p>
        </div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 16, ease: 'linear' }}
          >
            {[...clients, ...clients].map((c, i) => (
              <div
                key={i}
                className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white/80"
              >
                {c}
              </div>
            ))}
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black to-transparent" />
        </div>
      </div>
    </section>
  );
}
