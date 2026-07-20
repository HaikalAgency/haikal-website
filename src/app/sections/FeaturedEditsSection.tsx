import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Film,
  Video,
  Play,
  CheckCircle2,
  Sliders,
  Wand2,
  Zap,
  ArrowRight,
} from "lucide-react";
import { CustomVideoPlayer } from "../components/CustomVideoPlayer";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

interface VideoProject {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  category: string;
  software: string[];
  highlights: string[];
  badge: string;
  icon: typeof Film;
}

const FEATURED_VIDEOS: VideoProject[] = [
  {
    id: "ai-tools",
    src: "/ai tools.mp4",
    title: "AI Tools Showcase & Motion Reel",
    subtitle: "High-energy tech promo featuring kinetic typography, custom sound design, and AI visual effects.",
    category: "AI Motion & VFX",
    software: ["After Effects", "Premiere Pro", "AI Generation"],
    highlights: [
      "Custom Kinetic Typography",
      "Sound Design & Audio Pacing",
      "AI Visual Compositing",
    ],
    badge: "1.2M+ Reach",
    icon: Wand2,
  },
  {
    id: "cinematic-7",
    src: "/7.mp4",
    title: "Cinematic Brand Commercial",
    subtitle: "Moody storytelling with film emulation, precise color grading, and seamless rhythmic cuts.",
    category: "Brand & Commercial",
    software: ["DaVinci Resolve", "Premiere Pro", "Adobe Audition"],
    highlights: [
      "Cinematic Color Grading",
      "Atmospheric Audio Design",
      "Narrative Pacing & Cuts",
    ],
    badge: "Featured Commercial",
    icon: Film,
  },
  {
    id: "vfx-f5",
    src: "/f5.mp4",
    title: "High-Octane Visual Effects & Reel",
    subtitle: "Advanced compositing, speed ramping, and motion tracking crafted for high impact visuals.",
    category: "VFX & Compositing",
    software: ["After Effects", "Cinema 4D", "Mocha Pro"],
    highlights: [
      "3D Motion Tracking",
      "Speed Ramping & Beat Sync",
      "Clean Plate Compositing",
    ],
    badge: "Top VFX Work",
    icon: Zap,
  },
];

export function FeaturedEditsSection() {
  const [activeVideo, setActiveVideo] = useState<VideoProject>(
    FEATURED_VIDEOS[0]
  );

  return (
    <section
      id="featured-edits"
      className="py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[500px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <FadeUp className="text-center mb-16 max-w-2xl mx-auto">
          <SectionLabel>Post-Production & Motion</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight"
            style={HEADING}
          >
            Featured Edits
          </h2>
          <p className="text-white/60 text-base lg:text-lg" style={BODY}>
            Explore our professional video editing, color grading, visual effects, and high-pacing motion design crafted for modern brands.
          </p>
        </FadeUp>

        {/* Main Stage & Interactive Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Featured Player Stage (Cols 1 to 8) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <FadeUp>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeVideo.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                >
                  <CustomVideoPlayer
                    src={activeVideo.src}
                    title={activeVideo.title}
                    category={activeVideo.category}
                  />
                </motion.div>
              </AnimatePresence>
            </FadeUp>

            {/* Active Video Info Card */}
            <FadeUp delay={0.1}>
              <div className="p-6 sm:p-8 rounded-3xl bg-[#121212]/80 border border-white/10 backdrop-blur-md relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span
                      className="text-[#A78BFA] text-xs font-semibold uppercase tracking-widest block mb-1"
                      style={BODY}
                    >
                      {activeVideo.category}
                    </span>
                    <h3
                      className="text-white text-2xl font-bold tracking-tight"
                      style={HEADING}
                    >
                      {activeVideo.title}
                    </h3>
                  </div>
                  <span className="backdrop-blur-md bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 text-[#A78BFA] text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-2">
                    <Video size={14} />
                    {activeVideo.badge}
                  </span>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6" style={BODY}>
                  {activeVideo.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/5">
                  {/* Highlights */}
                  <div>
                    <span
                      className="text-xs text-white/40 uppercase tracking-widest block font-semibold mb-3"
                      style={BODY}
                    >
                      Post-Production Highlights
                    </span>
                    <ul className="space-y-2">
                      {activeVideo.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-white/80 text-xs"
                          style={BODY}
                        >
                          <CheckCircle2 size={14} className="text-[#A78BFA] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Software Stack */}
                  <div>
                    <span
                      className="text-xs text-white/40 uppercase tracking-widest block font-semibold mb-3"
                      style={BODY}
                    >
                      Tools & Software Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeVideo.software.map((sw) => (
                        <span
                          key={sw}
                          className="text-white/80 text-xs px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-1.5"
                          style={BODY}
                        >
                          <Sliders size={12} className="text-[#A78BFA]" />
                          {sw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Video Selection Sidebar (Cols 9 to 12) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <FadeUp delay={0.15}>
              <div className="flex items-center justify-between mb-2 px-1">
                <h4 className="text-white text-sm font-semibold tracking-wide uppercase" style={BODY}>
                  Select Showcase Edit
                </h4>
                <span className="text-white/40 text-xs" style={BODY}>
                  3 Projects
                </span>
              </div>
            </FadeUp>

            {FEATURED_VIDEOS.map((item, index) => {
              const isActive = activeVideo.id === item.id;
              const IconComp = item.icon;

              return (
                <FadeUp key={item.id} delay={0.15 + index * 0.08}>
                  <button
                    onClick={() => setActiveVideo(item)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border cursor-pointer relative overflow-hidden group ${
                      isActive
                        ? "bg-gradient-to-r from-[#1E1B4B]/80 to-[#121212]/90 border-[#8B5CF6]/50 shadow-[0_0_25px_rgba(139,92,246,0.15)]"
                        : "bg-[#141414]/60 border-white/5 hover:border-white/20 hover:bg-[#1A1A1A]/80"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#8B5CF6] to-[#A78BFA]" />
                    )}

                    <div className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/30"
                            : "bg-white/5 text-white/50 group-hover:text-white group-hover:bg-white/10"
                        }`}
                      >
                        {isActive ? (
                          <Play size={18} className="fill-white translate-x-0.5" />
                        ) : (
                          <IconComp size={18} />
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-wider ${
                              isActive ? "text-[#A78BFA]" : "text-white/40"
                            }`}
                            style={BODY}
                          >
                            {item.category}
                          </span>
                          <span
                            className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-white/60 border border-white/5"
                            style={BODY}
                          >
                            {item.badge}
                          </span>
                        </div>

                        <h5
                          className={`text-sm font-bold truncate transition-colors ${
                            isActive ? "text-white" : "text-white/80 group-hover:text-white"
                          }`}
                          style={HEADING}
                        >
                          {item.title}
                        </h5>

                        <p
                          className="text-white/50 text-xs line-clamp-2 mt-1 leading-snug"
                          style={BODY}
                        >
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  </button>
                </FadeUp>
              );
            })}

            {/* Bottom CTA Banner */}
            <FadeUp delay={0.4}>
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 via-[#121212] to-[#121212] border border-[#8B5CF6]/30 mt-2 flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-semibold">
                  <Video size={16} />
                  <span>Custom Video Editing Services</span>
                </div>
                <p className="text-white/80 text-xs leading-relaxed" style={BODY}>
                  Need high-impact video editing, social media reels, or commercial post-production for your brand?
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#8B5CF6] hover:bg-[#9D71FB] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-[#8B5CF6]/40 mt-1"
                  style={BODY}
                >
                  Request a Video Edit <ArrowRight size={14} />
                </a>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
