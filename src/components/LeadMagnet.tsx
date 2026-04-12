import { Button } from "@/components/ui/button";
import { Gift, Zap, BookOpen, Wrench, Sparkles } from "lucide-react";

const perks = [
  { icon: Wrench, text: "Premium tool stack worth $150+" },
  { icon: Zap, text: "Free credits for top AI & ad platforms" },
  { icon: BookOpen, text: "Step-by-step playbooks & templates" },
  { icon: Sparkles, text: "Exclusive 2026 trend predictions" },
];

const LeadMagnet = () => {
  return (
    <section id="free-guide" className="section-padding">
      <div className="container max-w-5xl">
        <div className="glass rounded-2xl p-8 md:p-14 relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            {/* Left — Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Gift className="w-3.5 h-3.5" />
                FREE — Valued at $300+
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
                The 2026 <span className="text-gradient">No-BS Guide</span> & Toolkit
              </h2>
              <p className="text-muted-foreground max-w-lg mb-6">
                Everything you need to launch, grow, and dominate online — premium tools, free credits, and battle-tested playbooks. No fluff, just results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                {perks.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — CTA */}
            <div className="w-full lg:w-[340px] shrink-0 text-center">
              <Button
                variant="hero"
                size="lg"
                className="w-full text-base"
                asChild
              >
                <a href="https://forms.gle/bqTWAHymhsTBfc5T8" target="_blank" rel="noopener noreferrer">
                  Get the Free Guide →
                </a>
              </Button>
              <p className="text-[11px] text-muted-foreground/60 text-center leading-tight mt-3">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
