import Hero from './components/Hero';
import FeatureReel from './components/FeatureReel';
import ReelGallery from './components/ReelGallery';
import Clients from './components/Clients';
import Awards from './components/Awards';
import Process from './components/Process';
import About from './components/About';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-sm font-semibold tracking-wide text-white">ATLAS FILM</a>
        <nav className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
          <a href="#reel" className="transition hover:text-white">Reel</a>
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#process" className="transition hover:text-white">Process</a>
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/80 transition hover:bg-white/10">Hire</a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',_ui-sans-serif]">
      <Navbar />
      <main>
        <Hero />
        <div id="reel">
          <FeatureReel />
        </div>
        <ReelGallery />
        <Clients />
        <Awards />
        <div id="process">
          <Process />
        </div>
        <About />
        <Contact />
      </main>
    </div>
  );
}
