import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger, useGSAP);
export const HEADING = {
  fontFamily: "'Manrope', sans-serif"
};
export const BODY = {
  fontFamily: "'DM Sans', sans-serif"
};
export function FadeUp({
  children,
  delay = 0,
  className = ""
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(ref.current, {
        y: 35,
        opacity: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 94%",
          once: true
        }
      });
    });
    return () => media.revert();
  }, {
    scope: ref
  });
  return <div ref={ref} className={className}>{children}</div>;
}
export function SectionLabel({
  children,
  number
}: {
  children: ReactNode;
  number?: string;
}) {
  return <span className="eyebrow section-label">
    {number && <span className="section-number">{number} /</span>}
    {children}
  </span>;
}
export function BrandMark({
  className = ""
}: {
  className?: string;
}) {
  return <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
    <path d="M3 3h8v10h10V3h8v26h-8V19H11v10H3V3Z" fill="currentColor" />
    <path d="m11 13 10 6V13H11Z" fill="var(--violet)" />
  </svg>;
}

export function getAssetUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
  return `${import.meta.env.BASE_URL}${cleanUrl}`;
}
