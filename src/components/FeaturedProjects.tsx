import { ExternalLink, TrendingUp, ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Megaphone, Palette, Share2, PenTool } from "lucide-react";

const projects = [
  {
    title: "Luxe Living Interiors",
    category: "Website • SEO • Google Ads",
    description: "Complete digital transformation for a luxury interior design firm. Built a stunning website, optimized for local SEO, and launched Google Ads campaigns that drove a 340% increase in qualified leads.",
    results: ["340% more leads", "Page 1 rankings", "$2.1M pipeline generated"],
    gradient: "from-primary/10 to-accent/10",
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
    gradient: "from-accent/10 to-primary/10",
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
    gradient: "from-primary/10 to-primary/5",
    images: [
      { label: "Landing Page", aspect: "landscape" },
      { label: "Ad Creative", aspect: "square" },
      { label: "Funnel Overview", aspect: "landscape" },
    ],
  },
];

const portfolioCategories = [
  { icon: Globe, title: "Websites", items: [
    { name: "Luxe Living Interiors", aspect: "landscape" },
    { name: "Peak Fitness Studio", aspect: "landscape" },
    { name: "GreenLeaf Organics", aspect: "landscape" },
    { name: "Nova Tech Solutions", aspect: "landscape" },
  ]},
  { icon: Megaphone, title: "Ads", items: [
    { name: "Summit Financial – Google Ads", aspect: "square" },
    { name: "FreshBite – Meta Ads", aspect: "square" },
    { name: "AutoPro Dealers – PPC", aspect: "square" },
    { name: "Bloom Beauty – TikTok Ads", aspect: "portrait" },
  ]},
  { icon: Palette, title: "Branding", items: [
    { name: "FreshBite Brand Identity", aspect: "square" },
    { name: "Nova Tech Logo Suite", aspect: "square" },
    { name: "Bloom Beauty Rebrand", aspect: "square" },
    { name: "Summit Financial Guidelines", aspect: "landscape" },
  ]},
  { icon: Share2, title: "Social Media", items: [
    { name: "FreshBite Instagram Growth", aspect: "portrait" },
    { name: "Peak Fitness TikTok", aspect: "portrait" },
    { name: "GreenLeaf Pinterest", aspect: "portrait" },
    { name: "AutoPro Facebook Strategy", aspect: "square" },
  ]},
  { icon: PenTool, title: "Content", items: [
    { name: "Luxe Living Blog Series", aspect: "landscape" },
    { name: "Summit Financial Whitepapers", aspect: "landscape" },
    { name: "FreshBite Recipe Videos", aspect: "landscape" },
    { name: "Nova Tech Case Studies", aspect: "landscape" },
  ]},
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
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xs text-muted-foreground/70 mt-3 italic max-w-md mx-auto">
            Case studies with measurable results are the #1 trust signal for B2B buyers — DemandGen, 2026
          </p>
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

                <div className="flex flex-wrap gap-2 mt-6">
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

          <button onClick={prev} className="absolute left-0 md:-left-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute right-0 md:-right-5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors z-10">
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="flex justify-center gap-1.5 mt-6">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Portfolio by Category — Accordion */}
        <div className="mt-12">
          <h3 className="text-center font-heading text-xl font-bold text-foreground mb-6">
            Work by <span className="text-gradient">Category</span>
          </h3>
          <div className="glass rounded-2xl p-5 md:p-6">
            <Accordion type="single" collapsible className="space-y-1">
              {portfolioCategories.map((cat) => (
                <AccordionItem key={cat.title} value={cat.title} className="border-border/30">
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <cat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-sm text-foreground">{cat.title}</span>
                      <span className="text-xs text-muted-foreground">({cat.items.length})</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 pb-1">
                      {cat.items.map((item) => (
                        <div key={item.name} className="group/item cursor-pointer flex flex-col gap-2 rounded-lg hover:bg-primary/5 transition-colors p-1.5">
                          <div className={`w-full rounded-lg bg-muted/50 border-2 border-dashed border-border/60 flex flex-col items-center justify-center gap-1.5 hover:border-primary/40 hover:bg-muted/70 transition-all duration-300 ${item.aspect === "portrait" ? "aspect-[3/4]" : item.aspect === "square" ? "aspect-square" : "aspect-video"}`}>
                            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                              <ImageIcon className="w-3.5 h-3.5 text-muted-foreground/50" />
                            </div>
                          </div>
                          <span className="text-xs text-muted-foreground group-hover/item:text-foreground transition-colors text-center leading-tight font-medium">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
