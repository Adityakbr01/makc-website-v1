import { lazy, Suspense } from "react";
import useSEO from "@/hooks/useSEO";
import HeroSectionV2 from "../sections/HeroSectionV2";
import StatsSectionV2 from "../sections/StatsSectionV2";

// Lazy load below-the-fold sections to shrink the initial page load JS payload
const ServicesSectionV2 = lazy(() => import("../sections/ServicesSectionV2"));
const ProjectsSection = lazy(() => import("../sections/ProjectsSection"));
const PartnerLogosSection = lazy(() => import("../sections/PartnerLogosSection"));
const SolutionsGallery = lazy(() => import("@/components/common/SolutionsGallery"));
const SmarterWaySection = lazy(() => import("../sections/SmarterWaySection"));
const TestimonialsSection = lazy(() => import("../sections/TestimonialsSection"));
const GetInTouchSection = lazy(() => import("../sections/GetInTouchSection"));

export default function HomeV2Page() {
  useSEO({
    title: "Home Automation Company in Bangalore | MAKc Automation",
    description: "MAKc Automation is a leading home automation company in Bangalore. Get complete smart home automation solutions for enhanced security, safety, comfort, and convenience.",
    keywords: "home automation company in bangalore, home automation bangalore, smart home automation",
    canonicalUrl: "https://makcautomations.com/",
    robots: "INDEX, FOLLOW, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1, MAX-IMAGE-PREVIEW:LARGE",
  });

  return (
    <div className="relative bg-bg-main min-h-screen text-text-main">
      {/* V2 Hero Section */}
      <HeroSectionV2 />

      {/* V2 Stats Section */}
      <StatsSectionV2 />

      <Suspense fallback={null}>
        {/* V2 Services Section */}
        <ServicesSectionV2 />

        {/* V2 Featured Projects Section */}
        <ProjectsSection />

        {/* V2 Partner Logos Section */}
        <PartnerLogosSection />

        {/* Solutions Gallery Showcase */}
        <SolutionsGallery />

        {/* V2 Smarter Way Section */}
        <SmarterWaySection />

        {/* V2 Testimonials Section */}
        <TestimonialsSection />

        {/* V2 Get In Touch Section */}
        <GetInTouchSection />
      </Suspense>
    </div>
  );
}
