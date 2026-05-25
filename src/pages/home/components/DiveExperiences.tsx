export default function DiveExperiences() {
  return (
    <section id="dive-experiences" className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-12 md:mb-16">
          <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="block">Shore &amp; Boat</span>
            <span className="block">Adventures</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base max-w-md lg:text-right leading-relaxed font-['DM_Sans'] font-light">
            From the rocky reefs of Fujairah to luxury e-Foil sessions in Dubai. Every dive site handpicked for maximum marine life encounters.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Shore Dives Card */}
          <div className="group bg-stone-100 rounded-2xl overflow-hidden">
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/90c6a1e4-6c1e-4072-b3ea-18c6b09e68e8_WhatsApp-Image-2026-05-22-at-10.18.36-AM.jpeg?v=07eca321ecef5d70fb4d46c290b93696"
                alt="Shore diving at Snoopy Island with diver entering calm turquoise water"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl mb-2">
                Shore Dives
              </h3>
              <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans'] font-light">
                Snoopy Island, Dibba Rock. Max 14m. Beginner friendly.
              </p>
            </div>
          </div>

          {/* Boat Dives Card */}
          <div className="group bg-stone-100 rounded-2xl overflow-hidden">
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/f561dd73-988e-4cae-ae77-20590c96f1d0_WhatsApp-Image-2026-05-10-at-3.55.56-PM.jpeg?v=4a5c00b4009dfb81873456a0a9520de9"
                alt="Diver on boat preparing for boat dive excursion in Fujairah"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl mb-2">
                Boat Dives
              </h3>
              <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans'] font-light">
                Offshore reef exploration, drift diving, marine life hotspots. All certification levels.
              </p>
            </div>
          </div>

          {/* Deep Wrecks Card */}
          <div className="group bg-stone-100 rounded-2xl overflow-hidden">
            <div className="relative h-64 md:h-72 overflow-hidden">
              <img
                src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/fa1411b4-6b5e-4b69-9433-bb6a65ed0a00_WhatsApp-Image-2026-05-10-at-3.55.55-PM.jpeg?v=d3cd91fa65b70c1d2488c84df8378bd0"
                alt="Inchcape 1 shipwreck underwater with marine life and coral growth"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5 md:p-6">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl mb-2">
                Deep Wrecks
              </h3>
              <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans'] font-light">
                Inchcape 1 Shipwreck. 31 meters depth. Advanced divers. Deep sea marine life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}