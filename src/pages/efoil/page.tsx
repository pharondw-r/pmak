import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

export default function EfoilPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 60%" }}
        >
          <source
            src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/c38bf430-cf14-461f-a518-a6c8b9f932ca_Enhancer-Ultra-HD-WhatsApp-Video-2026-05-22-at-10.15.49-AM.mp4?v=b7d04569aa53310fc2c0b238502a83ab"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            Prime Marine Adventure Kingdom
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="block">Fly Above</span>
            <span className="block italic">the Water</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg font-['DM_Sans'] font-light leading-relaxed">
            e-Foil is an electric hydrofoil board that lets you glide smoothly above the water. It is not just a watersport. It is the feeling of flying over the ocean.
          </p>
        </div>
      </section>

      {/* What is e-Foil */}
      <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            The Experience
          </p>
          <h2 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
            Not Just a Watersport
            <span className="block italic">It is the Feeling of Flying</span>
          </h2>
          <p className="text-stone-500 text-sm md:text-base leading-relaxed font-['DM_Sans'] font-light max-w-2xl mx-auto">
            An electric hydrofoil board lifts you above the surface, cutting through wind and chop in silence. No waves needed. No paddling. Just pure, effortless flight across the ocean. Whether it is your first time or your fiftieth, the rush never fades.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Session Pricing
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Pick Your Flight Time
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-3xl mx-auto">
            {/* 30 min */}
            <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col">
              <span className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-xs font-medium w-fit mb-4">
                First Timer
              </span>
              <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl mb-1">
                Quick Flight
              </h3>
              <p className="text-stone-400 text-sm font-['DM_Sans'] mb-6">30 Minutes</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Step by step instructor guidance", "Beginner friendly session", "Safety briefing before the ride", "Smooth learning from start to ride", "Action photos and videos", "Refreshments included"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm font-['DM_Sans']">
                    <i className="ri-check-line text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
                  AED 270
                </span>
                <button
                  onClick={() => navigate("/book")}
                  className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                >
                  Book
                </button>
              </div>
            </div>

            {/* 1 hour */}
            <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col ring-2 ring-stone-900">
              <span className="px-3 py-1 bg-stone-900 text-white rounded-full text-xs font-medium w-fit mb-4">
                Most Popular
              </span>
              <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl mb-1">
                Full Flight
              </h3>
              <p className="text-stone-400 text-sm font-['DM_Sans'] mb-6">1 Hour</p>
              <ul className="space-y-2 mb-6 flex-1">
                {["Step by step instructor guidance", "Beginner friendly session", "Safety briefing before the ride", "Smooth learning from start to ride", "Action photos and videos", "Refreshments included"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-stone-600 text-sm font-['DM_Sans']">
                    <i className="ri-check-line text-stone-400" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                <span className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
                  AED 450
                </span>
                <button
                  onClick={() => navigate("/book")}
                  className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                >
                  Book
                </button>
              </div>
            </div>
          </div>

          {/* Timings & Location */}
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5 max-w-3xl mx-auto">
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full mx-auto mb-3">
                <i className="ri-time-line text-stone-600" />
              </div>
              <p className="text-stone-900 text-sm font-semibold mb-1">Daily Timings</p>
              <p className="text-stone-500 text-xs font-['DM_Sans']">6:30 AM to 5:00 PM</p>
              <p className="text-stone-400 text-xs font-['DM_Sans'] mt-1">Flexible slots available</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full mx-auto mb-3">
                <i className="ri-map-pin-line text-stone-600" />
              </div>
              <p className="text-stone-900 text-sm font-semibold mb-1">Location</p>
              <p className="text-stone-500 text-xs font-['DM_Sans']">Jumeirah, Dubai</p>
              <p className="text-stone-400 text-xs font-['DM_Sans'] mt-1">Flagship launch point</p>
            </div>
            <div className="bg-white rounded-xl p-5 text-center">
              <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-full mx-auto mb-3">
                <i className="ri-user-star-line text-stone-600" />
              </div>
              <p className="text-stone-900 text-sm font-semibold mb-1">No Experience Needed</p>
              <p className="text-stone-500 text-xs font-['DM_Sans']">Beginner friendly</p>
              <p className="text-stone-400 text-xs font-['DM_Sans'] mt-1">Instructor always nearby</p>
            </div>
          </div>
        </div>
      </section>

      {/* Private Sessions */}
      <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Exclusive Experiences
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Private Sessions
            </h2>
            <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              No crowds. No rush. Just you, your people, and the ocean. Designed only for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* Family Session */}
            <div className="group relative rounded-2xl overflow-hidden h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80"
                alt="Private family e-Foil session in Dubai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-3 inline-block">
                  Private Family Session
                </span>
                <h3 className="font-['Playfair_Display'] text-white text-2xl md:text-3xl mb-2">
                  Family and Ocean
                </h3>
                <p className="text-white/80 text-sm font-['DM_Sans'] font-light leading-relaxed max-w-md">
                  No crowds. No rush. Just your family and the ocean. A calm, safe, and unforgettable experience designed only for you. Make memories that stay forever.
                </p>
              </div>
            </div>

            {/* Couple Session */}
            <div className="group relative rounded-2xl overflow-hidden h-80 md:h-96">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=800&q=80"
                alt="Private couple e-Foil session in Dubai"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium mb-3 inline-block">
                  Private Couple Session
                </span>
                <h3 className="font-['Playfair_Display'] text-white text-2xl md:text-3xl mb-2">
                  Just You and the Ocean
                </h3>
                <p className="text-white/80 text-sm font-['DM_Sans'] font-light leading-relaxed max-w-md">
                  Just you, your person, and the ocean. A private experience filled with silence, connection, and moments you will never forget. Not just a ride, a memory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full bg-stone-900 py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              How It Works
            </p>
            <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl leading-tight mb-4">
              Three Steps to Flight
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Briefing",
                description: "Land based safety briefing and remote control tutorial. We explain speed zones, body position, and how to foil.",
              },
              {
                step: "02",
                title: "Water Start",
                description: "Start on your belly, then knees, then standing. The board lifts as speed increases. No paddling, no waves.",
              },
              {
                step: "03",
                title: "Fly",
                description: "Once comfortable, accelerate and feel the board rise above the water. Glide silently with the Dubai skyline behind you.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <span className="font-['Playfair_Display'] text-stone-700 text-5xl md:text-6xl block mb-4">
                  {item.step}
                </span>
                <h3 className="font-['Playfair_Display'] text-white text-xl md:text-2xl mb-3">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm leading-relaxed font-['DM_Sans'] font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full bg-[#FAFAF7] py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Ready to Take Off?
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-['DM_Sans'] font-light mb-8">
            WhatsApp us to reserve your e-Foil session. We confirm within minutes and can accommodate groups.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://wa.me/971581448527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2 text-lg" />
              WhatsApp +971 58 144 8527
            </a>
            <button
              onClick={() => navigate("/book")}
              className="inline-flex items-center px-7 py-3.5 bg-transparent text-stone-900 border border-stone-300 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              <i className="ri-calendar-line mr-2 text-lg" />
              Book Online
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}