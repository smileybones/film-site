import { Play } from 'lucide-react';

export function CinematographyReel() {
  const reels = [
    {
      id: 1,
      title: 'Commercial Reel 2024',
      description: 'A collection of commercial work showcasing dynamic visual storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0b2dyYXBoeSUyMGZpbG0lMjByZWVsfGVufDF8fHx8MTc2MDMwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Documentary Features',
      description: 'Intimate documentary cinematography capturing authentic human experiences',
      thumbnail: 'https://images.unsplash.com/photo-1695014192247-ca5364709dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwcHJvZHVjdGlvbiUyMHNldHxlbnwxfHx8fDE3NjAyNTgxOTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Narrative Film Work',
      description: 'Cinematic visual language for narrative storytelling',
      thumbnail: 'https://images.unsplash.com/photo-1512939755946-501bd2c2540d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZGlyZWN0b3IlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAzMDU0MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1758851088217-df00ca346e24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0b2dyYXBoeSUyMGZpbG0lMjByZWVsfGVufDF8fHx8MTc2MDMwNTQwNnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cinematography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 tracking-widest mb-4">SHOWREEL</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Cinematography Reel</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A curated selection of cinematography work spanning commercials, documentaries, and narrative films
          </p>
        </div>
      </section>

      {/* Main Reel Sections */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl space-y-24">
          {reels.map((reel) => (
            <div key={reel.id} className="group">
              <div className="relative aspect-video overflow-hidden bg-zinc-900 cursor-pointer">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="text-white ml-1" size={32} fill="white" />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="serif-font text-3xl mb-3">{reel.title}</h3>
                <p className="text-white/60 text-lg">{reel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <h2 className="serif-font text-4xl mb-12 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl mb-4 text-white/80">Camera Systems</h3>
              <ul className="space-y-2 text-white/60">
                <li>• ARRI Alexa Mini / LF</li>
                <li>• RED Komodo / V-Raptor</li>
                <li>• Sony FX9 / FX6</li>
                <li>• Blackmagic Cinema Camera</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl mb-4 text-white/80">Specializations</h3>
              <ul className="space-y-2 text-white/60">
                <li>• Documentary Cinematography</li>
                <li>• Commercial Production</li>
                <li>• Narrative Features</li>
                <li>• Color Grading & Post</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
