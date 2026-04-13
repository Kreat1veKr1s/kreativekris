import heroVideo from "@/assets/hero-video.mp4";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import VisitorWidget from "@/components/VisitorWidget";
import MobileVisitorWidget from "@/components/MobileVisitorWidget";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const headlines = [
  "Moves People",
  "Drives Growth",
  "Converts Leads",
  "Builds Brands",
];

const useTypewriter = (words: string[], typingSpeed = 80, deletingSpeed = 40, pauseDelay = 2000) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, displayed.length + 1));
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseDelay]);

  return displayed;
};

const Hero = () => {
  const typewriterText = useTypewriter(headlines);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-5 animate-slide-up h-[2.6em] flex items-center justify-center" style={{ animationDelay: "0.1s" }}>
          <span>
            Marketing That{" "}
            <span className="text-gradient inline-block min-w-[3ch]">
              {typewriterText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Strategist. Creator. Optimizer. I craft data-driven campaigns, build high-converting websites, and grow brands through compelling content and smart advertising.
        </p>
        <p className="text-xs sm:text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10 animate-slide-up italic" style={{ animationDelay: "0.25s" }}>
          In 2026, global digital ad spend will surpass <span className="text-primary font-medium">$870 billion</span> — is your brand capturing its share?
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            View My Work <ArrowRight className="w-5 h-5 ml-1" />
          </Button>
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            Let's Connect
          </Button>
        </div>

        {/* Visitor data widget — between CTAs and stats */}
        <div className="mt-8 animate-slide-up flex justify-center" style={{ animationDelay: "0.35s" }}>
          <VisitorWidget inline />
          <MobileVisitorWidget />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 sm:mt-20 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projects" },
            { value: "8+", label: "Years Experience" },
            { value: "200%", label: "Avg ROI" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary glow-text">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-primary/60 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
