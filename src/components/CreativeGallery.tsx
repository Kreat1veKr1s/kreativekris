import { ImageIcon } from "lucide-react";

const galleryItems = [
  { label: "Website Homepage", span: "col-span-2 row-span-2", aspect: "aspect-square" },
  { label: "Social Media Post", span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { label: "Brand Logo", span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { label: "Ad Creative", span: "col-span-1 row-span-2", aspect: "aspect-[3/4]" },
  { label: "Email Campaign", span: "col-span-1 row-span-1", aspect: "aspect-video" },
  { label: "Landing Page", span: "col-span-2 row-span-1", aspect: "aspect-[21/9]" },
  { label: "Blog Header", span: "col-span-1 row-span-1", aspect: "aspect-video" },
  { label: "Product Photo", span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { label: "Video Thumbnail", span: "col-span-1 row-span-1", aspect: "aspect-video" },
  { label: "Infographic", span: "col-span-1 row-span-2", aspect: "aspect-[3/5]" },
  { label: "Social Story", span: "col-span-1 row-span-1", aspect: "aspect-[9/16] max-h-48" },
  { label: "Brochure Design", span: "col-span-2 row-span-1", aspect: "aspect-[21/9]" },
];

const CreativeGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-surface/30">
      <div className="container max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase mb-3">Gallery</p>
          <h2 className="text-4xl md:text-5xl font-bold font-heading">
            Creative <span className="text-gradient">Showcase</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A visual collection of websites, ads, branding, content, and creative projects.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-min">
          {galleryItems.map((item) => (
            <div
              key={item.label}
              className={`${item.span} group cursor-pointer`}
            >
              <div className={`${item.aspect} w-full h-full rounded-xl bg-muted/30 border-2 border-dashed border-border/40 flex flex-col items-center justify-center gap-3 hover:border-primary/40 hover:bg-muted/50 transition-all duration-300 overflow-hidden`}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <ImageIcon className="w-6 h-6 text-muted-foreground/50 group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground/60 group-hover:text-muted-foreground transition-colors">
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
