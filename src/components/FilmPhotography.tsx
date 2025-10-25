import { ImageWithFallback } from './figma/ImageWithFallback';

export function FilmPhotography() {
  const filmSeries = [
    {
      id: 1,
      title: 'Grain & Memory',
      camera: 'Leica M6',
      film: 'Kodak Portra 400',
      year: '2023-2024',
      description: 'An ongoing series exploring the nostalgia and authenticity of analog photography',
      images: [
        'https://images.unsplash.com/photo-1597201846501-5e5ea20ad9e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFsb2clMjBmaWxtJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYwMzA1NDA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1627932708927-1d71e55fb56e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzNW1tJTIwZmlsbSUyMGdyYWlufGVufDF8fHx8MTc2MDMwNTYzN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      id: 2,
      title: 'Streets in Silver',
      camera: 'Canon AE-1',
      film: 'Ilford HP5 Plus',
      year: '2023',
      description: 'Black and white street photography capturing the rhythm of urban life',
      images: [
        'https://images.unsplash.com/photo-1675335808318-34d89d9d8e57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeSUyMHVyYmFufGVufDF8fHx8MTc2MDI4ODYyM3ww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1663043188237-01565028db93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDMwNTU1OXww&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
    {
      id: 3,
      title: 'Timeless Portraits',
      camera: 'Hasselblad 500C/M',
      film: 'Kodak Tri-X 400',
      year: '2022-2024',
      description: 'Medium format portraits exploring character and contemplation',
      images: [
        'https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MDI0MTU3Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        'https://images.unsplash.com/photo-1758613654186-6ce234bf94ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjBzdHVkaW98ZW58MXx8fHwxNzYwMjY0MzU4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      ],
    },
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

      {/* Film Series */}
      <section className="py-24 px-6 bg-black">
        <div className="container mx-auto max-w-7xl space-y-32">
          {filmSeries.map((series, index) => (
            <div key={series.id}>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="serif-font text-4xl mb-6">{series.title}</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 min-w-[80px]">Camera:</span>
                      <span className="text-white/80">{series.camera}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 min-w-[80px]">Film:</span>
                      <span className="text-white/80">{series.film}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-white/40 min-w-[80px]">Years:</span>
                      <span className="text-white/80">{series.year}</span>
                    </div>
                  </div>
                  <p className="text-lg text-white/60 leading-relaxed">
                    {series.description}
                  </p>
                </div>
                <div className="relative aspect-[4/5]">
                  <ImageWithFallback
                    src={series.images[0]}
                    alt={`${series.title} - Image 1`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {series.images.slice(1).map((image, imgIndex) => (
                  <div key={imgIndex} className="relative aspect-[3/4] overflow-hidden group">
                    <ImageWithFallback
                      src={image}
                      alt={`${series.title} - Image ${imgIndex + 2}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

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
