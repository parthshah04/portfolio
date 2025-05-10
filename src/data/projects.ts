export const projects = [
  {
    slug: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A modern e-commerce platform built with Next.js 14, featuring a seamless shopping experience and robust backend integration.",
    role: "Full Stack Developer",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    live: "https://ecommerce-demo.example.com",
    repo: "https://github.com/yourusername/ecommerce-platform",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop"
    ],
    features: [
      "Server-side rendering for optimal SEO",
      "Real-time inventory management",
      "Secure payment processing with Stripe",
      "Responsive design for all devices",
      "Advanced search and filtering",
      "User authentication and profiles"
    ],
    challenges: [
      "Implementing real-time inventory updates",
      "Optimizing performance for large product catalogs",
      "Ensuring secure payment processing",
      "Managing complex state across the application"
    ],
    solutions: [
      "Used WebSocket connections for live updates",
      "Implemented optimistic UI updates",
      "Added fallback mechanisms for offline support",
      "Utilized React Query for efficient data fetching"
    ],
    results: [
      "95+ Lighthouse performance score",
      "99.9% uptime",
      "50% reduction in page load times",
      "40% increase in conversion rate"
    ]
  },
  {
    slug: "task-management",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    role: "Full Stack Developer",
    year: "2024",
    tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    live: "https://task-manager-demo.example.com",
    repo: "https://github.com/yourusername/task-management",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=1200&h=800&fit=crop"
    ],
    features: [
      "Real-time task updates and collaboration",
      "Drag-and-drop interface",
      "Custom task statuses and priorities",
      "Team workspaces and role-based access",
      "Activity logging and performance metrics",
      "Mobile-responsive design"
    ],
    challenges: [
      "Real-time synchronization across multiple clients",
      "Handling concurrent updates and conflicts",
      "Scaling WebSocket connections",
      "Managing complex state transitions"
    ],
    solutions: [
      "Implemented WebSocket for real-time updates",
      "Added optimistic UI updates",
      "Developed conflict resolution strategies",
      "Used Redis for pub/sub messaging"
    ],
    results: [
      "99.9% uptime",
      "< 100ms real-time update latency",
      "50,000+ active users",
      "4.8/5 user satisfaction rating"
    ]
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description: "An AI-powered content generation platform that helps writers create high-quality content efficiently.",
    role: "Full Stack Developer",
    year: "2024",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
    live: "https://ai-content-demo.example.com",
    repo: "https://github.com/yourusername/ai-content-generator",
    featured: true,
    images: [
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop"
    ],
    features: [
      "AI-powered content generation",
      "Multiple content types support",
      "Customizable tone and style",
      "SEO optimization suggestions",
      "Content analytics and insights",
      "Collaborative editing features"
    ],
    challenges: [
      "Training and fine-tuning AI models",
      "Handling large-scale content generation",
      "Ensuring content quality and originality",
      "Managing API rate limits and costs"
    ],
    solutions: [
      "Implemented fine-tuning with custom datasets",
      "Added content validation and filtering",
      "Developed caching and optimization strategies",
      "Created a cost-effective API usage system"
    ],
    results: [
      "90% content generation accuracy",
      "60% reduction in content creation time",
      "10,000+ generated articles",
      "85% user satisfaction rate"
    ]
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js 14, featuring a blog, projects showcase, and interactive elements.",
    role: "Full Stack Developer",
    year: "2024",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    live: "https://portfolio-demo.example.com",
    repo: "https://github.com/yourusername/portfolio",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&h=800&fit=crop"
    ],
    features: [
      "Responsive design",
      "Blog with MDX support",
      "Project showcase",
      "Dark mode support",
      "SEO optimization",
      "PWA capabilities"
    ],
    challenges: [
      "Implementing MDX support",
      "Optimizing performance",
      "Creating responsive layouts",
      "Managing content updates"
    ],
    solutions: [
      "Used next-mdx-remote for MDX support",
      "Implemented image optimization",
      "Created reusable components",
      "Set up content management system"
    ],
    results: [
      "100/100 Lighthouse score",
      "Fast page loads",
      "Great user experience",
      "Easy content updates"
    ]
  },
  {
    slug: "weather-app",
    title: "Weather App",
    description: "A real-time weather application with location-based forecasts and interactive maps.",
    role: "Full Stack Developer",
    year: "2024",
    tech: ["React", "OpenWeather API", "Mapbox", "Tailwind CSS"],
    live: "https://weather-demo.example.com",
    repo: "https://github.com/yourusername/weather-app",
    featured: false,
    images: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=1200&h=800&fit=crop"
    ],
    features: [
      "Real-time weather updates",
      "Location-based forecasts",
      "Interactive weather maps",
      "5-day forecast",
      "Weather alerts",
      "Mobile-responsive design"
    ],
    challenges: [
      "Handling API rate limits",
      "Managing location permissions",
      "Optimizing map performance",
      "Ensuring data accuracy"
    ],
    solutions: [
      "Implemented caching strategy",
      "Added fallback mechanisms",
      "Optimized map rendering",
      "Added data validation"
    ],
    results: [
      "99.9% uptime",
      "Fast load times",
      "Accurate forecasts",
      "Great user experience"
    ]
  }
] 