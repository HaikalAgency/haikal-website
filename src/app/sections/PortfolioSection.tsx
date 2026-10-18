import { useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { projectsData } from "../data/projectsData";
import { FadeUp, SectionLabel } from "./helpers";
const order = [3, 2, 1, 6, 8, 4, 5, 7];
const projects = order.map(id => projectsData.find(project => project.id === id)!);
const groups = [{
  id: "selected",
  label: "Selected work"
}, {
  id: "web",
  label: "Websites"
}, {
  id: "apps",
  label: "Applications"
}];
export function Portfolio() {
  const [filter, setFilter] = useState("selected"),
    [expanded, setExpanded] = useState(false);
  const filtered = projects.filter(p => filter === "selected" || (filter === "web" ? [2, 3, 7, 8].includes(p.id) : [1, 4, 5, 6].includes(p.id)));
  const visible = filter === "selected" && !expanded ? filtered.slice(0, 4) : filtered;
  return <section id="portfolio" className="section site-container work-section">
    <FadeUp>
      <div className="section-heading">
        <div>
          <SectionLabel number="01">Selected work</SectionLabel>
          <h2>Less talk.<br /><span className="muted-heading">More made.</span></h2>
        </div>
        <p>A few things we’ve helped bring into the world.<br />Different challenges. The same attention to detail.</p>
      </div>
    </FadeUp>
    <Tabs value={filter} onValueChange={value => {
      setFilter(value);
      setExpanded(false);
    }} className="work-tabs">
      <TabsList className="work-filters" aria-label="Filter projects">
        {groups.map(group => <TabsTrigger className="work-filter" key={group.id} value={group.id}>
          {group.label}
          <span>{group.id === "selected" ? "08" : "04"}</span>
        </TabsTrigger>)}
      </TabsList>
      {groups.map(group => <TabsContent key={group.id} value={group.id}>
        <div className="project-grid">
          {visible.map((project, i) => <FadeUp key={project.id} delay={i % 2 * 0.1} className={`project-item project-item-${i % 2}`}>
            <Link to={`/project/${project.id}`} className="project-link">
              <div className={`project-image project-stage-${project.id}`}>
                <img src={project.image} alt={`${project.title} interface design`} loading="lazy" width="1000" height="750" />
                <span className="project-open">
                  <ArrowUpRight size={25} />
                </span>
                <span className="project-view eyebrow">View case study</span>
              </div>
              <div className="project-meta">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <span className="project-index eyebrow">0{order.indexOf(project.id) + 1}</span>
              </div>
            </Link>
          </FadeUp>)}
        </div>
      </TabsContent>)}
    </Tabs>
    {filter === "selected" && <div className="work-more">
      <button className="button button-outline" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show selected projects" : "Discover all 8 projects"}
        <ArrowDown size={16} className={expanded ? "rotate-180" : ""} />
      </button>
      <span className="eyebrow">From the first idea to the final pixel.</span>
    </div>}
  </section>;
}
