export default function EFoilSection() {
  return (
    <section id="efoil" className="w-full bg-white py-20 md:py-28 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:w-2/5">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Dubai Experience
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4 md:mb-6">
              <span className="block">Fly Above</span>
              <span className="block italic">the Water</span>
            </h2>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8 font-['DM_Sans'] font-light">
              Experience the future of water sports with our electric hydrofoil boards. Glide effortlessly above the surface with the iconic Dubai skyline, luxury superyachts, or Palm Jumeirah as your backdrop. The ultimate content creation session.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              {["Dubai Marina", "Palm Jumeirah", "Burj Al Arab View", "Sunset Sessions"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap"
            >
              Book e-Foil Session
              <i className="ri-arrow-right-line ml-2" />
            </a>
          </div>

          {/* Video */}
          <div className="lg:w-3/5">
            <div className="relative rounded-2xl overflow-hidden bg-stone-100 aspect-video">
              <video
                className="w-full h-full object-cover"
                style={{ objectPosition: "center 55%" }}
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1200&q=80"
              >
                <source
                  src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/c38bf430-cf14-461f-a518-a6c8b9f932ca_Enhancer-Ultra-HD-WhatsApp-Video-2026-05-22-at-10.15.49-AM.mp4?v=b7d04569aa53310fc2c0b238502a83ab"
                  type="video/mp4"
                />
              </video>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <i className="ri-play-fill text-white text-2xl md:text-3xl" />
                </div>
              </div>
            </div>
            <p className="text-stone-400 text-xs mt-3 text-center font-['DM_Sans']">
              e-Foil experience in Dubai. Glide above the water.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}