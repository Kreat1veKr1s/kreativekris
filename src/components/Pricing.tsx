import { Button } from "@/components/ui/button";
import { Rocket, Sprout, Trophy, Check, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const [current, setCurrent] = useState(1); // Start on popular plan

  return (
    <section id="pricing" className="section-padding bg-surface/50">
      <div className="container max-w-6xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Pricing Plans</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Affordable Options, <span className="text-gradient">Impactful Results</span>
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Email marketing alone returns <span className="text-primary font-medium">$36–$42 for every $1 spent</span> in 2026.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {plans.map((plan) => (
            <PricingCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.25 }}
            >
              <PricingCard plan={plans[current]} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setCurrent((c) => (c === 0 ? plans.length - 1 : c - 1))}
              className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {plans.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-primary w-5" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c === plans.length - 1 ? 0 : c + 1))}
              className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }: { plan: typeof plans[0] }) => (
  <div
    className={`relative glass rounded-2xl p-6 md:p-8 flex flex-col ${
      plan.popular ? "border-primary/40 glow-border" : ""
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold tracking-wider uppercase">
        Best Seller
      </div>
    )}

    <div className="text-3xl mb-2">{plan.emoji}</div>
    <h3 className="font-heading font-bold text-xl text-foreground mb-1">{plan.name}</h3>
    <p className="text-sm text-muted-foreground mb-5">{plan.tagline}</p>

    <div className="mb-5">
      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
      <span className="text-muted-foreground text-sm">/month</span>
    </div>

    <ul className="space-y-2.5 mb-6 flex-1">
      {plan.features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
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
  </div>
);

export default Pricing;
