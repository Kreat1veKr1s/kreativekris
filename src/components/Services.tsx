import { Globe, Megaphone, Palette, Share2, PenTool, Search, MapPin, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Websites & Landing Pages", desc: "High-converting sites built for performance and results" },
  { icon: Search, title: "SEO & Local SEO", desc: "Dominate search rankings and Google Business Profiles" },
  { icon: Megaphone, title: "Google & Social Ads", desc: "Targeted campaigns that maximize ROI across platforms" },
  { icon: Share2, title: "Social Media Marketing", desc: "Strategy, management, and growth across all channels" },
  { icon: PenTool, title: "Content & Copywriting", desc: "Compelling narratives that convert readers to customers" },
  { icon: Palette, title: "Branding & Design", desc: "Visual identity systems that stand out and scale" },
  { icon: MapPin, title: "Google Business Profile", desc: "Local visibility that drives foot traffic and calls" },
  { icon: BarChart3, title: "Project Management", desc: "End-to-end execution from strategy to delivery" },
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
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
