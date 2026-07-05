import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SplineScene } from "../components/ui/splite";
import { HEADING, BODY, SectionLabel } from "./helpers";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#8B5CF6]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#A78BFA]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 lg:py-0 grid lg:grid-cols-2 gap-16 items-center">
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

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:flex items-center justify-center w-full h-[500px]"
        >
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
