import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Onboarding from "@/components/Onboarding";
import CustomPlan from "@/components/CustomPlan";
import Tools from "@/components/Tools";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <FeaturedProjects />
      <PortfolioGrid />
      <Skills />
      <Testimonials />
      <Pricing />
      <Onboarding />
      <CustomPlan />
      <Tools />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
