import { motion } from 'framer-motion';

const videos = [
  { title: 'Fashion Editorial — 30s', vimeoId: '76979871' },
  { title: 'Urban Nightscape — Short', vimeoId: '22439234' },
  { title: 'Portrait Study — Reel', vimeoId: '357274789' },
  { title: 'Documentary Teaser', vimeoId: '143018708' },
];

function VideoCard({ title, vimeoId, src }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-black/30 ring-1 ring-white/10">
        <div className="aspect-video w-full">
          {vimeoId ? (
            <iframe
              src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
              className="h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={title}
            />
          ) : (
            <video className="h-full w-full object-cover" controls>
              <source src={src} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium text-white/90">{title}</h3>
      </div>
    </motion.div>
  );
}

export default function ReelGallery() {
  return (
    <section id="work" className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Work</h2>
            <p className="mt-2 text-sm text-neutral-400">A curated reel of commercial, narrative, and experimental pieces.</p>
          </div>
          <a href="#contact" className="hidden rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:bg-white/10 sm:inline-block">
            Collaborate
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <VideoCard key={i} {...v} />
          ))}
        </div>
      </div>
    </section>
  );
}
