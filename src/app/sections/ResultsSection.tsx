import { motion } from "motion/react";
import {
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Layers,
  Smile,
  Wrench,
  HeartHandshake,
  CheckCircle,
} from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Results() {
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
