import { useState } from "react";
import { ArrowUpRight, Play } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { FadeUp, SectionLabel } from "./helpers";
const videos = [{
  id: "motion",
  src: "/ai tools.mp4",
  title: "AI Tools / Motion reel",
  category: "Motion design & VFX",
  description: "Kinetic type, visual experimentation, and a rhythm all its own."
}, {
  id: "brand",
  src: "/7.mp4",
  title: "A story in every frame",
  category: "Brand commercial",
  description: "Cinematic storytelling shaped by considered color and carefully timed cuts."
}, {
  id: "vfx",
  src: "/f5.mp4",
  title: "Beyond the ordinary",
  category: "Visual effects & compositing",
  description: "Compositing, motion tracking, and a different kind of visual energy."
}];
export function FeaturedEditsSection() {
  const [active, setActive] = useState("motion");
  return <section id="featured-edits" className="section site-container motion-section">
    <FadeUp>
      <div className="section-heading">
        <div>
          <SectionLabel number="05">Moving stories</SectionLabel>
          <h2>Some ideas<br />are <span className="serif-word">better in motion.</span></h2>
        </div>
        <a className="text-link" href="#contact">Let’s make something move <ArrowUpRight size={17} /></a>
      </div>
    </FadeUp>
    <FadeUp>
      <Tabs value={active} onValueChange={setActive} className="reel-tabs">
        {videos.map(video => <TabsContent key={video.id} value={video.id} className="reel-panel">
          <div className="reel-frame">
            <video key={video.id} controls preload="metadata" playsInline aria-label={video.title}>
              <source src={`${video.src}#t=0.1`} type="video/mp4" />
            </video>
            <span className="reel-corner eyebrow">HAIKAL® / MOTION STUDIO</span>
          </div>
          <div className="reel-description">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </TabsContent>)}
        <TabsList className="reel-list" aria-label="Choose a featured film">
          {videos.map((video, i) => <TabsTrigger value={video.id} key={video.id} className="reel-trigger">
            <span className="eyebrow">0{i + 1}</span>
            <div>
              <span>{video.title}</span>
              <small>{video.category}</small>
            </div>
            <Play size={15} />
          </TabsTrigger>)}
        </TabsList>
      </Tabs>
    </FadeUp>
  </section>;
}
