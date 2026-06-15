
import { Home, Award, Shield, MapPin } from "lucide-react";

export default function StatsSectionV2() {
  const stats = [
    {
      icon: Home,
      value: "500+",
      label: "Luxury Homes Automated",
    },
    {
      icon: Award,
      value: "7+",
      label: "Years of Excellence",
    },
    {
      icon: Shield,
      value: "5-Year",
      label: "Installation Warranty",
    },
    {
      icon: MapPin,
      value: "4 Cities",
      label: "Serving Across India",
    },
  ];

  return (
    <div className="relative w-full z-20 bg-bg-main border-y border-border-main py-8 md:py-12">
      <div className="mx-auto max-w-8xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y-0 divide-x-0 sm:grid-cols-2 sm:gap-y-10 md:divide-x md:divide-border-main">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 px-4 md:px-6 lg:px-8 text-left group first:pl-0 last:pr-0"
              >
                {/* Icon wrapper */}
                <div className="h-8 w-8 shrink-0 rounded-none flex items-center justify-center text-gold-primary transition-all duration-300">
                  <Icon className="h-full w-full" />
                </div>
                
                {/* Text wrapper */}
                <div className="flex flex-col">
                  <span className="font-serif text-2xl lg:text-3xl font-extrabold text-text-main tracking-tight leading-none group-hover:text-gold-primary transition-colors duration-200">
                    {stat.value}
                  </span>
                  <span className="font-body text-[10px] sm:text-xs text-text-muted tracking-wider font-medium mt-1.5 uppercase leading-snug">
                    {stat.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
