import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Calendar } from "lucide-react";

const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding pb-10 md:pb-14">
      <div className="container max-w-4xl">
        <div className="glass rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
          {/* Gradient accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />

          <h2 className="text-3xl md:text-5xl font-bold font-heading relative z-10 mb-4">
            Ready to <span className="text-gradient">Level Up</span> Your Marketing?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-4 relative z-10">
            Let's discuss how I can help grow your brand, drive leads, and deliver impactful results.
          </p>
          <p className="text-xs text-muted-foreground/60 italic max-w-md mx-auto mb-10 relative z-10">
            Companies that invest in digital marketing see an average{" "}
            <span className="text-primary">2.8x revenue growth</span> vs. those that don't — McKinsey, 2026
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Button variant="hero" size="lg" className="text-base px-8 py-6">
              <Mail className="w-5 h-5 mr-1" /> Get In Touch
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
              <Calendar className="w-5 h-5 mr-1" /> Book a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
