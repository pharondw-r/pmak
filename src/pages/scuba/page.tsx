import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

const certifications = [
  {
    level: "Discover Scuba",
    tag: "Beginner",
    description: "No experience needed. A half-day introduction to breathing underwater with a certified instructor by your side.",
    duration: "Half Day",
    price: "AED 250",
  },
  {
    level: "Open Water",
    tag: "Most Popular",
    description: "PADI Open Water certification. Includes 5 pool dives, 2 shore dives, 2 boat dives, and e-learning. Your first full scuba certification.",
    duration: "3 to 4 Days",
    price: "AED 1,600",
  },
  {
    level: "Advanced Open Water",
    tag: "Intermediate",
    description: "PADI Advanced Open Water. E-learning and 5 dives including 2 adventure deep dives and 1 night dive. Push your skills further.",
    duration: "2 to 3 Days",
    price: "AED 2,000",
  },
  {
    level: "Rescue Diver",
    tag: "Advanced",
    description: "PADI Rescue Diver. E-learning, 1 pool session, plus ocean sessions. Learn to prevent and manage dive emergencies.",
    duration: "3 to 4 Days",
    price: "AED 2,000",
  },
  {
    level: "EFR",
    tag: "First Aid",
    description: "Emergency First Response. E-learning plus classroom session. Primary and secondary care, CPR, AED use, and first aid.",
    duration: "1 Day",
    price: "AED 900",
  },
  {
    level: "Dive Master",
    tag: "Professional",
    description: "PADI Divemaster. Requires 40 logged dives before the course. E-learning, 400 metre swimming test, 15 metre float, 2 pool sessions covering 24 skills, how to conduct DSD, assist the dive instructor with students, search and recovery workshop, shore and deep dives (10 total), site mapping, and rescue assessment.",
    duration: "4 to 6 Weeks",
    price: "AED 4,000",
  },
  {
    level: "ReActivate",
    tag: "Refresh",
    description: "PADI ReActivate. Refresh your skills and knowledge if you have not dived in a while. Get back in the water with confidence.",
    duration: "1 Day",
    price: "AED 1,000",
  },
];

const equipment = [
  { name: "BCD (Buoyancy Compensator)", detail: "Jacket or back-inflate style" },
  { name: "Regulator Set", detail: "First and second stage, octopus" },
  { name: "Wetsuit", detail: "3mm full suit for Fujairah waters" },
  { name: "Dive Computer", detail: "Air-integrated or wrist-mounted" },
  { name: "Mask and Snorkel", detail: "Silicone skirt, tempered glass" },
  { name: "Fins", detail: "Open-heel with booties" },
  { name: "Weight System", detail: "Integrated or belt style" },
  { name: "Torch", detail: "For night dives and wreck exploration" },
];

const specialDives = [
  {
    title: "Adventure Dive — Inchcape 1 Wreck",
    emoji: "⚓",
    description: "Penetrate the haunting corridors of the Inchcape 1 shipwreck resting at 30 meters. This deep wreck expedition takes you through the rusted hull now alive with moray eels, jacks, and scorpionfish. A bucket-list dive for wreck enthusiasts.",
    location: "Inchcape 1 Shipwreck",
    price: "AED 500",
    requirement: "Certified above 18 metres",
  },
  {
    title: "Adventure Night Dive",
    emoji: "🌙",
    description: "The reef transforms after dark. No boat needed — we walk straight in from Snoopy Island shore and watch bioluminescence glow, nocturnal predators hunt, and an entirely different underwater world wake up. Pure magic.",
    location: "Snoopy Island, Fujairah",
    price: "AED 400",
    requirement: "Certified divers",
  },
  {
    title: "Underwater Birthday",
    emoji: "🎂",
    description: "Celebrate where the ocean surrounds you, bubbles rise, and memories become unreal. A unique underwater party experience with props, decorations, and an unforgettable cake cutting moment beneath the surface.",
    bestFor: "Birthday celebrations, group parties",
  },
  {
    title: "Private Couple Dive",
    emoji: "❤️",
    description: "Just you, your person, and the ocean. A private underwater experience filled with silence, connection, and moments you will never forget. Not just a dive, a memory.",
    bestFor: "Anniversaries, date experiences",
  },
  {
    title: "Private Family Dive",
    emoji: "👨‍👩‍👧‍👦",
    description: "No crowds. No rush. Just your family and the ocean. A calm, safe, and unforgettable experience designed only for you. Make memories that stay forever.",
    bestFor: "Family bonding, kids first dive",
  },
  {
    title: "Deep Wreck Expedition",
    emoji: "🚢",
    description: "Penetration dives into the Inchcape 1 shipwreck at 31 meters. For experienced divers only. Explore the hauntingly beautiful corridors of a sunken vessel now home to moray eels, jacks, and scorpionfish.",
    bestFor: "Advanced divers, wreck specialists",
  },
];

export default function ScubaPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1400&q=80"
          alt="Scuba diver exploring vibrant coral reef underwater"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            Prime Marine Adventure Kingdom
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="block">Dive Deep</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg font-['DM_Sans'] font-light leading-relaxed">
            Fujairah's most trusted PADI dive center. From your first breath underwater to advanced wreck exploration.
          </p>
        </div>
      </section>

      {/* Fun Dives Section */}
      <section className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              No Certification Required
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Guided Fun Dives
            </h2>
            <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              Experience the underwater world with a certified instructor by your side. Choose your style — relaxed shore entry or adventurous boat dive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Shore Dive Card */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
              <div className="absolute top-4 right-4 z-10">
                <span className="px-4 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs font-semibold tracking-wide">
                  Highly Recommended
                </span>
              </div>
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/7ee16377f73c76339410583be50ac696/0efae0db2022982671924d80dd2154ec.jpeg"
                  alt="Shore dive from sandy beach into shallow calm water"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <i className="ri-sun-line text-emerald-700 text-sm" />
                  </div>
                  <span className="text-white text-sm font-medium font-['DM_Sans'] drop-shadow-md">Shore Dive</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <i className="ri-ship-line text-emerald-600 text-sm" />
                  </span>
                  <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
                    Discovery Scuba Dive
                  </h3>
                </div>

                <div className="bg-emerald-50/60 rounded-xl p-4 mb-5 border border-emerald-100">
                  <p className="text-emerald-800 text-sm leading-relaxed font-['DM_Sans']">
                    <span className="font-semibold">🏖️ Perfect for First-Timers.</span> We gear up right on the beach and walk calmly into shallow water where you can easily stand up. Practice breathing, get completely comfortable with the equipment at your own pace, then smoothly glide deeper. Super relaxed and stress-free.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                    <i className="ri-time-line mr-1" />
                    Half Day
                  </span>
                  <span className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                    <i className="ri-user-smile-line mr-1" />
                    No Experience Needed
                  </span>
                </div>

                <div className="flex items-end justify-between pt-5 border-t border-stone-100">
                  <div>
                    <p className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl">AED 250</p>
                    <p className="text-stone-400 text-xs font-['DM_Sans'] mt-1">+ 5% VAT when paying by card</p>
                  </div>
                  <button
                    onClick={() => navigate("/book")}
                    className="px-6 py-2.5 bg-emerald-700 text-white rounded-full text-sm font-medium hover:bg-emerald-800 transition-colors whitespace-nowrap"
                  >
                    Book Shore Dive
                  </button>
                </div>
              </div>
            </div>

            {/* Boat Dive Card */}
            <div className="group relative bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm">
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src="https://static.readdy.ai/image/7ee16377f73c76339410583be50ac696/0349177777400c44854a19822f93cb7d.jpeg"
                  alt="Boat dive into deep blue ocean water"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-4 left-5 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center">
                    <i className="ri-ship-line text-amber-700 text-sm" />
                  </div>
                  <span className="text-white text-sm font-medium font-['DM_Sans'] drop-shadow-md">Boat Dive</span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center">
                    <i className="ri-anchor-line text-amber-600 text-sm" />
                  </span>
                  <h3 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
                    Boat Scuba Dive
                  </h3>
                </div>

                <div className="bg-amber-50/60 rounded-xl p-4 mb-5 border border-amber-100">
                  <p className="text-amber-800 text-sm leading-relaxed font-['DM_Sans']">
                    <span className="font-semibold">🚤 For Experienced & Certified Divers.</span> We take a boat out and dive straight into the deep ocean. Because there is no shallow area to stand up and practice first, it is best suited for experienced or certified divers. And the best part — the marine life and beautiful coral reefs are exactly the same for both, since it is the same ocean.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                    <i className="ri-time-line mr-1" />
                    Half Day
                  </span>
                  <span className="px-3 py-1.5 bg-stone-100 text-stone-600 rounded-full text-xs font-medium">
                    <i className="ri-shield-check-line mr-1" />
                    Certified / Experienced
                  </span>
                </div>

                <div className="flex items-end justify-between pt-5 border-t border-stone-100">
                  <div>
                    <p className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl">AED 350</p>
                    <p className="text-stone-400 text-xs font-['DM_Sans'] mt-1">+ 5% VAT when paying by card</p>
                  </div>
                  <button
                    onClick={() => navigate("/book")}
                    className="px-6 py-2.5 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                  >
                    Book Boat Dive
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              PADI Certified Courses
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Find Your Level
            </h2>
            <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              Every course includes theory, confined water practice, and open water dives with our experienced instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.level}
                className="bg-[#FAFAF7] rounded-2xl p-6 md:p-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl">
                    {cert.level}
                  </h3>
                  <span className="px-3 py-1 bg-stone-200 text-stone-700 rounded-full text-xs font-medium">
                    {cert.tag}
                  </span>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-5 font-['DM_Sans'] font-light flex-1">
                  {cert.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="px-3 py-1.5 bg-white text-stone-600 rounded-full text-xs font-medium">
                    {cert.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                  <span className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl">
                    {cert.price}
                  </span>
                  <button
                    onClick={() => navigate("/book")}
                    className="px-5 py-2 bg-stone-900 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Dives */}
      <section className="w-full bg-stone-900 py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Beyond the Ordinary
            </p>
            <h2 className="font-['Playfair_Display'] text-white text-4xl md:text-5xl leading-tight mb-4">
              Special Dives
            </h2>
            <p className="text-stone-400 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              Milestone moments deserve milestone settings. Birthdays, proposals, anniversaries, and once in a lifetime adventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {specialDives.map((dive) => (
              <div key={dive.title} className="group bg-stone-800/60 rounded-2xl p-5 md:p-6 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{dive.emoji}</span>
                  <h3 className="font-['Playfair_Display'] text-white text-xl md:text-2xl">
                    {dive.title}
                  </h3>
                </div>
                
                {dive.price && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-xs font-semibold">
                      {dive.price}
                    </span>
                  </div>
                )}
                
                <p className="text-stone-400 text-sm leading-relaxed font-['DM_Sans'] font-light flex-1 mb-4">
                  {dive.description}
                </p>
                
                <div className="flex flex-col gap-2 mb-4">
                  {dive.location && (
                    <div className="flex items-center gap-2 text-stone-500 text-xs font-['DM_Sans']">
                      <i className="ri-map-pin-line" />
                      {dive.location}
                    </div>
                  )}
                  {dive.requirement && (
                    <div className="flex items-center gap-2 text-amber-400/80 text-xs font-['DM_Sans']">
                      <i className="ri-shield-check-line" />
                      {dive.requirement}
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-stone-700/50">
                  <span className="text-stone-500 text-xs font-['DM_Sans']">
                    {dive.bestFor ? `Best for: ${dive.bestFor}` : "Adventure Dive"}
                  </span>
                  <button
                    onClick={() => navigate("/book")}
                    className="px-4 py-1.5 bg-white text-stone-900 rounded-full text-xs font-medium hover:bg-stone-100 transition-colors whitespace-nowrap"
                  >
                    {dive.price ? "Book Now" : "Inquire"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
            <div className="lg:w-2/5">
              <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
                Fully Equipped
              </p>
              <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
                <span className="block">Premium</span>
                <span className="block italic">Gear Included</span>
              </h2>
              <p className="text-stone-500 text-sm md:text-base leading-relaxed font-['DM_Sans'] font-light">
                All our courses and guided dives include top tier equipment. We maintain and replace our gear regularly so you dive safe and comfortable.
              </p>
            </div>
            <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {equipment.map((item) => (
                <div
                  key={item.name}
                  className="bg-[#FAFAF7] rounded-xl p-4 md:p-5"
                >
                  <p className="text-stone-900 text-sm font-medium mb-1">{item.name}</p>
                  <p className="text-stone-500 text-xs font-['DM_Sans']">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dive Sites Recap */}
      <section className="w-full bg-[#FAFAF7] py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Fujairah, UAE
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Where We Dive
            </h2>
            <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              Three distinct sites from shallow reefs to a 31 meter shipwreck. Something for every certification level.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              { name: "Snoopy Island", depth: "10m", level: "Beginner", image: "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/c3de398b-bd8f-484c-b0ff-4e47d49c3896_DJI_0288.png?v=7c2a158d074bb25f06dc0222b78500b9" },
              { name: "Dibba Rock", depth: "14m", level: "Beginner", image: "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/b7f894db-63a3-49fc-80c7-f2990d9d3534_DibbaRockFront.png?v=d46980266ab211b0e7136ffc2c58935e" },
              { name: "Inchcape 1", depth: "31m", level: "Advanced", image: "https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/fa1411b4-6b5e-4b69-9433-bb6a65ed0a00_WhatsApp-Image-2026-05-10-at-3.55.55-PM.jpeg?v=d3cd91fa65b70c1d2488c84df8378bd0" },
            ].map((site) => (
              <div key={site.name} className="group relative rounded-2xl overflow-hidden h-64 md:h-72">
                <img
                  src={site.image}
                  alt={`${site.name} dive site`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <h3 className="font-['Playfair_Display'] text-white text-xl md:text-2xl mb-1">
                    {site.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-white/80 text-xs">{site.depth}</span>
                    <span className="text-white/40 text-xs">|</span>
                    <span className="text-white/80 text-xs">{site.level}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Start Your Underwater Journey
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-['DM_Sans'] font-light mb-8">
            WhatsApp us to book a course, a fun dive, or just ask questions. We reply within minutes.
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