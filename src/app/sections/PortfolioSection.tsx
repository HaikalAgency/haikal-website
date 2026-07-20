import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { 
  LayoutGrid, 
  List, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Tv, 
  TrendingUp, 
  Palette, 
  Smartphone 
} from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY, getAssetUrl } from "./helpers";
import { projectsData } from "../data/projectsData";

const CATEGORY_TABS = [
  { id: "all", label: "All", icon: Layers },
  { id: "apps", label: "Applications", icon: Tv },
  { id: "analytics", label: "Analytics & AI", icon: TrendingUp },
  { id: "design", label: "Design & Brand", icon: Palette },
  { id: "mobile", label: "Mobile", icon: Smartphone }
];
//here moh
const getProjectMetric = (id: number): string => {
  switch (id) {
    case 1: return "10,000+ Patients Managed";
    case 2: return "1st Place UI/UX Award";
    case 3: return "+45% Sales Conversion";
    case 4: return "-30% Checkout Time";
    case 5: return "-60% Check-in Time";
    case 6: return "500+ Active Users/Mo";
    case 7: return "+85% Inquiry Volume";
    case 8: return "+35% Avg Order Value";
    default: return "";
  }
};

const getCategoryGroup = (category: string): string => {
  switch (category) {
    case "Web Application":
    case "Product Management":
    case "Developer Platform":
      return "apps";
    case "SaaS Analytics":
    case "Visual BI Tool":
    case "Clean Energy BI":
    case "Deep Learning Platform":
      return "analytics";
    case "Product Launch":
    case "Creative Marketing":
    case "Product Brand":
    case "Campaign Suite":
      return "design";
    case "iOS & Android":
      return "mobile";
    default:
      return "apps";
  }
};

export function Portfolio() {
  const [activeTab, setActiveTab] = useState("all");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const getProjectCount = (tabId: string) => {
    if (tabId === "all") return projectsData.length;
    return projectsData.filter(p => getCategoryGroup(p.category) === tabId).length;
  };

  const filteredProjects = projectsData.filter((project) => {
    if (activeTab === "all") return true;
    return getCategoryGroup(project.category) === activeTab;
  });

  return (
    <section id="portfolio" className="py-28 bg-[#111111]/40 relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute top-1/4 left-[-5%] w-96 h-96 bg-violet-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-96 h-96 bg-fuchsia-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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

        {/* Controls Bar: Filters & Layout Switcher */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/5 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#151515]/90 border border-white/5 rounded-2xl overflow-x-auto max-w-full no-scrollbar">
            {CATEGORY_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              const count = getProjectCount(tab.id);
              
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-xl transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`}
                  style={BODY}
                >
                  <Icon size={14} className={isActive ? "text-[#A78BFA]" : "text-white/40"} />
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-md ${
                    isActive ? "bg-white/10 text-white" : "bg-white/5 text-white/40"
                  }`}>
                    {count}
                  </span>
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl -z-10 shadow-[0_0_15px_rgba(167,139,250,0.05)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Layout Toggle Buttons */}
          <div className="flex items-center gap-1 p-1 bg-[#151515]/90 border border-white/5 rounded-xl">
            <button
              onClick={() => setLayout("grid")}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                layout === "grid" 
                  ? "bg-white/10 text-[#A78BFA] border border-white/5" 
                  : "text-white/40 hover:text-white/70"
              }`}
              title="Showcase Grid"
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => setLayout("list")}
              className={`p-2 rounded-lg transition-all cursor-pointer ${
                layout === "list" 
                  ? "bg-white/10 text-[#A78BFA] border border-white/5" 
                  : "text-white/40 hover:text-white/70"
              }`}
              title="Case Study List"
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Projects Render Section */}
        <motion.div layout className="relative">
          <AnimatePresence mode="popLayout">
            {layout === "grid" ? (
              <motion.div
                key="grid-layout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.45 }}
                    key={project.id}
                    className="group relative rounded-2xl overflow-hidden border border-white/5 bg-[#121212]/30 backdrop-blur-sm hover:border-[#A78BFA]/30 hover:shadow-[0_0_30px_rgba(167,139,250,0.08)] transition-all duration-500 flex flex-col col-span-1 md:h-[450px]"
                  >
                    <div className="w-full h-[220px] relative overflow-hidden">
                      <img
                        src={getAssetUrl(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      
                      {/* Floating Outcome badge */}
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/10 text-[#A78BFA] text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg" style={BODY}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                        {getProjectMetric(project.id)}
                      </div>
                    </div>

                    <div className="flex-1 p-6 flex flex-col justify-between bg-[#151515]/80 relative z-10">
                      <div>
                        <span className="text-[#A78BFA] text-[10px] font-semibold uppercase tracking-widest mb-1.5 block" style={BODY}>
                          {project.category}
                        </span>
                        <h3 className="text-white text-xl font-bold tracking-tight mb-2 hover:text-[#A78BFA] transition-colors duration-200" style={HEADING}>
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-xs leading-relaxed mb-4 line-clamp-3" style={BODY}>
                          {project.overview}
                        </p>
                      </div>
                      
                      <div>
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span key={tech} className="text-white/70 text-[9px] font-medium px-2 py-0.5 rounded bg-white/[0.02] border border-white/5" style={BODY}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group/btn hover:text-[#A78BFA] transition-colors duration-300"
                          style={BODY}
                        >
                          View Case Study
                          <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* Detailed List Layout */
              <motion.div
                key="list-layout"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.45 }}
                    key={project.id}
                    className="flex flex-col lg:flex-row items-stretch gap-8 bg-[#151515]/40 border border-white/5 rounded-3xl p-6 md:p-8 hover:border-[#A78BFA]/20 transition-all duration-500 group shadow-xl"
                  >
                    {/* Image Section */}
                    <div className="w-full lg:w-[40%] min-h-[250px] relative overflow-hidden rounded-2xl bg-[#121212]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full min-h-[250px] object-cover transition-transform duration-700 group-hover:scale-103"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                      <div className="absolute top-4 left-4 backdrop-blur-md bg-black/60 border border-white/10 text-[#A78BFA] text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg" style={BODY}>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A78BFA] animate-pulse" />
                        {getProjectMetric(project.id)}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-[60%] flex flex-col justify-between py-2 relative z-10">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest" style={BODY}>
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight mb-3 hover:text-[#A78BFA] transition-colors duration-200" style={HEADING}>
                          {project.title}
                        </h3>
                        <p className="text-white/60 text-sm leading-relaxed mb-5" style={BODY}>
                          {project.overview}
                        </p>

                        {/* Outcome Bullet Points */}
                        <div className="space-y-2.5 mb-6">
                          <span className="text-xs text-white/40 uppercase tracking-widest block font-semibold" style={BODY}>Key Outcomes</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {project.results.slice(0, 2).map((result, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-white/70 text-sm leading-snug" style={BODY}>
                                <CheckCircle2 size={15} className="text-[#A78BFA] shrink-0 mt-0.5" />
                                <span>{result}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span key={tech} className="text-white/70 text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#A78BFA]/30 hover:bg-[#A78BFA]/5 transition-colors duration-300" style={BODY}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        <Link
                          to={`/project/${project.id}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group/btn hover:text-[#A78BFA] transition-colors duration-300"
                          style={BODY}
                        >
                          View Case Study
                          <ArrowUpRight size={14} className="transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
