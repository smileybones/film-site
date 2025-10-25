import { ExternalLink, FileText, Camera } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export function TheGolem() {
  const btsPhotos = [
    '/images/pic (5).jpg',
    '/images/pic (1).jpg',
    '/images/pic (19).jpg',
    '/images/pic (17).jpg',
    '/images/pic (15).jpg',
    '/images/pic (14).jpg',
    '/images/pic (4).jpg',
    '/images/pic (9).jpg',
    '/images/pic (3).jpg',
  ];

  const productionStills = [
    '/images/still1.jpg',
    '/images/still2.jpg',
    '/images/still3.jpg',
    '/images/still4.jpg',
    '/images/still5.jpg',
    '/images/still6.jpg',
  ];

  const headshotSlides = ['/images/b5bfc1f9a7-headshot.jpg'];
  const crewSlides = ['/images/crew.jpg'];
  const crewCredits = [
    'Directed by',
    'Aline Chalfin',
    'Spencer Linn',
    'Director of Photography: Aydan Metsch',
    'Ami: Adam Rydl',
    'Rabbi: Bogomil Shopov',
    'Extras: Barry Evans, Emmet Kneafsey, James Hillefeld, Steven Burgess, Graham Hazleton',
    'Producer: Tamara Hajičková',
    'Production Manager: Jiřina Chytilová',
    '1st AD: Zipporah Fornah',
    'Art Director: Maya Giurgi',
    '1st AC: Joe Sato Murphy',
    '2nd AC: Nic Hatton',
    'Camera Supervisor: Riyana Lama',
    'Gaffer: JP Tehamlik',
    'Grip: Emmet Kneafske',
    'Gaffer Assistant: James Hellefeld',
    'Sound: Morgan Andrade',
    'Boom Operator: Talya Dersu',
    'Continuity: Graham Hazleton',
    'Make-up Artist: Evie Rhody',
    '1st PA: Emma Szumowská',
    '2nd PA: Michaella Brollová',
    'Behind-the-Scenes Photography: Steven Burgess, Elmira & Duarte / FAMU INTERNATIONAL',
  ];

  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [stillsOpen, setStillsOpen] = useState(false);
  const [stillsIndex, setStillsIndex] = useState(0);
  const [headshotOpen, setHeadshotOpen] = useState(false);
  const [crewOpen, setCrewOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/golem.gif"
            alt="The Golem"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
        </div>
        <div className="relative z-10 text-center px-6">
          <img
            src="/images/golem.png"
            alt="The Golem Logo"
            className="mx-auto mb-6"
            style={{ width: '700px', height: 'auto' }}
          />
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            In 17th century Prague, a young boy facing persecution seeks help by reviving the ancient legend of the Golem
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://filmfreeway.com/TheGolem60"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-white/90 transition-colors tracking-wider"
            >
              <ExternalLink size={18} />
              Watch Film
            </a>
          </div>
        </div>
      </section>

      {/* Film Synopsis */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-white/40 mb-2 tracking-wider">YEAR</p>
              <p className="text-xl">2025</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">DURATION</p>
              <p className="text-xl">7 minutes 31 seconds</p>
            </div>
            <div>
              <p className="text-white/40 mb-2 tracking-wider">FORMAT</p>
              <p className="text-xl">16mm</p>
            </div>
          </div>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-white/70 leading-relaxed mb-6">
              A young apprentice studies ancient alchemy and kabbalistic texts in secret when he hears a knock at the door and scrambles to hide the texts from his mentor.
            </p>
          </div>
        </div>
      </section>

      {/* Production Stills */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Production Stills</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A selection of still frames and on-set captures highlighting the tone and visual style of <em>The Golem</em>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productionStills.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  setStillsIndex(i);
                  setStillsOpen(true);
                }}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Production still ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
            <Lightbox
              open={stillsOpen}
              close={() => setStillsOpen(false)}
              index={stillsIndex}
              slides={productionStills.map((src) => ({ src }))}
            />
          </div>
        </div>
      </section>

      {/* Meet the Creators & Meet the Crew Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Meet the Creators */}
            <div>
              <h2 className="serif-font text-4xl mb-8">Meet the Creators</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <button type="button" onClick={() => setHeadshotOpen(true)} className="block w-full h-full">
                    <ImageWithFallback
                      src="/images/b5bfc1f9a7-headshot.jpg"
                      alt="Film creators"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-lg text-white/70 mb-2">Aline Frances Chalfin</p>
                  <p className="text-lg text-white/70 mb-2">Spencer Linn</p>
                  <p className="text-lg text-white/70">Aydan Metsch</p>
                </div>
              </div>
            </div>

            {/* Meet the Crew */}
            <div>
              <h2 className="serif-font text-4xl mb-8">Meet the Crew</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="aspect-[3/4] overflow-hidden">
                  <button type="button" onClick={() => setCrewOpen(true)} className="block w-full h-full">
                    <ImageWithFallback
                      src="/images/crew.jpg"
                      alt="Film crew"
                      className="w-full h-full object-cover"
                    />
                  </button>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-white/70 break-words text-[13px] leading-snug max-h-48 overflow-y-auto space-y-1">
                    {crewCredits.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Script Development Section */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <FileText className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Script Development</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-white/70 mb-4">
                The story of <em>The Golem</em> was inspired by Jewish folklore and adapted into a short film exploring themes of fear, faith, and mythic protection.
              </p>
              <p className="text-white/70">
                The screenplay was refined over several drafts, focusing on mood, symbolism, and the balance between spiritual and emotional storytelling.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Final Script</h4>
                <p className="text-white/60">7 pages, written and revised between 2024–2025</p>
              </div>
              <div className="p-6 bg-zinc-900 border border-white/10">
                <h4 className="text-lg mb-3">Locations</h4>
                <p className="text-white/60">The Alchemy Museum, New Libeň Synagogue</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-12">
            <Camera className="text-white/60" size={32} />
            <h2 className="serif-font text-4xl">Behind the Scenes</h2>
          </div>
          <p className="text-lg text-white/60 mb-12 max-w-3xl">
            A visual journey through the production process, capturing the collaboration,
            creativity, and dedication that brought <em>The Golem</em> to life.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btsPhotos.map((photo, i) => (
              <div
                key={i}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Behind the scenes ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
            <Lightbox
              open={open}
              close={() => setOpen(false)}
              index={index}
              slides={btsPhotos.map((src) => ({ src }))}
            />
          </div>
        </div>
      </section>
      <Lightbox
        open={headshotOpen}
        close={() => setHeadshotOpen(false)}
        index={0}
        slides={headshotSlides.map((s) => ({ src: s }))}
      />

      <Lightbox
        open={crewOpen}
        close={() => setCrewOpen(false)}
        index={0}
        slides={crewSlides.map((s) => ({ src: s }))}
      />
    </div>
  );
}