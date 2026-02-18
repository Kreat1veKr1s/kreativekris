import { Globe, Megaphone, PenTool, Share2, Palette, ImageIcon } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Websites",
    items: [
      { name: "Luxe Living Interiors", hasImage: true },
      { name: "Peak Fitness Studio", hasImage: true },
      { name: "GreenLeaf Organics", hasImage: true },
      { name: "Nova Tech Solutions", hasImage: true },
    ],
  },
  {
    icon: Megaphone,
    title: "Ads",
    items: [
      { name: "Summit Financial – Google Ads", hasImage: true },
      { name: "FreshBite – Meta Ads", hasImage: true },
      { name: "AutoPro Dealers – PPC", hasImage: true },
      { name: "Bloom Beauty – TikTok Ads", hasImage: true },
    ],
  },
  {
    icon: Palette,
    title: "Branding",
    items: [
      { name: "FreshBite Brand Identity", hasImage: true },
      { name: "Nova Tech Logo Suite", hasImage: true },
      { name: "Bloom Beauty Rebrand", hasImage: true },
      { name: "Summit Financial Guidelines", hasImage: true },
    ],
  },
  {
    icon: Share2,
    title: "Social Media",
    items: [
      { name: "FreshBite Instagram Growth", hasImage: true },
      { name: "Peak Fitness TikTok", hasImage: true },
      { name: "GreenLeaf Pinterest", hasImage: true },
      { name: "AutoPro Facebook Strategy", hasImage: true },
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    items: [
      { name: "Luxe Living Blog Series", hasImage: true },
      { name: "Summit Financial Whitepapers", hasImage: true },
      { name: "FreshBite Recipe Videos", hasImage: true },
      { name: "Nova Tech Case Studies", hasImage: true },
    ],
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
                  <li key={item.name} className="group/item cursor-pointer">
                    {/* Thumbnail placeholder */}
                    <div className="aspect-[16/9] w-full rounded-md bg-muted/40 border border-dashed border-border/50 flex items-center justify-center mb-2 group-hover/item:border-primary/30 group-hover/item:bg-muted/60 transition-all duration-300">
                      <ImageIcon className="w-5 h-5 text-muted-foreground/50 group-hover/item:text-primary/60 transition-colors" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary transition-colors shrink-0" />
                      {item.name}
                    </div>
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
