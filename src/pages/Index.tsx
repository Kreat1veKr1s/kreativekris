import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import AboutMe from "@/components/AboutMe";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import FeaturedProjects from "@/components/FeaturedProjects";
import PortfolioGrid from "@/components/PortfolioGrid";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import Onboarding from "@/components/Onboarding";
import CustomPlan from "@/components/CustomPlan";
import CreativeGallery from "@/components/CreativeGallery";
import LeadMagnet from "@/components/LeadMagnet";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import VisitorWidget from "@/components/VisitorWidget";
import MobileVisitorWidget from "@/components/MobileVisitorWidget";
import { Helmet } from "react-helmet-async";
import { usePageTracking } from "@/hooks/usePageTracking";

const Index = () => {
  usePageTracking();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>CreativeEdge — AI-Powered Marketing Strategist & Digital Growth Expert</title>
        <meta name="description" content="Full-stack digital marketer specializing in SEO, Google Ads, social media, web design & AI-driven campaigns. 50+ projects, 300% avg. ROI. Book a free call today." />
        <meta name="keywords" content="digital marketing, SEO, Google Ads, social media marketing, web design, branding, AI marketing, content strategy" />
        <link rel="canonical" href="https://creativeedge.dev" />
        <meta property="og:title" content="CreativeEdge — AI-Powered Marketing Strategist" />
        <meta property="og:description" content="Data-driven campaigns, high-converting websites, and brand growth. 50+ projects with 300% avg. ROI." />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="CreativeEdge — AI-Powered Marketing Strategist" />
        <meta name="twitter:description" content="Data-driven campaigns, high-converting websites, and brand growth." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "CreativeEdge",
          "description": "AI-powered creative marketing strategist offering SEO, Google Ads, social media, web design, and branding services.",
          "url": "https://creativeedge.dev",
          "priceRange": "$299-$999/mo",
          "areaServed": "Worldwide",
          "serviceType": ["Digital Marketing", "SEO", "Google Ads", "Social Media Marketing", "Web Design", "Branding"],
          "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "50" },
          "offers": [
            { "@type": "Offer", "name": "Launch / Starter", "price": "299", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Grow / Core", "price": "599", "priceCurrency": "USD" },
            { "@type": "Offer", "name": "Dominate / Elite", "price": "999", "priceCurrency": "USD" }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <VisitorWidget />
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
        <Pricing />
      </AnimatedSection>
      <AnimatedSection>
        <Onboarding />
      </AnimatedSection>
      <AnimatedSection>
        <CustomPlan />
      </AnimatedSection>
      <AnimatedSection>
        <LeadMagnet />
      </AnimatedSection>
      <AnimatedSection>
        <ContactCTA />
      </AnimatedSection>
      <Footer />
    </div>
  );
};

export default Index;
