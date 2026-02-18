import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  "Google Ads account setup & campaign management",
  "Keyword research & targeting strategy",
  "Ad copywriting & creative design",
  "A/B testing (ads, headlines, CTAs, landing pages)",
  "Conversion tracking (Google Tag Manager, GA4, Pixels)",
  "Retargeting and remarketing campaigns",
  "Shopify & YouTube Ads management",
  "Display, Search, Performance Max campaigns",
  "Competitor & market analysis",
  "Audience segmentation & demographic targeting",
  "Landing page design or optimization",
  "Conversion rate optimization (CRO)",
  "Monthly performance reporting & custom dashboards",
  "Funnel strategy development",
  "Brand voice & messaging development",
  "Social media ad management (Meta, TikTok, etc.)",
  "Content creation strategy",
  "Email marketing & automations",
  "CRM or lead capture integration",
  "SEO & local search optimization",
  "Call tracking & lead source analysis",
  "Influencer or partnership coordination",
  "Quarterly marketing audits & strategy sessions",
  "Reputation management",
  "Seasonal or event-based promo strategy",
];

const CustomPlan = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">À La Carte</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Build Your <span className="text-gradient">Custom Plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Need something specific? Pick and choose from my full menu of marketing services.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                {service}
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="hero" size="lg">
              Let's Talk Options <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlan;
