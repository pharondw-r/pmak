import { useEffect } from "react";

export default function HeroSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".hero-animate");
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add("animate-fade-in-up");
        el.classList.remove("opacity-0");
      }, i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center bg-stone-900">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/059eefd0-0d06-45e1-a2ef-a89a7e4f25b2_nattu-adnan-atSUvc1hMwk-unsplash.jpg?v=8d5d7d754e1957ddbdfce1be20fafbf2"
          alt="Tropical beach with turquoise water and white sand at PMAK Ocean Hub Fujairah"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pt-24 pb-16">
        <div className="max-w-4xl">
          <p className="hero-animate opacity-0 text-white/70 text-xs md:text-sm tracking-[0.3em] uppercase mb-4 md:mb-6 font-['DM_Sans']">
            prime marine adventure kingdom
          </p>

          <h1 className="hero-animate opacity-0 font-['Playfair_Display'] text-white text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 md:mb-8">
            <span className="block">Dive Deep</span>
            <span className="block italic">or Fly Above</span>
          </h1>

          <p className="hero-animate opacity-0 text-white/80 text-base md:text-lg max-w-lg mb-8 md:mb-10 leading-relaxed font-['DM_Sans'] font-light">
            Fujairah's premier ocean adventure destination. World-class scuba diving at Snoopy Island, thrilling e-Foil sessions in Dubai, and unforgettable marine experiences across the UAE.
          </p>

          <div className="hero-animate opacity-0 flex flex-col sm:flex-row gap-3 md:gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-white text-stone-900 rounded-full text-sm font-semibold hover:bg-stone-100 transition-colors whitespace-nowrap"
            >
              Book a Dive
            </a>
            <a
              href="#efoil"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("efoil")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-3.5 bg-transparent text-white border border-white/50 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
            >
              <i className="ri-play-circle-line mr-2 text-base" />
              Experience e-Foil
            </a>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-fade-in">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>
    </section>
  );
}