import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle, DialogDescription } from './ui/dialog';
import { X } from 'lucide-react';

export function FilmPhotography() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const photos = [
    '/images/andrewsmom.jpg',
    '/images/Badass.jpg',
    '/images/bed.jpg',
    '/images/biking.jpg',
    '/images/boat.jpg',
    '/images/Bridge.jpg',
    '/images/Cow.jpg',
    '/images/Hilary.jpg',
    '/images/houses.jpg',
    '/images/kids.jpg',
    '/images/reflection.jpg',
    '/images/shower.jpg',
    '/images/SmallRV.jpg',
    '/images/trees.jpg',
    '/images/waves.jpg',
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1661923782712-44dfa0a7024c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwZmlsbSUyMGNhbWVyYXxlbnwxfHx8fDE3NjAyOTA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Film Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 tracking-widest mb-4">ANALOG PORTFOLIO</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Film Photography</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Embracing the beauty and imperfection of analog photography through various film stocks and formats
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="serif-font text-4xl mb-6">The Analog Process</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Film photography demands intention, patience, and presence. Each frame is considered, 
              each moment precious. The grain, the subtle color shifts, the happy accidents—these are not 
              imperfections but the very essence of the medium. In an age of infinite digital captures, 
              shooting film is a deliberate return to mindfulness and craft.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Grid */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div 
                key={index}
                className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImage(photo)}
              >
                <ImageWithFallback
                  src={photo}
                  alt={`Film Photography ${index + 1}`}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-white/10">
          <DialogTitle className="sr-only">Film Photography Viewer</DialogTitle>
          <DialogDescription className="sr-only">Full-size view of selected photograph</DialogDescription>
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          {selectedImage && (
            <div className="flex items-center justify-center w-full h-full p-8">
              <img 
                src={selectedImage}
                alt="Selected photograph"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Camera Collection */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Camera Collection</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Leica M6', format: '35mm' },
              { name: 'Canon AE-1', format: '35mm' },
              { name: 'Hasselblad 500C/M', format: 'Medium Format' },
              { name: 'Pentax 67', format: 'Medium Format' },
              { name: 'Contax T2', format: '35mm Compact' },
              { name: 'Mamiya RZ67', format: 'Medium Format' },
              { name: 'Nikon FM2', format: '35mm' },
              { name: 'Yashica Mat-124G', format: 'TLR' },
            ].map((camera, index) => (
              <div key={index} className="p-6 border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-xl mb-2">{camera.name}</h3>
                <p className="text-white/60">{camera.format}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Favorite Film Stocks */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Preferred Film Stocks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-zinc-900/50">
              <h3 className="text-2xl mb-3">Color Negative</h3>
              <ul className="space-y-2 text-white/60">
                <li>Kodak Portra 400</li>
                <li>Kodak Portra 800</li>
                <li>Fuji Pro 400H</li>
                <li>Cinestill 800T</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-zinc-900/50">
              <h3 className="text-2xl mb-3">Black & White</h3>
              <ul className="space-y-2 text-white/60">
                <li>Ilford HP5 Plus</li>
                <li>Kodak Tri-X 400</li>
                <li>Ilford Delta 3200</li>
                <li>Kodak T-Max 100</li>
              </ul>
            </div>
            <div className="text-center p-8 bg-zinc-900/50">
              <h3 className="text-2xl mb-3">Color Slide</h3>
              <ul className="space-y-2 text-white/60">
                <li>Fuji Velvia 50</li>
                <li>Kodak Ektachrome E100</li>
                <li>Fuji Provia 100F</li>
                <li>Kodak Ektar 100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="elegant-font text-3xl md:text-4xl text-white/80 leading-relaxed mb-8">
              "Film slows you down. It makes you think. Every shot matters, every frame is a commitment. 
              That's not a limitation—it's a liberation."
            </p>
            <footer className="text-white/60">— Aline Frances</footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
}