import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaFigma,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiElectron, SiGo } from "react-icons/si";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Globe,
  Monitor,
  Smartphone,
  Video,
  Zap,
  TrendingUp,
  Shield,
  Layers,
  BarChart3,
  Smile,
  Wrench,
  HeartHandshake,
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  Clock,
  CheckCircle,
  Star,
  MapPin,
  Send,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";
import { Component as ImageAutoSlider } from "./components/ui/image-auto-slider";

// ─── Fonts ──────────────────────────────────────────────────────────────────
const HEADING = { fontFamily: "'Space Grotesk', sans-serif" };
const BODY = { fontFamily: "'Inter', sans-serif" };

// ─── Helpers ─────────────────────────────────────────────────────────────────
function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A78BFA] mb-4"
      style={BODY}
    >
      <span className="w-6 h-px bg-[#A78BFA]" />
      {children}
      <span className="w-6 h-px bg-[#A78BFA]" />
    </span>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Home", "Services", "Portfolio", "Process", "Contact"];

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
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" style={HEADING}>
          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6] flex items-center justify-center">
            <span className="text-white font-bold text-sm">H</span>
          </div>
          <span className="text-white font-semibold text-lg tracking-tight">
            Haikal
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-[#737373] hover:text-white text-sm transition-colors duration-200"
              style={BODY}
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#9D71FB] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#8B5CF6]/30 hover:-translate-y-0.5"
          style={BODY}
        >
          Start Your Project <ArrowRight size={14} />
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
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
              href={`#${l.toLowerCase()}`}
              className="text-[#737373] hover:text-white py-1"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 bg-[#8B5CF6] text-white text-sm font-semibold px-5 py-3 rounded-xl text-center"
            onClick={() => setOpen(false)}
          >
            Start Your Project
          </a>
        </motion.div>
      )}
    </header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#A78BFA]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <SectionLabel>Software Engineering Agency</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl lg:text-7xl font-bold text-white leading-[1.06] tracking-tight mb-6"
            style={HEADING}
          >
            Building
            <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)",
              }}
            >
              Digital
            </span>
            <br />
            Excellence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-[#737373] text-lg leading-relaxed max-w-lg mb-10"
            style={BODY}
          >
            We engineer high-performance websites, desktop software, mobile
            applications and digital experiences that help businesses grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#8B5CF6] hover:bg-[#9D71FB] text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-[#8B5CF6]/30 hover:-translate-y-1"
              style={BODY}
            >
              Start Your Project <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 border border-white/10 hover:border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 hover:bg-white/5"
              style={BODY}
            >
              View Portfolio
            </a>
          </motion.div>
        </div>

        {/* Right — architectural illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <ReactBitsVisual />
        </motion.div>
      </div>
    </section>
  );
}

function ReactBitsVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[500px] flex items-center justify-center">
      {/* Aurora glow effect */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 rounded-full bg-gradient-to-tr from-[#8B5CF6]/40 to-[#A78BFA]/10 blur-[90px]"
      />

      {/* 3D-like rotating rings (similar to ReactBits particles/rings) */}
      <div className="relative w-64 h-64" style={{ perspective: "1000px" }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border"
            style={{
              borderWidth: i === 1 ? 2 : 1,
              borderColor:
                i === 1 ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.1)",
              borderStyle: i === 2 ? "dashed" : "solid",
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Core glowing element */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 rounded-full bg-white/5 backdrop-blur-lg border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.5)]"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] animate-pulse blur-[2px]" />
        </motion.div>
      </div>

      {/* Floating particles (ReactBits signature style) */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 bg-white/60 rounded-full"
          initial={{
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: (Math.random() - 0.5) * 400,
            y: (Math.random() - 0.5) * 400,
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── About ───────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <FadeUp>
          <SectionLabel>Who We Are</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={HEADING}
          >
            Engineering-driven.{" "}
            <span className="text-[#A78BFA]">Client-focused.</span>
          </h2>
          <p className="text-[#737373] text-lg leading-relaxed" style={BODY}>
            Haikal Agency is a premium software engineering firm. We work with
            ambitious businesses to design, build, and scale digital products
            that perform at the highest level.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
function WhyUs() {
  const cards = [
    {
      icon: Wrench,
      title: "Engineering First",
      desc: "Architecture and code quality are non-negotiable in everything we ship.",
      color: "#8B5CF6",
    },
    {
      icon: Zap,
      title: "Performance",
      desc: "Sub-second load times, efficient queries, and optimized builds as standard.",
      color: "#A78BFA",
    },
    {
      icon: Shield,
      title: "Transparency",
      desc: "Weekly syncs, shared roadmaps, and no hidden scope changes.",
      color: "#8B5CF6",
    },
    {
      icon: HeartHandshake,
      title: "Long-term Partnership",
      desc: "We stay invested after launch for maintenance, iterations, and growth.",
      color: "#A78BFA",
    },
  ];

  return (
    <section className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Why Haikal</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            The standard for serious projects
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="bg-[#111111] border border-white/6 rounded-2xl p-8 h-full group hover:border-[#8B5CF6]/30 transition-colors duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `${c.color}18`,
                    border: `1px solid ${c.color}30`,
                  }}
                >
                  <c.icon size={22} style={{ color: c.color }} />
                </div>
                <h3
                  className="text-white font-semibold text-base mb-3"
                  style={HEADING}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[#737373] text-sm leading-relaxed"
                  style={BODY}
                >
                  {c.desc}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────────────────
function ServiceCard({
  icon: Icon,
  title,
  items,
  color,
  mockup,
  reverse,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
  color: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <FadeUp className={reverse ? "lg:[direction:ltr]" : ""}>
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
          style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
        <h3 className="text-3xl font-bold text-white mb-4" style={HEADING}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-6">
          {items.map((item) => (
            <span
              key={item}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 text-[#737373]"
              style={BODY}
            >
              {item}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-[#8B5CF6] hover:text-[#A78BFA] transition-colors duration-200 group"
          style={BODY}
        >
          Discuss a project{" "}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-1 transition-transform duration-200"
          />
        </a>
      </FadeUp>

      <FadeUp delay={0.12} className={reverse ? "lg:[direction:ltr]" : ""}>
        {mockup}
      </FadeUp>
    </div>
  );
}

function BrowserMockup({ children }: { children?: React.ReactNode }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-[#0D0D0D]">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-[#111111] border-b border-white/6">
        {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
          <div
            key={c}
            className="w-3 h-3 rounded-full"
            style={{ background: c }}
          />
        ))}
        <div
          className="ml-4 flex-1 bg-[#0A0A0A] rounded-md h-5 text-[10px] text-[#737373] flex items-center px-3"
          style={BODY}
        >
          Haikal.agency/project
        </div>
      </div>
      <div className="p-6 space-y-3 min-h-[200px]">
        {children || (
          <>
            <div className="h-3 bg-[#8B5CF6]/20 rounded-full w-3/4" />
            <div className="h-3 bg-white/5 rounded-full w-full" />
            <div className="h-3 bg-white/5 rounded-full w-5/6" />
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-[#111111] rounded-xl border border-white/5"
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function WindowMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-[#0D0D0D]">
      <div className="flex items-center justify-between px-4 py-3 bg-[#111111] border-b border-white/6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-[#8B5CF6]/30" />
          <span className="text-[10px] text-[#737373]" style={BODY}>
            Haikal ERP System
          </span>
        </div>
        <div className="flex gap-1">
          {["—", "□", "×"].map((s) => (
            <div
              key={s}
              className="w-5 h-5 rounded flex items-center justify-center text-[10px] text-[#737373] hover:bg-white/10 cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="w-14 bg-[#0A0A0A] border-r border-white/5 py-4 flex flex-col items-center gap-4">
          {[BarChart3, Layers, Globe, Shield].map((Icon, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${i === 0 ? "bg-[#8B5CF6]/20" : ""}`}
            >
              <Icon
                size={14}
                className={i === 0 ? "text-[#8B5CF6]" : "text-[#737373]"}
              />
            </div>
          ))}
        </div>
        <div className="flex-1 p-4 space-y-3">
          <div className="h-2 bg-[#8B5CF6]/20 rounded-full w-1/3" />
          <div className="grid grid-cols-2 gap-2">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="h-16 bg-[#111111] rounded-xl border border-white/5 p-3"
              >
                <div className="h-1.5 bg-[#8B5CF6]/30 rounded-full w-2/3 mb-1.5" />
                <div className="h-5 bg-[#8B5CF6]/10 rounded w-1/2" />
              </div>
            ))}
          </div>
          <div className="h-24 bg-[#111111] rounded-xl border border-white/5 p-3">
            <div className="flex gap-1 h-full items-end">
              {[60, 40, 80, 55, 70, 45, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background: `rgba(139,92,246,${0.2 + i * 0.05})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-48 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-[#0D0D0D]">
        <div className="h-6 bg-[#111111] flex items-center justify-center">
          <div className="w-12 h-1 bg-white/20 rounded-full" />
        </div>
        <div className="bg-[#0A0A0A] p-3 space-y-3 min-h-[280px]">
          <div className="h-24 bg-gradient-to-br from-[#8B5CF6]/30 to-[#A78BFA]/10 rounded-2xl border border-white/5 flex items-center justify-center">
            <Smartphone size={28} className="text-[#8B5CF6]/60" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-white/10 rounded-full w-full" />
            <div className="h-2 bg-white/6 rounded-full w-4/5" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-12 bg-[#111111] rounded-xl border border-white/5"
              />
            ))}
          </div>
          <div className="h-8 bg-[#8B5CF6] rounded-xl flex items-center justify-center">
            <div className="h-1.5 bg-white/40 rounded-full w-16" />
          </div>
        </div>
        <div className="h-8 bg-[#111111] flex items-center justify-around px-4">
          {[Globe, Smartphone, Monitor].map((Icon, i) => (
            <Icon
              key={i}
              size={14}
              className={i === 1 ? "text-[#8B5CF6]" : "text-[#737373]"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function VideoEditorMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl bg-[#0D0D0D]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#111111] border-b border-white/6">
        <div className="w-3 h-3 rounded-full bg-[#8B5CF6]" />
        <span className="text-[10px] text-[#737373]" style={BODY}>
          Haikal Media Studio
        </span>
      </div>
      <div className="p-4 space-y-3">
        {/* Preview */}
        <div className="aspect-video bg-[#111111] rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/5" />
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white/60 ml-1" />
          </div>
        </div>
        {/* Timeline */}
        <div className="space-y-1.5">
          {[
            ["#8B5CF6", 70],
            ["#A78BFA", 55],
            ["#737373", 80],
          ].map(([c, w], i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="text-[8px] text-[#737373] w-8" style={BODY}>
                {["VID", "AUD", "FX"][i]}
              </div>
              <div className="flex-1 h-4 bg-[#111111] rounded relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full rounded opacity-70"
                  style={{ width: `${w}%`, background: c as string }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      items: [
        "Landing Pages",
        "Business Websites",
        "E-commerce",
        "Custom Platforms",
        "SEO Ready",
        "Responsive Design",
      ],
      color: "#8B5CF6",
      mockup: <BrowserMockup />,
      reverse: false,
    },
    {
      icon: Monitor,
      title: "Desktop Software",
      items: [
        "POS Systems",
        "Inventory Management",
        "ERP Solutions",
        "Internal Tools",
        "Database Systems",
      ],
      color: "#A78BFA",
      mockup: <WindowMockup />,
      reverse: true,
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      items: [
        "Android",
        "iOS",
        "Flutter",
        "API Integration",
        "Secure Authentication",
      ],
      color: "#8B5CF6",
      mockup: <PhoneMockup />,
      reverse: false,
    },
    {
      icon: Video,
      title: "Video Editing",
      items: [
        "Commercial Videos",
        "Social Media Reels",
        "Motion Graphics",
        "Promotional Videos",
        "Brand Content",
      ],
      color: "#A78BFA",
      mockup: <VideoEditorMockup />,
      reverse: true,
    },
  ];

  return (
    <section id="services" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-20">
          <SectionLabel>What We Build</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            Full-spectrum digital engineering
          </h2>
        </FadeUp>

        <div className="space-y-32">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Results ─────────────────────────────────────────────────────────────────
function Results() {
  const cards = [
    {
      icon: Zap,
      title: "High Performance",
      desc: "Optimized for speed at every layer of the stack.",
    },
    {
      icon: TrendingUp,
      title: "Business Growth",
      desc: "Built to convert, retain, and scale with your goals.",
    },
    {
      icon: Shield,
      title: "Secure Architecture",
      desc: "Security baked into every deployment, not bolted on.",
    },
    {
      icon: Globe,
      title: "Cross Platform",
      desc: "Web, desktop, and mobile in cohesive product ecosystems.",
    },
    {
      icon: Layers,
      title: "Scalable Systems",
      desc: "Infrastructure that grows without expensive rewrites.",
    },
    {
      icon: Smile,
      title: "Great UX",
      desc: "Interfaces that feel effortless and reduce cognitive load.",
    },
    {
      icon: Wrench,
      title: "Reliable Engineering",
      desc: "Production-grade code with proper testing and CI/CD.",
    },
    {
      icon: HeartHandshake,
      title: "Long-term Support",
      desc: "Ongoing partnership, not just a handoff after launch.",
    },
  ];

  const indicators = [
    "Performance Optimized",
    "Responsive",
    "Secure",
    "Scalable",
    "Modern UI/UX",
    "Best Practices",
  ];

  return (
    <section className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Outcomes</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            Results That Matter
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="bg-[#0A0A0A] border border-white/6 rounded-2xl p-6 group hover:border-[#8B5CF6]/30 transition-colors duration-300"
              >
                <c.icon size={20} className="text-[#8B5CF6] mb-4" />
                <h3
                  className="text-white font-semibold text-sm mb-1.5"
                  style={HEADING}
                >
                  {c.title}
                </h3>
                <p
                  className="text-[#737373] text-xs leading-relaxed"
                  style={BODY}
                >
                  {c.desc}
                </p>
              </motion.div>
            </FadeUp>
          ))}
        </div>

        <FadeUp>
          <div className="flex flex-wrap gap-3 justify-center">
            {indicators.map((ind) => (
              <span
                key={ind}
                className="flex items-center gap-2 text-sm text-[#737373] border border-white/8 px-4 py-2 rounded-full"
                style={BODY}
              >
                <CheckCircle size={14} className="text-[#A78BFA]" />
                {ind}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Process ─────────────────────────────────────────────────────────────────
function Process() {
  const steps = [
    {
      num: "01",
      title: "Discovery",
      desc: "Deep-dive into your goals, users, and technical constraints.",
    },
    {
      num: "02",
      title: "Planning",
      desc: "Architecture, timeline, and milestones defined before any code.",
    },
    {
      num: "03",
      title: "Design",
      desc: "High-fidelity prototypes reviewed and approved before development.",
    },
    {
      num: "04",
      title: "Development",
      desc: "Iterative sprints with weekly demos and progress reports.",
    },
    {
      num: "05",
      title: "Testing",
      desc: "QA, performance testing, and cross-device validation.",
    },
    {
      num: "06",
      title: "Launch",
      desc: "Staged deployment with monitoring and post-launch support.",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section id="process" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionLabel>How We Work</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            Our Process
          </h2>
        </FadeUp>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Progress line */}
            <div className="absolute top-8 left-0 right-0 h-px bg-white/6" />
            <motion.div
              className="absolute top-8 left-0 h-px bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA]"
              animate={{ width: `${((active + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />

            <div className="grid grid-cols-6 gap-4 relative">
              {steps.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex flex-col items-center gap-4 group text-left"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold transition-all duration-300 relative z-10"
                    style={HEADING}
                    onClick={() => setActive(i)}
                  >
                    <div
                      className="absolute inset-0 rounded-2xl transition-all duration-300"
                      style={{
                        background:
                          i <= active
                            ? "linear-gradient(135deg,#8B5CF6,#A78BFA)"
                            : "#111111",
                        border:
                          i <= active
                            ? "none"
                            : "1px solid rgba(255,255,255,0.08)",
                      }}
                    />
                    <span
                      className={`relative text-sm font-bold ${i <= active ? "text-white" : "text-[#737373]"}`}
                    >
                      {s.num}
                    </span>
                  </div>
                  <div>
                    <p
                      className={`text-xs font-bold text-center mb-1 ${i <= active ? "text-white" : "text-[#737373]"}`}
                      style={HEADING}
                    >
                      {s.title}
                    </p>
                    {i === active && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-[10px] text-[#737373] text-center leading-relaxed"
                        style={BODY}
                      >
                        {s.desc}
                      </motion.p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile list */}
        <div className="lg:hidden space-y-4">
          {steps.map((s, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="flex gap-4 bg-[#111111] border border-white/6 rounded-2xl p-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-white text-xs font-bold"
                    style={HEADING}
                  >
                    {s.num}
                  </span>
                </div>
                <div>
                  <h3
                    className="text-white font-semibold text-sm mb-1"
                    style={HEADING}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="text-[#737373] text-xs leading-relaxed"
                    style={BODY}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Portfolio ────────────────────────────────────────────────────────────────
function Portfolio() {
  const projects = [
    {
      name: "Nexus Commerce",
      industry: "E-commerce",
      tech: ["Next.js", "Node.js", "PostgreSQL"],
      desc: "A high-throughput e-commerce platform handling 10,000+ SKUs with real-time inventory and custom checkout flows.",
      color: "#8B5CF6",
    },
    {
      name: "FleetCore ERP",
      industry: "Logistics",
      tech: ["Electron", "React", "SQLite"],
      desc: "An offline-capable desktop ERP system for fleet management with driver scheduling and route optimization.",
      color: "#A78BFA",
    },
    {
      name: "Pulse Health App",
      industry: "Healthcare",
      tech: ["Flutter", "Firebase", "Python"],
      desc: "A HIPAA-conscious mobile app for patient monitoring with real-time vitals dashboard and secure messaging.",
      color: "#8B5CF6",
    },
  ];

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
              See More Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Technologies ─────────────────────────────────────────────────────────────
function Technologies() {
  const techs = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Laravel", icon: FaLaravel, color: "#FF2D20" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Flutter", icon: SiFlutter, color: "#54C5F8" },
    { name: "Electron", icon: SiElectron, color: "#62C6F2" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    { name: "Adobe Premiere", icon: Video, color: "#EA77FF" },
    { name: "After Effects", icon: Layers, color: "#D291FF" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
  ];

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Our Stack</SectionLabel>
          <h2 className="text-4xl font-bold text-white" style={HEADING}>
            Technologies we master
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3">
            {techs.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -3, borderColor: `${t.color}60` }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2.5 border border-white/8 bg-[#111111] rounded-xl px-5 py-3 cursor-default group"
              >
                <div
                  className="w-6 h-6 rounded-md flex items-center justify-center transition-all duration-200"
                  style={{
                    backgroundColor: `${t.color}15`,
                    color: t.color,
                  }}
                >
                  <t.icon
                    size={14}
                    className="opacity-90 group-hover:scale-110 transition-all duration-200"
                  />
                </div>
                <span
                  className="text-[#737373] group-hover:text-white text-sm font-medium transition-colors duration-200"
                  style={BODY}
                >
                  {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const items = [
    {
      quote:
        "Haikal delivered our e-commerce platform two weeks ahead of schedule. The code quality and architecture choices were exactly what a scaling business needs.",
      name: "Sarah K.",
      role: "CEO, Meridian Retail",
    },
    {
      quote:
        "The ERP system they built replaced three separate tools we were using. The UI is intuitive and the backend handles our load without a hiccup.",
      name: "James O.",
      role: "COO, FleetCore Logistics",
    },
    {
      quote:
        "Our mobile app launch was seamless. The team communicated clearly at every stage and the result exceeded our expectations for performance and design.",
      name: "Amira T.",
      role: "Founder, Pulse Health",
    },
  ];

  return (
    <section className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-16">
          <SectionLabel>Client Voices</SectionLabel>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white"
            style={HEADING}
          >
            What our clients say
          </h2>
        </FadeUp>

        <div className="grid lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="bg-[#0A0A0A] border border-white/6 rounded-3xl p-8 relative group hover:border-[#8B5CF6]/30 transition-colors duration-300"
              >
                <div className="text-[#8B5CF6]/30 text-6xl font-serif leading-none mb-4 select-none">
                  "
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className="text-[#A78BFA] fill-[#A78BFA]"
                    />
                  ))}
                </div>
                <p
                  className="text-[#737373] text-sm leading-relaxed mb-6 italic"
                  style={BODY}
                >
                  "{item.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] flex items-center justify-center text-white font-bold text-sm"
                    style={HEADING}
                  >
                    {item.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-white text-sm font-semibold"
                      style={HEADING}
                    >
                      {item.name}
                    </p>
                    <p className="text-[#737373] text-xs" style={BODY}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      q: "How long does a typical project take?",
      a: "Most web projects ship in 4–10 weeks depending on complexity. Desktop and mobile apps typically take 8–16 weeks. We scope timelines precisely during the discovery phase.",
    },
    {
      q: "Do you work with international clients?",
      a: "Yes. We work asynchronously with clients across time zones. All communication happens in English through structured weekly check-ins and shared project boards.",
    },
    {
      q: "What is your pricing structure?",
      a: "We price per project scope, not hourly. After discovery, you receive a fixed quote with defined deliverables so there are no surprises at invoice time.",
    },
    {
      q: "Who owns the code after delivery?",
      a: "You do, completely. Full IP transfer is standard in every engagement. You receive the full repository, documentation, and deployment credentials.",
    },
    {
      q: "Do you offer ongoing maintenance?",
      a: "Yes. We offer monthly retainer agreements for bug fixes, updates, and feature iterations. Clients can also engage us for one-off work after launch.",
    },
  ];

  return (
    <section className="py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-14">
          <SectionLabel>Common Questions</SectionLabel>
          <h2 className="text-4xl font-bold text-white" style={HEADING}>
            FAQ
          </h2>
        </FadeUp>

        <div className="space-y-3">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="border border-white/6 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/2 transition-colors duration-200"
                >
                  <span
                    className="text-white font-medium text-sm pr-4"
                    style={HEADING}
                  >
                    {item.q}
                  </span>
                  {open === i ? (
                    <ChevronUp
                      size={16}
                      className="text-[#A78BFA] flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={16}
                      className="text-[#737373] flex-shrink-0"
                    />
                  )}
                </button>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p
                      className="text-[#737373] text-sm leading-relaxed"
                      style={BODY}
                    >
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    details: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, service: value }));
  };

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          details: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#737373]/60 focus:outline-none focus:border-[#8B5CF6]/60 transition-colors duration-200";

  const contacts = [
    { icon: Mail, label: "Email", value: "hello@Haikal.agency" },
    { icon: Phone, label: "Phone", value: "+1 (555) 000-0000" },
    { icon: MessageCircle, label: "WhatsApp", value: "+1 (555) 000-0000" },
    { icon: Instagram, label: "Instagram", value: "@Haikalagency" },
    { icon: Facebook, label: "Facebook", value: "Haikal Agency" },
    { icon: Linkedin, label: "LinkedIn", value: "Haikal Agency" },
  ];

  return (
    <section id="contact" className="py-28 bg-[#111111]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeUp className="text-center mb-7">
          <SectionLabel>Get in Touch</SectionLabel>
        </FadeUp>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <FadeUp className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-[#0A0A0A] border border-white/6 rounded-3xl p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Full Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 555 000 0000"
                    className={inputClass}
                    style={BODY}
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                    style={BODY}
                  >
                    Service
                  </label>
                  <Select
                    value={form.service}
                    onValueChange={handleSelectChange}
                  >
                    <SelectTrigger className="w-full bg-[#111111] border border-white/8 rounded-xl px-4 py-[20px] text-white text-sm hover:bg-[#111111] focus:ring-0 focus-visible:ring-0 focus:outline-none focus:border-[#8B5CF6]/60 transition-colors duration-200">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#111111] border-white/8 text-white rounded-xl">
                      <SelectItem
                        value="web"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Web Development
                      </SelectItem>
                      <SelectItem
                        value="desktop"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Desktop Software
                      </SelectItem>
                      <SelectItem
                        value="mobile"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Mobile App
                      </SelectItem>
                      <SelectItem
                        value="video"
                        className="focus:bg-[#8B5CF6]/20 focus:text-white cursor-pointer py-2"
                      >
                        Video Editing
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label
                  className="block text-xs font-semibold text-[#737373] mb-2 uppercase tracking-widest"
                  style={BODY}
                >
                  Project Details
                </label>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project, goals, and timeline..."
                  className={`${inputClass} resize-none`}
                  style={BODY}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`w-full flex items-center justify-center gap-2 font-semibold py-4 rounded-xl transition-all duration-200 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-[#8B5CF6] hover:bg-[#9D71FB] text-white hover:shadow-xl hover:shadow-[#8B5CF6]/30 hover:-translate-y-0.5"
                }`}
                style={BODY}
              >
                {status === "loading" ? (
                  "Sending..."
                ) : status === "success" ? (
                  "Message Sent!"
                ) : status === "error" ? (
                  "Error! Try Again"
                ) : (
                  <>
                    <>Send Message</> <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </FadeUp>

          {/* Side info */}
          <FadeUp delay={0.1} className="lg:col-span-2">
            <div className="space-y-4">
              {contacts.map((c, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#0A0A0A] border border-white/6 rounded-2xl px-5 py-4"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#8B5CF6]/15 border border-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
                    <c.icon size={16} className="text-[#8B5CF6]" />
                  </div>
                  <div>
                    <p
                      className="text-[#737373] text-[10px] uppercase font-semibold tracking-widest"
                      style={BODY}
                    >
                      {c.label}
                    </p>
                    <p className="text-white text-sm" style={BODY}>
                      {c.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* Map placeholder */}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
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
          {/* Brand */}
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
            © {new Date().getFullYear()} Haikal Agency. All rights reserved.
          </p>
          <p className="text-[#737373] text-xs" style={BODY}>
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Results />
      <Process />
      <Portfolio />
      <Technologies />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
