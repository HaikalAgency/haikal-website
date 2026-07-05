import { motion } from "motion/react";
import { Star } from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Testimonials() {
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
