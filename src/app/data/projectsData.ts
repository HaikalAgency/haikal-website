export interface ProjectFeature {
  title: string;
  description: string;
}

export interface ProjectDetails {
  id: number;
  title: string;
  category: string;
  image: string;
  bannerImage: string;
  aspectClass: string;
  client: string;
  role: string;
  duration: string;
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  features: ProjectFeature[];
  gallery: string[];
}

export const projectsData: ProjectDetails[] = [
  {
    id: 1,
    title: "Vesper CRM Portal",
    category: "Web Application",
    image: "/pictures/1.png",
    bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
    client: "Vesper Labs Inc.",
    role: "Lead Front-End Engineering & UX Design",
    duration: "4 Months",
    liveUrl: "https://vesper-crm.example.com",
    githubUrl: "https://github.com/example/vesper-crm",
    overview: "Vesper CRM is a next-generation customer relationship management portal designed for mid-to-large scale enterprises. It streamlines communications, customer tracking, and automated pipeline workflows into a unified, lightning-fast dashboard.",
    challenge: "Enterprises struggle with fragmented tools and slow load times. Our challenge was to design a dashboard that aggregates data from 5+ external APIs while maintaining a sub-100ms response time and providing a smooth visual experience for day-to-day sales agents.",
    solution: "We engineered a dashboard using React, Tailwind CSS, and a specialized state management architecture. By leveraging query-level caching and optimistic UI updates, the interface feels completely instantaneous, even during high-throughput tasks.",
    results: [
      "40% increase in daily agent productivity.",
      "62% faster onboarding times for new client support agents.",
      "Consistent 98% satisfaction rating on client interactions."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts", "Node.js"],
    features: [
      { title: "Real-time Pipelines", description: "Visual drag-and-drop cards showing sales stage progression, powered by React DnD." },
      { title: "Smart Reporting", description: "Interactive custom graphs with SVG animations detailing quarterly performance." },
      { title: "Unified Inboxes", description: "Aggregated email, phone, and live chat logs updated in real-time." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Apex Dashboard",
    category: "SaaS Analytics",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Apex Metrics Corp",
    role: "Full-Stack Development & Architecture",
    duration: "3 Months",
    liveUrl: "https://apex-metrics.example.com",
    githubUrl: "https://github.com/example/apex-dashboard",
    overview: "Apex Dashboard is a highly customizable SaaS analytics suite providing real-time infrastructure and user-growth insights for modern software startups.",
    challenge: "Startups need insights instantly but are often overwhelmed by complex visualization tools. We needed to create a system that was deeply functional but incredibly intuitive, customizable, and capable of rendering large datasets dynamically.",
    solution: "We designed a widgets-based drag-and-drop system. Starting from a pre-configured template, startups can easily swap widgets, configure custom metrics, and export reports in PDF or CSV format.",
    results: [
      "2.5x faster insights discovery reported by clients.",
      "Seamless integration with AWS and GCP analytics pipelines.",
      "15,000+ monthly active users within the first month of deployment."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "D3.js", "Express", "PostgreSQL"],
    features: [
      { title: "Dynamic Widgets", description: "Customizable grid layouts that persist per-user using LocalStorage/DB profiles." },
      { title: "Alert Thresholds", description: "Automated triggers that send Slack or SMS notifications when key metrics drop." },
      { title: "Multi-tenant Access", description: "Secure, role-based workspace permissions for teams of any size." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Nova Landing Suite",
    category: "Product Launch",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Nova Ventures",
    role: "Front-End Development & Interaction Design",
    duration: "2 Months",
    liveUrl: "https://nova-launch.example.com",
    githubUrl: "https://github.com/example/nova-landing",
    overview: "Nova Landing Suite is a high-conversion digital marketing engine built for rapidly presenting and launching hardware products, utilizing state-of-the-art interactive web features.",
    challenge: "Launching new hardware requires capturing and holding user attention. We needed to convey physical device craftsmanship online and ensure pages perform perfectly on mobile connections.",
    solution: "We implemented premium visual elements, including optimized 3D WebGL models, scroll-triggered animations using Framer Motion, and lightweight vector assets.",
    results: [
      "350% increase in product pre-orders compared to previous launches.",
      "95+ Google Lighthouse performance score on mobile.",
      "Featured on multiple design inspiration galleries."
    ],
    technologies: ["React", "Framer Motion", "Three.js", "Tailwind CSS", "Vite"],
    features: [
      { title: "Interactive 3D Exploded View", description: "Engage users by letting them rotate and dissect the product structure in real-time." },
      { title: "Localized Content Modules", description: "Dynamically served layouts tailored to region-specific marketing plans." },
      { title: "One-Click Checkout", description: "Ultra-fast Stripe integration supporting Google Pay and Apple Pay." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Aether Analytics",
    category: "Visual BI Tool",
    image: "/pictures/2.png",
    bannerImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Aether Capital LLC",
    role: "Lead UI Developer & UX Strategist",
    duration: "5 Months",
    liveUrl: "https://aether-bi.example.com",
    githubUrl: "https://github.com/example/aether-analytics",
    overview: "Aether Analytics is a luxury-branded financial intelligence and visual business intelligence portal mapping global market distributions and capital movements.",
    challenge: "Financial analysts process massive streams of global asset values. The dashboard had to group complex numerical metrics without visual clutter or rendering lag.",
    solution: "We designed a dark-themed portal utilizing WebGL-accelerated canvas renderers for charts and clean typography (Space Grotesk) to structure critical points.",
    results: [
      "Decreased dashboard render overhead by 70%.",
      "Enabled smooth visualization of over 100,000 active tickers.",
      "Lauded by executive management for class-leading modern styling."
    ],
    technologies: ["React", "WebGL Canvas", "TypeScript", "Tailwind CSS", "Recharts", "Framer Motion"],
    features: [
      { title: "Global Heatmaps", description: "Highly interactive vector maps charting international trade flow metrics." },
      { title: "Live Order Books", description: "Virtual list rendering updating at 60fps for crypto and equity movements." },
      { title: "Automated Insights", description: "AI-summarized financial health briefs delivered straight to your workspace." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Linear Workflows",
    category: "Product Management",
    image: "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
    client: "Linear Technologies",
    role: "Frontend Design Engineer",
    duration: "3 Months",
    overview: "A sleek workspace management tool implementing clean, ultra-responsive keyboard shortcuts and fast task tracking.",
    challenge: "Standard project management platforms feel heavy and require too many clicks. We wanted to build a keyboard-first flow that executes actions under 50ms.",
    solution: "We developed an custom hotkey engine and implemented optimistic state updates with react-query, providing feedback immediately before network confirmation.",
    results: [
      "30% reduction in average task update times.",
      "High adoption rate among developer circles.",
      "Minimalistic UX praised for zero-distraction workflow design."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "React Query"],
    features: [
      { title: "Command Menu", description: "Press Cmd+K to search, update, assign, or complete tasks in seconds." },
      { title: "Sub-task Nesting", description: "Infinite sub-task levels with clean inline creation interfaces." },
      { title: "Offline Syncing", description: "Changes are saved locally and synced automatically when connections restore." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Horizon OS Core",
    category: "Developer Platform",
    image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Horizon Systems",
    role: "DevOps & Core Interface Architect",
    duration: "6 Months",
    overview: "A comprehensive developer portal providing visual cluster diagnostics, log aggregation, and single-command environment provisioning.",
    challenge: "Kubernetes and cluster configurations are famously complex to audit visually. Horizon needed a dashboard mapping service mesh connections dynamically.",
    solution: "We integrated dynamic node-link graph layouts using SVG viewport transitions and virtualized list containers to output 5,000 console lines per second.",
    results: [
      "Increased server incident recovery speeds by 45%.",
      "Reduced CPU rendering overhead in browsers by 80% compared to legacy monitoring portals.",
      "Highly scalable interface framework adopted as standard internal software."
    ],
    technologies: ["React", "Tailwind CSS", "SVG Nodes", "WebSockets", "Go", "Docker"],
    features: [
      { title: "Interactive Mesh Mapping", description: "Real-time connection nodes highlighting microservice health metrics instantly." },
      { title: "Live Streaming Terminals", description: "Fully integrated xterm.js portal connecting to cloud instances." },
      { title: "Environment Blueprints", description: "Click-to-configure deployment visualizers exporting valid YAML code." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Zenith Agency Website",
    category: "Creative Marketing",
    image: "/pictures/3.png",
    bannerImage: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
    client: "Zenith Marketing Group",
    role: "Creative Web Director & Interactions",
    duration: "2 Months",
    overview: "A highly artistic, award-winning agency website designed with immersive WebGL assets, scroll-linked parallax, and rich page transitions.",
    challenge: "As a premier agency, Zenith needed their website to demonstrate creative dominance while staying performant and navigable for traditional corporate clients.",
    solution: "We established a design incorporating glassmorphic layers, custom cursors, smooth-scroll overrides, and optimized image assets.",
    results: [
      "Won three Awwwards honors (Site of the Day, Developer Award, Mobile Excellence).",
      "Increased contact form requests by 120%.",
      "99% positive design feedback score from stakeholders."
    ],
    technologies: ["React", "GSAP", "Tailwind CSS", "Vite", "Three.js"],
    features: [
      { title: "Smooth Scroll", description: "Custom physics-based smooth scrolling to enhance visual parallax effects." },
      { title: "Immersive Showreel", description: "Custom HTML5 video wrapper featuring magnetic overlay interaction tags." },
      { title: "Interactive Contact Page", description: "Fluid SVG canvas grid that reacts to cursor hover actions." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Pulse Mobile Client",
    category: "iOS & Android",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
    client: "Pulse Fintech Ltd",
    role: "Lead Mobile Frontend Architect",
    duration: "4 Months",
    overview: "A cutting-edge client application enabling high-speed money transfers and personalized savings vault analysis.",
    challenge: "Financial mobile apps often feel cluttered and load slowly. We aimed to deliver a modern visual experience with immediate feedback and highly polished micro-interactions.",
    solution: "We created a React Native frontend structure backed by customized native widgets, optimizing image delivery and data caching mechanisms.",
    results: [
      "App Store rating increased from 3.8 to 4.7 stars.",
      "Transaction load times reduced to under 1.2 seconds global average.",
      "Over $50M in transactions processed in the first quarter."
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Tailwind CSS", "Reanimated"],
    features: [
      { title: "Biometric Checkout", description: "Secure, native FaceID/TouchID checks integrated with transaction approvals." },
      { title: "Smart Vaults", description: "Animated round-up savings vaults visualizing progress towards financial goals." },
      { title: "Offline Ledgers", description: "SQLite-backed transaction cache allowing local entries and sync features." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 9,
    title: "Solaria Solar Tech",
    category: "Clean Energy BI",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Solaria Systems",
    role: "Data Visualization Engineer",
    duration: "3 Months",
    overview: "Solaria Solar Tech is a clean energy monitoring tool mapping energy capture, battery health, and utility feed savings for residential and industrial complexes.",
    challenge: "Industrial energy managers deal with dynamic data streams (grid load, solar intensity, temperature). We needed to map these complex variables into simple, readable gauges and alerts.",
    solution: "We built an SVG-centric battery and grid visualizer that updates charts using optimized React render loops and alerts using color-coded status rings.",
    results: [
      "Industrial sites reported an average of 18% energy savings within 90 days.",
      "Critical overheating incidents decreased by 85% due to immediate alerting.",
      "Platform scaled to support over 1,200 active solar farms."
    ],
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS", "WebSockets"],
    features: [
      { title: "Battery Health Gauges", description: "Real-time interactive radial gauges measuring temperature and capacity degradation." },
      { title: "Grid Feed Optimizer", description: "Algorithmic calculator showing when to feed excess power back to the grid for maximum payout." },
      { title: "Weather Analytics Integration", description: "Predictive model mapping future solar capture based on 5-day forecasts." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 10,
    title: "Aura Design System",
    category: "Product Brand",
    image: "/pictures/4.png",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
    client: "Aura Creative",
    role: "Design System Lead & UI Developer",
    duration: "5 Months",
    overview: "A comprehensive UI framework and design token system built for rapidly building consistent digital products across teams.",
    challenge: "Aura's development teams were building overlapping components, causing layout inconsistencies and bloated codebases. We had to create a centralized, token-based library.",
    solution: "We built a customizable system using Tailwind CSS CSS variables, providing a full suite of accessible components matching WCAG AAA guidelines.",
    results: [
      "Reduced time-to-market for new screens by 65%.",
      "Unified design language across web, mobile, and print applications.",
      "100% component accessibility compliance."
    ],
    technologies: ["React", "Tailwind CSS", "Storybook", "TypeScript", "Radix Primitives"],
    features: [
      { title: "Design Tokens", description: "CSS variables backing typography, colors, padding, and roundness rules." },
      { title: "Storybook Playground", description: "Interactive testing sandbox allowing devs to test variants in real-time." },
      { title: "Accessibility Audits", description: "Automated a11y checks integrated directly with component specs." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 11,
    title: "Nebula AI Cloud",
    category: "Deep Learning Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
    client: "Nebula Intelligence",
    role: "Lead Interface Architect",
    duration: "6 Months",
    overview: "Nebula AI Cloud is a visual interface for managing deep learning clusters, training epochs, and dataset tagging workflows.",
    challenge: "Managing machine learning training jobs can be abstract. Datascientists require visual logs and real-time metric charts to catch overfitting early.",
    solution: "We built an epoch-tracking visualization dashboard that renders validation loss graphs in real-time using Canvas, combined with automated slack logs.",
    results: [
      "Saved datascientists over 12 hours of manual monitoring per model.",
      "Reduced infrastructure cloud spends by 20% due to early epoch cancellation alerts.",
      "Lauded by research teams for high readability and layout structure."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "WebSockets"],
    features: [
      { title: "Epoch Visualizer", description: "Real-time canvas tracking validation loss curves and gradient rates." },
      { title: "Dataset Tagging Tool", description: "Keyboard-friendly image labeling interface with smart auto-bounding frames." },
      { title: "Resource Orchestrator", description: "Visual node view mapping active GPU cluster allocation profiles." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 12,
    title: "Vector Marketing App",
    category: "Campaign Suite",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[16/10]",
    client: "Vector Analytics Co",
    role: "Front-End Developer",
    duration: "3 Months",
    overview: "Vector Marketing App is a specialized dashboard designed to create, schedule, and test multi-channel marketing campaigns.",
    challenge: "Marketers struggle to track ROI across multiple channels (social, email, search). We had to create a unified dashboard demonstrating visual campaign lifecycles.",
    solution: "We designed a visual campaign tree builder letting users drag and drop actions (e.g. 'Wait 2 Days', 'Send Email') to map user paths.",
    results: [
      "Average campaign ROI increased by 22% for users.",
      "80,000+ marketing actions processed daily without latency.",
      "Highly praised for visual drag-and-drop clarity."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "React Flow"],
    features: [
      { title: "Visual Campaign Builder", description: "Node-based visual workflow planner mapping complex user marketing trees." },
      { title: "A/B Testing Module", description: "Split traffic dynamically and track landing page performance metrics." },
      { title: "Universal Scheduler", description: "Unified timeline manager tracking social post and email queue times." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop"
    ]
  }
];
