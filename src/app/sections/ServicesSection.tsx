import { ArrowUpRight, Code2, Monitor, Smartphone, Clapperboard } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../components/ui/accordion";
import { FadeUp, SectionLabel } from "./helpers";
const services = [{
  title: "Websites & digital experiences",
  icon: Code2,
  description: "Your most important first impression, made memorable. We pair distinctive design with fast, accessible development to create websites people enjoy using.",
  tags: ["UI / UX design", "Web development", "E-commerce", "Creative development"],
  phrase: "A better first impression.",
  number: "01"
}, {
  title: "Software that means business",
  icon: Monitor,
  description: "Less friction, more focus. Purpose-built desktop software and web applications that simplify the complex parts of running your business.",
  tags: ["Business platforms", "Desktop applications", "Dashboards", "Integrations"],
  phrase: "Complexity, simplified.",
  number: "02"
}, {
  title: "Mobile, made intuitive",
  icon: Smartphone,
  description: "From the first tap to the daily habit. Thoughtful mobile applications with clear interactions, dependable performance, and a consistent experience across devices.",
  tags: ["iOS & Android", "Flutter", "Product design", "Prototyping"],
  phrase: "Good things. Small screens.",
  number: "03"
}, {
  title: "Motion with a purpose",
  icon: Clapperboard,
  description: "Give your story a rhythm of its own. Video editing, artful color, and motion design that bring your brand into focus and keep people watching.",
  tags: ["Video editing", "Motion design", "Color grading", "Visual effects"],
  phrase: "Make every frame count.",
  number: "04"
}];
export function Services() {
  return <section id="services" className="section services-section">
    <div className="site-container">
      <FadeUp>
        <div className="section-heading">
          <div>
            <SectionLabel number="02">Our expertise</SectionLabel>
            <h2>Good design.<br /><span className="muted-heading">Great engineering.</span></h2>
          </div>
          <p>From your first website to your next big product.<br />One collaborative team, from start to finish.</p>
        </div>
      </FadeUp>
      <div className="services-layout">
        <FadeUp className="service-note">
          <div className="service-symbol" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
          </div>
          <p>Creative by instinct.<br />Technical by nature.</p>
          <a className="text-link" href="#contact">Find your starting point <ArrowUpRight size={17} /></a>
        </FadeUp>
        <FadeUp>
          <Accordion type="single" collapsible defaultValue="01" className="service-accordion">
            {services.map(service => <AccordionItem key={service.number} value={service.number} className="service-row">
              <AccordionTrigger className="service-trigger">
                <span className="eyebrow">{service.number}</span>
                <span>{service.title}</span>
              </AccordionTrigger>
              <AccordionContent className="service-content">
                <div className="service-description">
                  <p>{service.description}</p>
                  <div className="service-tags">
                    {service.tags.map(tag => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <a href="#contact" className="service-mini" aria-label={`Discuss ${service.title}`}>
                  <service.icon size={38} strokeWidth={1} />
                  <span>{service.phrase}</span>
                  <ArrowUpRight size={18} />
                </a>
              </AccordionContent>
            </AccordionItem>)}
          </Accordion>
        </FadeUp>
      </div>
    </div>
  </section>;
}
