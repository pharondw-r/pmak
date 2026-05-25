import { useNavigate } from "react-router-dom";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";

interface ShopItem {
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
}

const shopItems: ShopItem[] = [
  {
    name: "Dive Mask",
    description: "Premium tempered glass dive mask with soft silicone skirt for a perfect seal. Low-volume design for easy equalizing. Available in clear and black.",
    price: "AED 250",
    image: "https://readdy.ai/api/search-image?query=Professional%20scuba%20diving%20mask%20with%20black%20frame%20and%20clear%20silicone%20skirt%2C%20displayed%20on%20a%20clean%20marble%20surface%2C%20soft%20natural%20window%20light%20from%20the%20left%2C%20shallow%20depth%20of%20field%2C%20product%20photography%20shot%20on%20Canon%20EOS%20R5%20with%2085mm%20macro%20lens%2C%20real%20photograph%20with%20sharp%20details%2C%20neutral%20warm%20beige%20background%2C%20no%20brand%20names%20or%20logos%20visible%2C%20no%20digital%20art%20effects&width=600&height=400&seq=shop-mask-01&orientation=landscape",
    tag: "Essential",
  },
  {
    name: "Dry-Top Snorkel",
    description: "Dry-top snorkel with silicone mouthpiece and flexible corrugated tube. Splash guard prevents water entry. Perfect for surface snorkeling and training.",
    price: "AED 120",
    image: "https://readdy.ai/api/search-image?query=Premium%20dry-top%20snorkel%20with%20silicone%20mouthpiece%20and%20flexible%20corrugated%20tube%2C%20laid%20on%20light%20oak%20wooden%20surface%20next%20to%20a%20swimming%20pool%20edge%2C%20natural%20daylight%20illumination%2C%20lifestyle%20product%20photography%2C%20shot%20on%20iPhone%2015%20Pro%20camera%2C%20real%20photograph%20not%20AI%20generated%2C%20clean%20minimal%20composition%20with%20blue%20water%20visible%2C%20no%20brand%20names%20or%20logos%20visible&width=600&height=400&seq=shop-snorkel-01&orientation=landscape",
    tag: "Best Value",
  },
  {
    name: "Rash Guard",
    description: "Long-sleeve UPF 50+ rash guard for sun and abrasion protection. Quick-dry fabric, athletic fit. Essential for every surface interval and snorkel session.",
    price: "AED 280",
    image: "https://readdy.ai/api/search-image?query=Black%20and%20teal%20long-sleeve%20rash%20guard%20for%20diving%20laid%20flat%20on%20a%20white%20linen%20textured%20surface%2C%20athletic%20compression%20fit%20visible%2C%20UPF%2050%20protective%20fabric%20texture%20close%20up%2C%20product%20flat%20lay%20photography%2C%20soft%20even%20studio%20lighting%20from%20above%2C%20shot%20on%20Canon%20EOS%20R5%20with%2050mm%20lens%2C%20real%20photograph%2C%20minimal%20clean%20background%2C%20no%20brand%20names%20or%20logos%20visible&width=600&height=400&seq=shop-rashguard-01&orientation=landscape",
    tag: "Sun Safe",
  },
  {
    name: "Wetsuit (3mm)",
    description: "Full 3mm neoprene wetsuit, perfect for Fujairah waters year-round. Super-stretch panels for freedom of movement. Available in all sizes from XS to XXL.",
    price: "AED 950",
    image: "https://readdy.ai/api/search-image?query=Full-length%20black%203mm%20wetsuit%20hanging%20on%20a%20minimalist%20wooden%20hanger%20against%20a%20clean%20concrete%20wall%20in%20a%20retail%20space%2C%20unbranded%20neoprene%20suit%2C%20natural%20daylight%20from%20large%20window%2C%20lifestyle%20product%20photography%2C%20shot%20on%20Canon%20EOS%20R5%20with%2050mm%20lens%20at%20f%2F2.0%2C%20real%20photograph%2C%20warm%20industrial%20interior%20tones%2C%20no%20brand%20names%20or%20logos%20visible&width=600&height=400&seq=shop-wetsuit-01&orientation=landscape",
    tag: "Popular",
  },
  {
    name: "Dive Fins",
    description: "Open-heel scuba fins with spring heel straps and vented blades. Powerful thrust with less effort. Comes with mesh carry bag. Great for boat and shore dives.",
    price: "AED 320",
    image: "https://readdy.ai/api/search-image?query=Pair%20of%20long%20black%20scuba%20diving%20fins%20with%20spring%20heel%20straps%20and%20long%20rigid%20paddle%20blades%2C%20proper%20open%20heel%20design%20with%20vented%20blades%20for%20powerful%20thrust%2C%20placed%20on%20rocky%20shore%20surface%2C%20ocean%20waves%20visible%20in%20soft%20background%20blur%2C%20golden%20afternoon%20sunlight%2C%20lifestyle%20product%20photography%2C%20shot%20on%20Canon%20EOS%20R5%20with%2035mm%20lens%2C%20real%20photograph%20not%20digital%20art%2C%20natural%20warm%20tones%2C%20no%20brand%20names%20or%20logos%20visible&width=600&height=400&seq=shop-fins-01&orientation=landscape",
    tag: "Boat Ready",
  },
  {
    name: "Dive Gear Bag",
    description: "Large mesh dive bag with drain holes and padded shoulder straps. Fits mask, fins, snorkel, and wetsuit. Durable construction for daily beach use.",
    price: "AED 180",
    image: "https://readdy.ai/api/search-image?query=Large%20black%20mesh%20dive%20gear%20bag%20with%20scuba%20equipment%20partially%20visible%20inside%2C%20sitting%20on%20a%20wooden%20dock%20by%20turquoise%20water%2C%20unbranded%20bag%2C%20natural%20daylight%2C%20adventure%20lifestyle%20photography%2C%20shot%20on%20iPhone%2015%20Pro%2C%20real%20photograph%2C%20Fujairah%20coastal%20atmosphere%2C%20warm%20tones%2C%20no%20brand%20names%20or%20logos%20visible&width=600&height=400&seq=shop-bag-01&orientation=landscape",
    tag: "Must Have",
  },
];

export default function GaragePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[420px] md:h-[600px] w-full overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=Premium%20scuba%20diving%20masks%2C%20snorkels%2C%20and%20wetsuits%20arranged%20on%20clean%20white%20shelves%20in%20a%20modern%20watersports%20retail%20store%2C%20various%20unbranded%20gear%20visible%2C%20bright%20natural%20window%20lighting%20from%20the%20right%20side%2C%20shallow%20depth%20of%20field%2C%20shot%20on%20Canon%20EOS%20R5%20with%2035mm%20lens%20at%20f%2F2.8%2C%20real%20photograph%20not%20digital%20art%2C%20warm%20neutral%20color%20tones%2C%20minimal%20interior%20design%2C%20no%20brand%20names%20or%20logos%20visible&width=1400&height=700&seq=garage-shop-hero-01&orientation=landscape"
          alt="Prime Marine dive gear shop with masks, snorkels, and wetsuits"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            Prime Marine Adventure Kingdom
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-4">
            <span className="block">The Ocean</span>
            <span className="block italic">Garage</span>
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg font-['DM_Sans'] font-light leading-relaxed">
            Quality dive gear you can own. Masks, snorkels, rash guards, and wetsuits — picked for Fujairah waters.
          </p>
        </div>
      </section>

      {/* Tagline / Promo Banner */}
      <section className="w-full bg-stone-900 py-4 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <span className="text-amber-400 text-xs md:text-sm font-semibold tracking-wide uppercase">
            <i className="ri-store-2-line mr-1" />
            In-Stock Now
          </span>
          <span className="hidden sm:block text-stone-600">|</span>
          <span className="text-white/80 text-xs md:text-sm font-['DM_Sans']">
            All gear available for pickup at our Fujairah beach location. WhatsApp to reserve.
          </span>
        </div>
      </section>

      {/* Gear For Sale */}
      <section className="w-full py-20 md:py-28 lg:py-32 px-6 md:px-10 lg:px-16 bg-[#FAFAF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-stone-400 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
              Take It Home
            </p>
            <h2 className="font-['Playfair_Display'] text-stone-900 text-4xl md:text-5xl leading-tight mb-4">
              Gear For Sale
            </h2>
            <p className="text-stone-500 text-sm md:text-base max-w-xl mx-auto font-['DM_Sans'] font-light">
              Hand-picked essentials for diving and snorkeling in Fujairah. Quality gear, no compromises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {shopItems.map((item) => (
              <div
                key={item.name}
                className="group bg-white rounded-2xl overflow-hidden border border-stone-100 shadow-sm flex flex-col"
              >
                <div className="relative h-48 md:h-52 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {item.tag && (
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-semibold">
                        {item.tag}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="font-['Playfair_Display'] text-stone-900 text-xl md:text-2xl mb-2">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed font-['DM_Sans'] font-light flex-1 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-end justify-between pt-4 border-t border-stone-100">
                    <p className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl">
                      {item.price}
                    </p>
                    <a
                      href="https://wa.me/971581448527"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-stone-900 text-white rounded-full text-xs font-medium hover:bg-stone-700 transition-colors whitespace-nowrap"
                    >
                      Inquire
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20 md:py-28 px-6 md:px-10 lg:px-16 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Grab Your Gear
          </h2>
          <p className="text-stone-500 text-sm md:text-base font-['DM_Sans'] font-light mb-8">
            All items are ready for pickup at our Fujairah beach location. Drop us a WhatsApp to check sizes and reserve before you head over.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <a
              href="https://wa.me/971581448527"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors whitespace-nowrap"
            >
              <i className="ri-whatsapp-line mr-2 text-lg" />
              Inquire on WhatsApp
            </a>
            <button
              onClick={() => navigate("/book")}
              className="inline-flex items-center px-7 py-3.5 bg-transparent text-stone-900 border border-stone-300 rounded-full text-sm font-medium hover:bg-stone-50 transition-colors whitespace-nowrap"
            >
              <i className="ri-calendar-line mr-2 text-lg" />
              Book a Dive
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}