import { Link } from "react-router";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";
import { projectsData } from "../data/projectsData";

export function Portfolio() {
  return (
    <section id="portfolio" className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel>Our Work</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            style={HEADING}
          >
            Selected Projects
          </h2>
          <p className="text-white/60 text-base lg:text-lg" style={BODY}>
            Discover innovative solutions that transform the way you work and create. Our cutting-edge tools are designed to empower.
          </p>
        </FadeUp>

        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6 mt-10">
          {projectsData.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.05} className="break-inside-avoid w-full mb-6">
              <Link
                to={`/project/${project.id}`}
                className="group block relative rounded-2xl overflow-hidden border border-white/10 bg-[#151515] transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                {/* Image Container */}
                <div className={`w-full ${project.aspectClass} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:blur-[1px]"
                    loading="lazy"
                  />
                </div>

                {/* Dark Hover Overlay */}
                <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest mb-1.5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={BODY}>
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold tracking-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300" style={HEADING}>
                    {project.title}
                  </h3>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
