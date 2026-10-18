import { ArrowDownRight } from "lucide-react";
import { FadeUp, SectionLabel } from "./helpers";
const steps = [{
  title: "Find the right question.",
  name: "Discover & define",
  description: "We listen first. Your goals, your audience, and the things that aren’t working. Together, we make a clear plan."
}, {
  title: "Make the idea tangible.",
  name: "Design & explore",
  description: "We turn direction into a visual language and interactive prototypes. You’re part of the conversation at every step."
}, {
  title: "Build with intention.",
  name: "Develop & refine",
  description: "Considered code, careful testing, and attention to the smallest interaction. Beautiful is only the beginning."
}, {
  title: "Put it into the world.",
  name: "Launch & evolve",
  description: "A smooth launch, a complete handover, and support as your product grows. This is where the next chapter starts."
}];
export function Process() {
  return <section id="process" className="section process-section">
    <div className="site-container">
      <FadeUp>
        <div className="section-heading">
          <div>
            <SectionLabel number="04">The approach</SectionLabel>
            <h2>Clear process.<br /><span className="muted-heading">Room for discovery.</span></h2>
          </div>
          <p>Good work comes from a good working relationship.<br />Here’s how we get there, together.</p>
        </div>
      </FadeUp>
      <div className="process-grid">
        {steps.map((step, i) => <FadeUp key={step.name} delay={i * 0.07} className="process-step">
          <div className="process-step-top">
            <span className="process-number">0{i + 1}</span>
            <ArrowDownRight size={22} />
          </div>
          <span className="eyebrow">{step.name}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
        </FadeUp>)}
      </div>
    </div>
  </section>;
}
