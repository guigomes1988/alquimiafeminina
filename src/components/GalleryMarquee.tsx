const images = [
  "/palestrantes/Dra Anamarya Rocha.jpeg",
  "/palestrantes/Dra. Anna Rita Peltier.jpeg",
  "/palestrantes/Isabela de Pádua.jpeg",
  "/palestrantes/Joseanna Fagundes.jpg",
  "/palestrantes/Lais Stefhanini.jpeg",
  "/palestrantes/Mônica Salgado.jpeg",
];

export default function GalleryMarquee() {
  // Duplicate array to create a seamless loop
  const marqueeImages = [...images, ...images, ...images, ...images];

  return (
    <section className="bg-alquimia-light pb-24 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-alquimia-light to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-alquimia-light to-transparent z-10"></div>
      
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {marqueeImages.map((src, idx) => (
          <div key={idx} className="relative w-48 sm:w-64 md:w-72 flex-shrink-0 mx-2 sm:mx-3 rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={src} 
              alt={`Palestrante ${idx}`} 
              className="w-full h-auto aspect-[9/16] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-alquimia-light pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
