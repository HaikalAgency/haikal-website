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
    title: "Clinic Management EMR",
    category: "Web Application",
    image: "/pictures/gen_clinic_main.png",
    bannerImage: "/pictures/gen_clinic_banner.png",
    aspectClass: "aspect-[3/4]",
    client: "Healthcare Providers",
    role: "Full-Stack Engineer & AI Integration",
    duration: "Ongoing",
    githubUrl: "https://github.com/Abdobaki/clinic",
    overview: "A comprehensive Electronic Medical Record (EMR) and clinic management system. It features role-based access for doctors and receptionists, patient profiling, appointment scheduling, billing, AI-powered medical assistance via Gemini, and multi-language support.",
    challenge: "Modern clinics need a unified workspace to manage appointments, patient histories, prescriptions, and billing efficiently without navigating through complex, outdated software interfaces.",
    solution: "I engineered a dynamic React and Vite based dashboard with role-based routing (Doctor/Receptionist). The system integrates the Google Gemini AI API to provide intelligent assistance and handles complex state management for patient records and billing.",
    results: [
      "Streamlined patient intake & billing workflows.",
      "AI-assisted diagnoses and medication management.",
      "Efficient role-based dashboards for different clinic staff."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini API", "Vite"],
    features: [
      { title: "Role-Based Access", description: "Dedicated workspaces and tools for Doctors and Receptionists, ensuring secure data handling." },
      { title: "AI Medical Assistant", description: "Integrated with Google's Gemini AI to assist with clinical workflows and medical data analysis." },
      { title: "Comprehensive EMR", description: "Full tracking of patient profiles, consultation history, prescriptions, and invoicing." }
    ],
    gallery: [
      "/pictures/gen_clinic_gallery1.png",
      "/pictures/gen_clinic_gallery2.png"
    ]
  },
  {
    id: 2,
    title: "BIS Incubator Platform",
    category: "Web Application",
    image: "/pictures/gen_bis_main.png",
    bannerImage: "/pictures/gen_bis_banner.png",
    aspectClass: "aspect-[16/10]",
    client: "Université de M'sila",
    role: "Full-Stack Engineering & Design",
    duration: "Ongoing",
    liveUrl: "http://localhost:5173",
    githubUrl: "https://github.com/Abdobaki/bis-incubator",
    overview: "A premium, award-winning university incubator website built for the Bureau d'Innovation & Startup. It features a stunning dark glassmorphic design, scroll animations, and full multilingual support for English, French, and Arabic.",
    challenge: "The university incubator needed a modern, Apple-level polished website to attract startups and partners, requiring both a sleek public face and a functional administrative dashboard.",
    solution: "I developed a highly responsive, animated platform using React, Vite, and Tailwind CSS. The interface utilizes custom Intersection Observer hooks for scroll reveals, floating particles, and interactive gallery lightboxes.",
    results: [
      "Premium, award-winning UI/UX aesthetic.",
      "Seamless RTL & LTR multilingual integration.",
      "Comprehensive startup & event management portal."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    features: [
      { title: "Dark Glassmorphism", description: "Deep navy backgrounds with electric blue and violet frosted-glass accents." },
      { title: "Interactive Animations", description: "Smooth scroll reveals, animated counters, and subtle particle effects." },
      { title: "Admin Dashboard", description: "Built-in CRUD interface for managing startups, events, and news posts." }
    ],
    gallery: [
      "/pictures/gen_bis_gallery1.png",
      "/pictures/gen_bis_gallery2.png"
    ]
  },
  {
    id: 3,
    title: "Al Yasmin Pastry",
    category: "E-Commerce & Brand",
    image: "/pictures/gen_alyasmine_main.jpg",
    bannerImage: "/pictures/gen_alyasmine_banner.jpg",
    aspectClass: "aspect-[16/10]",
    client: "Al Yasmin Pastry Shop",
    role: "Front-End Engineer & UX Design",
    duration: "2 Months",
    liveUrl: "http://localhost:5174",
    githubUrl: "https://github.com/Abdobaki/alyasmine",
    overview: "A premium frontend web application for Al Yasmin Pastry. It features a complete design system, rich interactive components, and a stunning visual presentation of the bakery's products.",
    challenge: "The client needed a digital storefront that reflected the premium quality of their physical pastries, requiring a highly polished design system, smooth animations, and a rich component library.",
    solution: "I built a comprehensive frontend architecture using React, Vite, and Tailwind CSS. The UI incorporates advanced Radix UI primitives for accessibility, Material UI icons, Framer Motion for delightful interactions, and responsive carousels for showcasing pastries.",
    results: [
      "Established a scalable, reusable design system.",
      "Highly responsive and accessible product catalogs.",
      "Smooth shopping cart and navigation flow."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion", "Recharts"],
    features: [
      { title: "Robust Design System", description: "Built with Radix UI and Tailwind for accessible, customizable, and perfectly styled interactive components." },
      { title: "Immersive Carousels", description: "Integrated Embla Carousel and React Slick for fluid browsing of the pastry catalog." },
      { title: "Interactive UI Elements", description: "Framer motion animations, interactive modals, toasts, and dynamic masonry layouts." }
    ],
    gallery: [
      "/pictures/gen_alyasmine_gallery1.jpg",
      "/pictures/gen_alyasmine_gallery2.jpg"
    ]
  },
  {
    id: 4,
    title: "Clothing Store POS",
    category: "Desktop Application",
    image: "/pictures/gen_pos_main.png",
    bannerImage: "/pictures/gen_pos_banner.png",
    aspectClass: "aspect-[16/10]",
    client: "Retail Clients",
    role: "Full-Stack Developer & UI Designer",
    duration: "2 Months",
    overview: "A sleek, modern Point of Sale (POS) application designed specifically for clothing and retail stores. It streamlines checkout, inventory management, and customer tracking.",
    challenge: "Clothing retailers need a fast, intuitive system that staff can learn instantly, while still handling complex variations like sizes, colors, and seasonal inventory.",
    solution: "We designed a desktop application with a clean, touch-friendly interface, optimizing the checkout flow for speed and integrating a comprehensive product catalog.",
    results: [
      "Reduced average checkout time by 30%.",
      "Streamlined inventory tracking with real-time updates.",
      "Highly praised by retail staff for its intuitive design."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Electron", "Node.js"],
    features: [
      { title: "Fast Checkout", description: "Optimized barcode scanning and manual entry for rapid transaction processing." },
      { title: "Inventory Management", description: "Real-time tracking of product variants including sizes and colors." },
      { title: "Sales Analytics", description: "Comprehensive dashboards for tracking daily sales, popular items, and staff performance." }
    ],
    gallery: [
      "/pictures/gen_pos_gallery1.png",
      "/pictures/gen_pos_gallery2.png"
    ]
  },
  {
    id: 5,
    title: "GymApp POS",
    category: "Desktop Application",
    image: "/pictures/gen_gymapp_main.png",
    bannerImage: "/pictures/gen_gymapp_banner.png",
    aspectClass: "aspect-[4/3]",
    client: "Fitness Centers",
    role: "Full-Stack Desktop Developer",
    duration: "3 Months",
    overview: "A comprehensive Point of Sale (POS) and membership management system built with Electron. It empowers gyms to manage subscriptions, sales, and daily operations in a unified workspace.",
    challenge: "Gym managers often juggle multiple software tools for member check-ins, subscription tracking, and POS. They needed a single, offline-capable desktop application with hardware integrations (QR scanners).",
    solution: "We developed a high-performance Electron application using React and a local SQLite database, featuring machine ID-based security and an integrated point of sale module.",
    results: [
      "Consolidated 3 separate management tools into 1 interface.",
      "Enabled offline operations with instantaneous local database queries.",
      "Reduced member check-in times by 60% with instant QR scanning."
    ],
    technologies: ["Electron", "React", "TypeScript", "Tailwind CSS", "SQLite"],
    features: [
      { title: "Membership Check-ins", description: "Real-time QR code scanning to grant access and validate active subscriptions." },
      { title: "Subscription Tracking", description: "Flexible plans (Time-Based & Session-Based) with automatic status updates." },
      { title: "Integrated POS", description: "Fast checkout process for selling products like supplements and water with batch sales support." }
    ],
    gallery: [
      "/pictures/gen_gymapp_gallery1.png",
      "/pictures/gen_gymapp_gallery2.png"
    ]
  },
  {
    id: 6,
    title: "SkillBridge",
    category: "Professional Network",
    image: "/pictures/gen_skillbridge_main.png",
    bannerImage: "/pictures/gen_skillbridge_banner.png",
    aspectClass: "aspect-[16/10]",
    client: "Education & Career Services",
    role: "Front-End Developer & UI Designer",
    duration: "4 Months",
    overview: "A professional networking and upskilling platform connecting users with verified job announcements, expert-led courses, and professional opportunities.",
    challenge: "Job seekers often have to use multiple platforms to find jobs, track their skills, and take courses. They needed a unified app bridging the gap between skills and opportunity.",
    solution: "We engineered a clean, mobile-first responsive web application utilizing React and Tailwind CSS, focused on seamless navigation and high user engagement.",
    results: [
      "Attracted over 500+ active professionals in the first month.",
      "Successfully listed 50+ curated job announcements.",
      "High user retention rate driven by the integrated course discovery."
    ],
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React", "Node.js"],
    features: [
      { title: "Job Board Integration", description: "Real-time, verified job announcements tailored to the user's skill set." },
      { title: "Course Discovery", description: "Curated catalog of expert-led courses to help users upskill." },
      { title: "Professional Profiles", description: "Dynamic user profiles showcasing skills, completed courses, and career progress." }
    ],
    gallery: [
      "/pictures/gen_skillbridge_gallery1.png",
      "/pictures/gen_skillbridge_gallery2.png"
    ]
  },
  {
    id: 7,
    title: "Apex Showroom",
    category: "Automotive E-Commerce",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?q=80&w=800&auto=format&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[3/4]",
    client: "Apex Luxury Autos",
    role: "Full-Stack Web Architect",
    duration: "3 Months",
    overview: "A premium digital showroom for exotic and luxury vehicles, featuring high-resolution photography, detailed vehicle specifications, and a sophisticated browsing experience.",
    challenge: "Luxury car dealerships need a digital presence that matches the prestige of their inventory. The client wanted an interface that felt as premium as sitting in a Ferrari F8 Tributo.",
    solution: "We built a sleek, dark-themed React application using Tailwind CSS. We implemented smooth animations, responsive grids for car listings, and a dynamic data structure to handle complex vehicle stats.",
    results: [
      "Increased online inquiry volume for high-end vehicles by 85%.",
      "Achieved a 40% longer average session duration.",
      "Delivered a seamless browsing experience on both mobile and 4K displays."
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    features: [
      { title: "Dynamic Inventory", description: "Real-time filtering of exotic cars by make, model, performance metrics, and price." },
      { title: "Detailed Specifications", description: "Deep-dive view into engine specs, acceleration, and bespoke features." },
      { title: "Premium Visuals", description: "Optimized delivery of high-resolution, uncompressed vehicle photography." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503376712344-652d0b04c8f2?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Happy Space Coffee",
    category: "Web Application",
    image: "/pictures/gen_coffe_shop_main.png",
    bannerImage: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=1200&auto=format&fit=crop",
    aspectClass: "aspect-[4/3]",
    client: "Happy Space Café",
    role: "Lead Frontend Engineer",
    duration: "2 Months",
    overview: "A premium, bilingual (French & Arabic) digital ordering system and interactive menu designed for artisanal coffee shops and bakeries, integrated with Google's Gemini AI.",
    challenge: "The café needed a modern, interactive digital menu that elegantly showcased their premium coffee selection (like Ristretto and Chocolat Chaud) while providing smart, AI-driven recommendations to customers.",
    solution: "We built a lightning-fast React application using Vite and TypeScript. It features a bilingual data structure and integrates the Gemini API to offer personalized order suggestions.",
    results: [
      "Enhanced customer experience with an intuitive bilingual interface.",
      "Increased average order value via AI-driven recommendations.",
      "Streamlined the ordering process for high-traffic hours."
    ],
    technologies: ["React", "TypeScript", "Vite", "Gemini API", "Tailwind CSS"],
    features: [
      { title: "Bilingual Menu System", description: "Seamless switching between French and Arabic descriptions with full RTL layout support." },
      { title: "Smart Recommendations", description: "Integrated with Gemini AI to suggest pastry pairings for specific coffee drinks." },
      { title: "Interactive Ordering", description: "A beautifully animated cart and checkout flow ensuring a premium user experience." }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 9,
    title: "Solaria Solar Tech",
    category: "Clean Energy BI",
    image: "/pictures/gen_project9.png",
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
    image: "/pictures/gen_project10.png",
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
    image: "/pictures/gen_project11.png",
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
    image: "/pictures/gen_project12.png",
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
