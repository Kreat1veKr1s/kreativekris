import { Rocket, Globe, Megaphone, Palette, Share2, PenTool, Zap } from "lucide-react";

const activities = [
  { icon: Globe, text: "Launched new website for AutoPro Dealers", time: "2 hours ago" },
  { icon: Megaphone, text: "Google Ads campaign live — Summit Financial", time: "5 hours ago" },
  { icon: Palette, text: "Delivered brand kit for Bloom Beauty", time: "1 day ago" },
  { icon: Share2, text: "Hit 25K followers — FreshBite Instagram", time: "2 days ago" },
  { icon: PenTool, text: "Published SEO blog series — Luxe Living", time: "3 days ago" },
  { icon: Zap, text: "A/B test winner: +42% CTR — Nova Tech", time: "4 days ago" },
  { icon: Rocket, text: "Onboarded new client — GreenLeaf Organics", time: "5 days ago" },
  { icon: Globe, text: "Landing page redesign — Peak Fitness Studio", time: "1 week ago" },
];

const LiveProjectFeed = () => {
  const doubled = [...activities, ...activities];

  return (
    <section className="py-8 overflow-hidden">
      <div className="container max-w-6xl mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Live Activity</span>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-slow gap-4" style={{ width: "max-content" }}>
          {doubled.map((a, i) => (
            <div
              key={i}
              className="flex items-center gap-3 glass rounded-full px-5 py-3 shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <a.icon className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground whitespace-nowrap">{a.text}</span>
              <span className="text-[10px] text-muted-foreground whitespace-nowrap">{a.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveProjectFeed;
