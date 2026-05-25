import { useState } from "react";
import Navbar from "@/components/feature/Navbar";
import Footer from "@/components/feature/Footer";
import { supabase } from "@/lib/supabase";

const faqs = [
  {
    q: "Do I need to know how to swim for scuba diving?",
    a: "Yes, basic swimming ability is required for certification courses. For Discover Scuba (try dives), you just need to be comfortable in water.",
  },
  {
    q: "What is the minimum age for scuba diving?",
    a: "Kids can start with PADI Bubblemaker at age 8. Junior Open Water certification starts at age 10. e-Foil riders must be 14 plus.",
  },
  {
    q: "Is equipment included in the dive prices?",
    a: "Yes. All tanks, weights, BCD, regulator, wetsuit, mask, fins, and dive computer are included. Torch for night dives too.",
  },
  {
    q: "How far in advance should I book?",
    a: "We recommend 2 to 3 days for fun dives and at least 1 week for certification courses. But last minute slots do open up. WhatsApp us!",
  },
  {
    q: "Can I dive if I have a medical condition?",
    a: "Some conditions require a doctor's clearance. We send a medical questionnaire when you book. Safety is our priority.",
  },
  {
    q: "Do you offer hotel pickup?",
    a: "We can arrange transport from Fujairah hotels. For Dubai guests, we recommend meeting at the dive center or marina directly.",
  },
  {
    q: "What happens if weather is bad?",
    a: "We monitor conditions closely. If a dive is cancelled for safety, we reschedule or refund. No questions asked.",
  },
  {
    q: "Is e-Foil safe for beginners?",
    a: "Absolutely. Our boards have adjustable speed limits and stable foils. Most first timers are flying within 15 minutes.",
  },
];

export default function BookPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const activity = String(formData.get("activity") || "").trim();
    const date = String(formData.get("date") || "").trim();
    const people = String(formData.get("people") || "").trim();
    const location = String(formData.get("location") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const { error } = await supabase.from("bookings").insert({
      name,
      phone,
      email,
      activity,
      date,
      people,
      location,
      message,
    });

    if (error) {
      setFormStatus("error");
    } else {
      setFormStatus("success");
      form.reset();
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[320px] md:h-[420px] w-full overflow-hidden">
        <img
          src="https://readdy.ai/api/search-image?query=A%20beautiful%20wide-angle%20photograph%20of%20a%20dive%20boat%20floating%20on%20crystal-clear%20turquoise%20ocean%20water%20during%20golden%20sunrise%2C%20warm%20golden%20light%20reflecting%20on%20calm%20sea%20surface%2C%20dive%20equipment%20visible%20on%20deck%2C%20tropical%20coastline%20in%20soft%20background%20haze%2C%20professional%20travel%20photography%20style%2C%20rich%20warm%20colors%20with%20teal%20and%20gold%20tones%2C%20cinematic%20composition%2C%20no%20text&width=1400&height=700&seq=book-hero-01&orientation=landscape"
          alt="Dive boat on calm turquoise ocean at sunrise ready for adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 text-xs md:text-sm tracking-[0.2em] uppercase mb-4 font-['DM_Sans']">
            PMAK Ocean Hub
          </p>
          <h1 className="font-['Playfair_Display'] text-white text-4xl md:text-6xl leading-tight mb-4">
            Book Your Adventure
          </h1>
          <p className="text-white/80 text-sm md:text-base max-w-lg font-['DM_Sans'] font-light">
            Tell us what you want to do. We reply on WhatsApp within minutes.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="w-full py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-['Playfair_Display'] text-stone-900 text-2xl md:text-3xl mb-6">
                Send a Request
              </h2>

              {formStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <i className="ri-check-line text-green-600 mt-0.5" />
                  <div>
                    <p className="text-green-800 text-sm font-medium">Request sent!</p>
                    <p className="text-green-600 text-xs mt-1">We will reply on WhatsApp or email within minutes.</p>
                  </div>
                </div>
              )}

              {formStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3">
                  <i className="ri-error-warning-line text-red-600 mt-0.5" />
                  <div>
                    <p className="text-red-800 text-sm font-medium">Something went wrong.</p>
                    <p className="text-red-600 text-xs mt-1">Please try again or WhatsApp us directly.</p>
                  </div>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
                      placeholder="+971 xx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Activity</label>
                    <select
                      name="activity"
                      required
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors appearance-none"
                    >
                      <option value="">Select activity</option>
                      <option value="discover_scuba">Discover Scuba</option>
                      <option value="fun_dive">Fun Dive (Certified)</option>
                      <option value="open_water_course">Open Water Course</option>
                      <option value="advanced_course">Advanced Course</option>
                      <option value="rescue_course">Rescue Diver Course</option>
                      <option value="night_dive">Night Dive</option>
                      <option value="boat_dive">Boat Dive</option>
                      <option value="wreck_dive">Wreck Dive (Inchcape 1)</option>
                      <option value="underwater_birthday">Underwater Birthday Dive</option>
                      <option value="underwater_proposal">Underwater Proposal</option>
                      <option value="private_couple_dive">Private Couple Dive</option>
                      <option value="private_family_dive">Private Family Dive</option>
                      <option value="efoil_quick">e-Foil, Quick Flight (30min)</option>
                      <option value="efoil_full">e-Foil, Full Flight (1hr)</option>
                      <option value="efoil_family">e-Foil, Private Family Session</option>
                      <option value="efoil_couple">e-Foil, Private Couple Session</option>
                      <option value="other">Other / Custom Request</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Date</label>
                    <input
                      type="date"
                      name="date"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Number of People</label>
                    <select
                      name="people"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors appearance-none"
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5+">5+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-stone-700 text-sm font-medium mb-1.5">Location Preference</label>
                    <select
                      name="location"
                      className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 focus:outline-none focus:border-stone-400 transition-colors appearance-none"
                    >
                      <option value="">Any / Not sure</option>
                      <option value="fujairah">Fujairah</option>
                      <option value="dubai">Dubai (e-Foil only)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 text-sm font-medium mb-1.5">
                    Message <span className="text-stone-400 font-normal">(optional)</span>
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={500}
                    className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 transition-colors resize-none"
                    placeholder="Tell us your certification level, preferred dive sites, or any questions..."
                  />
                  <p className="text-stone-400 text-xs mt-1">Max 500 characters</p>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full px-6 py-3.5 bg-stone-900 text-white rounded-full text-sm font-semibold hover:bg-stone-700 transition-colors disabled:opacity-50 whitespace-nowrap"
                >
                  {formStatus === "submitting" ? "Sending..." : "Send Request"}
                </button>

                <div className="flex items-center gap-3 pt-1">
                  <div className="h-px flex-1 bg-stone-200" />
                  <span className="text-stone-400 text-xs font-['DM_Sans']">or</span>
                  <div className="h-px flex-1 bg-stone-200" />
                </div>

                <a
                  href="https://wa.me/971581448527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors whitespace-nowrap"
                >
                  <i className="ri-whatsapp-line text-base" />
                  WhatsApp Us to Reserve
                </a>
              </form>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-2">
              <h3 className="font-['Playfair_Display'] text-stone-900 text-xl mb-5">
                Or reach us directly
              </h3>
              <div className="space-y-4">
                <a
                  href="https://wa.me/971581448527"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#FAFAF7] rounded-xl p-4 hover:bg-stone-100 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-green-100 rounded-lg">
                    <i className="ri-whatsapp-line text-green-600" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-sm font-medium">WhatsApp</p>
                    <p className="text-stone-500 text-xs font-['DM_Sans']">+971 58 144 8527</p>
                  </div>
                </a>

                <a
                  href="mailto:officialpmak.global@gmail.com"
                  className="flex items-center gap-3 bg-[#FAFAF7] rounded-xl p-4 hover:bg-stone-100 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-lg">
                    <i className="ri-mail-line text-stone-600" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-sm font-medium">Email</p>
                    <p className="text-stone-500 text-xs font-['DM_Sans']">officialpmak.global@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/pmak.oceanhub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-[#FAFAF7] rounded-xl p-4 hover:bg-stone-100 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-purple-100 rounded-lg">
                    <i className="ri-instagram-line text-purple-600" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-sm font-medium">Instagram</p>
                    <p className="text-stone-500 text-xs font-['DM_Sans']">@pmak.oceanhub</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 bg-[#FAFAF7] rounded-xl p-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-stone-100 rounded-lg">
                    <i className="ri-map-pin-line text-stone-600" />
                  </div>
                  <div>
                    <p className="text-stone-900 text-sm font-medium">Location</p>
                    <p className="text-stone-500 text-xs font-['DM_Sans']">Fujairah, UAE</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-stone-100 rounded-xl">
                <p className="text-stone-600 text-xs font-['DM_Sans'] leading-relaxed">
                  <span className="font-medium text-stone-800">Response time:</span> We typically reply on WhatsApp within 10 minutes during business hours (7 AM to 7 PM GST).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="w-full bg-[#FAFAF7] py-16 md:py-24 px-6 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl mb-3">
              Frequently Asked
            </h2>
            <p className="text-stone-500 text-sm font-['DM_Sans'] font-light">
              Quick answers to common questions. Still unsure? Just WhatsApp us.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 md:p-5 text-left"
                >
                  <span className="text-stone-900 text-sm font-medium pr-4">{faq.q}</span>
                  <i
                    className={`ri-arrow-down-s-line text-stone-400 text-lg transition-transform flex-shrink-0 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-4 md:px-5 pb-4 md:pb-5">
                    <p className="text-stone-600 text-sm leading-relaxed font-['DM_Sans'] font-light">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}