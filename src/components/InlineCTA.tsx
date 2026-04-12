import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InlineCTAProps {
  headline: string;
  subtext: string;
  variant?: "compact" | "wide";
}

const InlineCTA = ({ headline, subtext, variant = "compact" }: InlineCTAProps) => {
  return (
    <div className="py-6 md:py-8 px-4">
      <div className="container max-w-4xl">
        <div className={`glass rounded-xl p-5 md:p-6 relative overflow-hidden ${variant === "wide" ? "text-center" : ""}`}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className={`relative z-10 flex ${variant === "wide" ? "flex-col items-center gap-4" : "flex-col sm:flex-row items-center gap-4"}`}>
            <div className={`flex items-center gap-3 ${variant === "wide" ? "" : "flex-1"}`}>
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Gift className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-heading font-semibold text-sm text-foreground">{headline}</p>
                <p className="text-xs text-muted-foreground">{subtext}</p>
              </div>
            </div>

            <Button variant="hero" size="sm" className="shrink-0" asChild>
              <a href="https://forms.gle/bqTWAHymhsTBfc5T8" target="_blank" rel="noopener noreferrer">
                <ArrowRight className="w-3.5 h-3.5" /> Get It
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineCTA;
