import { ImageIcon } from "lucide-react";

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

const CreativeGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-surface/30">
      <div className="container max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Creative <span className="text-gradient">Showcase</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {galleryItems.map((item) => (
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
        </div>
      </div>
    </section>
  );
};

export default CreativeGallery;
