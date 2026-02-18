import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import MobileVisitorWidget from "@/components/MobileVisitorWidget";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl text-center px-4 sm:px-6">
        <MobileVisitorWidget />
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8 animate-slide-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-muted-foreground">AI-Powered Creative Marketing</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Marketing That{" "}
          <span className="text-gradient">Moves People</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Strategist. Creator. Optimizer. I craft data-driven campaigns, build high-converting websites, and grow brands through compelling content and smart advertising.
        </p>
        <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10 animate-slide-up italic" style={{ animationDelay: "0.25s" }}>
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

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-20 max-w-lg mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
          {[
            { value: "50+", label: "Projects" },
            { value: "8+", label: "Years Experience" },
            { value: "200%", label: "Avg ROI" },
          ].map((stat, i) => (
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
