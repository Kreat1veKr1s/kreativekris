import { Globe, Megaphone, PenTool, Share2, Palette } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Websites",
    items: ["Luxe Living Interiors", "Peak Fitness Studio", "GreenLeaf Organics", "Nova Tech Solutions"],
  },
  {
    icon: Megaphone,
    title: "Ads",
    items: ["Summit Financial – Google Ads", "FreshBite – Meta Ads", "AutoPro Dealers – PPC", "Bloom Beauty – TikTok Ads"],
  },
  {
    icon: Palette,
    title: "Branding",
    items: ["FreshBite Brand Identity", "Nova Tech Logo Suite", "Bloom Beauty Rebrand", "Summit Financial Guidelines"],
  },
  {
    icon: Share2,
    title: "Social Media",
    items: ["FreshBite Instagram Growth", "Peak Fitness TikTok", "GreenLeaf Pinterest", "AutoPro Facebook Strategy"],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    items: ["Luxe Living Blog Series", "Summit Financial Whitepapers", "FreshBite Recipe Videos", "Nova Tech Case Studies"],
  },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Work by <span className="text-gradient">Category</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6 card-hover group">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground group/item cursor-pointer hover:text-foreground transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
