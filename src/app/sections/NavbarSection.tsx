import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { HEADING, BODY } from "./helpers";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Services", "Portfolio", "Featured Edits", "Process", "Contact"];

  const getHref = (l: string) => {
    if (l === "Home") return isHomePage ? "#" : "/";
    const slug = l.toLowerCase().replace(/\s+/g, "-");
    return isHomePage ? `#${slug}` : `/#${slug}`;
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 right-scroll-bar-position"
      style={{
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-2 group" style={HEADING}>
          <img src="/FreeSample-Vectorizer-io-photo_5933623587627535943_y.svg" alt="Haikal Logo" className="w-8 h-8 object-contain" />
          <span className="text-white font-semibold text-lg tracking-tight">
            Haikal
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={getHref(l)}
              className="text-[#737373] hover:text-white text-sm transition-colors duration-200"
              style={BODY}
            >
              {l}
            </a>
          ))}
        </nav>

        <Link
          to={isHomePage ? "#contact" : "/#contact"}
          className="hidden lg:inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#9D71FB] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-0.5"
          style={BODY}
        >
          Start Your Project <ArrowRight size={14} />
        </Link>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-[#111111] border-t border-white/5 px-6 py-6 flex flex-col gap-4"
          style={BODY}
        >
          {links.map((l) => (
            <a
              key={l}
              href={getHref(l)}
              className="text-[#737373] hover:text-white py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <Link
            to={isHomePage ? "#contact" : "/#contact"}
            className="mt-2 bg-[#8B5CF6] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
            onClick={() => setOpen(false)}
          >
            Start Your Project
          </Link>
        </motion.div>
      )}
    </header>
  );
}
