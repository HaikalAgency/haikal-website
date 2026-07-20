'use client'

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export function ArchitecturalBlueprint() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 230, y: 180 });

  // Mouse positions normalized from -0.5 to 0.5
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth transitions
  const springConfig = { damping: 22, stiffness: 120, mass: 0.8 };
  
  // 3D rotation based on mouse position
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const containerScale = useSpring(1, springConfig);

  // Layered parallax shifts
  const bgShiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const bgShiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const fgShiftX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const fgShiftY = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);

    setMousePos({
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top)
    });
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    containerScale.set(1);
  };

  const handlePointerEnter = () => {
    containerScale.set(1.02);
  };

  // Coordinates for our 3D stacked layers (diamonds)
  // Isometric centers: Database (y: 330), API/Backend (y: 230), Frontend/UI (y: 130)
  const cx = 250;
  const rx = 140; // width radius
  const ry = 70;  // height radius (isometric ratio)

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerEnter={handlePointerEnter}
      className="relative w-full h-[520px] flex items-center justify-center select-none cursor-crosshair overflow-visible"
    >


      {/* Main Perspective Container */}
      <motion.div
        style={{
          perspective: 1200,
          scale: containerScale,
        }}
        className="w-full h-full flex items-center justify-center overflow-visible"
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[500px] h-[500px] overflow-visible"
        >
          {/* Layer 1: Background Blueprint Grid */}
          <motion.div
            style={{
              x: bgShiftX,
              y: bgShiftY,
              transform: "translateZ(-80px)",
            }}
            className="absolute inset-0 pointer-events-none opacity-40 overflow-visible"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
              <defs>
                <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
                </pattern>
                <radialGradient id="grid-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
              </defs>
              <rect width="500" height="500" fill="url(#grid-pattern)" />
              <circle cx="250" cy="250" r="240" fill="url(#grid-glow)" />
              {/* Outer compass ring */}
              <circle cx="250" cy="250" r="230" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="4 6" />
              <circle cx="250" cy="250" r="235" fill="none" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Layer 2: Main Architectural Wireframe Structure */}
          <motion.div
            style={{
              transform: "translateZ(0px)",
            }}
            className="absolute inset-0 pointer-events-none overflow-visible"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="glow-grad-purple" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="glow-grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
                </linearGradient>
                <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Vertical Guide Pillars */}
              <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1">
                {/* Left corner vertical alignment */}
                <line x1={cx - rx} y1="130" x2={cx - rx} y2="330" strokeDasharray="3 3" />
                {/* Right corner vertical alignment */}
                <line x1={cx + rx} y1="130" x2={cx + rx} y2="330" strokeDasharray="3 3" />
                {/* Top/Back corner vertical alignment */}
                <line x1={cx} y1="60" x2={cx} y2="260" strokeDasharray="3 3" />
                {/* Bottom/Front corner vertical alignment */}
                <line x1={cx} y1="200" x2={cx} y2="400" strokeDasharray="3 3" />
                {/* Center axis guide */}
                <line x1={cx} y1="50" x2={cx} y2="450" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1.5" strokeDasharray="5 5" />
              </g>

              {/* Orbit rings rotating in perspective */}
              <motion.g
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                <ellipse cx="250" cy="250" rx="200" ry="100" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="8 12" />
                <circle cx="50" cy="250" r="3" fill="#A78BFA" filter="url(#glow-filter)" />
                <circle cx="450" cy="250" r="3" fill="#8B5CF6" filter="url(#glow-filter)" />
              </motion.g>

              <motion.g
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "250px 250px" }}
              >
                <ellipse cx="250" cy="250" rx="160" ry="80" fill="none" stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" strokeDasharray="4 6" />
                <circle cx="250" cy="170" r="2.5" fill="#A78BFA" />
              </motion.g>

              {/* ================= STACK LAYER 1: DATABASE (BOTTOM) ================= */}
              <g id="layer-db" transform="translate(0, 100)">
                {/* Outer bounding box */}
                <path d={`M ${cx},${230 - ry} L ${cx + rx},230 L ${cx},${230 + ry} L ${cx - rx},230 Z`} fill="rgba(13, 8, 30, 0.6)" stroke="url(#glow-grad-purple)" strokeWidth="1.5" />
                {/* Grid subdivisions inside layer */}
                <path d={`M ${cx - rx/2},${230 - ry/2} L ${cx + rx/2},${230 + ry/2}`} stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
                <path d={`M ${cx + rx/2},${230 - ry/2} L ${cx - rx/2},${230 + ry/2}`} stroke="rgba(139, 92, 246, 0.15)" strokeWidth="1" />
                <path d={`M ${cx},${230 - ry} L ${cx},${230 + ry}`} stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />
                <path d={`M ${cx - rx},230 L ${cx + rx},230`} stroke="rgba(139, 92, 246, 0.1)" strokeWidth="1" />

                {/* Sub-blocks standing on Database */}
                <path d={`M ${cx - 30},230 L ${cx},215 L ${cx + 30},230 L ${cx},245 Z`} fill="rgba(139, 92, 246, 0.15)" stroke="#8B5CF6" strokeWidth="1" />
                <path d={`M ${cx - 30},230 L ${cx - 30},240 L ${cx},255 L ${cx},245 Z`} fill="rgba(139, 92, 246, 0.25)" stroke="#8B5CF6" strokeWidth="1" />
                <path d={`M ${cx},245 L ${cx},255 L ${cx + 30},240 L ${cx + 30},230 Z`} fill="rgba(139, 92, 246, 0.1)" stroke="#8B5CF6" strokeWidth="1" />
              </g>

              {/* Connection pulses Database to API */}
              <g stroke="#8B5CF6" strokeWidth="1.5">
                <line x1={cx} y1="330" x2={cx} y2="230" strokeDasharray="4 4" className="animate-[dash_10s_linear_infinite]" />
                <line x1={cx - 100} y1="330" x2={cx - 100} y2="230" strokeDasharray="3 3" />
                <line x1={cx + 100} y1="330" x2={cx + 100} y2="230" strokeDasharray="3 3" />
              </g>

              {/* ================= STACK LAYER 2: API / LOGIC (MIDDLE) ================= */}
              <g id="layer-api" transform="translate(0, 0)">
                {/* Outer bounding box */}
                <path d={`M ${cx},${230 - ry} L ${cx + rx},230 L ${cx},${230 + ry} L ${cx - rx},230 Z`} fill="rgba(13, 8, 30, 0.4)" stroke="url(#glow-grad-cyan)" strokeWidth="1.5" />
                {/* Inner coordinate grid */}
                <path d={`M ${cx - rx/3},${230 - ry/3} L ${cx + rx/3},${230 + ry/3}`} stroke="rgba(167, 139, 250, 0.15)" strokeWidth="1" />
                <path d={`M ${cx + rx/3},${230 - ry/3} L ${cx - rx/3},${230 + ry/3}`} stroke="rgba(167, 139, 250, 0.15)" strokeWidth="1" />

                {/* Sub-structures: floating system nodes */}
                {/* Node A (Left) */}
                <circle cx={cx - 50} cy={230 - 15} r="5" fill="#0A0A0A" stroke="#A78BFA" strokeWidth="1.5" />
                <circle cx={cx - 50} cy={230 - 15} r="2" fill="#A78BFA" className="animate-ping" style={{ transformOrigin: `${cx - 50}px ${230 - 15}px` }} />
                {/* Node B (Right) */}
                <circle cx={cx + 50} cy={230 + 15} r="5" fill="#0A0A0A" stroke="#8B5CF6" strokeWidth="1.5" />
                <circle cx={cx + 50} cy={230 + 15} r="2" fill="#8B5CF6" />

                {/* Center Core Node */}
                <circle cx={cx} cy={230} r="8" fill="rgba(167, 139, 250, 0.2)" stroke="#A78BFA" strokeWidth="2" filter="url(#glow-filter)" />
                <line x1={cx} y1="230" x2={cx - 50} y2={230 - 15} stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1.5" />
                <line x1={cx} y1="230" x2={cx + 50} y2={230 + 15} stroke="rgba(139, 92, 246, 0.4)" strokeWidth="1.5" />
              </g>

              {/* Connection pulses API to UI */}
              <g stroke="#A78BFA" strokeWidth="1.5">
                <line x1={cx} y1="230" x2={cx} y2="130" strokeDasharray="3 3" />
                <line x1={cx - 60} y1="230" x2={cx - 60} y2="130" strokeDasharray="4 4" />
                <line x1={cx + 60} y1="230" x2={cx + 60} y2="130" strokeDasharray="4 4" />
              </g>

              {/* ================= STACK LAYER 3: UI / FRONTEND (TOP) ================= */}
              <g id="layer-ui" transform="translate(0, -100)">
                {/* Outer diamond */}
                <path d={`M ${cx},${230 - ry} L ${cx + rx},230 L ${cx},${230 + ry} L ${cx - rx},230 Z`} fill="rgba(13, 8, 30, 0.2)" stroke="url(#glow-grad-cyan)" strokeWidth="2" filter="url(#glow-filter)" />
                
                {/* Grid cells */}
                <g stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1">
                  <line x1={cx - rx/2} y1={230 - ry/2} x2={cx + rx/2} y2={230 + ry/2} />
                  <line x1={cx - rx/2} y1={230 + ry/2} x2={cx + rx/2} y2={230 - ry/2} />
                  <line x1={cx} y1={230 - ry} x2={cx + rx/2} y2={230 - ry/2} strokeDasharray="2 2" />
                  <line x1={cx} y1={230 + ry} x2={cx - rx/2} y2={230 + ry/2} strokeDasharray="2 2" />
                </g>

                {/* Floating screens mockups (architectural planes) */}
                <g transform="translate(0, -15)">
                  {/* Miniature dashboard mockup floating on top */}
                  <path d={`M ${cx - 40},230 L ${cx},210 L ${cx + 40},230 L ${cx},250 Z`} fill="rgba(167, 139, 250, 0.1)" stroke="#A78BFA" strokeWidth="1.5" />
                  {/* Graph indicator within mockup */}
                  <path d={`M ${cx - 25},230 L ${cx - 10},222 L ${cx + 10},234 L ${cx + 25},226`} fill="none" stroke="#8B5CF6" strokeWidth="1.5" />
                  <circle cx={cx + 25} cy="226" r="2.5" fill="#8B5CF6" />
                </g>
              </g>

              {/* Glowing Corner Vertices Markers */}
              <g fill="#A78BFA" filter="url(#glow-filter)">
                {/* L2 Vertices */}
                <circle cx={cx - rx} cy={130} r="3.5" />
                <circle cx={cx + rx} cy={130} r="3.5" />
                <circle cx={cx} cy={130 - ry} r="3" fill="#8B5CF6" />
                <circle cx={cx} cy={130 + ry} r="3" fill="#8B5CF6" />

                {/* L1 Vertices */}
                <circle cx={cx - rx} cy={230} r="2" fill="#8B5CF6" />
                <circle cx={cx + rx} cy={230} r="2" fill="#8B5CF6" />

                {/* L0 Vertices */}
                <circle cx={cx - rx} cy={330} r="3" fill="#8B5CF6" />
                <circle cx={cx + rx} cy={330} r="3" fill="#8B5CF6" />
                <circle cx={cx} cy={330 + ry} r="3.5" />
              </g>
            </svg>
          </motion.div>

          {/* Layer 3: Interactive Foreground Blueprint Overlay (Parallax Layer) */}
          <motion.div
            style={{
              x: fgShiftX,
              y: fgShiftY,
              transform: "translateZ(80px)",
            }}
            className="absolute inset-0 pointer-events-none overflow-visible"
          >
            <svg viewBox="0 0 500 500" className="w-full h-full overflow-visible">
              {/* Highlight crosshairs */}
              <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1">
                {/* Crosshair 1 (near top right) */}
                <path d="M 380 90 L 400 90 M 390 80 L 390 100" />
                <circle cx="390" cy="90" r="5" fill="none" stroke="rgba(167, 139, 250, 0.3)" strokeWidth="1" />

                {/* Crosshair 2 (near bottom left) */}
                <path d="M 90 390 L 110 390 M 100 380 L 100 400" />
                <circle cx="100" cy="390" r="5" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
              </g>

              {/* Dynamic pointer line tracking mouse location */}
              <line x1={mousePos.x} y1="0" x2={mousePos.x} y2="500" stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1" />
              <line x1="0" y1={mousePos.y} x2="500" y2={mousePos.y} stroke="rgba(139, 92, 246, 0.04)" strokeWidth="1" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
