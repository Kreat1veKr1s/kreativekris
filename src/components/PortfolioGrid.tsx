import { Globe, Megaphone, PenTool, Share2, Palette, ImageIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const categories = [
  {
    icon: Globe,
    title: "Websites",
    items: [
      { name: "Luxe Living Interiors" },
      { name: "Peak Fitness Studio" },
      { name: "GreenLeaf Organics" },
      { name: "Nova Tech Solutions" },
    ],
  },
  {
    icon: Megaphone,
    title: "Ads",
    items: [
      { name: "Summit Financial – Google Ads" },
      { name: "FreshBite – Meta Ads" },
      { name: "AutoPro Dealers – PPC" },
      { name: "Bloom Beauty – TikTok Ads" },
    ],
  },
  {
    icon: Palette,
    title: "Branding",
    items: [
      { name: "FreshBite Brand Identity" },
      { name: "Nova Tech Logo Suite" },
      { name: "Bloom Beauty Rebrand" },
      { name: "Summit Financial Guidelines" },
    ],
  },
  {
    icon: Share2,
    title: "Social Media",
    items: [
      { name: "FreshBite Instagram Growth" },
      { name: "Peak Fitness TikTok" },
      { name: "GreenLeaf Pinterest" },
      { name: "AutoPro Facebook Strategy" },
    ],
  },
  {
    icon: PenTool,
    title: "Content Creation",
    items: [
      { name: "Luxe Living Blog Series" },
      { name: "Summit Financial Whitepapers" },
      { name: "FreshBite Recipe Videos" },
      { name: "Nova Tech Case Studies" },
    ],
  },
];

const PortfolioGrid = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Work by <span className="text-gradient">Category</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-2">
            {categories.map((cat) => (
              <AccordionItem key={cat.title} value={cat.title} className="border-border/30">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cat.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="font-heading font-semibold text-foreground">{cat.title}</span>
                    <span className="text-xs text-muted-foreground ml-1">({cat.items.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-2 gap-3 pt-2 pb-2">
                    {cat.items.map((item) => (
                      <div key={item.name} className="group/item cursor-pointer">
                        <div className="aspect-video w-full rounded-md bg-muted/40 border border-dashed border-border/50 flex items-center justify-center mb-2 group-hover/item:border-primary/30 group-hover/item:bg-muted/60 transition-all duration-300">
                          <ImageIcon className="w-5 h-5 text-muted-foreground/50 group-hover/item:text-primary/60 transition-colors" />
                        </div>
                        <p className="text-sm text-muted-foreground group-hover/item:text-foreground transition-colors">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;
