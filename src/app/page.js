import BrowseSection from "@/components/sections/sectionsLandingpage/BrowseSection";
import CTASection from "@/components/sections/sectionsLandingpage/CTASection";
import FeaturedEventsSection from "@/components/sections/sectionsLandingpage/FeaturedEventsSection";
import FooterSection from "@/components/sections/sectionsLandingpage/FooterSection";
import HeroSection from "@/components/sections/sectionsLandingpage/HeroSection";
import HowItWorksSection from "@/components/sections/sectionsLandingpage/HowItWorksSection";
import TestimonialsSection from "@/components/sections/sectionsLandingpage/TestimonialsSection";
import Spinner from "@/components/ui/Spinner";
import { Suspense } from "react";

export const metadata = {
  title: {
    default: "Discover, Create & Manage Events",
  },
  description:
    "EventFlow is a modern event management platform where attendees discover events, organizers create unforgettable experiences, and administrators keep everything running smoothly.",

  keywords: ["events", "event management", "meetup", "tickets"],
};

function page() {
  return (
    <div>
      <HeroSection />
      <Suspense fallback={<Spinner />}>
        <FeaturedEventsSection />
      </Suspense>
      <BrowseSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}

export default page;
