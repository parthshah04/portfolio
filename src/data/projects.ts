// export const projects = [
//   {
//     slug: "ecommerce-platform",
//     title: "E-commerce Platform",
//     description: "A modern e-commerce platform built with Next.js 14, featuring a seamless shopping experience and robust backend integration.",
//     role: "Full Stack Developer",
//     year: "2024",
//     tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
//     live: "https://ecommerce-demo.example.com",
//     repo: "https://github.com/yourusername/ecommerce-platform",
//     featured: true,
//     images: [
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
//     ],
//     features: [
//       "Server-side rendering for optimal SEO",
//       "Real-time inventory management",
//       "Secure payment processing with Stripe",
//       "Responsive design for all devices",
//       "Advanced search and filtering",
//       "User authentication and profiles"
//     ],
//     challenges: [
//       "Implementing real-time inventory updates",
//       "Optimizing performance for large product catalogs",
//       "Ensuring secure payment processing",
//       "Managing complex state across the application"
//     ],
//     solutions: [
//       "Used WebSocket connections for live updates",
//       "Implemented optimistic UI updates",
//       "Added fallback mechanisms for offline support",
//       "Utilized React Query for efficient data fetching"
//     ],
//     results: [
//       "95+ Lighthouse performance score",
//       "99.9% uptime",
//       "50% reduction in page load times",
//       "40% increase in conversion rate"
//     ]
//   },
//   {
//     slug: "task-management",
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team features.",
//     role: "Full Stack Developer",
//     year: "2024",
//     tech: ["React", "Node.js", "Socket.io", "MongoDB"],
//     live: "https://task-manager-demo.example.com",
//     repo: "https://github.com/yourusername/task-management",
//     featured: true,
//     images: [
//       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop"
//     ],
//     features: [
//       "Real-time task updates and collaboration",
//       "Drag-and-drop interface",
//       "Custom task statuses and priorities",
//       "Team workspaces and role-based access",
//       "Activity logging and performance metrics",
//       "Mobile-responsive design"
//     ],
//     challenges: [
//       "Real-time synchronization across multiple clients",
//       "Handling concurrent updates and conflicts",
//       "Scaling WebSocket connections",
//       "Managing complex state transitions"
//     ],
//     solutions: [
//       "Implemented WebSocket for real-time updates",
//       "Added optimistic UI updates",
//       "Developed conflict resolution strategies",
//       "Used Redis for pub/sub messaging"
//     ],
//     results: [
//       "99.9% uptime",
//       "< 100ms real-time update latency",
//       "50,000+ active users",
//       "4.8/5 user satisfaction rating"
//     ]
//   },
//   {
//     slug: "ai-content-generator",
//     title: "AI Content Generator",
//     description: "An AI-powered content generation platform that helps writers create high-quality content efficiently.",
//     role: "Full Stack Developer",
//     year: "2024",
//     tech: ["Python", "TensorFlow", "React", "FastAPI"],
//     live: "https://ai-content-demo.example.com",
//     repo: "https://github.com/yourusername/ai-content-generator",
//     featured: true,
//     images: [
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop"
//     ],
//     features: [
//       "AI-powered content generation",
//       "Multiple content types support",
//       "Customizable tone and style",
//       "SEO optimization suggestions",
//       "Content analytics and insights",
//       "Collaborative editing features"
//     ],
//     challenges: [
//       "Training and fine-tuning AI models",
//       "Handling large-scale content generation",
//       "Ensuring content quality and originality",
//       "Managing API rate limits and costs"
//     ],
//     solutions: [
//       "Implemented fine-tuning with custom datasets",
//       "Added content validation and filtering",
//       "Developed caching and optimization strategies",
//       "Created a cost-effective API usage system"
//     ],
//     results: [
//       "90% content generation accuracy",
//       "60% reduction in content creation time",
//       "10,000+ generated articles",
//       "85% user satisfaction rate"
//     ]
//   },
//   {
//     slug: "portfolio-website",
//     title: "Portfolio Website",
//     description: "A modern portfolio website built with Next.js 14, featuring a blog, projects showcase, and interactive elements.",
//     role: "Full Stack Developer",
//     year: "2024",
//     tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
//     live: "https://portfolio-demo.example.com",
//     repo: "https://github.com/yourusername/portfolio",
//     featured: false,
//     images: [
//       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop"
//     ],
//     features: [
//       "Responsive design",
//       "Blog with MDX support",
//       "Project showcase",
//       "Dark mode support",
//       "SEO optimization",
//       "PWA capabilities"
//     ],
//     challenges: [
//       "Implementing MDX support",
//       "Optimizing performance",
//       "Creating responsive layouts",
//       "Managing content updates"
//     ],
//     solutions: [
//       "Used next-mdx-remote for MDX support",
//       "Implemented image optimization",
//       "Created reusable components",
//       "Set up content management system"
//     ],
//     results: [
//       "100/100 Lighthouse score",
//       "Fast page loads",
//       "Great user experience",
//       "Easy content updates"
//     ]
//   },
//   {
//     slug: "weather-app",
//     title: "Weather App",
//     description: "A real-time weather application with location-based forecasts and interactive maps.",
//     role: "Full Stack Developer",
//     year: "2024",
//     tech: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
//     live: "https://weather-demo.example.com",
//     repo: "https://github.com/yourusername/weather-app",
//     featured: false,
//     images: [
//       "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
//       "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop"
//     ],
//     features: [
//       "Real-time weather updates",
//       "Location-based forecasts",
//       "Interactive weather maps",
//       "5-day forecast",
//       "Weather alerts",
//       "Mobile-responsive design"
//     ],
//     challenges: [
//       "Handling API rate limits",
//       "Managing location permissions",
//       "Optimizing map performance",
//       "Ensuring data accuracy"
//     ],
//     solutions: [
//       "Implemented caching strategy",
//       "Added fallback mechanisms",
//       "Optimized map rendering",
//       "Added data validation"
//     ],
//     results: [
//       "99.9% uptime",
//       "Fast load times",
//       "Accurate forecasts",
//       "Great user experience"
//     ]
//   }
// ] 

// projects.ts
export const projects = [
  /* ---------------------------------------------------------- */
  {
    slug: "enlock-file-locker",
    title: "EnLock — Encrypter Locker",
    description:
      "A secure, distributed file locker offering bank-grade encryption, seamless failover, and real-time access across redundant storage nodes.",
    role: "Backend Engineer",
    year: "2024",
    tech: ["Next.js", "React", "React Native", "Java", "Spring Boot", "AES-256", "RSA", "ZooKeeper", "Docker"],
    live: "https://enlock.io/",
    repo: "",
    featured: true,
    images: [
      "/images/projects/EnLock/dashboard.png",
      "/images/projects/EnLock/upload.png",
      "/images/projects/EnLock/files.png",
      "/images/projects/EnLock/profile.png",
      { type: "video", url: "/images/projects/EnLock/enlock-demo.mp4" }
    ],
    features: [
      "AES-256 + RSA dual-layer encryption for at-rest and in-transit security",
      "RESTful API for CRUD operations on files, metadata, and access policies",
      "ZooKeeper-based node discovery and automatic leader election",
      "Stateless Dockerized services with rolling deployment support",
      "Health monitoring with auto-restart and smart failover mechanisms"
    ],
    challenges: [
      "Preventing data inconsistency during concurrent writes or node failures",
      "Encrypting and decrypting large files without introducing bottlenecks",
      "Exposing APIs securely for mobile and web apps while mitigating abuse",
      "Maintaining uptime across network-partitioned or degraded infrastructure"
    ],
    solutions: [
      "Implemented shard-level replication with quorum-based consensus for write durability",
      "Optimized encryption pipeline using stream-based crypto in Java",
      "Used OAuth2, TLS 1.3, and IP-based request throttling to harden the API",
      "Deployed micro-nodes on Docker Swarm with ZooKeeper-backed state coordination"
    ],
    results: [
      "Over 1,100 daily active users with 10% MoM growth since Q1 2025",
      "Maintained 99.97% uptime across 12 months (backed by SLA logs)",
      "Avg. 140 ms file encryption time for 10 MB files; zero timeout failures under load",
      "Passed 3rd-party penetration test with zero high-severity issues",
      "Scaled to 15+ nodes with zero downtime deployments during traffic spikes"
    ]
  },
  
  /* ---------------------------------------------------------- */
  {
    slug: "ai-powered-todo-app",
    title: "AI-Powered To-Do App",
    description:
      "A smart productivity PWA that uses GPT to auto-suggest tasks and subtasks, while managing projects, labels, and real-time sync seamlessly.",
    role: "Personal Project",
    year: "2025",
    tech: ["Next.js 14", "Convex", "OpenAI API", "Tailwind CSS", "shadcn/ui", "NextAuth v5"],
    live: "https://todoapp.parthshah.co.in/",
    repo: "https://github.com/parthshah04/ai-powered-todo-app.git",
    featured: true,
    images: [
      "/images/projects/todo/todo.png",
      "/images/projects/todo/main.png",
      "/images/projects/todo/Subtasks.png",
      "/images/projects/todo/projects.png",
      "/images/projects/todo/today.png",
      "/images/projects/todo/upcoming.png",
      "/images/projects/todo/label.png"
    ],
    features: [
      "AI-based task and subtask suggestions via OpenAI",
      "Vector search for natural language queries across projects",
      "Secure login with Google OAuth and token rotation",
      "Real-time sync powered by Convex backend",
      "Fully accessible and responsive UI (WCAG 2.1-AA compliant)",
      "Main app is deployed with CI/CD pipeline with zero-downtime on aws and preview app on vercel"
    ],
    challenges: [
      "Building fast and relevant AI suggestions",
      "Maintaining secure, multi-user auth flow",
      "Ensuring consistent sync without conflicts",
      "Optimizing for accessibility and fast load times"
    ],
    solutions: [
      "Used OpenAI embeddings + Convex vector search for semantic results",
      "Implemented NextAuth v5 with AES-256 JWT rotation",
      "Edge-based Convex sync logic with optimistic UI",
      "Modular UI with shadcn and Tailwind, served via CDN"
    ],
    results: [
      "Boosted user task completion rate by 30% (surveyed beta users)",
      "Reduced manual task entry by 40% through AI suggestions",
      "Achieved global page load under 1s",
      "Increased daily user engagement time by 22%",
    ]
  },  

  /* ---------------------------------------------------------- */
  {
    slug: "destinotion-travel-pwa",
    title: "Destinotion — Travel-Planning PWA",
    description:
      "A lightweight Next.js app that lets travelers discover, tag, and organize dream destinations—all running client-side using file-based storage.",
    role: "Solo Developer",
    year: "2025",
    tech: ["Next.js", "Tailwind CSS", "React-Hook-Form", "React Context API", "Vercel"],
    live: "https://destinotion.parthshah.co.in/",
    repo: "https://github.com/parthshah04/Destinotion.git",
    featured: true,
    images: [
      "/images/projects/Destinotion/plane.gif",
      "/images/projects/Destinotion/main.png",
      "/images/projects/Destinotion/addPlace.png",
      "/images/projects/Destinotion/editPlace.png"
    ],
    features: [
      "Add, edit, and delete destinations with image support",
      "Tag-based filtering and free-text search",
      "File-based JSON storage for lightweight persistence",
      "Responsive layout with Tailwind CSS and framer-motion animations",
      "Fully client-rendered app deployed with Vercel"
    ],
    challenges: [
      "Maintaining fast load times without external backend",
      "Optimizing image loading across screen sizes",
      "Building a smooth UX with minimal JavaScript",
      "Creating a visually appealing UI with no design assets"
    ],
    solutions: [
      "Used Next.js static site generation with JSON storage",
      "Implemented lazy loading and dynamic imports for key components",
      "Optimized image delivery using the Next.js Image component",
      "Built reusable UI components styled with Tailwind"
    ],
    results: [
      "Sub-1s load time on local 3G simulation",
      "All Core Web Vitals in 'Good' range during testing",
      "Deployed with zero configuration via Vercel",
      "Completed end-to-end as a solo project in under 2 weeks"
    ]
  },
  
   /* ---------------------------------------------------------- */
   {
    slug: "agriculture-management-pwa",
    title: "Agriculture Management",
    description:
      "A progressive web app for agronomists and growers to manage inventory, clients, and field operations with full offline support in rural environments.",
    role: "Full-Stack Developer",
    year: "2024",
    tech: ["Node.js", "Express", "Angular", "MongoDB", "Mapbox", "Service Workers"],
    // live: "https://agro-demo.example.com",
    // repo: "https://github.com/yourusername/agro-pwa",
    featured: false,
    images: [
      "/images/projects/Agriculture/preview.png",
      "/images/projects/Agriculture/webDashboard.png",
      "/images/projects/Agriculture/user.png",
      "/images/projects/Agriculture/products.png",
      "/images/projects/Agriculture/activities.png",
      "/images/projects/Agriculture/activity.png", 
      "/images/projects/Agriculture/orders.png",
      "/images/projects/Agriculture/todo.png",
      "/images/projects/Agriculture/createTodo.png", 
      "/images/projects/Agriculture/attendance.png",
      "/images/projects/Agriculture/mobile.png",
      "/images/projects/Agriculture/Menu.png",
      "/images/projects/Agriculture/trip.png",
      "/images/projects/Agriculture/createSale.png"
    ],
    features: [
      "Real-time inventory dashboards with WebSocket updates",
      "Mapbox integration for live field staff tracking",
      "Offline-first experience with service worker-based sync",
      "Role-based access control for employees and clients",
      "Mobile-responsive and installable as a home-screen PWA"
    ],
    challenges: [
      "Reliable data syncing in low-connectivity zones",
      "Avoiding duplicate updates and race conditions in inventory",
      "Accurate location tracking in wide rural areas",
      "Protecting user and crop data across multiple access levels"
    ],
    solutions: [
      "Used queued writes with delta-push sync and optimistic updates",
      "Built geofencing + tracking layer using Mapbox telemetry APIs",
      "Implemented background sync with service workers",
      "JWT-based auth, encrypted fields, and strict RBAC policies"
    ],
    results: [
      "Reduced manual inventory tracking effort by 50%",
      "Maintained 99.9% data sync reliability across unstable networks",
      "Used by 120+ monthly active growers and field agents with 600+ lifetime users",
      "Achieved Lighthouse PWA score ≥ 96 across devices"
    ]
  },

  /* ---------------------------------------------------------- */
  {
    slug: "osteo-vision-android",
    title: "Osteo-Vision — Android App",
    description:
      "An on-device osteoporosis detection app that processes X-ray images and form inputs using a hybrid deep learning model, with no cloud dependency or persistent storage.",
    role: "Machine Learning Engineer",
    year: "2021",
    tech: ["Kotlin", "TensorFlow Lite", "XGBoost", "Material Design", "NNAPI"],
    // live: "https://play.google.com/store/apps/details?id=com.yourcompany.osteovision",
    repo: "https://github.com/parthshah04/Osteoporosis-Detection-App.git",
    featured: false,
    images: [
      "/images/projects/Osteovision/logo.png",
      "/images/projects/Osteovision/1.png",
      "/images/projects/Osteovision/2.png",
      "/images/projects/Osteovision/3.png",
      "/images/projects/Osteovision/4.png",
      "/images/projects/Osteovision/Osteo-vision.gif"
    ],
    features: [
      "User inputs tabular health data via a form and uploads X-ray image",
      "TFLite-quantized VGG-19 model extracts image features on-device",
      "Combined prediction from CNN (image) and XGBoost (form data)",
      "No database or cloud connection—results computed instantly",
      "Material Design UI with multilingual support (EN, ES, FR)"
    ],
    challenges: [
      "Running inference efficiently on mid-range Android hardware",
      "Combining visual and structured input for a single prediction",
      "Ensuring data privacy without storing any user data",
      "Designing an intuitive, multilingual mobile experience"
    ],
    solutions: [
      "Optimized TFLite model with NNAPI delegate for hardware acceleration",
      "Feature fusion of CNN embeddings and form vectors for XGBoost",
      "Processed everything on-device—no images or data ever stored",
      "Used Android resource bundles and string localization for language support"
    ],
    results: [
      "92% diagnostic accuracy (ROC-AUC: 0.93 on 5K-image test set)",
      "60% lower inference time using NNAPI over CPU fallback",
      "100% offline-capable with zero cloud or database usage"
    ]
  }
  

  /* ---------------------------------------------------------- */
  // {
  //   slug: "sales-forecasting-inventory",
  //   title: "Sales Forecasting & Inventory Mgmt",
  //   description:
  //     "A Spring MVC suite that predicts demand and optimises stock levels for mid-size retailers.",
  //   role: "Software Engineer",
  //   year: "2020",
  //   tech: ["Java Spring MVC", "ARIMA", "Thymeleaf", "AWS S3", "Azure SQL"],
  //   live: "https://forecast-demo.example.com",
  //   repo: "https://github.com/yourusername/sales-forecasting",
  //   featured: false,
  //   images: [
  //     "https://images.unsplash.com/photo-1556741533-f6acd64796c5?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1555529771-35a29d94108f?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1556742400-b5b7c51274f2?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1515168833906-d2a3b82b3029?w=1200&h=800&fit=crop"
  //   ],
  //   features: [
  //     "ARIMA-based demand forecasting",
  //     "Java ETL modules for data cleansing",
  //     "Interactive Thymeleaf dashboards",
  //     "AWS S3 file storage & Azure SQL backend",
  //     "Role-based user management"
  //   ],
  //   challenges: [
  //     "Cleaning messy multi-source sales feeds",
  //     "Handling forecast drift across seasons",
  //     "Secure yet affordable hosting",
  //     "Designing UX for non-technical staff"
  //   ],
  //   solutions: [
  //     "Custom ETL validators & schedulers",
  //     "Rolling-window ARIMA retraining",
  //     "Hybrid AWS S3 + Azure SQL tier",
  //     "Wizard-style panels & CSV exports"
  //   ],
  //   results: [
  //     "15 % better forecast accuracy",
  //     "18 % lower inventory holding costs",
  //     "Adopted by three retail chains (5 TB data)",
  //     "95th-percentile page load < 800 ms"
  //   ]
  // },

  // /* ---------------------------------------------------------- */
  // {
  //   slug: "arco-retrieval-optimizer",
  //   title: "Adaptive Retrieval Cost Optimiser (ARCO)",
  //   description:
  //     "A metadata-driven engine that chooses the cheapest node to fetch data shards in distributed file systems.",
  //   role: "Research Lead",
  //   year: "2019",
  //   tech: ["Python", "Cassandra", "HDFS", "Matplotlib"],
  //   live: "https://arco-demo.example.com",
  //   repo: "https://github.com/yourusername/arco",
  //   featured: false,
  //   images: [
  //     "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1504384308090-b6e7a2ee93d5?w=1200&h=800&fit=crop",
  //     "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=1200&h=800&fit=crop"
  //   ],
  //   features: [
  //     "Dynamic cost function (bandwidth, latency, load)",
  //     "Plug-in adapters for Cassandra & HDFS",
  //     "Synthetic workload benchmark harness",
  //     "Visual analytics of throughput & latency",
  //     "Peer-reviewed methodology (IEEE Xplore)"
  //   ],
  //   challenges: [
  //     "Balancing load vs. speed in DFS",
  //     "Proving gains across diverse systems",
  //     "Keeping metadata lookup overhead low",
  //     "Meeting academic rigour requirements"
  //   ],
  //   solutions: [
  //     "Multi-factor cost weighting with decay",
  //     "Adapter layer + common benchmark suite",
  //     "O(1) metadata cache look-ups",
  //     "Formal proof & significance tests"
  //   ],
  //   results: [
  //     "20 % lower mean retrieval latency",
  //     "30 % higher throughput than baseline",
  //     "Cited by 12+ subsequent papers",
  //     "Best Poster Award, ACM SIGMOD 2020"
  //   ]
  // }
];
