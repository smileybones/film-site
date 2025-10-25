import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DigitalPhotography() {
  const categories = ['All', 'Portrait', 'Street', 'Architecture', 'Landscape'];
  const [activeCategory, setActiveCategory] = useState('All');

  const photos = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDI0MTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portrait',
      title: 'Urban Portrait',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1675335808318-34d89d9d8e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFufGVufDF8fHx8MTc2MDI4ODYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Street',
      title: 'City Life',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1684920332858-a042cebf73c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmFsJTIwcGhvdG9ncmFwaHklMjBidWlsZGluZ3xlbnwxfHx8fDE3NjAyNjQ0MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Architecture',
      title: 'Modern Forms',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1729011373667-cc344d939de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBuYXR1cmUlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjAzMDM4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Landscape',
      title: 'Natural Beauty',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzYwMjY0MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portrait',
      title: 'Studio Session',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1663043188237-01565028db93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDMwNTU1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Street',
      title: 'Candid Moments',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1657920863237-8805ecf70ef3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBpbnRlcmlvciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjAyODc2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Architecture',
      title: 'Interior Spaces',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1720052473937-858c68dd0783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqZXdpc2glMjBzeW5hZ29ndWUlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjAzMDU0MDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Architecture',
      title: 'Sacred Geometry',
    },
    {
      id: 9,
      src: 'https://images.unsplash.com/photo-1641348653749-5e3429a72429?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBnYWxsZXJ5JTIwbGlnaHRpbmd8ZW58MXx8fHwxNzYwMzA1NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Portrait',
      title: 'Light Study',
    },
  ];

  const filteredPhotos = activeCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDI0MTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Digital Photography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/60 tracking-widest mb-4">PORTFOLIO</p>
          <h1 className="serif-font text-5xl md:text-7xl mb-6">Digital Photography</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Contemporary digital work capturing moments across portraiture, street, architecture, and landscape
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <section className="py-12 px-6 bg-zinc-950 sticky top-20 z-40 border-b border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 tracking-wider transition-colors ${
                  activeCategory === category
                    ? 'bg-white text-black'
                    : 'border border-white/30 text-white hover:bg-white hover:text-black'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-white/60 mb-1">{photo.category}</p>
                    <h3 className="text-xl">{photo.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="serif-font text-4xl mb-16 text-center">Photography Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl mb-4">Commercial</h3>
              <p className="text-white/60 mb-4">
                High-quality commercial photography for brands, products, and marketing campaigns.
              </p>
              <ul className="space-y-2 text-white/50">
                <li>• Product Photography</li>
                <li>• Brand Campaigns</li>
                <li>• Editorial Content</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl mb-4">Portraiture</h3>
              <p className="text-white/60 mb-4">
                Professional portraits for artists, executives, and personal branding.
              </p>
              <ul className="space-y-2 text-white/50">
                <li>• Studio Sessions</li>
                <li>• Environmental Portraits</li>
                <li>• Artist Headshots</li>
              </ul>
            </div>
            <div className="p-8 border border-white/10 hover:border-white/30 transition-colors">
              <h3 className="text-2xl mb-4">Documentary</h3>
              <p className="text-white/60 mb-4">
                Documentary photography for events, institutions, and storytelling projects.
              </p>
              <ul className="space-y-2 text-white/50">
                <li>• Event Coverage</li>
                <li>• Cultural Documentation</li>
                <li>• Photojournalism</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
