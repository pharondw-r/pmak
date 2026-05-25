import Navbar from "@/components/feature/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import DiveExperiences from "./components/DiveExperiences";
import EFoilSection from "./components/EFoilSection";
import LocationsSection from "./components/LocationsSection";
import ReviewsSection from "./components/ReviewsSection";
import CTASection from "./components/CTASection";
import Footer from "@/components/feature/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <DiveExperiences />
      <EFoilSection />
      <LocationsSection />
      <ReviewsSection />
      <CTASection />
      <Footer />
    </div>
  );
}