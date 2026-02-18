import { Sparkles, Wrench, Palette as PaletteIcon, BarChart3, Brain, Video } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const toolCategories = [
  {
    icon: Brain,
    title: "AI & Productivity",
    tools: [
      { name: "ChatGPT", logo: "🤖" },
      { name: "Claude AI", logo: "🧠" },
      { name: "Notion", logo: "📋" },
      { name: "Slack", logo: "💬" },
      { name: "Trello", logo: "📊" },
    ],
  },
  {
    icon: Wrench,
    title: "Web & Development",
    tools: [
      { name: "WordPress", logo: "🌐" },
      { name: "Lovable", logo: "💜" },
      { name: "Webflow", logo: "⚡" },
      { name: "Shopify", logo: "🛒" },
      { name: "GitHub", logo: "🐙" },
    ],
  },
  {
    icon: PaletteIcon,
    title: "Design & Creative",
    tools: [
      { name: "Adobe Creative Suite", logo: "🎨" },
      { name: "Figma", logo: "🖼️" },
      { name: "Canva", logo: "✨" },
      { name: "Midjourney", logo: "🎆" },
    ],
  },
  {
    icon: Video,
    title: "Video & Content",
    tools: [
      { name: "Veo 3", logo: "🎬" },
      { name: "CapCut", logo: "✂️" },
      { name: "Premiere Pro", logo: "🎞️" },
      { name: "Loom", logo: "📹" },
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Ads",
    tools: [
      { name: "Google Analytics", logo: "📈" },
      { name: "Google Ads", logo: "🔍" },
      { name: "Meta Business Suite", logo: "📱" },
      { name: "SEMrush", logo: "🔎" },
      { name: "Hotjar", logo: "🔥" },
    ],
  },
  {
    icon: Sparkles,
    title: "Automation & Email",
    tools: [
      { name: "Zapier", logo: "⚙️" },
      { name: "Mailchimp", logo: "📧" },
      { name: "HubSpot", logo: "🧲" },
      { name: "ActiveCampaign", logo: "📬" },
    ],
  },
];

const Tools = () => {
  return (
    <section id="tools" className="section-padding">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Tools</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-2">
            {toolCategories.map((cat) => (
              <AccordionItem key={cat.title} value={cat.title} className="border-border/30">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <cat.icon className="w-4.5 h-4.5 text-primary" />
                    </div>
                    <span className="font-heading font-semibold text-foreground">{cat.title}</span>
                    <span className="text-xs text-muted-foreground ml-1">({cat.tools.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 pt-2 pb-1">
                    {cat.tools.map((tool) => (
                      <div key={tool.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/30 transition-colors">
                        <span className="text-base">{tool.logo}</span>
                        <span className="text-sm text-muted-foreground">{tool.name}</span>
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

export default Tools;
