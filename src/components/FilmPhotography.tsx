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
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="serif-font text-5xl md:text-7xl mb-6">35mm Film Photography</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Only having 36 exposures per roll allows for a more tactile and intentional approach to image making.
          </p>
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
          <DialogDescription className="sr-only">
            Full-size view of selected photograph
          </DialogDescription>
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
    </div>
  );
}