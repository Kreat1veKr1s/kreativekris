import { ImageIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const galleryItems = [
  { label: "Website Homepage" },
  { label: "Social Media Post" },
  { label: "Brand Logo" },
  { label: "Ad Creative" },
  { label: "Email Campaign" },
  { label: "Landing Page" },
  { label: "Blog Header" },
  { label: "Product Photo" },
  { label: "Video Thumbnail" },
  { label: "Infographic" },
  { label: "Social Story" },
  { label: "Brochure Design" },
];

const ITEMS_PER_VIEW = 4;
const totalPages = Math.ceil(galleryItems.length / ITEMS_PER_VIEW);

const CreativeGallery = () => {
  const [page, setPage] = useState(0);
  const visible = galleryItems.slice(page * ITEMS_PER_VIEW, (page + 1) * ITEMS_PER_VIEW);

  return (
    <section id="gallery" className="section-padding bg-surface/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Creative <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-xs text-muted-foreground/70 mt-3 italic max-w-md mx-auto">
            Visual content is 40x more likely to be shared on social media — Buffer, 2026
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {visible.map((item) => (
                <div key={item.label} className="group cursor-pointer">
                  <div className="aspect-[4/3] w-full rounded-xl bg-muted/30 border-2 border-dashed border-border/40 flex flex-col items-center justify-center gap-2 hover:border-primary/40 hover:bg-muted/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <ImageIcon className="w-5 h-5 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="text-[11px] font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => setPage((p) => (p === 0 ? totalPages - 1 : p - 1))}
              className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === page ? "bg-primary w-6" : "bg-muted-foreground/30 w-1.5 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setPage((p) => (p === totalPages - 1 ? 0 : p + 1))}
              className="w-9 h-9 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-foreground transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreativeGallery;
