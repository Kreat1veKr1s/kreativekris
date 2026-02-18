import { Star, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, Luxe Living Interiors",
    quote: "Working with CreativeEdge completely transformed our online presence. Our leads increased by 340% and we finally rank on page one for all our target keywords. Absolute game-changer.",
    rating: 5,
    platform: "Google",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "James Rodriguez",
    role: "Founder, FreshBite Meal Prep",
    quote: "The social media strategy they built for us was incredible. We went from zero to 25K followers in just 6 months. The content quality and engagement rates blew our expectations away.",
    rating: 5,
    platform: "LinkedIn",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: "Amanda Chen",
    role: "Marketing Director, Summit Financial",
    quote: "Their landing pages convert like crazy — 7.2% conversion rate! They truly understand persuasive copy and user psychology. Our cost per lead dropped 58% within the first quarter.",
    rating: 5,
    platform: "Upwork",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#14A800">
        <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06a2.205 2.205 0 0 1 2.195 2.195c0 1.21-.988 2.21-2.196 2.21zm0-6.62c-2.502 0-4.354 1.621-5.147 4.189a15.07 15.07 0 0 1-2.461-4.073H7.89v5.853c0 1.143-.928 2.074-2.074 2.074a2.074 2.074 0 0 1-2.074-2.074V6.654H1.68v5.853a4.137 4.137 0 0 0 4.138 4.138 4.143 4.143 0 0 0 4.138-4.138v-.981a15.143 15.143 0 0 0 1.858 2.849l-1.573 7.406h2.138l1.144-5.378c1.076.724 2.312 1.16 3.638 1.16a4.27 4.27 0 0 0 4.26-4.26 4.27 4.27 0 0 0-4.26-4.26v-.003z"/>
      </svg>
    ),
  },
  {
    name: "David Park",
    role: "Owner, Park's Auto Detailing",
    quote: "My Google Business Profile went from barely visible to dominating local search. I'm getting 5x more calls and walk-ins. Best marketing investment I've ever made, hands down.",
    rating: 5,
    platform: "Yelp",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#D32323">
        <path d="M20.16 12.594l-4.995 1.433c-.96.276-1.74-.8-1.176-1.63l2.905-4.308a1.072 1.072 0 0 1 1.596-.206 7.285 7.285 0 0 1 2.163 3.246c.224.694-.13 1.347-.493 1.465zm-5.773 3.61l4.026 3.082c.76.583.39 1.742-.555 1.749a7.285 7.285 0 0 1-3.863-1.164c-.58-.394-.7-1.088-.402-1.58l1.69-2.834c.44-.742 1.613-.572 1.104.747zm-2.154-1.96l-4.1 3.03c-.79.586-1.74-.248-1.428-1.252a7.285 7.285 0 0 1 2.094-3.296c.52-.452 1.213-.398 1.618.027l2.51 2.637c.574.604.096 1.46-.694.854zM10.58 9.2L6.47 7.806c-.8-.27-.67-1.467.192-1.8a7.285 7.285 0 0 1 3.87-.297c.67.143 1.08.73.93 1.306l-.918 3.586c-.212.828-1.324.77-1.536-.073l1.572 1.672zm1.253-2.126l1.037-4.93c.2-.96 1.543-.996 1.802-.054a7.285 7.285 0 0 1-.177 3.891c-.24.66-.848.94-1.39.748l-3.382-1.192c-.771-.271-.55-1.454.273-1.318l1.837.855z"/>
      </svg>
    ),
  },
  {
    name: "Rachel Foster",
    role: "Co-Founder, Bloom Botanicals",
    quote: "The branding package they created perfectly captures our vision. From logo to social templates, everything is cohesive and beautiful. Our brand finally feels premium and professional.",
    rating: 5,
    platform: "Google",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    name: "Marcus Thompson",
    role: "Director, TechVault Solutions",
    quote: "Their Google Ads management is phenomenal. We saw a 4.2x ROAS within the first month. The team is responsive, data-driven, and genuinely cares about our results.",
    rating: 5,
    platform: "LinkedIn",
    platformUrl: "#",
    platformIcon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-[hsl(var(--glow-warm))] fill-[hsl(var(--glow-warm))]" : "text-muted-foreground"}`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="section-padding bg-background">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Social Proof</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-xs text-muted-foreground/60 mt-3 italic">
            92% of consumers trust peer recommendations over brand advertising — Nielsen, 2026
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 relative">
          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-foreground transition-colors z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="text-center px-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <StarRating rating={t.rating} />
              <a
                href={t.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
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

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
