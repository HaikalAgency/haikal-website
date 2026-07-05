import { motion } from "motion/react";
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
import { Video, Layers } from "lucide-react";
import { FadeUp, SectionLabel, HEADING, BODY } from "./helpers";

export function Technologies() {
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
