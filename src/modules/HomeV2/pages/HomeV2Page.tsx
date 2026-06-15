
import HeroSectionV2 from "../sections/HeroSectionV2";
import StatsSectionV2 from "../sections/StatsSectionV2";
import ServicesSectionV2 from "../sections/ServicesSectionV2";

export default function HomeV2Page() {
  return (
    <div className="relative bg-bg-main min-h-screen text-text-main">
      {/* V2 Hero Section */}
      <HeroSectionV2 />
      
      {/* V2 Stats Section */}
      <StatsSectionV2 />
      
      {/* V2 Services Section */}
      <ServicesSectionV2 />
      
      {/* Empty space/placeholder for other sections under HomeV2 */}
      <div className="py-20 text-center border-t border-border-main bg-bg-main">
        <p className="font-serif text-sm tracking-widest text-text-muted/30 uppercase">
          More Sections Coming Soon
        </p>
      </div>
    </div>
  );
}
