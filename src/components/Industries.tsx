import { ShoppingBag, Sparkles, Store, Coffee, Wrench, Music, Heart, Cpu, Rocket, DollarSign, User, Building, Briefcase, GlassWater } from "lucide-react";

const industries = [
  { icon: ShoppingBag, name: "E-Commerce" },
  { icon: Sparkles, name: "Beauty" },
  { icon: Store, name: "Retail" },
  { icon: Coffee, name: "Coffee Shops" },
  { icon: Building, name: "Local Services" },
  { icon: Wrench, name: "Blue Collar / Trades" },
  { icon: Music, name: "Nightlife" },
  { icon: Heart, name: "Non-Profit" },
  { icon: GlassWater, name: "Health & Wellness" },
  { icon: Cpu, name: "Tech" },
  { icon: Rocket, name: "Startups" },
  { icon: DollarSign, name: "Finance" },
  { icon: User, name: "Freelancers" },
  { icon: Briefcase, name: "Professional Services" },
];

const doubled = [...industries, ...industries];

const Industries = () => {
  return (
    <section className="section-padding py-12 md:py-20" aria-label="Industries served">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Who I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-xs text-muted-foreground/70 mt-3 italic max-w-md mx-auto">
            Businesses investing in multi-channel marketing see 287% higher purchase rates — Omnisend, 2026
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex gap-3 animate-marquee">
            {doubled.map((ind, i) => (
              <div
                key={`${ind.name}-${i}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 whitespace-nowrap shrink-0"
              >
                <ind.icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium text-muted-foreground">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
