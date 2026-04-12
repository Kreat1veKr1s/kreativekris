import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const serviceGroups = [
  {
    title: "Advertising & Campaigns",
    items: [
      "Google Ads account setup & campaign management",
      "Keyword research & targeting strategy",
      "Ad copywriting & creative design",
      "A/B testing (ads, headlines, CTAs, landing pages)",
      "Retargeting and remarketing campaigns",
      "Shopify & YouTube Ads management",
      "Display, Search, Performance Max campaigns",
      "Social media ad management (Meta, TikTok, etc.)",
    ],
  },
  {
    title: "Analytics & Optimization",
    items: [
      "Conversion tracking (Google Tag Manager, GA4, Pixels)",
      "Competitor & market analysis",
      "Audience segmentation & demographic targeting",
      "Conversion rate optimization (CRO)",
      "Monthly performance reporting & custom dashboards",
      "Call tracking & lead source analysis",
      "Quarterly marketing audits & strategy sessions",
    ],
  },
  {
    title: "Content, Branding & Growth",
    items: [
      "Landing page design or optimization",
      "Funnel strategy development",
      "Brand voice & messaging development",
      "Content creation strategy",
      "Email marketing & automations",
      "CRM or lead capture integration",
      "SEO & local search optimization",
      "Influencer or partnership coordination",
      "Reputation management",
      "Seasonal or event-based promo strategy",
    ],
  },
];

const CustomPlan = () => {
  return (
    <section className="section-padding bg-surface/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12 md:mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">À La Carte</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Build Your <span className="text-gradient">Custom Plan</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Need something specific? Pick and choose from my full menu of marketing services.
          </p>
          <p className="text-xs text-muted-foreground/60 mt-2 italic">
            Personalized marketing plans deliver 5–8x ROI on marketing spend — McKinsey, 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
          <Accordion type="multiple" defaultValue={["Advertising & Campaigns"]} className="space-y-2">
            {serviceGroups.map((group) => (
              <AccordionItem key={group.title} value={group.title} className="border-border/30">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold text-foreground">{group.title}</span>
                    <span className="text-xs text-muted-foreground">({group.items.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 pt-1 pb-2">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-1.5" />
                        {item}
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 text-center">
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendar.google.com/calendar/appointments/AcZssZ1FqhARUyOuJU8fWs0Dcb5c2l5Xa3nMics-sMo=?gv=true" target="_blank" rel="noopener noreferrer">Let's Talk Options <ArrowRight className="w-5 h-5 ml-1" /></a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomPlan;
