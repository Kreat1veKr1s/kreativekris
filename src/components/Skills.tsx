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
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Full-Stack <span className="text-gradient">Marketer</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="glass rounded-xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-4 pb-3 border-b border-border/50">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/10 hover:border-primary/30 hover:bg-primary/15 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
