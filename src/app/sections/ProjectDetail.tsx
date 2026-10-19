import { useParams, Link } from "react-router";
import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import { projectsData } from "../data/projectsData";
import { FadeUp, SectionLabel, getAssetUrl } from "./helpers";
export function ProjectDetail() {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const projectIndex = projectsData.findIndex(project => String(project.id) === id);
  if (projectIndex === -1) return <section className="site-container missing-project">
    <SectionLabel>404 / Project not found</SectionLabel>
    <h1>A different<br />starting point.</h1>
    <Link to="/#portfolio" className="button">Explore the work <ArrowUpRight size={18} /></Link>
  </section>;
  const project = projectsData[projectIndex],
    nextProject = projectsData[(projectIndex + 1) % projectsData.length];
  const liveUrl = project.liveUrl && /^https?:\/\//.test(project.liveUrl) && !/^https?:\/\/(localhost|127\.0\.0\.1)([:/]|$)/.test(project.liveUrl) ? project.liveUrl : undefined;
  return <article className="case-study">
    <div className="site-container">
      <Link to="/#portfolio" className="text-link case-back"><ArrowLeft size={15} /> Back to selected work</Link>
      <FadeUp>
        <div className="case-heading">
          <SectionLabel>Selected work / {project.category}</SectionLabel>
          <h1>
            {project.title}
            <span>.</span>
          </h1>
          <p>{project.overview}</p>
        </div>
      </FadeUp>
      <FadeUp>
        <div className="case-cover">
          <img src={getAssetUrl(project.bannerImage)} alt={`${project.title} project overview`} width="1400" height="850" />
        </div>
      </FadeUp>
      <div className="case-metadata">
        <div>
          <span className="eyebrow">Client</span>
          <p>{project.client}</p>
        </div>
        <div>
          <span className="eyebrow">Our role</span>
          <p>{project.role}</p>
        </div>
        <div>
          <span className="eyebrow">Timeline</span>
          <p>{project.duration}</p>
        </div>
        <div className="case-actions">
          {liveUrl && <a className="text-link" href={liveUrl} target="_blank" rel="noreferrer">Visit website <ArrowUpRight size={16} /></a>}
          {project.githubUrl && <a className="text-link" href={project.githubUrl} target="_blank" rel="noreferrer">Explore the code <ArrowUpRight size={16} /></a>}
        </div>
      </div>
      <div className="case-story">
        <FadeUp>
          <SectionLabel>The thinking behind it</SectionLabel>
          <h2>A considered approach.<br /><span className="muted-heading">A meaningful result.</span></h2>
          <div className="case-stack">
            <div>
              <h3>The challenge</h3>
              <p>{project.challenge}</p>
            </div>
            <div>
              <h3>The solution</h3>
              <p>{project.solution}</p>
            </div>
            <div>
              <h3>The outcome</h3>
              <ul>
                {project.results.map(result => <li key={result}>{result}</li>)}
              </ul>
            </div>
          </div>
        </FadeUp>
        <FadeUp className="case-features">
          <span className="eyebrow">In the details</span>
          {project.features.map((feature, i) => <div key={feature.title}>
            <span className="eyebrow">0{i + 1}</span>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>)}
          <div>
            <span className="eyebrow">The toolkit</span>
            <div className="service-tags">
              {project.technologies.map(tech => <span key={tech}>{tech}</span>)}
            </div>
          </div>
        </FadeUp>
      </div>
      <div className="case-gallery">
        {project.gallery.map((image, i) => <FadeUp key={image}>
          <img src={getAssetUrl(image)} alt={`${project.title} — detail ${i + 1}`} loading="lazy" width="1100" height="750" />
        </FadeUp>)}
      </div>
      <Link to={`/project/${nextProject.id}`} className="case-next">
        <span className="eyebrow">Up next</span>
        <h2>{nextProject.title}</h2>
        <ArrowRight size={42} />
      </Link>
    </div>
    <div className="case-contact">
      <span className="eyebrow">Your idea could be next.</span>
      <Link to="/#contact">Let’s make it happen. <ArrowUpRight /></Link>
    </div>
  </article>;
}
