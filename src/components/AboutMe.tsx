import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Zap, Target, Rocket, Brain, Award, TrendingUp, Star, ExternalLink, ChevronLeft, ChevronRight, Sparkles, Wrench, Palette as PaletteIcon, BarChart3, Video, Camera, Shield, Globe, BadgeCheck, ThumbsUp, DollarSign } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const profileBadges = [
{ icon: Globe, label: "Remote Experienced" },
{ icon: BadgeCheck, label: "Google Certified" },
{ icon: Zap, label: "AI-Powered" },
{ icon: ThumbsUp, label: "Top Reviewed" },
{ icon: DollarSign, label: "Affordable" },
{ icon: Shield, label: "Trusted Partner" }];


const highlights = [
{ icon: Zap, label: "AI-Powered", desc: "Leveraging cutting-edge AI tools" },
{ icon: Target, label: "Results-Driven", desc: "Data-backed marketing strategies" },
{ icon: Rocket, label: "Growth Focused", desc: "Scaling brands from zero to hero" },
{ icon: Brain, label: "Full-Stack Marketer", desc: "Strategy to execution, end-to-end" }];


const milestones = [
{ icon: Award, value: "50+", label: "Clients Served" },
{ icon: TrendingUp, value: "300%", label: "Avg. ROI Increase" },
{ icon: Rocket, value: "100+", label: "Campaigns Launched" }];


const testimonials = [
{
  name: "Sarah Mitchell",
  role: "CEO, Luxe Living Interiors",
  quote: "Working with CreativeEdge completely transformed our online presence. Our leads increased by 340% and we finally rank on page one for all our target keywords. Absolute game-changer.",
  rating: 5,
  platform: "Google",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>

},
{
  name: "James Rodriguez",
  role: "Founder, FreshBite Meal Prep",
  quote: "The social media strategy they built for us was incredible. We went from zero to 25K followers in just 6 months. The content quality and engagement rates blew our expectations away.",
  rating: 5,
  platform: "LinkedIn",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

},
{
  name: "Amanda Chen",
  role: "Marketing Director, Summit Financial",
  quote: "Their landing pages convert like crazy — 7.2% conversion rate! They truly understand persuasive copy and user psychology. Our cost per lead dropped 58% within the first quarter.",
  rating: 5,
  platform: "Upwork",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#14A800">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.205 2.205 0 0 1 2.195 2.195c0 1.21-.988 2.21-2.196 2.21zm0-6.62c-2.502 0-4.354 1.621-5.147 4.189a15.07 15.07 0 0 1-2.461-4.073H7.89v5.853c0 1.143-.928 2.074-2.074 2.074a2.074 2.074 0 0 1-2.074-2.074V6.654H1.68v5.853a4.137 4.137 0 0 0 4.138 4.138 4.143 4.143 0 0 0 4.138-4.138v-.981a15.143 15.143 0 0 0 1.858 2.849l-1.573 7.406h2.138l1.144-5.378c1.076.724 2.312 1.16 3.638 1.16a4.27 4.27 0 0 0 4.26-4.26 4.27 4.27 0 0 0-4.26-4.26v-.003z" />
      </svg>

},
{
  name: "David Park",
  role: "Owner, Park's Auto Detailing",
  quote: "My Google Business Profile went from barely visible to dominating local search. I'm getting 5x more calls and walk-ins. Best marketing investment I've ever made, hands down.",
  rating: 5,
  platform: "Yelp",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D32323">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 7.285 7.285 0 0 1 2.163 3.246c.224.694-.13 1.347-.493 1.465zm-5.773 3.61l4.026 3.082c.76.583.39 1.742-.555 1.749a7.285 7.285 0 0 1-3.863-1.164c-.58-.394-.7-1.088-.402-1.58l1.69-2.834c.44-.742 1.613-.572 1.104.747zm-2.154-1.96l-4.1 3.03c-.79.586-1.74-.248-1.428-1.252a7.285 7.285 0 0 1 2.094-3.296c.52-.452 1.213-.398 1.618.027l2.51 2.637c.574.604.096 1.46-.694.854zM10.58 9.2L6.47 7.806c-.8-.27-.67-1.467.192-1.8a7.285 7.285 0 0 1 3.87-.297c.67.143 1.08.73.93 1.306l-.918 3.586c-.212.828-1.324.77-1.536-.073l1.572 1.672zm1.253-2.126l1.037-4.93c.2-.96 1.543-.996 1.802-.054a7.285 7.285 0 0 1-.177 3.891c-.24.66-.848.94-1.39.748l-3.382-1.192c-.771-.271-.55-1.454.273-1.318l1.837.855z" />
      </svg>

},
{
  name: "Rachel Foster",
  role: "Co-Founder, Bloom Botanicals",
  quote: "The branding package they created perfectly captures our vision. From logo to social templates, everything is cohesive and beautiful. Our brand finally feels premium and professional.",
  rating: 5,
  platform: "Google",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
      </svg>

},
{
  name: "Marcus Thompson",
  role: "Director, TechVault Solutions",
  quote: "Their Google Ads management is phenomenal. We saw a 4.2x ROAS within the first month. The team is responsive, data-driven, and genuinely cares about our results.",
  rating: 5,
  platform: "LinkedIn",
  platformUrl: "#",
  platformIcon:
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>

}];


const toolCategories = [
{
  icon: Brain,
  title: "AI & Productivity",
  tools: [
  { name: "ChatGPT", logo: "🤖" },
  { name: "Claude AI", logo: "🧠" },
  { name: "Notion", logo: "📋" },
  { name: "Slack", logo: "💬" },
  { name: "Trello", logo: "📊" }]

},
{
  icon: Wrench,
  title: "Web & Development",
  tools: [
  { name: "WordPress", logo: "🌐" },
  { name: "Lovable", logo: "💜" },
  { name: "Webflow", logo: "⚡" },
  { name: "Shopify", logo: "🛒" },
  { name: "GitHub", logo: "🐙" }]

},
{
  icon: PaletteIcon,
  title: "Design & Creative",
  tools: [
  { name: "Adobe Creative Suite", logo: "🎨" },
  { name: "Figma", logo: "🖼️" },
  { name: "Canva", logo: "✨" },
  { name: "Midjourney", logo: "🎆" }]

},
{
  icon: Video,
  title: "Video & Content",
  tools: [
  { name: "Veo 3", logo: "🎬" },
  { name: "CapCut", logo: "✂️" },
  { name: "Premiere Pro", logo: "🎞️" },
  { name: "Loom", logo: "📹" }]

},
{
  icon: BarChart3,
  title: "Analytics & Ads",
  tools: [
  { name: "Google Analytics", logo: "📈" },
  { name: "Google Ads", logo: "🔍" },
  { name: "Meta Business Suite", logo: "📱" },
  { name: "SEMrush", logo: "🔎" },
  { name: "Hotjar", logo: "🔥" }]

},
{
  icon: Sparkles,
  title: "Automation & Email",
  tools: [
  { name: "Zapier", logo: "⚙️" },
  { name: "Mailchimp", logo: "📧" },
  { name: "HubSpot", logo: "🧲" },
  { name: "ActiveCampaign", logo: "📬" }]

}];


const StarRating = ({ rating }: {rating: number;}) =>
<div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) =>
  <Star
    key={i}
    className={`w-4 h-4 ${i < rating ? "text-[hsl(var(--glow-warm))] fill-[hsl(var(--glow-warm))]" : "text-muted-foreground"}`} />

  )}
  </div>;


const AboutMe = () => {
  const [current, setCurrent] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const prev = () => setCurrent((c) => c === 0 ? testimonials.length - 1 : c - 1);
  const next = () => setCurrent((c) => c === testimonials.length - 1 ? 0 : c + 1);
  const t = testimonials[current];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="section-padding">
      <div className="container max-w-6xl">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold font-heading">
            The <span className="text-gradient">Marketer</span> Behind the Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Bio side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5">

            {/* Profile Photo Block */}
            <div className="glass rounded-2xl p-5 md:p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[hsl(var(--glow-warm))] to-primary" />
              
              <div className="flex flex-col sm:flex-row items-center gap-5">
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-2xl border-2 border-dashed border-primary/30 hover:border-primary/60 transition-colors cursor-pointer group overflow-hidden bg-primary/5 shrink-0">

                  {profileImage ?
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover" /> :

                  <div className="flex flex-col items-center justify-center h-full text-muted-foreground group-hover:text-primary transition-colors">
                      <Camera className="w-7 h-7 mb-1.5" />
                      <span className="text-xs font-medium">Upload Photo</span>
                    </div>
                  }
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden" />

                </div>

                {/* Highlight Badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-1.5">
                  {profileBadges.map((badge) =>
                  <div
                    key={badge.label}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-medium text-primary">

                      <badge.icon className="w-3 h-3" />
                      <span>{badge.label}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bio Card */}
            <div className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-[hsl(var(--glow-warm))] to-primary" />
              
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Hi, I'm a Creative Marketing Strategist 👋
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Combining .creative touch with data-driven strategy to help brands grow, convert, and dominate their markets.
                  <span className="text-primary font-medium">creative vision</span> with 
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
                {milestones.map((m) =>
                <div key={m.label} className="text-center">
                    <m.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-2xl font-bold font-heading text-foreground">{m.value}</p>
                    <p className="text-xs text-muted-foreground">{m.label}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Highlights side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-4">

            {highlights.map((h, i) =>
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass rounded-xl p-5 flex items-center gap-5 card-hover group">

                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <h.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">{h.label}</h4>
                  <p className="text-sm text-muted-foreground">{h.desc}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Social Proof / Testimonials Carousel */}
        <div className="mt-10 md:mt-16">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground mb-2">
            What Clients <span className="text-gradient">Say</span>
          </h3>
          <p className="text-center text-xs text-muted-foreground/60 italic mb-8">
            92% of consumers trust peer recommendations over brand advertising — Nielsen, 2026
          </p>

          <div className="glass rounded-2xl p-6 md:p-12 relative">
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">

              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10">

              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="text-center px-4 md:px-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <StarRating rating={t.rating} />
                <a
                  href={t.platformUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">

                  {t.platformIcon}
                  <span>{t.platform}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <blockquote className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                "{t.quote}"
              </blockquote>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, i) =>
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`
                } />

              )}
            </div>
          </div>
        </div>

        {/* Toolkit */}
        <div className="mt-10 md:mt-16">
          <h3 className="text-center font-heading text-2xl font-bold text-foreground mb-8">
            My <span className="text-gradient">Toolkit</span>
          </h3>

          <div className="glass rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-2">
              {toolCategories.map((cat) =>
              <AccordionItem key={cat.title} value={cat.title} className="border-border/30">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                        <cat.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <span className="font-heading font-semibold text-foreground">{cat.title}</span>
                      <span className="text-xs text-muted-foreground ml-1">({cat.tools.length})</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-wrap gap-2 pt-2 pb-1">
                      {cat.tools.map((tool) =>
                    <div key={tool.name} className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/30 hover:border-primary/30 transition-colors">
                          <span className="text-base">{tool.logo}</span>
                          <span className="text-sm text-muted-foreground">{tool.name}</span>
                        </div>
                    )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              )}
            </Accordion>
          </div>
        </div>
      </div>
    </section>);

};

export default AboutMe;