export default function LocationsSection() {
  const locations = [
    {
      icon: "ri-landscape-line",
      title: "Snoopy Island",
      subtitle: "Day & Night Dive",
      depth: "Up to 10 meters",
      wetsuit: "Maximum 3mm",
      cert: "Absolute Beginner",
      description:
        "The ultimate rocky reef adventure, teeming with marine life right off the shore. Incredible for both bright morning marine life photography and thrilling night dives.",
      marineLife: "Green sea turtles, sharks (winter), clownfish, macro life, school fishes",
      image:
        "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/c3de398b-bd8f-484c-b0ff-4e47d49c3896_DJI_0288.png?v=7c2a158d074bb25f06dc0222b78500b9",
    },
    {
      icon: "fa-solid fa-mountain",
      title: "Dibba Rock",
      subtitle: "Marine Protected Area",
      depth: "Up to 14 meters",
      wetsuit: "Maximum 3mm",
      cert: "Beginner friendly",
      description:
        "A stunning marine protected area forming a small rocky island. Features a sloping reef covered in soft corals and massive schools of fish.",
      marineLife: "Stingrays resting on sandy bottom, jawfish, hunting trevallies, sharks in winter cruising drop-offs",
      image:
        "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/b7f894db-63a3-49fc-80c7-f2990d9d3534_DibbaRockFront.png?v=d46980266ab211b0e7136ffc2c58935e",
    },
    {
      icon: "ri-ship-line",
      title: "Inchcape 1",
      subtitle: "Shipwreck Dive",
      depth: "31 meters",
      wetsuit: "3mm (thermoclines below 20m!)",
      cert: "Advanced & Deep Specialists",
      description:
        "A thrilling deep-water wreck dive. Deliberately sunk vessel sits completely upright on the seabed, creating a hauntingly beautiful artificial habitat for deep-sea marine life.",
      marineLife: "Massive resident honeycomb moray eels, huge schools of jacks, scorpionfish on hull, occasional pelagic species",
      image:
        "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/fa1411b4-6b5e-4b69-9433-bb6a65ed0a00_WhatsApp-Image-2026-05-10-at-3.55.55-PM.jpeg?v=d3cd91fa65b70c1d2488c84df8378bd0",
    },
  ];

  return (
    <section id="locations" className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            Fujairah, UAE
          </p>
          <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
            Our Dive Sites
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-['DM_Sans'] font-light leading-relaxed">
            Each location offers a unique underwater experience. From shallow beginner-friendly reefs to deep wreck exploration.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {locations.map((loc, index) => (
            <div
              key={loc.title}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-6 md:gap-8 bg-white rounded-2xl overflow-hidden`}
            >
              <div className="lg:w-2/5 h-56 md:h-72 lg:h-auto">
                <img
                  src={loc.image}
                  alt={`${loc.title} underwater dive site in Fujairah UAE`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="lg:w-3/5 p-6 md:p-8 lg:py-8 lg:px-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 flex items-center justify-center bg-stone-100 rounded-lg">
                    <i className={`${loc.icon} text-stone-600 text-sm`} />
                  </div>
                  <span className="text-stone-400 text-xs tracking-wider uppercase font-['DM_Sans']">
                    {loc.subtitle}
                  </span>
                </div>

                <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl mb-3">
                  {loc.title}
                </h3>

                <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-4 md:mb-5 font-['DM_Sans'] font-light">
                  {loc.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 md:mb-5">
                  <div className="bg-stone-50 rounded-xl p-3">
                    <p className="text-stone-400 text-xs mb-1">Max Depth</p>
                    <p className="text-stone-800 text-sm font-semibold">{loc.depth}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-3">
                    <p className="text-stone-400 text-xs mb-1">Wetsuit</p>
                    <p className="text-stone-800 text-sm font-semibold">{loc.wetsuit}</p>
                  </div>
                  <div className="bg-stone-50 rounded-xl p-3">
                    <p className="text-stone-400 text-xs mb-1">Level</p>
                    <p className="text-stone-800 text-sm font-semibold">{loc.cert}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <i className="ri-eye-line text-stone-400 text-sm mt-0.5" />
                  <p className="text-stone-500 text-xs md:text-sm font-['DM_Sans']">
                    <span className="font-medium text-stone-700">You will see:</span>{" "}
                    {loc.marineLife}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dubai e-Foil Location */}
        <div className="mt-8 md:mt-10 bg-white rounded-2xl overflow-hidden flex flex-col lg:flex-row gap-6 md:gap-8">
          <div className="lg:w-2/5 h-56 md:h-72 lg:h-auto">
            <img
              src="https://static.readdy.ai/image/7ee16377f73c76339410583be50ac696/f31ad800d53052e4f9eae85810d67f06.jpeg"
              alt="e-Foil experience with Dubai skyline and marina in background"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="lg:w-3/5 p-6 md:p-8 lg:py-8 lg:px-10 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-stone-100 rounded-lg">
                <i className="ri-map-pin-line text-stone-600 text-sm" />
              </div>
              <span className="text-stone-400 text-xs tracking-wider uppercase font-['DM_Sans']">
                Location 2
              </span>
            </div>
            <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl mb-3">
              Dubai
            </h3>
            <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-4 font-['DM_Sans'] font-light">
              Pure luxury and modern energy. Glide effortlessly with the iconic Dubai skyline, luxury superyachts, or the Palm Jumeirah in your immediate background. The ultimate content creation session.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Dubai Marina", "Palm Jumeirah", "Burj Al Arab", "JBR Beach"].map((spot) => (
                <span
                  key={spot}
                  className="px-3 py-1.5 bg-stone-50 text-stone-600 rounded-full text-xs font-medium"
                >
                  {spot}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}