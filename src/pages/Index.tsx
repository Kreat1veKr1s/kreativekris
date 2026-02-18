import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Onboarding from "@/components/Onboarding";
import CustomPlan from "@/components/CustomPlan";
import Tools from "@/components/Tools";
import Certifications from "@/components/Certifications";
import CreativeGallery from "@/components/CreativeGallery";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Industries />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturedProjects />
      </AnimatedSection>
      <AnimatedSection>
        <PortfolioGrid />
      </AnimatedSection>
      <AnimatedSection>
        <CreativeGallery />
      </AnimatedSection>
      
      <AnimatedSection>
        <Skills />
      </AnimatedSection>
      <AnimatedSection>
        <Certifications />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Onboarding />
      </AnimatedSection>
      <AnimatedSection>
        <CustomPlan />
      </AnimatedSection>
      <AnimatedSection>
        <Tools />
      </AnimatedSection>
      <AnimatedSection>
        <ContactCTA />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
