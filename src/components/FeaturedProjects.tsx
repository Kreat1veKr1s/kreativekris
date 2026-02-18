import { ExternalLink, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Luxe Living Interiors",
    category: "Website • SEO • Google Ads",
    description: "Complete digital transformation for a luxury interior design firm. Built a stunning website, optimized for local SEO, and launched Google Ads campaigns that drove a 340% increase in qualified leads.",
    results: ["340% more leads", "Page 1 rankings", "$2.1M pipeline generated"],
    gradient: "from-primary/20 to-glow-warm/10",
  },
  {
    title: "FreshBite Meal Prep",
    category: "Social Media • Content • Branding",
    description: "Developed brand identity, social media strategy, and content calendar for a meal prep startup. Grew Instagram from 0 to 25K followers in 6 months with a content-first approach.",
    results: ["25K followers in 6mo", "12% engagement rate", "3x revenue growth"],
    gradient: "from-glow-warm/20 to-primary/10",
  },
  {
    title: "Summit Financial Group",
    category: "Landing Pages • Ads • Copywriting",
    description: "Created high-converting landing pages and ad funnels for a financial advisory firm. Achieved a 7.2% conversion rate with persuasive copy and optimized user journeys.",
    results: ["7.2% conversion rate", "Cost per lead ↓ 58%", "$180K ad spend managed"],
    gradient: "from-primary/15 to-primary/5",
  },
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="space-y-8">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-2xl overflow-hidden card-hover group`}
            >
              <div className={`bg-gradient-to-r ${p.gradient} p-8 md:p-10`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  <div className="flex-1">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{p.category}</span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading mt-2 mb-4 text-foreground">{p.title}</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-xl">{p.description}</p>
                  </div>
                  <Button variant="hero-outline" size="sm" className="shrink-0 self-start">
                    <ExternalLink className="w-4 h-4 mr-1" /> View Case Study
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 mt-8">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                      <TrendingUp className="w-3.5 h-3.5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
