import { motion } from "motion/react";
import { Wrench, Zap, Shield, HeartHandshake } from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function About() {
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

export function WhyUs() {
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
