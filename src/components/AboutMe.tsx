import { motion } from "framer-motion";
import { Zap, Target, Rocket, Brain, Award, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Zap, label: "AI-Powered", desc: "Leveraging cutting-edge AI tools" },
  { icon: Target, label: "Results-Driven", desc: "Data-backed marketing strategies" },
  { icon: Rocket, label: "Growth Focused", desc: "Scaling brands from zero to hero" },
  { icon: Brain, label: "Full-Stack Marketer", desc: "Strategy to execution, end-to-end" },
];

const milestones = [
  { icon: Award, value: "50+", label: "Clients Served" },
  { icon: TrendingUp, value: "300%", label: "Avg. ROI Increase" },
  { icon: Rocket, value: "100+", label: "Campaigns Launched" },
];

const AboutMe = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            The <span className="text-gradient">Marketer</span> Behind the Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[hsl(var(--glow-warm))] to-primary" />
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Hi, I'm a Creative Marketing Strategist 👋
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack digital marketer who combines <span className="text-primary font-medium">creative vision</span> with 
                  <span className="text-primary font-medium"> data-driven strategy</span> to help brands grow, convert, and dominate their markets.
                </p>
                <p>
                  From building high-converting websites and running profitable ad campaigns to managing social 
                  media presences and crafting compelling content — I handle it all. My approach blends the latest 
                  AI tools with proven marketing fundamentals.
                </p>
                <p>
                  Whether you're a startup looking to launch or an established brand ready to scale, 
                  I bring the <span className="text-primary font-medium">strategy, creativity, and execution</span> to make it happen.
                </p>
                <blockquote className="border-l-2 border-primary/40 pl-4 text-sm italic text-muted-foreground/80 mt-2">
                  "94% of organizations say influencer & content marketing outperforms traditional digital ads in 2026." — Sprout Social
                </blockquote>
              </div>

              {/* Milestone stats */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-border/50">
                {milestones.map((m) => (
                  <div key={m.label} className="text-center">
                    <m.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold font-heading text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Highlights side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4"
          >
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass rounded-xl p-5 flex items-center gap-5 card-hover group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{h.label}</h4>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
