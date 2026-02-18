import { Award, TrendingUp, Users, Briefcase, CheckCircle, Zap, Code, Palette, BarChart3, Mail, Video, ShoppingCart, Brain, Target, Clock, MessageSquare } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience", icon: Briefcase },
  { value: "50+", label: "Businesses Served", icon: Users },
  { value: "300%", label: "Organic Traffic Growth", icon: TrendingUp },
  { value: "50%", label: "Engagement Increase", icon: BarChart3 },
];

const certifications = [
  "Google Certified — Analytics IQ",
  "Google Certified — Paid Search",
  "Google Certified — Google Ads",
  "Meta Certified Digital Marketing Associate",
];

const expertiseAreas = [
  { icon: Target, title: "Google & Meta Ads", years: "5+", desc: "High-performance PPC campaigns tailored to your goals" },
  { icon: MessageSquare, title: "Social Media Marketing", years: "6+", desc: "Content strategies, platform management & engagement growth" },
  { icon: TrendingUp, title: "SEO & Local SEO", years: "", desc: "Improved search visibility with keyword strategies & on-site optimization" },
  { icon: Zap, title: "Content & Copywriting", years: "", desc: "SEO-rich content that increases organic traffic & retention" },
  { icon: Code, title: "Web Development & UX", years: "", desc: "Front-end development focused on design, performance & conversion" },
  { icon: Mail, title: "Email Marketing & Automation", years: "", desc: "Automated campaigns with high open rates via Mailchimp & HubSpot" },
  { icon: Palette, title: "Creative Design", years: "10+", desc: "High-quality visuals using Canva & Adobe Creative Suite" },
  { icon: Video, title: "Short-Form Video", years: "", desc: "Scroll-stopping content for TikTok, Reels & YouTube Shorts" },
  { icon: ShoppingCart, title: "E-commerce Marketing", years: "", desc: "Shopify optimization, targeted ads & conversion rate boosts" },
  { icon: Brain, title: "Marketing Automation & CRM", years: "", desc: "Streamlined workflows with HubSpot & Salesforce" },
];

const skillCategories = [
  {
    title: "Digital Marketing",
    skills: ["SEO", "PPC / Google Ads", "Social Media Marketing", "Content Marketing", "Email Marketing", "A/B Testing", "CRO"],
  },
  {
    title: "Analytics & Tools",
    skills: ["Google Analytics", "Meta Business Suite", "SEMrush", "Ahrefs", "Hotjar", "Google Tag Manager", "Performance Reporting"],
  },
  {
    title: "Design & Development",
    skills: ["Adobe Creative Suite", "Canva", "HTML/CSS/JS", "UX/UI Design", "Web Design", "Video Production", "Graphic Design"],
  },
  {
    title: "Strategy & Leadership",
    skills: ["Campaign Management", "Brand Strategy", "Project Management", "CRM Integration", "Marketing Automation", "Trend Analysis", "AI Proficiency"],
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="section-padding bg-surface/50">
      <div className="container max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Hi, I'm <span className="text-gradient">Kristen Grajeda</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
            A creative, digital marketing specialist with over a decade of experience helping businesses grow through powerful, data-backed strategies. From lead generation to brand building, I bring full-spectrum marketing solutions that drive measurable results.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 text-center card-hover">
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-3" />
              <p className="text-3xl md:text-4xl font-bold font-heading text-gradient mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="glass rounded-xl p-8 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-heading font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Expertise Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading">
              Areas of <span className="text-gradient">Expertise</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((area) => (
              <div key={area.title} className="glass rounded-xl p-6 card-hover group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-heading font-semibold text-foreground">{area.title}</h4>
                      {area.years && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20">
                          {area.years} yrs
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Full Marketing Stack */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold font-heading">
              Full Marketing <span className="text-gradient">Stack</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat) => (
              <div key={cat.title} className="glass rounded-xl p-6">
                <h4 className="font-heading font-semibold text-foreground mb-4 pb-3 border-b border-border/50">{cat.title}</h4>
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

        {/* CTA */}
        <div className="glass rounded-xl p-8 md:p-12 text-center glow-border">
          <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
            Let's Build Something <span className="text-gradient">Impactful</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed">
            I stay ahead of trends so you don't have to — using the most current strategies and tools to give your business an edge. Whether you're launching a new product, rebranding, or optimizing for growth, I bring the skills and strategy to help you succeed.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold shadow-[0_0_20px_hsl(175_80%_50%/0.3)] hover:shadow-[0_0_30px_hsl(175_80%_50%/0.5)] hover:bg-primary/90 transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
