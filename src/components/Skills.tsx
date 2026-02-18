import { Award, ExternalLink, ImageIcon } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const skillCategories = [
  {
    title: "Web & Development",
    skills: ["Website Design", "Landing Pages", "WordPress", "Webflow", "UI/UX Design", "Responsive Design", "A/B Testing"],
  },
  {
    title: "SEO & Search",
    skills: ["On-Page SEO", "Local SEO", "Technical SEO", "Google Business Profile", "Keyword Research", "Link Building", "Analytics"],
  },
  {
    title: "Advertising",
    skills: ["Google Ads", "Meta Ads (FB/IG)", "TikTok Ads", "LinkedIn Ads", "Retargeting", "Display Ads", "Campaign Optimization"],
  },
  {
    title: "Social Media",
    skills: ["Strategy & Planning", "Community Management", "Content Calendars", "Influencer Outreach", "Analytics & Reporting", "Trend Analysis"],
  },
  {
    title: "Content & Copy",
    skills: ["Copywriting", "Blog Writing", "Email Marketing", "Video Scripts", "Brand Voice", "Content Strategy", "Storytelling"],
  },
  {
    title: "Strategy & Management",
    skills: ["Project Management", "Brand Strategy", "Market Research", "Data Analysis", "AI Proficiency", "Client Relations", "Team Leadership"],
  },
];

const certifications = [
  {
    title: "Google Analytics IQ",
    year: "2025",
    issuer: "Google",
    link: "#",
  },
  {
    title: "Google Search GA4",
    year: "2024",
    issuer: "Google",
    link: "#",
  },
  {
    title: "AI for Everyone",
    year: "2024",
    issuer: "DeepLearning.AI — Andrew Ng",
    link: "#",
  },
  {
    title: "AI Workplace Proficiency",
    year: "2024",
    issuer: "Superhuman AI",
    link: "#",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Skills & Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Full-Stack <span className="text-gradient">Marketer</span>
          </h2>
        </div>

        {/* Skills Accordion */}
        <div className="glass rounded-2xl p-6 md:p-8 mb-10">
          <Accordion type="multiple" defaultValue={["Web & Development"]} className="space-y-2">
            {skillCategories.map((cat) => (
              <AccordionItem key={cat.title} value={cat.title} className="border-border/30">
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-semibold text-foreground">{cat.title}</span>
                    <span className="text-xs text-muted-foreground">({cat.skills.length})</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2 pt-2 pb-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10 hover:border-primary/30 hover:bg-primary/15 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-center font-heading text-2xl font-bold text-foreground mb-6">
            Verified <span className="text-gradient">Credentials</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="glass rounded-2xl overflow-hidden card-hover group"
              >
                <div className="aspect-video w-full bg-muted/30 border-b border-border/30 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-muted-foreground/40">
                    <ImageIcon className="w-10 h-10" />
                    <span className="text-xs font-medium">Upload certificate image</span>
                  </div>
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground leading-tight">{cert.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      <span className="text-xs text-primary/70 font-medium">{cert.year}</span>
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-secondary/50 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all shrink-0 mt-0.5"
                    aria-label={`View ${cert.title} certification`}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
