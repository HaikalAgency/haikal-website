import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Navbar } from "./sections/NavbarSection";
import { Hero } from "./sections/HeroSection";
import { About, WhyUs } from "./sections/AboutSection";
import { Services } from "./sections/ServicesSection";
import { Results } from "./sections/ResultsSection";
import { Process } from "./sections/ProcessSection";
import { Portfolio } from "./sections/PortfolioSection";
import { Technologies } from "./sections/TechnologiesSection";
import { Testimonials } from "./sections/TestimonialsSection";
import { FAQ } from "./sections/FAQSection";
import { Contact } from "./sections/ContactSection";
import { Footer } from "./sections/FooterSection";
import { ProjectDetail } from "./sections/ProjectDetail";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <WhyUs />
              <Services />
              <Results />
              <Process />
              <Portfolio />
              <Technologies />
              <Testimonials />
              <FAQ />
              <Contact />
            </>
          }
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}
