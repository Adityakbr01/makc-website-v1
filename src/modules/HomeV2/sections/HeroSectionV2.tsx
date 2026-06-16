import React from "react";
import WaveButton from "@/components/common/WaveButton";
import heroBg from "../../../assets/images/home_v2/hero_bg.png";

// Custom Incandescent Lightbulb Icon matching mockup details
function LightbulbIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Bulb body outline */}
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
      {/* U-shaped filament inside */}
      <path d="M10 13V10a2 2 0 0 1 4 0v3" />
      {/* Base contact lines */}
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      {/* Mockup-precise 7 light rays */}
      <path d="M12 2v2" />
      <path d="M4.9 4.9l1.4 1.4" />
      <path d="M19.1 4.9l-1.4 1.4" />
      <path d="M3 10h2" />
      <path d="M21 10h-2" />
      <path d="M4.9 15.1l1.4-1.4" />
      <path d="M19.1 15.1l-1.4-1.4" />
    </svg>
  );
}

// Custom Thermometer with horizontal breeze/airflow rays on left/right
function ClimateIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Thermometer outer body */}
      <path d="M14 14.76V3.5a2 2 0 0 0-4 0v11.26a4.5 4.5 0 1 0 4 0z" />
      {/* Vertical inner mercury indicator line */}
      <path d="M12 7v5" />
      {/* Inner mercury bulb filled */}
      <circle cx="12" cy="16.5" r="2" fill="currentColor" />
      {/* Left side horizontal waves */}
      <path d="M6 7.5c-1-.5-2 .5-3 0" />
      <path d="M6 11c-1.2-.5-2.5.5-3.5 0" />
      <path d="M6 14.5c-1-.5-2 .5-3 0" />
      {/* Right side horizontal waves */}
      <path d="M18 7.5c1-.5 2 .5 3 0" />
      <path d="M18 11c1.2-.5 2.5.5 3.5 0" />
      <path d="M18 14.5c1-.5 2 .5 3 0" />
    </svg>
  );
}

// Custom Tied-Back curtains with top rod finials
function CurtainsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Rod */}
      <path d="M3 5h18" />
      <circle cx="2" cy="5" r="1" fill="currentColor" />
      <circle cx="22" cy="5" r="1" fill="currentColor" />
      {/* Left Curtain tied back */}
      <path d="M5 5v13c0 1 .5 1.5 1.5 1.5h3c.5 0 1-.5 1-1.5v-3.5c0-.8-.5-1.5-1-2-.5-.5-1-1.2-1-2V5H5z" />
      <path d="M5 12h4.5" />
      {/* Right Curtain tied back */}
      <path d="M19 5v13c0 1-.5 1.5-1.5 1.5h-3c-.5 0-1-.5-1-1.5v-3.5c0-.8.5-1.5 1-2s1-1.2 1-2V5h3z" />
      <path d="M14.5 12h4.5" />
    </svg>
  );
}

// Custom Shield with solid filled star inside
function SecurityStarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polygon
        points="12 7.5 13.5 10.5 16.8 10.5 14.2 12.5 15.2 15.8 12 14 8.8 15.8 9.8 12.5 7.2 10.5 10.5 10.5"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

// Custom Theatre screen with solid filled Play button in center
function TheatreScreenIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="12" x="2" y="4" rx="2" />
      <line x1="12" x2="12" y1="16" y2="20" />
      <line x1="8" x2="16" y1="20" y2="20" />
      <polygon points="10.5 7.5 15 10 10.5 12.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function HeroSectionV2() {
  const statusItems = [
    {
      icon: LightbulbIcon,
      label: "LIGHTS",
      value: "Living Room",
      status: "active",
    },
    {
      icon: ClimateIcon,
      label: "CLIMATE",
      value: "24°C",
      status: "active",
    },
    {
      icon: CurtainsIcon,
      label: "CURTAINS",
      value: "Open",
      status: "active",
    },
    {
      icon: SecurityStarIcon,
      label: "SECURITY",
      value: "Armed",
      status: "armed",
    },
    {
      icon: TheatreScreenIcon,
      label: "THEATRE",
      value: "Playing",
      status: "active",
    },
  ];

  return (
    <section
      id="home"
      className="relative w-full min-h-screen bg-bg-main flex items-center justify-between overflow-hidden py-24 sm:py-32 transition-colors duration-300"
    >
      {/* Background Image with Theme-aware Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Luxury Villa Background"
          className="w-full h-full object-cover object-center scale-105 transition-all duration-500 opacity-95 dark:opacity-85"
        />
        {/* Dynamic theme-aware gradients for premium readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-main/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-l from-bg-main via-bg-main/15 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-main via-transparent to-bg-main/40 z-10" />
      </div>

      <div className="relative z-20 mx-auto max-w-8xl w-full px-4 sm:px-14 flex flex-col lg:flex-row items-start lg:items-stretch justify-between gap-12 sm:gap-16">
        {/* Hero Left Content */}
        <div className="flex-1 flex flex-col justify-center text-left max-w-2xl">
          <span className="font-sans text-[10px] sm:text-xs font-bold tracking-[0.25em] text-gold-primary uppercase">
            DESIGNED FOR MODERN LUXURY LIVING
          </span>

          <h1 className="mt-4 sm:mt-6 font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight leading-[1.15]">
            Intelligent Homes. <br />
            <span className="font-serif italic font-normal text-gold-primary animate-fade-in-up">
              Effortlessly Luxurious.
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-text-muted font-body leading-relaxed max-w-lg">
            Experience a new standard of living with intelligent automation,
            luxury lighting, world-class security, and seamless connectivity—all
            designed exclusively for premium residences.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4">
            {/* CTA 1: Solid Gold */}
            <a
              href="#contact"
              className="px-6 py-3.5 sm:px-8 sm:py-4 bg-gold-primary text-black font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase hover:bg-gold-hover transition-colors duration-300 rounded-none shadow-[0_4px_20px_rgba(10,132,255,0.35)] flex items-center gap-2 group"
            >
              SCHEDULE PRIVATE CONSULTATION
            </a>

            {/* CTA 2: Outline */}
            <WaveButton
              href="#solutions"
              accentColor="var(--color-gold-primary)"
              foregroundColor="#000000"
              className="px-6 py-3.5 sm:px-8 sm:py-4 border border-gold-primary text-gold-primary font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 rounded-none flex items-center gap-2 group"
            >
              EXPLORE SMART HOMES
              <span className="font-mono text-xs transition-transform duration-300 group-hover:translate-x-1">
                &gt;
              </span>
            </WaveButton>
          </div>
        </div>

        {/* Hero Right Sidebar (Status Dashboard) */}
        <div className="w-full lg:w-auto lg:max-w-[40%] shrink-0 flex flex-col justify-center items-start lg:items-end">
          <div className="flex flex-col transition-all duration-500 group pr-4 lg:pr-12">
            {statusItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <React.Fragment key={index}>
                  {/* Floating vertical blue indicator dash centered between boxes */}
                  {index > 0 && (
                    <div className="w-16 flex justify-center py-2.5">
                      <div className="w-[2px] h-[6px] bg-[#0A84FF] shadow-[0_0_8px_rgba(10,132,255,0.9)] opacity-80" />
                    </div>
                  )}

                  <div className="flex items-center gap-5 group/item">
                    {/* Glowing Square Box */}
                    <div className="text-white bg-[#061121]/45 backdrop-blur-xl border border-[#0A84FF]/40 shadow-[0_0_15px_rgba(10,132,255,0.25),inset_0_0_10px_rgba(10,132,255,0.15)] rounded-[18px] transition-all duration-300 shrink-0 flex items-center justify-center w-16 h-16 group-hover/item:scale-105 group-hover/item:border-[#0A84FF]/80 group-hover/item:shadow-[0_0_25px_rgba(10,132,255,0.5),inset_0_0_12px_rgba(10,132,255,0.25)]">
                      <Icon className="h-9 w-9 text-white drop-shadow-[0_0_8px_rgba(10,132,255,0.85)] stroke-[1.5] transition-transform duration-300 group-hover/item:scale-110" />
                    </div>

                    {/* Text on Right */}
                    <div className="flex flex-col text-left">
                      <span className="font-sans text-xs sm:text-[13px] font-bold tracking-[0.15em] text-text-main uppercase group-hover/item:text-[#0A84FF] transition-colors duration-200">
                        {item.label}
                      </span>
                      <span className="font-sans text-[11px] sm:text-xs text-text-muted mt-1.5 font-medium group-hover/item:text-text-main transition-colors duration-200">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2.5">
        <span className="font-sans text-[8px] font-bold tracking-[0.3em] text-text-muted/40 uppercase">
          SCROLL TO DISCOVER
        </span>
        <div className="w-[18px] h-[30px] border border-border-main rounded-full flex justify-center p-1.5 opacity-50">
          <div className="w-[4px] h-[6px] bg-gold-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
