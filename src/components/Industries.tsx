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

const Industries = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Who I <span className="text-gradient">Work With</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Proven experience growing brands across diverse industries.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default group"
              >
                <ind.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{ind.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
