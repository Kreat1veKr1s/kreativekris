import heroBg from "@/assets/hero-bg.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Globe, Award, Cpu, Star, DollarSign, Camera } from "lucide-react";
import MobileVisitorWidget from "@/components/MobileVisitorWidget";
import { motion } from "framer-motion";
import { useState } from "react";

const highlights = [
  { icon: Globe, label: "Remote Experienced" },
  { icon: Award, label: "Google Certified" },
  { icon: Cpu, label: "AI-Powered" },
  { icon: Star, label: "Top Reviewed" },
  { icon: DollarSign, label: "Affordable" },
];

const Hero = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" role="banner">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-5xl px-4 sm:px-6">
        <MobileVisitorWidget />

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 sm:mb-8 animate-slide-up">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">AI-Powered Creative Marketing</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Marketing That{" "}
              <span className="text-gradient">Moves People</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Strategist. Creator. Optimizer. I craft data-driven campaigns, build high-converting websites, and grow brands through compelling content and smart advertising.
            </p>
            <p className="text-sm text-muted-foreground/70 max-w-xl mx-auto lg:mx-0 mb-8 animate-slide-up italic" style={{ animationDelay: "0.25s" }}>
              In 2026, global digital ad spend will surpass <span className="text-primary font-medium">$870 billion</span> — is your brand capturing its share?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="lg" className="text-base px-8 py-6">
                View My Work <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
                Let's Connect
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-10 max-w-lg mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.4s" }}>
              {[
                { value: "50+", label: "Projects" },
                { value: "8+", label: "Years Experience" },
                { value: "200%", label: "Avg ROI" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="text-center lg:text-left"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary glow-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Profile photo block */}
          <motion.div
            className="relative flex-shrink-0 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Glow ring behind photo */}
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/20 via-transparent to-[hsl(var(--glow-warm))]/20 blur-xl opacity-60" />

            <div className="relative glass rounded-2xl p-4 w-64 sm:w-72">
              {/* Image upload area */}
              <label
                htmlFor="profile-upload"
                className="relative block aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group bg-muted/30 border border-border/30"
              >
                {profileImage ? (
                  <img
                    src={profileImage}
                    alt="Profile photo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted-foreground">
                    <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center">
                      <Camera className="w-7 h-7 text-primary/60" />
                    </div>
                    <span className="text-sm font-medium">Upload Photo</span>
                    <span className="text-xs text-muted-foreground/60">Click to add your photo</span>
                  </div>
                )}
                {/* Hover overlay */}
                {profileImage && (
                  <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <Camera className="w-4 h-4" />
                      Change Photo
                    </div>
                  </div>
                )}
                <input
                  id="profile-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="sr-only"
                />
              </label>

              {/* Highlight badges */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {highlights.map((h, i) => (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="flex items-center gap-1 px-2 py-1 rounded-md bg-primary/10 border border-primary/20 text-[10px] font-medium text-primary whitespace-nowrap"
                  >
                    <h.icon className="w-2.5 h-2.5" />
                    {h.label}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
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
