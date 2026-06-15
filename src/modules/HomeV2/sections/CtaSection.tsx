import { ArrowRight } from "lucide-react";
import imgCtaBg from "../../../assets/images/home_v2/project_villas.png";

export default function CtaSection() {
  return (
    <section className="relative w-full bg-bg-main py-12 lg:py-16 border-t border-border-main">
      <div className="relative mx-auto max-w-8xl px-4 sm:px-6">
        {/* Banner container */}
        <div className="relative  bg-gradient-toa-br from-bg-surface to-bg-main rounded-xl overflow-hidden py-10 px-8 sm:px-12 lg:px-16 flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Background image fading from left to right */}
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 select-none pointer-events-none">
            <img
              src={imgCtaBg}
              alt="Luxury Villa Night View"
              className="w-full h-full object-cover object-center filter opacity-30 md:opacity-60"
            />
            {/* Blend gradients for smooth transition */}
            <div className="absolute inset-0 bg-gradient-to-r from-bg-main via-bg-surface/80 to-transparent" />
          </div>

          {/* Left Text content */}
          <div className="relative z-10 flex flex-col items-start text-left max-w-lg">
            <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-extrabold text-text-main leading-tight">
              Your Dream Home <br />
              Deserves Intelligent Living.
            </h2>
            <p className="font-sans text-xs sm:text-sm text-text-muted mt-2.5 leading-relaxed font-normal">
              Schedule a private consultation with our automation specialists.
            </p>
          </div>

          {/* Right Button content */}
          <div className="relative z-10 shrink-0">
            <button className="flex items-center gap-2 bg-accent-blue hover:bg-accent-blue/90 text-white px-8 py-4 transition-all duration-300 rounded-none uppercase text-xs sm:text-[13px] font-bold tracking-widest leading-none">
              Book Consultation
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
