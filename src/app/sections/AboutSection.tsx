import { ArrowUpRight, Asterisk } from "lucide-react";
import { FadeUp, SectionLabel } from "./helpers";
export function About() {
  return <section id="about" className="section site-container about-section">
    <div className="about-grid">
      <FadeUp>
        <SectionLabel number="03">Who We Are</SectionLabel>
        <div className="studio-object" aria-hidden="true">
          <div className="studio-object-top">
            <span className="eyebrow">Independent by design.</span>
            <Asterisk size={25} />
          </div>
          <div className="studio-h">h<span>.</span></div>
          <div className="studio-object-bottom">
            <span>Curiosity.<br />Craft. Collaboration.</span>
            <span className="eyebrow">HAIKAL®<br />DIGITAL STUDIO</span>
          </div>
        </div>
      </FadeUp>
      <FadeUp delay={0.12} className="about-copy">
        <span className="eyebrow">Small team. Shared ambition.</span>
        <h2>Close collaborators.<br /><span className="muted-heading">Big-picture thinkers.</span></h2>
        <p className="about-lead">Engineering-driven. Client-focused. And a little obsessed with the details.</p>
        <p>We’re Haikal, an independent digital studio bringing design and development to the same table. We work closely with ambitious businesses to make useful things, beautifully.</p>
        <p>You work directly with the people doing the work. Clear conversations, considered decisions, and a team that stays invested long after launch.</p>
        <a href="#contact" className="text-link">Meet your next creative partner <ArrowUpRight size={17} /></a>
        <div className="studio-principles">
          <span>01 / Craft over shortcuts</span>
          <span>02 / Clarity at every step</span>
          <span>03 / Built for the long run</span>
        </div>
      </FadeUp>
    </div>
  </section>;
}
