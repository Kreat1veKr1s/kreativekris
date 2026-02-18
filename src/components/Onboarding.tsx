import { MessageSquare, Upload, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Discovery Call",
    description: "Virtual meeting to discuss your goals and needs.",
  },
  {
    icon: Upload,
    number: "02",
    title: "Deliver Assets",
    description: "You'll deliver requirements — Logo, Links, Admin Access, etc.",
  },
  {
    icon: CalendarCheck,
    number: "03",
    title: "Review & Launch",
    description: "Review content samples and 1st month calendar for approval. Then I take over!",
  },
];

const Onboarding = () => {
  return (
    <section className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            3-Step <span className="text-gradient">Onboarding</span>
          </h2>
          <p className="text-muted-foreground mt-4">Easy onboarding, fast setup</p>
          <p className="text-xs text-muted-foreground/60 mt-2 italic">Brands that launch campaigns within 2 weeks see 47% higher first-month engagement — WordStream, 2026</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-gradient-to-r from-primary/40 to-transparent" />
              )}

              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <step.icon className="w-8 h-8 text-primary" />
              </motion.div>

              <span className="text-xs text-primary font-bold tracking-widest">STEP {step.number}</span>
              <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Onboarding;
