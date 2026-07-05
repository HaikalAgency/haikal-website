import { Instagram, Facebook, Linkedin } from "lucide-react";
import { HEADING, BODY } from "./helpers";

export function Footer() {
  const links = {
    "Quick Links": ["Home", "About", "Services", "Portfolio", "Contact"],
    Services: [
      "Web Development",
      "Desktop Software",
      "Mobile Apps",
      "Video Editing",
    ],
  };

  return (
    <footer className="border-t border-white/6 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4" style={HEADING}>
              <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                Haikal
              </span>
            </div>
            <p
              className="text-[#737373] text-sm leading-relaxed max-w-xs mb-6"
              style={BODY}
            >
              A premium software engineering agency delivering enterprise-grade
              digital products for ambitious businesses worldwide.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-[#111111] border border-white/8 hover:border-[#8B5CF6]/40 flex items-center justify-center text-[#737373] hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4
                className="text-white text-xs font-bold uppercase tracking-widest mb-5"
                style={HEADING}
              >
                {group}
              </h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#737373] hover:text-white text-sm transition-colors duration-200"
                      style={BODY}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#737373] text-xs" style={BODY}>
            &copy; {new Date().getFullYear()} Haikal Agency. All rights reserved.
          </p>
          <p className="text-[#737373] text-xs" style={BODY}>
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
