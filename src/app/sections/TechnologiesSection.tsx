import { FaReact, FaNodeJs, FaPython, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiElectron, SiDocker } from "react-icons/si";
import { FadeUp } from "./helpers";
const technologies = [{
  name: "React",
  icon: FaReact
}, {
  name: "Next.js",
  icon: SiNextdotjs
}, {
  name: "Node.js",
  icon: FaNodeJs
}, {
  name: "Flutter",
  icon: SiFlutter
}, {
  name: "Electron",
  icon: SiElectron
}, {
  name: "Python",
  icon: FaPython
}, {
  name: "Docker",
  icon: SiDocker
}, {
  name: "Figma",
  icon: FaFigma
}];
export function Technologies() {
  return <section className="tech-section site-container">
    <FadeUp>
      <div className="tech-heading">
        <h2 className="eyebrow">Technologies we master</h2>
        <p>The right tools. Chosen for your project.</p>
      </div>
      <div className="tech-list">
        {technologies.map(tech => <span key={tech.name}>
          <tech.icon size={23} />
          <span>{tech.name}</span>
        </span>)}
      </div>
    </FadeUp>
  </section>;
}
