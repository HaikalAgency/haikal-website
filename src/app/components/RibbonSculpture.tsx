import { useMemo } from "react";
// Depth-sorted ribbon facets provide light and occlusion without a WebGL runtime.
function makeRibbon() {
  const point = (t: number, edge: number) => {
    const radius = 1.75 + 0.52 * Math.cos(3 * t) + edge * 0.46 * Math.cos(1.5 * t);
    const x = radius * Math.cos(2 * t),
      y = radius * Math.sin(2 * t);
    const z = 0.85 * Math.sin(3 * t) + edge * 0.46 * Math.sin(1.5 * t);
    const ry = y * Math.cos(0.88) - z * Math.sin(0.88),
      rz = y * Math.sin(0.88) + z * Math.cos(0.88);
    const rx = x * Math.cos(-0.3) + rz * Math.sin(-0.3),
      depth = -x * Math.sin(-0.3) + rz * Math.cos(-0.3);
    const scale = 115 * (6 / (6 - depth * 0.35));
    return {
      x: 340 + (rx * Math.cos(-0.35) - ry * Math.sin(-0.35)) * scale,
      y: 320 + (rx * Math.sin(-0.35) + ry * Math.cos(-0.35)) * scale,
      z: depth
    };
  };
  const facets = [],
    segments = 280,
    bands = 20;
  for (let i = 0; i < segments; i++) {
    const t = i / segments * Math.PI * 2;
    for (let j = 0; j < bands; j++) {
      const v = j / bands * 2 - 1;
      const p = [point(t, v), point(t + Math.PI * 2 / segments + 0.001, v), point(t + Math.PI * 2 / segments + 0.001, v + 2 / bands + 0.008), point(t, v + 2 / bands + 0.008)];
      const light = 31 + 23 * Math.sin(t * 3 - 0.8) + 24 * Math.pow(Math.max(0, Math.cos(v * 1.6 + t * 2)), 5);
      facets.push({
        d: `M${p.map(q => `${q.x.toFixed(2)},${q.y.toFixed(2)}`).join("L")}Z`,
        z: p.reduce((s, q) => s + q.z, 0) / 4,
        fill: `hsl(${262 + 8 * Math.cos(t)} 67% ${Math.max(15, Math.min(82, light))}%)`
      });
    }
  }
  return facets.sort((a, b) => a.z - b.z);
}
export function RibbonSculpture() {
  const facets = useMemo(makeRibbon, []);
  return <svg className="ribbon-sculpture" viewBox="0 0 680 640" fill="none" aria-hidden="true">
    <defs>
      <radialGradient id="ribbon-aura">
        <stop stopColor="#6f42b4" stopOpacity=".16" />
        <stop offset="1" stopColor="#6f42b4" stopOpacity="0" />
      </radialGradient>
    </defs>
    <ellipse cx="340" cy="348" rx="310" ry="265" fill="url(#ribbon-aura)" />
    <g>
      {facets.map((facet, i) => <path key={i} d={facet.d} fill={facet.fill} />)}
    </g>
  </svg>;
}
