import { ArrowRight } from "lucide-react";
import { Component as ImageAutoSlider } from "../components/ui/image-auto-slider";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Our Work</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            Selected Projects
          </h2>
        </FadeUp>

        <div className="w-full mt-10">
          <FadeUp delay={0.1}>
            <ImageAutoSlider />
          </FadeUp>
        </div>

        <div className="flex justify-center mt-12">
          <FadeUp delay={0.2}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:bg-white/5 group"
              style={BODY}
            >
              See Our Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
