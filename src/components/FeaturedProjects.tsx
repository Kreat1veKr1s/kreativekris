import { ExternalLink, TrendingUp, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Globe, Megaphone, Palette, Share2, PenTool } from "lucide-react";

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

const portfolioCategories = [
  { icon: Globe, title: "Websites", items: ["Luxe Living Interiors", "Peak Fitness Studio", "GreenLeaf Organics", "Nova Tech Solutions"] },
  { icon: Megaphone, title: "Ads", items: ["Summit Financial – Google Ads", "FreshBite – Meta Ads", "AutoPro Dealers – PPC", "Bloom Beauty – TikTok Ads"] },
  { icon: Palette, title: "Branding", items: ["FreshBite Brand Identity", "Nova Tech Logo Suite", "Bloom Beauty Rebrand", "Summit Financial Guidelines"] },
  { icon: Share2, title: "Social Media", items: ["FreshBite Instagram Growth", "Peak Fitness TikTok", "GreenLeaf Pinterest", "AutoPro Facebook Strategy"] },
  { icon: PenTool, title: "Content", items: ["Luxe Living Blog Series", "Summit Financial Whitepapers", "FreshBite Recipe Videos", "Nova Tech Case Studies"] },
];

const ImagePlaceholder = ({ label, aspect }: { label: string; aspect: string }) => {
  const aspectClass = aspect === "portrait" ? "aspect-[3/4]" : aspect === "square" ? "aspect-square" : "aspect-video";
  return (
    <div className={`${aspectClass} w-full rounded-lg bg-muted/50 border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-muted/70 transition-all duration-300 cursor-pointer`}>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
        <ImageIcon className="w-4 h-4 text-muted-foreground" />
      </div>
      <span className="text-[11px] text-muted-foreground font-medium">{label}</span>
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
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Projects</span>
          </h2>
        </div>

        {/* Case Study Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${p.gradient} p-6 md:p-8`}>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex-1">
                    <span className="text-xs text-primary font-semibold tracking-wider uppercase">{p.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold font-heading mt-1 mb-3 text-foreground">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">{p.description}</p>
                  </div>
                  <Button variant="hero-outline" size="sm" className="shrink-0 self-start">
                    <ExternalLink className="w-4 h-4 mr-1" /> View Case Study
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-6">
                  {p.images.map((img) => (
                    <ImagePlaceholder key={img.label} label={img.label} aspect={img.aspect} />
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-5">
                  {p.results.map((r) => (
                    <div key={r} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                      <TrendingUp className="w-3 h-3 text-primary" />
                      <span className="text-xs font-medium text-foreground">{r}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button onClick={prev} className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center gap-1.5 mt-5">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-5" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Portfolio by Category — Grid */}
        <div className="mt-10">
          <h3 className="text-center font-heading text-xl font-bold text-foreground mb-5">
            Work by <span className="text-gradient">Category</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {portfolioCategories.map((cat) => (
              <div key={cat.title} className="glass rounded-2xl p-5 card-hover group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-sm text-foreground mb-2">{cat.title}</h4>
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex items-center gap-1.5">
                      <ImageIcon className="w-3 h-3 text-muted-foreground/40 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
