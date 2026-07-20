import { useRef } from "react";
import { motion, useInView } from "motion/react";

export const HEADING = { fontFamily: "'Space Grotesk', sans-serif" };
export const BODY = { fontFamily: "'Inter', sans-serif" };

export function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ willChange: inView ? "auto" : "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#A78BFA] mb-4"
      style={BODY}
    >
      <span className="w-6 h-px bg-[#A78BFA]" />
      {children}
      <span className="w-6 h-px bg-[#A78BFA]" />
    </span>
  );
}

export function getAssetUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;
  return `${import.meta.env.BASE_URL}${cleanUrl}`;
}
