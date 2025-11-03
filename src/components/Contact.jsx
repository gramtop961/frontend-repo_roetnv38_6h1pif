import { Mail, Instagram, Video, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s collaborate</h3>
              <p className="mt-2 text-sm text-neutral-400">Currently available for commercial and narrative projects worldwide.</p>
            </div>
            <a
              href="mailto:hello@filmmaker.com"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              <Mail size={16} /> Email Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:bg-white/10"
            >
              <Instagram size={16} /> Instagram
            </a>
            <a
              href="https://vimeo.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:bg-white/10"
            >
              <Video size={16} /> Vimeo
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-white/80 transition hover:bg-white/10"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>

        <p className="mt-10 text-center text-xs text-neutral-500">© {new Date().getFullYear()} Filmmaker Portfolio. All rights reserved.</p>
      </div>
    </section>
  );
}
