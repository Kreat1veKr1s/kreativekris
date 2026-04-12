import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle, ArrowRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

interface InlineCTAProps {
  headline: string;
  subtext: string;
  variant?: "compact" | "wide";
}

const InlineCTA = ({ headline, subtext, variant = "compact" }: InlineCTAProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    if (trimmed.length > 255) {
      toast({ title: "Email is too long", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.from("subscribers" as any).insert({ email: trimmed });
      if (error) {
        if (error.code === "23505") {
          toast({ title: "You're already subscribed! Check your inbox 📬" });
          setSubscribed(true);
        } else {
          throw error;
        }
      } else {
        setSubscribed(true);
        toast({ title: "You're in! 🎉 Check your inbox for the guide." });
      }
    } catch {
      toast({ title: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  if (subscribed) {
    return (
      <div className="py-6 flex items-center justify-center gap-2 text-primary">
        <CheckCircle className="w-5 h-5" />
        <span className="font-heading font-semibold text-sm">You're on the list! Check your inbox.</span>
      </div>
    );
  }

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

            <form onSubmit={handleSubscribe} className={`flex gap-2 ${variant === "wide" ? "w-full max-w-md" : "w-full sm:w-auto"}`}>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                maxLength={255}
                className="h-9 bg-background/60 border-border/50 text-sm flex-1"
              />
              <Button type="submit" variant="hero" size="sm" disabled={loading} className="shrink-0">
                {loading ? "…" : <><ArrowRight className="w-3.5 h-3.5" /> Get It</>}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InlineCTA;
