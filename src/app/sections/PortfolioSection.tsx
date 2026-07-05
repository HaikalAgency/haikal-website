import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectClass: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Vesper CRM Portal",
    category: "Web Application",
    image: "/pictures/1.png",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 2,
    title: "Apex Dashboard",
    category: "SaaS Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]"
  },
  {
    id: 3,
    title: "Nova Landing Suite",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]"
  },
  {
    id: 4,
    title: "Aether Analytics",
    category: "Visual BI Tool",
    image: "/pictures/2.png",
    aspectClass: "aspect-[16/10]"
  },
  {
    id: 5,
    title: "Linear Workflows",
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: 6,
    title: "Horizon OS Core",
    category: "Developer Platform",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]"
  },
  {
    id: 7,
    title: "Zenith Agency Website",
    category: "Creative Marketing",
    image: "/pictures/3.png",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 8,
    title: "Pulse Mobile Client",
    category: "iOS & Android",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: 9,
    title: "Solaria Solar Tech",
    category: "Clean Energy BI",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]"
  },
  {
    id: 10,
    title: "Aura Design System",
    category: "Product Brand",
    image: "/pictures/4.png",
    aspectClass: "aspect-[3/4]"
  },
  {
    id: 11,
    title: "Nebula AI Cloud",
    category: "Deep Learning Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]"
  },
  {
    id: 12,
    title: "Vector Marketing App",
    category: "Campaign Suite",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]"
  }
];

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
          {projects.map((project, index) => (
            <FadeUp key={project.id} delay={index * 0.05} className="break-inside-avoid w-full mb-6">
              <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-[#151515] transition-all duration-300 cursor-pointer shadow-xl hover:shadow-2xl">
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
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
