import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-200"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orb */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, hsl(43 96% 56% / 0.4), transparent 70%)",
          animation: "float 8s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-7 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary mb-9 animate-fade-up font-medium">
           DEVLOPER AND MORE ...
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-display font-bold leading-[0.9] mb-8 animate-fade-up animate-fade-up-delay-1">
          El Fakhari
          <br />
          <span className="text-gradient">Ayoub</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto mb-12 animate-fade-up animate-fade-up-delay-2">
          Web Full Stack & App development  , Projects web manager , versatile multimedia content creator specializing in video production, photo editing, audio mixing, and more competances...
        </p>
        <div className="flex items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-3">
          <a
            href="#projects"
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(43_96%_56%_/_0.4)]"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="px-8 py-4 rounded-full border border-border text-foreground font-medium hover:border-primary/50 transition-all duration-300"
          >
            About Me
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-up animate-fade-up-delay-5">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
