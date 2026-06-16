import { Compass, Cpu, Link, Ruler, ShieldCheck } from "lucide-react";
import imgWhyChooseUs from "../../../assets/images/home_v2/why_choose_us.png";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: Compass,
      title: "Custom Designed",
      description: "Every project is unique.",
    },
    {
      icon: Cpu,
      title: "Premium Brands",
      description: "Only globally trusted technology partners.",
    },
    {
      icon: Link,
      title: "Seamless Integration",
      description: "Everything works together beautifully.",
    },
    {
      icon: Ruler,
      title: "Clean Installations",
      description: "Invisible wiring. Flawless execution.",
    },
    {
      icon: ShieldCheck,
      title: "Dedicated Support",
      description: "Long after installation.",
    },
  ];

  return (
    <section id="about" className="relative w-full bg-bg-main py-10 lg:py-16 border-t border-border-main">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        
        {/* Border container wrapping image and content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-border-main">
          
          {/* Left Column: Full height Image (Spans 5/12 cols) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[520px] border-b lg:border-b-0 lg:border-r border-border-main overflow-hidden">
            <img
              src={imgWhyChooseUs}
              alt="Luxury Living Room Night View with Ambient Lighting"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            {/* Premium overlays for image depth and blending */}
            <div className="absolute inset-0 bg-black/10 dark:bg-black/35 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-bg-main/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-bg-main/30 lg:to-bg-main z-10 pointer-events-none" />
          </div>

          {/* Right Column: Dark content panel (Spans 7/12 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-12 lg:p-14 bg-bg-main text-left">
            
            {/* Top Text Content */}
            <div className="flex flex-col">
              <span className="font-sans text-[10px] font-bold tracking-[0.2em] text-accent-blue uppercase">
                WHY HOMEOWNERS CHOOSE MAKC
              </span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-extrabold text-text-main tracking-tight leading-tight max-w-lg">
                Designed Around You, <br />
                Not Around Technology.
              </h2>
            </div>

            {/* Bottom Features Row (5 columns with glowing vertical dividers on desktop) */}
            <div className="mt-12 lg:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-10 lg:gap-y-0">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="relative flex flex-col items-center text-center px-2 sm:px-4"
                  >
                    {/* Custom vertical gradient divider as border-right on desktop */}
                    {index < features.length - 1 && (
                      <div className="absolute right-0 top-0 bottom-0 w-[1.5px] bg-gradient-to-b from-[#0A84FF]/0 via-[#0A84FF]/40 to-[#0A84FF]/0 z-0 hidden lg:block" />
                    )}
                    {/* Icon */}
                    <div className="text-accent-blue apple-border-shine rounded-full p-2 flex items-center justify-center h-12 w-12 shrink-0">
                      <Icon className="h-10 w-10 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="font-sans text-xs sm:text-[13px] font-bold text-text-main mt-4">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2 font-sans text-[10px] sm:text-xs text-text-muted leading-relaxed font-normal max-w-[130px] mx-auto">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
        
      </div>
    </section>
  );
}
