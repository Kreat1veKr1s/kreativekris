import BeforeAfterSlider from "./BeforeAfterSlider";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  {
    title: "Luxe Living Interiors — Website Redesign",
    stat: "340% more qualified leads",
    before: { bg: "from-destructive/20 to-destructive/5", metrics: ["Bounce rate: 72%", "Avg session: 0:45", "Leads/mo: 12"] },
    after: { bg: "from-primary/20 to-primary/5", metrics: ["Bounce rate: 28%", "Avg session: 3:20", "Leads/mo: 53"] },
  },
  {
    title: "FreshBite — Social Media Growth",
    stat: "25K followers in 6 months",
    before: { bg: "from-destructive/20 to-destructive/5", metrics: ["Followers: 340", "Engagement: 1.2%", "Monthly reach: 2K"] },
    after: { bg: "from-primary/20 to-primary/5", metrics: ["Followers: 25K", "Engagement: 12%", "Monthly reach: 480K"] },
  },
  {
    title: "Summit Financial — Ad Funnel",
    stat: "Cost per lead down 58%",
    before: { bg: "from-destructive/20 to-destructive/5", metrics: ["CPL: $142", "Conv. rate: 1.8%", "ROAS: 1.2x"] },
    after: { bg: "from-primary/20 to-primary/5", metrics: ["CPL: $59", "Conv. rate: 7.2%", "ROAS: 8.4x"] },
  },
];

const MetricCard = ({ metrics, variant }: { metrics: string[]; variant: "before" | "after" }) => (
  <div className={`w-full aspect-video bg-gradient-to-br ${variant === "before" ? "from-destructive/15 to-muted/50" : "from-primary/15 to-muted/50"} flex flex-col items-center justify-center gap-2 p-6`}>
    <div className={`text-xs font-bold uppercase tracking-widest mb-2 ${variant === "before" ? "text-destructive" : "text-primary"}`}>
      {variant === "before" ? "Before" : "After"}
    </div>
    {metrics.map((m) => (
      <div key={m} className="text-sm font-medium text-foreground/80 font-heading">{m}</div>
    ))}
  </div>
);

const ProjectTransformations = () => {
  const [current, setCurrent] = useState(0);
  const t = transformations[current];

  return (
    <section className="section-padding">
      <div className="container max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Transformations</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Before & <span className="text-gradient">After</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
            Drag the slider to see real results. Numbers don't lie.
          </p>
        </div>

        <div className="glass rounded-2xl p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-bold text-sm md:text-base text-foreground">{t.title}</h3>
            <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">{t.stat}</span>
          </div>

          <BeforeAfterSlider
            beforeLabel="Before"
            afterLabel="After"
            beforeContent={<MetricCard metrics={t.before.metrics} variant="before" />}
            afterContent={<MetricCard metrics={t.after.metrics} variant="after" />}
          />

          <div className="flex items-center justify-center gap-3 mt-5">
            <button
              onClick={() => setCurrent((c) => (c === 0 ? transformations.length - 1 : c - 1))}
              className="w-8 h-8 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {transformations.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-5" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrent((c) => (c === transformations.length - 1 ? 0 : c + 1))}
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

export default ProjectTransformations;
