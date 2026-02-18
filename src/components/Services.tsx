import { Globe, Megaphone, Palette, Share2, PenTool, Search, MapPin, BarChart3 } from "lucide-react";

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

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">What I Do</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            78% of marketers now use AI-powered tools to drive results. I combine AI efficiency with human creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass rounded-xl p-6 card-hover group cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">{s.desc}</p>
              <p className="text-xs text-primary/70 italic">📊 {s.stat}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
