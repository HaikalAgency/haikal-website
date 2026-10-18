import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Asterisk } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { RibbonSculpture } from "../components/RibbonSculpture";
export function Hero() {
  const root = useRef<HTMLElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.timeline({
        defaults: {
          ease: "power3.out"
        }
      }).from(".hero-eyebrow", {
        opacity: 0,
        y: 15,
        duration: 0.7
      }, 0.05).from(".hero-line > span", {
        yPercent: 110,
        rotate: 3,
        stagger: 0.12,
        duration: 1.15
      }, 0.12).from(".hero-copy, .hero-actions, .hero-bottom", {
        opacity: 0,
        y: 22,
        duration: 0.8,
        stagger: 0.12
      }, 0.65).from(".hero-art", {
        opacity: 0,
        scale: 0.85,
        rotate: -14,
        duration: 1.6
      }, 0.15);
      const float = gsap.to(".sculpture-float", {
        y: -16,
        rotation: 5,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
      gsap.to(".hero-art-scroll", {
        y: 100,
        rotation: -10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          onToggle: self => self.isActive ? float.resume() : float.pause()
        }
      });
    });
    media.add("(hover: hover) and (prefers-reduced-motion: no-preference)", () => {
      const xTo = gsap.quickTo(".sculpture-pointer", "x", {
          duration: 1.2,
          ease: "power3.out"
        }),
        yTo = gsap.quickTo(".sculpture-pointer", "y", {
          duration: 1.2,
          ease: "power3.out"
        });
      const node = root.current;
      const move = (event: PointerEvent) => {
        const box = node!.getBoundingClientRect();
        xTo((event.clientX / box.width - 0.5) * 35);
        yTo(((event.clientY - box.top) / box.height - 0.5) * 25);
      };
      const reset = () => {
        xTo(0);
        yTo(0);
      };
      node?.addEventListener("pointermove", move);
      node?.addEventListener("pointerleave", reset);
      return () => {
        node?.removeEventListener("pointermove", move);
        node?.removeEventListener("pointerleave", reset);
      };
    });
    return () => media.revert();
  }, {
    scope: root
  });
  return <>
    <section ref={root} id="home" className="hero site-container">
      <div className="hero-eyebrow eyebrow"><span className="status-dot" />Independent digital design & development studio</div>
      <div className="hero-main">
        <div className="hero-type">
          <h1>
            <span className="hero-line">
              <span>Good ideas.</span>
            </span>
            <span className="hero-line">
              <span>Extraordinary</span>
            </span>
            <span className="hero-line hero-line-violet">
              <span>digital<span className="hero-fullstop">.</span></span>
            </span>
          </h1>
          <p className="hero-copy">We turn ambitious ideas into websites, software<br className="desktop-break" /> and digital experiences with a point of difference.</p>
          <div className="hero-actions">
            <a className="button" href="#portfolio">Explore our work <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="hero-art" role="img" aria-label="Sculptural violet ribbon, a continuous form connecting creativity and engineering">
          <div className="hero-art-scroll">
            <div className="sculpture-pointer">
              <div className="sculpture-float">
                <RibbonSculpture />
              </div>
            </div>
          </div>
          <span className="art-caption eyebrow">An intersection of form & function</span>
          <span className="art-index eyebrow">H® — 001</span>
          <span className="art-cross art-cross-one">+</span>
          <span className="art-cross art-cross-two">+</span>
        </div>
      </div>
      <div className="hero-bottom">
        <span className="eyebrow">Thoughtfully designed. Precisely built.</span>
        <span className="hero-location">Based in Algeria. Working everywhere.</span>
        <a href="#portfolio" className="scroll-link" aria-label="Scroll to selected work">
          <ArrowDown size={17} />
        </a>
      </div>
    </section>
    <div className="client-strip site-container">
      <span className="eyebrow">In good<br />company</span>
      <div className="client-wordmarks">
        <span className="client-bis"><Asterisk /> BIS<span className="client-sub">INCUBATOR</span></span>
        <span className="client-yasmin">Al Yasmin<span className="client-sub">PATISSERIE</span></span>
        <span className="client-skill">skillbridge<span className="client-dot">↗</span></span>
        <span className="client-happy">happy space<span className="client-sub">COFFEE & COMMUNITY</span></span>
      </div>
    </div>
  </>;
}
