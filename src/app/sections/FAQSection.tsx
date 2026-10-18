import { ArrowUpRight } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { FadeUp, SectionLabel } from "./helpers";
const items = [{
  q: "How long does a typical project take?",
  a: "Most web projects ship in 4–10 weeks depending on complexity. Desktop and mobile apps typically take 8–16 weeks. We scope timelines precisely during the discovery phase."
}, {
  q: "Do you work with international clients?",
  a: "Yes. We work asynchronously with clients across time zones. All communication happens in English through structured weekly check-ins and shared project boards."
}, {
  q: "What is your pricing structure?",
  a: "We price per project scope, not hourly. After discovery, you receive a fixed quote with defined deliverables so there are no surprises at invoice time."
}, {
  q: "Who owns the code after delivery?",
  a: "You do, completely. Full IP transfer is standard in every engagement. You receive the full repository, documentation, and deployment credentials."
}, {
  q: "Do you offer ongoing maintenance?",
  a: "Yes. We offer monthly retainer agreements for bug fixes, updates, and feature iterations. Clients can also engage us for one-off work after launch."
}];
export function FAQ() {
  return <section id="faq" className="section site-container faq-section">
    <FadeUp>
      <SectionLabel number="06">A little clarity</SectionLabel>
      <h2>Good questions.<br /><span className="muted-heading">Honest answers.</span></h2>
      <p className="faq-intro">A few things you might be wondering.</p>
      <span className="eyebrow faq-caption">FAQ / Before we begin</span>
      <a href="#contact" className="text-link">Ask us something else <ArrowUpRight size={17} /></a>
    </FadeUp>
    <FadeUp delay={0.1}>
      <Accordion type="single" collapsible className="faq-accordion">
        {items.map((item, i) => <AccordionItem key={item.q} value={String(i)} className="faq-item">
          <AccordionTrigger className="faq-trigger">{item.q}</AccordionTrigger>
          <AccordionContent className="faq-answer">{item.a}</AccordionContent>
        </AccordionItem>)}
      </Accordion>
    </FadeUp>
  </section>;
}
