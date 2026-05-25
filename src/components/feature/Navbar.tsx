import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollToHomeSection = (id: string) => {
    if (!isHome) {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-black ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
    >
      <div className="w-full px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <img
              src="https://storage.readdy-site.link/project_files/dc12d4c9-2379-4ad2-a662-8eddd181bfbf/4f9ff32b-2db7-452f-b4ac-521fae267e45_WhatsApp-Image-2026-05-21-at-3.45.50-PM.jpeg?v=ecd7f110c5a19f5612b46b6262f752c3"
              alt="PMAK Ocean Hub logo"
              className="h-10 md:h-14 lg:h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity -my-2 md:-my-3 lg:-my-4"
            />
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              to="/scuba"
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 whitespace-nowrap text-white"
            >
              Scuba
            </Link>
            <Link
              to="/efoil"
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 whitespace-nowrap text-white"
            >
              e-Foil
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 whitespace-nowrap text-white"
            >
              Gallery
            </Link>

            {isHome && (
              <>
                <button
                  onClick={() => scrollToHomeSection("dive-experiences")}
                  className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 whitespace-nowrap text-white"
                >
                  Dive
                </button>
                <button
                  onClick={() => scrollToHomeSection("locations")}
                  className="text-sm font-medium tracking-wide transition-colors duration-300 hover:opacity-70 whitespace-nowrap text-white"
                >
                  Locations
                </button>
              </>
            )}

            <Link
              to="/book"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap border border-white/40 text-white hover:bg-white hover:text-black"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center"
          >
            <i className="ri-menu-3-line text-xl text-white" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-4 space-y-3">
          <Link
            to="/scuba"
            className="block text-white text-sm font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            Scuba
          </Link>
          <Link
            to="/efoil"
            className="block text-white text-sm font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            e-Foil
          </Link>
          <Link
            to="/gallery"
            className="block text-white text-sm font-medium py-2"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </Link>
          {isHome && (
            <>
              <button
                onClick={() => scrollToHomeSection("dive-experiences")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                Dive
              </button>
              <button
                onClick={() => scrollToHomeSection("locations")}
                className="block w-full text-left text-white text-sm font-medium py-2"
              >
                Locations
              </button>
            </>
          )}
          <Link
            to="/book"
            className="block w-full px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium text-center"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}