import { TrendingUp, Quote, BarChart3, Zap } from "lucide-react";

const stats = [
  { value: "72%", label: "of consumers discover brands on social media before visiting a website", source: "HubSpot 2026" },
  { value: "5x", label: "higher ROI from SEO vs. paid ads over 12 months", source: "Search Engine Journal" },
  { value: "88%", label: "of local searches on mobile result in a call or visit within 24 hours", source: "Google 2026" },
  { value: "$6.50", label: "earned for every $1 spent on influencer & content marketing", source: "Forbes Digital" },
];

const trends = [
  { icon: Zap, title: "AI-Powered Personalization", desc: "Brands using AI-driven content see 40% higher engagement rates." },
  { icon: BarChart3, title: "Short-Form Video Dominance", desc: "Reels, Shorts & TikToks drive 3x more conversions than static posts." },
  { icon: TrendingUp, title: "Local SEO Is Non-Negotiable", desc: "46% of all Google searches have local intent — and rising." },
];

const quotes = [
  { text: "The best marketing doesn't feel like marketing.", author: "Tom Fishburne" },
  { text: "Content builds relationships. Relationships build trust. Trust drives revenue.", author: "Andrew Davis" },
];

const MarketingInsights = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">2026 Insights</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Why Marketing <span className="text-gradient">Matters Now</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            The numbers speak for themselves — businesses that invest in digital marketing outperform those that don't.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.value} className="glass rounded-xl p-5 text-center card-hover">
              <p className="text-3xl md:text-4xl font-bold text-gradient font-heading mb-2">{s.value}</p>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{s.label}</p>
              <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{s.source}</span>
            </div>
          ))}
        </div>

        {/* Trends */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {trends.map((t) => (
            <div key={t.title} className="glass rounded-xl p-6 card-hover group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <t.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{t.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>

        {/* Quotes */}
        <div className="grid md:grid-cols-2 gap-4">
          {quotes.map((q) => (
            <div key={q.author} className="glass rounded-xl p-6 flex gap-4 items-start">
              <Quote className="w-8 h-8 text-primary/30 shrink-0 mt-1" />
              <div>
                <p className="text-foreground/90 italic leading-relaxed mb-3">"{q.text}"</p>
                <p className="text-xs text-primary font-semibold tracking-wider uppercase">— {q.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingInsights;
