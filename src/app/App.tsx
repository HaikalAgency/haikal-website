import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router";
import { Navbar } from "./sections/NavbarSection";
import { Hero } from "./sections/HeroSection";
import { About } from "./sections/AboutSection";
import { Services } from "./sections/ServicesSection";
import { Process } from "./sections/ProcessSection";
import { Portfolio } from "./sections/PortfolioSection";
import { FeaturedEditsSection } from "./sections/FeaturedEditsSection";
import { Technologies } from "./sections/TechnologiesSection";
import { FAQ } from "./sections/FAQSection";
import { Contact } from "./sections/ContactSection";
import { Footer } from "./sections/FooterSection";
import { ProjectDetail } from "./sections/ProjectDetail";
function ScrollToTop() {
  const {
    pathname,
    hash
  } = useLocation();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (hash) document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({
        behavior: "instant"
      });else window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);
  return null;
}
export default function App() {
  return <div className="site-shell">
    <ScrollToTop />
    <Navbar />
    <main id="main" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<>
          <Hero />
          <Portfolio />
          <Services />
          <About />
          <Process />
          <FeaturedEditsSection />
          <Technologies />
          <FAQ />
          <Contact />
        </>} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="*" element={<section className="site-container missing-project">
          <h1>Page not found.</h1>
          <a href="/" className="button">Back to the studio ↗</a>
        </section>} />
      </Routes>
    </main>
    <Footer />
  </div>;
}
