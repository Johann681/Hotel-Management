import Hero from "@/components/Hero";
import RoomsSection from "@/components/RoomsSection";
import RestaurantSection from "@/components/RestaurantSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <RoomsSection />
      <RestaurantSection />
      <AmenitiesSection />
      <ReviewsSection />
      <ContactSection />
    </>
  );
}
