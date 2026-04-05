import { useScrollReveal } from "./useScrollReveal";
import { Play } from "lucide-react";
import { useState } from "react";

const ShowreelSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showreel" className="py-32 relative noise-bg">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Showreel
          </p>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Watch My <span className="text-gradient">Work</span>
          </h2>
        </div>

        {/* Video player */}
        <div
          className={`relative max-w-5xl mx-auto rounded-3xl overflow-hidden glow-border transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="aspect-video bg-card relative group cursor-pointer" onClick={() => setPlaying(!playing)}>
            {playing ? (
              <iframe
                src="https://www.youtube.com/embed/6-yC4QoLQZw?si=_4Cw0YTsQgG8NWH8?play=1"
                title="Showreel"
                className="w-full h-full"
                allow="autostart; encrypted-media"
                allowFullScreen
              />
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ animation: "pulse-glow 2s ease-in-out infinite" }}>
                    <Play className="text-primary-foreground ml-1" size={36} />
                  </div>
                </div>
                <div className="absolute bottom-8 left-8">
                  <p className="text-foreground font-display text-2xl font-bold">See Me</p>
                  <p className="text-muted-foreground text-sm">I talk bout collection of my best works ...</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
