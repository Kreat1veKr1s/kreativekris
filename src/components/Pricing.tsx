import { Button } from "@/components/ui/button";
import { Rocket, Sprout, Trophy, Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    icon: Rocket,
    name: "Launch / Starter",
    emoji: "🚀",
    tagline: "Best for new or small local businesses seeking a visibility boost.",
    price: "$299",
    features: [
      "Tailored monthly content calendar",
      "Daily posts matching your brand & voice",
      "Social profile optimization",
      "Local SEO setup or tune-up",
      "Flyer & business cards design + printing",
      "Monthly data results & strategy meeting",
    ],
    popular: false,
  },
  {
    icon: Sprout,
    name: "Grow / Core",
    emoji: "🌱",
    tagline: "My best seller! Best for local growth and engagement.",
    price: "$599",
    features: [
      "Everything from the Starter plan",
      "Google Local Service Ads setup & management",
      "Google Business Profile setup & management",
      "Daily website-blog content",
      "Mon–Fri assistance 11am–3pm",
    ],
    popular: true,
  },
  {
    icon: Trophy,
    name: "Dominate / Elite",
    emoji: "🥇",
    tagline: "Full-service marketing domination for serious growth.",
    price: "$999",
    features: [
      "Everything from the Core plan",
      "24/7 assistance",
      "Meta pixel installation",
      "Landing page creation",
      "Lead strategy & funneling",
      "Meta & Google Ads (2 campaigns max)",
      "Website monitoring, content refresh & SEO",
      "Online store optimization & product marketing",
      "Weekly data results & strategy meeting",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-surface/50">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Pricing Plans</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Affordable Options, <span className="text-gradient">Impactful Results</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-sm">
            Email marketing alone returns <span className="text-primary font-medium">$36–$42 for every $1 spent</span> in 2026. Imagine what a full strategy delivers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`relative glass rounded-2xl p-8 flex flex-col ${
                plan.popular ? "border-primary/40 glow-border" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
                  Best Seller
                </div>
              )}

              <div className="text-3xl mb-3">{plan.emoji}</div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-6">{plan.tagline}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/month</span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.popular ? "hero" : "hero-outline"}
                className="w-full"
              >
                Get Started <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
