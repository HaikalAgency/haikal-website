import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, Github, CheckCircle2, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { FadeUp, SectionLabel, HEADING, BODY, getAssetUrl } from "./helpers";

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const projectIndex = projectsData.findIndex((p) => p.id === Number(id));
  
  // Default to first project if not found
  const project = projectIndex !== -1 ? projectsData[projectIndex] : projectsData[0];
  
  // Find next project for the CTA at the bottom
  const nextProject = projectsData[(projectIndex + 1) % projectsData.length];

  return (
    <div className="pt-20 min-h-screen bg-[#0A0A0A] text-white">
      {/* Back Button Sticky Bar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-6 pb-2">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
          style={BODY}
        >
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
      </div>

      {/* Hero Banner Section */}
      <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden mt-4">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={getAssetUrl(project.bannerImage)}
            alt={project.title}
            className="w-full h-full object-cover opacity-80"
          />
          {/* Gradients to blend banner image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8 pb-12 z-10">
          <FadeUp>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-widest text-[#A78BFA] mb-3 bg-[#A78BFA]/10 px-3 py-1.5 rounded-full border border-#A78BFA/20"
              style={BODY}
            >
              {project.category}
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-4"
              style={HEADING}
            >
              {project.title}
            </h1>
            <p className="text-white/70 text-lg max-w-3xl font-light leading-relaxed" style={BODY}>
              {project.overview}
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Metadata Strip */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 -mt-6">
        <FadeUp delay={0.1}>
          <div className="bg-[#121212]/90 backdrop-blur-md border border-white/5 rounded-2xl p-6 lg:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 shadow-2xl">
            <div>
              <span className="block text-xs text-white/40 uppercase tracking-widest mb-1.5" style={BODY}>
                Client
              </span>
              <span className="text-white font-medium text-base sm:text-lg" style={HEADING}>
                {project.client}
              </span>
            </div>

            <div>
              <span className="block text-xs text-white/40 uppercase tracking-widest mb-1.5" style={BODY}>
                Our Role
              </span>
              <span className="text-white font-medium text-base sm:text-lg" style={HEADING}>
                {project.role}
              </span>
            </div>

            <div>
              <span className="block text-xs text-white/40 uppercase tracking-widest mb-1.5" style={BODY}>
                Duration
              </span>
              <span className="text-white font-medium text-base sm:text-lg" style={HEADING}>
                {project.duration}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2 md:pt-0">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-[#8B5CF6] hover:bg-[#9D71FB] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#8B5CF6]/20"
                  style={BODY}
                >
                  Live Demo <ExternalLink size={13} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold px-4 py-2.5 rounded-xl border border-white/10 transition-colors duration-200"
                  style={BODY}
                >
                  Code <Github size={13} />
                </a>
              )}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* Main Details Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Story & Case Study Details */}
          <div className="lg:col-span-7 space-y-12">
            <FadeUp>
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-3" style={HEADING}>
                The Challenge
              </h3>
              <p className="text-white/70 text-base leading-relaxed" style={BODY}>
                {project.challenge}
              </p>
            </FadeUp>

            <FadeUp delay={0.05}>
              <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-3" style={HEADING}>
                The Solution
              </h3>
              <p className="text-white/70 text-base leading-relaxed" style={BODY}>
                {project.solution}
              </p>
            </FadeUp>

            {project.results && project.results.length > 0 && (
              <FadeUp delay={0.1}>
                <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/5 pb-3" style={HEADING}>
                  Key Outcomes
                </h3>
                <ul className="space-y-4">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white/70 text-base" style={BODY}>
                      <span className="text-[#A78BFA] mt-1 shrink-0">
                        <CheckCircle2 size={18} />
                      </span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </FadeUp>
            )}
          </div>

          {/* Right Column: Technologies & Key Features */}
          <div className="lg:col-span-5 space-y-12">
            {/* Tech Stack */}
            <FadeUp>
              <div className="bg-[#121212] border border-white/5 rounded-2xl p-6 lg:p-8">
                <h3 className="text-xl font-bold text-white mb-5" style={HEADING}>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-white/80 text-xs font-medium px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-[#A78BFA]/50 hover:bg-[#A78BFA]/5 transition-all duration-300 cursor-default"
                      style={BODY}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Core Features */}
            {project.features && project.features.length > 0 && (
              <FadeUp delay={0.05}>
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white pl-1" style={HEADING}>
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {project.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="bg-[#121212] border border-white/5 hover:border-white/10 p-5 rounded-2xl transition-all duration-200"
                      >
                        <h4 className="text-white font-semibold text-base mb-1.5" style={HEADING}>
                          {feature.title}
                        </h4>
                        <p className="text-white/60 text-sm leading-relaxed" style={BODY}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-16 border-t border-white/5 bg-[#111111]/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <FadeUp className="mb-10">
              <SectionLabel>Visual Showcase</SectionLabel>
              <h2 className="text-3xl font-bold text-white" style={HEADING}>
                Interface Gallery
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, index) => (
                <FadeUp key={index} delay={index * 0.05}>
                  <div className="group overflow-hidden rounded-2xl border border-white/5 bg-[#121212] aspect-[16/10] shadow-lg">
                    <img
                      src={getAssetUrl(imgUrl)}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                    />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next Project CTA Footer */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-b from-[#0A0A0A] to-[#121212]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#A78BFA] mb-4 block" style={BODY}>
              Up Next
            </span>
            <Link
              to={`/project/${nextProject.id}`}
              className="group inline-block focus:outline-none"
            >
              <h2
                className="text-3xl sm:text-5xl font-bold text-white mb-6 group-hover:text-[#A78BFA] transition-colors duration-300 flex items-center justify-center gap-3 sm:gap-4"
                style={HEADING}
              >
                {nextProject.title}
                <ArrowRight className="w-8 h-8 sm:w-12 sm:h-12 transform group-hover:translate-x-2 transition-transform duration-300" />
              </h2>
            </Link>
            <p className="text-white/50 text-sm max-w-md mx-auto" style={BODY}>
              Click to view details for the next case study, or return to the{" "}
              <Link to="/#portfolio" className="text-white hover:text-[#A78BFA] underline underline-offset-4 transition-colors">
                homepage portfolio section
              </Link>.
            </p>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
