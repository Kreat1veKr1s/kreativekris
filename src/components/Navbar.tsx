import { useState, useEffect, useCallback } from "react";
import { Menu, Sparkles, ArrowRight } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setOpen(false);
    },
    []
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass py-2 shadow-sm"
          : "py-4 md:py-5 bg-transparent"
      )}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container max-w-6xl flex items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 font-heading font-bold text-lg text-foreground group"
        >
          <Sparkles className="w-5 h-5 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <span className="tracking-tight">
            Kreative<span className="text-gradient">Kris</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  "relative px-3 py-2 text-sm rounded-md transition-all duration-300",
                  isActive
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary" />
                )}
              </a>
            );
          })}
          <Button
            variant="hero"
            size="sm"
            className="ml-4 rounded-full text-xs"
            asChild
          >
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, "#contact")}
            >
              Let's Talk
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </Button>
        </div>

        {/* Mobile menu via Sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="md:hidden text-foreground p-2 rounded-md hover:bg-muted/50 transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-72 bg-background/95 backdrop-blur-2xl border-border/30 p-0"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full pt-12 px-6 pb-8">
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive =
                    activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleSmoothScroll(e, item.href)}
                      className={cn(
                        "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                        isActive
                          ? "text-primary bg-primary/10 border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>

              <div className="mt-auto pt-6 border-t border-border/30">
                <Button
                  variant="hero"
                  className="w-full rounded-full"
                  asChild
                >
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                  >
                    Let's Talk
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
