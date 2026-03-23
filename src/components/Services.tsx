import { Globe, Megaphone, Palette, Share2, PenTool, Search, MapPin, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { icon: Globe, title: "Websites & Landing Pages", desc: "High-converting sites built for performance and results", stat: "88% of users won't return after a bad UX" },
  { icon: Search, title: "SEO & Local SEO", desc: "Dominate search rankings and Google Business Profiles", stat: "SEO drives 1,000%+ more traffic than organic social" },
  { icon: Megaphone, title: "Google & Social Ads", desc: "Targeted campaigns that maximize ROI across platforms", stat: "Google Ads avg. ROAS: $8 for every $1 spent" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategy, management, and growth across all channels", stat: "73% of consumers switch brands over poor social response" },
  { icon: PenTool, title: "Content & Copywriting", desc: "Compelling narratives that convert readers to customers", stat: "Short-form video delivers the highest ROI at 41%" },
  { icon: Palette, title: "Branding & Design", desc: "Visual identity systems that stand out and scale", stat: "Consistent branding increases revenue by up to 23%" },
  { icon: MapPin, title: "Google Business Profile", desc: "Local visibility that drives foot traffic and calls", stat: "46% of all Google searches have local intent" },
  { icon: BarChart3, title: "Project Management", desc: "End-to-end execution from strategy to delivery", stat: "Businesses with a strategy are 313% more likely to succeed" },
];

const ITEMS_PER_PAGE = 4;
const totalPages = Math.ceil(services.length / ITEMS_PER_PAGE);

const Services = () => {
  const [page, setPage] = useState(0);
  const visible = services.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);

  return (
    <section id="services" className="section-padding" aria-label="Services">
      <div className="container max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What I Offer</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            78% of marketers now use AI-powered tools to drive results. I combine AI efficiency with human creativity to deliver measurable growth.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {visible.map((s) => (
                <div
                  key={s.title}
                  className="glass rounded-xl p-6 group cursor-pointer card-hover"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-foreground text-sm mb-2">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                  <p className="text-[11px] text-primary/70 italic">📊 {s.stat}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
              className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
              className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
