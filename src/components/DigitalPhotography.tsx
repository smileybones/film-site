import { ImageWithFallback } from './figma/ImageWithFallback';

export function DigitalPhotography() {
  const photos = [
    {
      id: 1,
      src: '/images/treesphoto.jpg',
      category: 'Portrait',
      title: 'Urban Portrait',
    },
    {
      id: 2,
      src: '/images/grass.png',
      category: 'Street',
      title: 'City Life',
    },
    {
      id: 3,
      src: '/images/mountain.jpg',
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

  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
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

      {/* Photo Grid */}
      <section className="py-16 px-6 bg-black">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/5] overflow-hidden bg-zinc-900 cursor-pointer"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
