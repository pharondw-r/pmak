import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const scrollToHomeSection = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubStatus("submitting");
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: email.trim() });
    if (error && error.code !== "23505") {
      setSubStatus("error");
    } else {
      setSubStatus("success");
      setEmail("");
    }
  };

  return (
    <footer className="w-full bg-[#FAFAF7] border-t border-stone-200">
      <div className="w-full px-6 md:px-10 lg:px-16 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:w-2/5">
            <div className="mb-6">
              <Link to="/" className="inline-block">
                <h3 className="font-['Playfair_Display'] text-stone-900 text-3xl md:text-4xl leading-tight">
                  <span className="block">PMAK</span>
                  <span className="block">Ocean Hub</span>
                </h3>
              </Link>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed mb-8 font-['DM_Sans'] font-light max-w-sm">
              Prime Marine Adventure Kingdom — your gateway to world-class scuba diving and e-Foil experiences across Fujairah and Dubai, UAE.
            </p>

            <div className="mb-8">
              <label className="block text-stone-700 text-sm font-medium mb-3">
                Join the Crew
              </label>
              {subStatus === "success" && (
                <p className="text-green-700 text-sm mb-2">Subscribed! Welcome aboard.</p>
              )}
              {subStatus === "error" && (
                <p className="text-red-600 text-sm mb-2">Something went wrong. Try again.</p>
              )}
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-b border-stone-300 py-2 text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-600 transition-colors"
                />
                <button
                  type="submit"
                  disabled={subStatus === "submitting"}
                  className="px-5 py-2 border border-stone-300 rounded-full text-stone-600 text-sm font-medium hover:bg-stone-100 transition-colors whitespace-nowrap disabled:opacity-50"
                >
                  {subStatus === "submitting" ? "..." : "Subscribe"}
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Links */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
              {/* Column 1 */}
              <div>
                <h4 className="text-stone-900 text-sm font-semibold mb-4">
                  Experiences
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/scuba" className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors">
                      Scuba Diving
                    </Link>
                  </li>
                  <li>
                    <Link to="/efoil" className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors">
                      e-Foil
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToHomeSection("dive-experiences")}
                      className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors text-left"
                    >
                      Boat Dives
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToHomeSection("dive-experiences")}
                      className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors text-left"
                    >
                      Night Dives
                    </button>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-stone-900 text-sm font-semibold mb-4">
                  Dive Sites
                </h4>
                <ul className="space-y-3">
                  {[
                    "Snoopy Island",
                    "Dibba Rock",
                    "Inchcape 1",
                    "Artificial Reef",
                  ].map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => scrollToHomeSection("locations")}
                        className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors text-left"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 - Pages */}
              <div>
                <h4 className="text-stone-900 text-sm font-semibold mb-4">
                  Pages
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/book" className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors">
                      Book Now
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 4 */}
              <div>
                <h4 className="text-stone-900 text-sm font-semibold mb-4">
                  Connect
                </h4>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="https://instagram.com/pmak.oceanhub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors"
                    >
                      Instagram @pmak.oceanhub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/971581448527"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors"
                    >
                      +971 58 144 8527
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:officialpmak.global@gmail.com"
                      className="text-stone-500 text-sm font-['DM_Sans'] hover:text-stone-900 transition-colors"
                    >
                      officialpmak.global@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="text-stone-500 text-sm font-['DM_Sans']">
                      Fujairah, UAE
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-400 text-xs font-['DM_Sans']">
            &copy; {new Date().getFullYear()} PMAK Ocean Hub. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/pmak.oceanhub"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors"
            >
              <i className="ri-instagram-line text-lg" />
            </a>
            <a
              href="https://wa.me/971581448527"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-900 transition-colors"
            >
              <i className="ri-whatsapp-line text-lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}