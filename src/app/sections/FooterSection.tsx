import { ArrowUpRight } from "lucide-react";
import { BrandMark } from "./helpers";
export function Footer() {
  return <footer className="site-footer">
    <div className="site-container">
      <div className="footer-top">
        <a className="brand" href="/" aria-label="Haikal Agency home">
          <BrandMark />
          <span>haikal.</span>
        </a>
        <p>Independent minds.<br />Exceptional digital.</p>
        <nav aria-label="Footer navigation">
          <h3 className="eyebrow">Quick Links</h3>
          <a href="/#portfolio">Work <ArrowUpRight size={13} /></a>
          <a href="/#services">Expertise <ArrowUpRight size={13} /></a>
          <a href="/#about">Studio <ArrowUpRight size={13} /></a>
          <a href="/#contact">Contact <ArrowUpRight size={13} /></a>
        </nav>
        <div className="footer-note">
          <span className="eyebrow">Have a good one.</span>
          <span>Algeria ↔ Everywhere</span>
          <a href="mailto:hello@haikal.agency">Say hello <ArrowUpRight size={14} /></a>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">haikal<span>®</span></div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Haikal Agency</span>
        <span>Made with intention.</span>
        <a href="#main">Back to top ↑</a>
      </div>
    </div>
  </footer>;
}
