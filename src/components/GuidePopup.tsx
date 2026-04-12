import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Gift, X, Sparkles, Zap } from "lucide-react";

const DISMISSED_KEY = "guide_popup_dismissed";

const GuidePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISSED_KEY)) return;

    let armed = false;

    const armTimer = setTimeout(() => {
      armed = true;
    }, 5000);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      if (e.clientY <= 0) {
        setVisible(true);
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };


    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const dismiss = () => {
    setVisible(false);
    sessionStorage.setItem(DISMISSED_KEY, "1");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 60, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[380px] z-50"
        >
          <div className="glass rounded-2xl p-5 shadow-2xl border border-primary/20 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />

            <button
              onClick={dismiss}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-secondary/80 hover:bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Gift className="w-4 h-4 text-primary" />
                </div>
                <div className="inline-flex items-center gap-1 bg-primary/10 text-primary text-[10px] font-semibold px-2 py-0.5 rounded-full">
                  <Sparkles className="w-2.5 h-2.5" />
                  FREE — Worth $300+
                </div>
              </div>

              <h3 className="font-heading font-bold text-base text-foreground mb-1">
                Don't leave without your unfair advantage
              </h3>
              <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                Get the 2026 No-BS Growth Toolkit — premium tools, free credits & battle-tested playbooks.
              </p>

              <div className="flex items-center gap-3 text-[11px] text-foreground/70 mb-4">
                <span className="flex items-center gap-1"><Zap className="w-3 h-3 text-primary" /> AI tools</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 text-primary" /> Templates</span>
                <span className="flex items-center gap-1"><Gift className="w-3 h-3 text-primary" /> Free credits</span>
              </div>

              <Button variant="hero" size="sm" className="w-full text-xs" asChild>
                <a href="https://forms.gle/bqTWAHymhsTBfc5T8" target="_blank" rel="noopener noreferrer" onClick={dismiss}>
                  Get It Free →
                </a>
              </Button>

              <p className="text-[10px] text-muted-foreground/50 text-center mt-2">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuidePopup;
