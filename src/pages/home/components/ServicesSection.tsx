export default function ServicesSection() {
  const services = [
    {
      icon: "ri-water-flash-line",
      label: "Scuba Diving",
      description: "Certified dive experiences for all levels",
    },
    {
      icon: "fa-solid fa-bolt",
      label: "e-Foil Rental",
      description: "Glide above water with electric hydrofoil",
    },
    {
      icon: "ri-ship-line",
      label: "Boat Dives",
      description: "Explore offshore reefs and marine life",
    },
    {
      icon: "ri-moon-clear-line",
      label: "Night Dives",
      description: "Discover the underwater world after dark",
    },
    {
      icon: "ri-anchor-line",
      label: "Deep Wrecks",
      description: "Thrilling shipwreck exploration dives",
    },
  ];

  return (
    <section className="w-full bg-stone-900 py-20 md:py-28 lg:py-32">
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12 md:mb-16">
          <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            PMAK Ocean Hub, Fujairah UAE
          </p>
          <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="block">Prime Marine</span>
            <span className="block">Adventure</span>
            <span className="block">Kingdom</span>
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mb-14 md:mb-20">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 bg-stone-100 text-stone-900 rounded-full text-sm font-semibold hover:bg-white transition-colors whitespace-nowrap"
          >
            Explore Adventures
          </a>
          <a
            href="#locations"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("locations")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-7 py-3 bg-transparent text-white border border-white/30 rounded-full text-sm font-medium hover:bg-white/10 transition-colors whitespace-nowrap"
          >
            View Locations
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-4">
          {services.map((service) => (
            <div
              key={service.label}
              className="group bg-stone-800/60 hover:bg-stone-800 rounded-2xl p-5 md:p-6 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <i className={`${service.icon} text-white/70 text-xl`} />
                </div>
                <span className="text-white text-sm font-medium font-['DM_Sans']">
                  {service.label}
                </span>
              </div>
              <p className="text-stone-400 text-xs leading-relaxed pl-[52px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}