import { motion } from "motion/react";
import {
  ArrowRight,
  Globe,
  Monitor,
  Smartphone,
  Video,
  BarChart3,
  Layers,
  Shield as ShieldIcon,
} from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

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
          {[BarChart3, Layers, Globe, ShieldIcon].map((Icon, i) => (
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
        <div className="aspect-video bg-[#111111] rounded-xl border border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-[#A78BFA]/5" />
          <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
            <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white/60 ml-1" />
          </div>
        </div>
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

export function Services() {
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
