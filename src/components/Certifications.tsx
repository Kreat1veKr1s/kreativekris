import { Award, ExternalLink, ImageIcon } from "lucide-react";

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

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Certifications</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Verified <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Industry-recognized credentials that back up my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="glass rounded-2xl overflow-hidden card-hover group"
            >
              {/* Placeholder image area */}
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
                    <h3 className="font-heading font-semibold text-foreground leading-tight">{cert.title}</h3>
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
    </section>
  );
};

export default Certifications;
