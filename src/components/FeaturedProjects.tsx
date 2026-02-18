import { ExternalLink, TrendingUp, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  {
    title: "Luxe Living Interiors",
    category: "Website • SEO • Google Ads",
    description: "Complete digital transformation for a luxury interior design firm. Built a stunning website, optimized for local SEO, and launched Google Ads campaigns that drove a 340% increase in qualified leads.",
    results: ["340% more leads", "Page 1 rankings", "$2.1M pipeline generated"],
    gradient: "from-primary/20 to-glow-warm/10",
    images: [
      { label: "Website Design", aspect: "landscape" },
      { label: "Google Ads Dashboard", aspect: "landscape" },
      { label: "SEO Results", aspect: "square" },
    ],
  },
  {
    title: "FreshBite Meal Prep",
    category: "Social Media • Content • Branding",
    description: "Developed brand identity, social media strategy, and content calendar for a meal prep startup. Grew Instagram from 0 to 25K followers in 6 months with a content-first approach.",
    results: ["25K followers in 6mo", "12% engagement rate", "3x revenue growth"],
    gradient: "from-glow-warm/20 to-primary/10",
    images: [
      { label: "Brand Identity", aspect: "square" },
      { label: "Instagram Feed", aspect: "portrait" },
      { label: "Content Calendar", aspect: "landscape" },
    ],
  },
  {
    title: "Summit Financial Group",
    category: "Landing Pages • Ads • Copywriting",
    description: "Created high-converting landing pages and ad funnels for a financial advisory firm. Achieved a 7.2% conversion rate with persuasive copy and optimized user journeys.",
    results: ["7.2% conversion rate", "Cost per lead ↓ 58%", "$180K ad spend managed"],
    gradient: "from-primary/15 to-primary/5",
    images: [
      { label: "Landing Page", aspect: "landscape" },
      { label: "Ad Creative", aspect: "square" },
      { label: "Funnel Overview", aspect: "landscape" },
    ],
  },
];

const ImagePlaceholder = ({ label, aspect }: { label: string; aspect: string }) => {
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-video";
  return (
    <div className={`${aspectClass} w-full rounded-lg bg-muted/50 border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-2 group/img hover:border-primary/40 hover:bg-muted/70 transition-all duration-300 cursor-pointer`}>
      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover/img:bg-primary/20 transition-colors">
        <ImageIcon className="w-5 h-5 text-muted-foreground group-hover/img:text-primary transition-colors" />
      </div>
      <span className="text-xs text-muted-foreground font-medium">{label}</span>
    </div>
  );
};

const FeaturedProjects = () => {
  const [current, setCurrent] = useState(0);
  const p = projects[current];

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));

  return (
    <section id="projects" className="section-padding bg-surface/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-4 max-w-lg mx-auto">
            In 2026, businesses using case studies in sales see <span className="text-primary font-medium">70% higher close rates</span>.
          </p>
        </div>

        <div className="relative">
          <div className="glass rounded-2xl overflow-hidden">
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

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {p.images.map((img) => (
                  <ImagePlaceholder key={img.label} label={img.label} aspect={img.aspect} />
                ))}
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {p.results.map((r) => (
                  <div key={r} className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                    <span className="text-sm font-medium text-foreground">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <button onClick={prev} className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={next} className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
