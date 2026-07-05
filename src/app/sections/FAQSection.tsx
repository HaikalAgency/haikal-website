import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function FAQ() {
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
