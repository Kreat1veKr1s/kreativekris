import { Sparkles, Wrench, Palette as PaletteIcon, BarChart3, Brain, Video } from "lucide-react";

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
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Toolkit</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Favorite <span className="text-gradient">Tools</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6 card-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <cat.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="space-y-2.5">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors cursor-default group">
                    <span className="text-lg">{tool.logo}</span>
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
