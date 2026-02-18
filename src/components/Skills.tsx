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

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface/50">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Full-Stack <span className="text-gradient">Marketer</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8">
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
      </div>
    </section>
  );
};

export default Skills;
