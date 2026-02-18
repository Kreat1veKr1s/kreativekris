import { Sparkles, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 py-6 md:py-8 px-4 sm:px-6" role="contentinfo">
    <div className="container max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
      <a href="#" className="flex items-center gap-2 font-heading font-semibold text-foreground" aria-label="CreativeEdge home">
        <Sparkles className="w-4 h-4 text-primary" />
        CreativeEdge
      </a>
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        Built with <Heart className="w-3 h-3 text-primary" aria-hidden="true" /> and AI
      </p>
    </div>
  </footer>
);

export default Footer;
