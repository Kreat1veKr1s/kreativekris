import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <FeaturedProjects />
      <PortfolioGrid />
      <Skills />
      <Tools />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
