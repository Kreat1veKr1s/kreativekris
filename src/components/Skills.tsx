import { Award, ExternalLink } from "lucide-react";
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

        {/* Certifications — Accordion */}
        <div className="glass rounded-2xl p-6 md:p-8">
          <h3 className="font-heading text-xl font-bold text-foreground mb-4">
            Verified <span className="text-gradient">Credentials</span>
          </h3>
          <Accordion type="single" collapsible className="space-y-1">
            {certifications.map((cert) => (
              <AccordionItem key={cert.title} value={cert.title} className="border-border/30">
                <AccordionTrigger className="hover:no-underline py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <span className="font-heading font-semibold text-sm text-foreground">{cert.title}</span>
                      <span className="text-xs text-muted-foreground ml-2">({cert.year})</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-center justify-between pl-11 pt-1 pb-1">
                    <div>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                      aria-label={`View ${cert.title} certification`}
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      View Certificate
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
