import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { useState } from "react";

const badges = [
  { title: "Google Analytics IQ", issuer: "Google", year: "2025", color: "from-[hsl(45_90%_55%)] to-[hsl(35_90%_45%)]", link: "#" },
  { title: "Google Search GA4", issuer: "Google", year: "2024", color: "from-[hsl(210_80%_55%)] to-[hsl(220_80%_45%)]", link: "#" },
  { title: "AI for Everyone", issuer: "DeepLearning.AI", year: "2024", color: "from-[hsl(255_45%_55%)] to-[hsl(218_70%_55%)]", link: "#" },
  { title: "AI Workplace Proficiency", issuer: "Superhuman AI", year: "2024", color: "from-[hsl(255_45%_55%)] to-[hsl(218_70%_55%)]", link: "#" },
  { title: "Meta Blueprint", issuer: "Meta", year: "2024", color: "from-[hsl(210_90%_55%)] to-[hsl(230_80%_50%)]", link: "#" },
  { title: "HubSpot Inbound Marketing", issuer: "HubSpot", year: "2023", color: "from-[hsl(15_90%_55%)] to-[hsl(25_85%_50%)]", link: "#" },
];

const CertBadgeWall = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Credentials</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            Certified <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xs text-muted-foreground/70 mt-3 italic max-w-md mx-auto">
            72% of clients prefer working with certified professionals — Google Partners, 2026
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, i) => (
            <motion.a
              key={badge.title}
              href={badge.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.08, y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <div className="glass rounded-xl p-4 flex flex-col items-center text-center gap-2 h-full border border-transparent group-hover:border-primary/30 transition-colors">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${badge.color} flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <span className="text-[11px] font-heading font-semibold text-foreground leading-tight mt-1">{badge.title}</span>
                <span className="text-[10px] text-muted-foreground">{badge.year}</span>

                {hoveredIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 translate-y-full z-20 glass rounded-lg px-3 py-2 shadow-xl min-w-[140px]"
                  >
                    <p className="text-[10px] text-muted-foreground">{badge.issuer}</p>
                    <div className="flex items-center justify-center gap-1 mt-1 text-primary">
                      <ExternalLink className="w-2.5 h-2.5" />
                      <span className="text-[9px] font-semibold">View Certificate</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertBadgeWall;
