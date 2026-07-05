import { useState } from "react";
import { motion } from "motion/react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Process() {
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

        <div className="hidden lg:block">
          <div className="relative">
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
