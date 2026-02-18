import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gift, CheckCircle, Zap, BookOpen, Wrench, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const perks = [
  { icon: Wrench, text: "Premium tool stack worth $150+" },
  { icon: Zap, text: "Free credits for top AI & ad platforms" },
  { icon: BookOpen, text: "Step-by-step playbooks & templates" },
  { icon: Sparkles, text: "Exclusive 2026 trend predictions" },
];

const LeadMagnet = () => {
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
      const { error } = await supabase.from("subscribers").insert({ email: trimmed });
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

  return (
    <section id="free-guide" className="section-padding">
      <div className="container max-w-5xl">
        <div className="glass rounded-2xl p-8 md:p-14 relative overflow-hidden">
          {/* Decorative accents */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-center">
            {/* Left — Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                <Gift className="w-3.5 h-3.5" />
                FREE — Valued at $300+
              </div>

              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">
                The 2026 <span className="text-gradient">No-BS Guide</span> & Toolkit
              </h2>
              <p className="text-muted-foreground max-w-lg mb-6">
                Everything you need to launch, grow, and dominate online — premium tools, free credits, and battle-tested playbooks. No fluff, just results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                {perks.map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2 text-sm text-foreground/80">
                    <Icon className="w-4 h-4 text-primary shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div className="w-full lg:w-[340px] shrink-0">
              {subscribed ? (
                <div className="flex flex-col items-center gap-3 py-6 text-center">
                  <CheckCircle className="w-12 h-12 text-primary" />
                  <p className="text-lg font-semibold font-heading">You're on the list!</p>
                  <p className="text-sm text-muted-foreground">Check your inbox — the guide is on its way.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-3">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    maxLength={255}
                    className="h-12 bg-background/60 border-border/50 text-base"
                  />
                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full text-base"
                    disabled={loading}
                  >
                    {loading ? "Sending…" : "Get the Free Guide →"}
                  </Button>
                  <p className="text-[11px] text-muted-foreground/60 text-center leading-tight">
                    No spam, ever. Unsubscribe anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
