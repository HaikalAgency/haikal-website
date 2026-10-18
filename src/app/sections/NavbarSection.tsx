import { useEffect, useState } from "react";
import { ArrowUpRight, Menu } from "lucide-react";
import { Link, useLocation } from "react-router";
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { BrandMark } from "./helpers";
const links = [{
  label: "Work",
  id: "portfolio"
}, {
  label: "Expertise",
  id: "services"
}, {
  label: "Studio",
  id: "about"
}, {
  label: "Approach",
  id: "process"
}];
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener("scroll", update, {
      passive: true
    });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  const href = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="site-container nav-inner">
        <Link to="/" className="brand" aria-label="Haikal Agency home">
          <BrandMark />
          <span>haikal<span className="brand-period">.</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(link => <a key={link.id} href={href(link.id)}>{link.label}</a>)}
        </nav>
        <a href={href("contact")} className="button button-small nav-cta">Let’s talk <ArrowUpRight size={16} /></a>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button className="menu-trigger" aria-label="Open navigation">
              <Menu size={24} />
            </button>
          </DialogTrigger>
          <DialogContent className="mobile-menu">
            <DialogTitle className="brand">haikal.</DialogTitle>
            <DialogDescription>Independent minds. Exceptional digital.</DialogDescription>
            <nav aria-label="Mobile navigation">
              {[...links, {
                label: "Let’s talk",
                id: "contact"
              }].map((link, i) => <a key={link.id} href={href(link.id)} onClick={() => setOpen(false)}>
                <span className="eyebrow">0{i + 1}</span>
                {link.label}
                <ArrowUpRight />
              </a>)}
            </nav>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  </>;
}
