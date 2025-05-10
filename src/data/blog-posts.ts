export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image: string
  content: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "nextjs-14-features",
    title: "Exploring Next.js 14's New Features",
    description: "A deep dive into the latest features and improvements in Next.js 14, including Server Actions, Partial Prerendering, and more.",
    date: "2024-03-15",
    author: "Parth Shah",
    tags: ["Next.js", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&h=800&fit=crop",
    readTime: "5 min read",
    category: "Web Development",
    content: `
# Exploring Next.js 14's New Features

Next.js 14 brings several exciting new features that enhance the developer experience and application performance.

## Server Actions

Server Actions are a new way to handle form submissions and data mutations in Next.js applications. They allow you to write server-side code directly in your components.

## Partial Prerendering

Partial Prerendering enables you to prerender parts of your page while keeping other parts dynamic, improving both performance and user experience.

## Improved Image Component

The Image component now supports more formats and provides better performance optimizations out of the box.

## Conclusion

Next.js 14 continues to push the boundaries of what's possible with React applications, making it easier than ever to build fast, scalable web applications.
    `
  },
  {
    slug: "typescript-best-practices",
    title: "TypeScript Best Practices for 2024",
    description: "Learn the latest TypeScript best practices and patterns for building robust and maintainable applications.",
    date: "2024-03-10",
    author: "Parth Shah",
    tags: ["TypeScript", "JavaScript", "Programming"],
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1200&h=800&fit=crop",
    readTime: "7 min read",
    category: "Programming",
    content: `
# TypeScript Best Practices for 2024

TypeScript has become an essential tool for modern web development. Here are some best practices to follow in 2024.

## Type Safety

Always use strict type checking and avoid using 'any' type when possible.

## Interface vs Type

Know when to use interfaces and when to use type aliases for better code organization.

## Generics

Leverage generics to create reusable and type-safe components and functions.

## Conclusion

Following these best practices will help you write more maintainable and bug-free TypeScript code.
    `
  },
  {
    slug: "tailwind-css-tips",
    title: "Advanced Tailwind CSS Tips and Tricks",
    description: "Discover advanced techniques and patterns for using Tailwind CSS effectively in your projects.",
    date: "2024-03-05",
    author: "Parth Shah",
    tags: ["CSS", "Tailwind", "Web Design"],
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1200&h=800&fit=crop",
    readTime: "6 min read",
    category: "Web Design",
    content: `
# Advanced Tailwind CSS Tips and Tricks

Tailwind CSS has revolutionized how we write CSS. Here are some advanced tips to take your Tailwind skills to the next level.

## Custom Components

Learn how to create reusable components using Tailwind's @apply directive.

## Responsive Design

Master responsive design patterns using Tailwind's breakpoint system.

## Dark Mode

Implement dark mode support using Tailwind's dark mode feature.

## Conclusion

These advanced techniques will help you build more sophisticated and maintainable designs with Tailwind CSS.
    `
  },
  {
    slug: "react-performance-optimization",
    title: "React Performance Optimization Techniques",
    description: "Learn advanced techniques to optimize your React applications for better performance and user experience.",
    date: "2024-03-01",
    author: "Parth Shah",
    tags: ["React", "Performance", "Web Development"],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop",
    readTime: "8 min read",
    category: "Web Development",
    content: `
# React Performance Optimization Techniques

Optimizing React applications is crucial for delivering a smooth user experience. Here are some advanced techniques to improve performance.

## Code Splitting

Learn how to split your code into smaller chunks for faster initial load times.

## Memoization

Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders.

## Virtualization

Implement virtualization for long lists to improve performance.

## Conclusion

These optimization techniques will help you build faster and more efficient React applications.
    `
  },
  {
    slug: "ai-web-development",
    title: "AI in Web Development: Current Trends",
    description: "Explore how artificial intelligence is transforming web development and what it means for developers.",
    date: "2024-02-25",
    author: "Parth Shah",
    tags: ["AI", "Web Development", "Technology"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop",
    readTime: "10 min read",
    category: "Technology",
    content: `
# AI in Web Development: Current Trends

Artificial Intelligence is revolutionizing web development. Let's explore the current trends and their impact.

## AI-Powered Development Tools

Discover how AI is enhancing development tools and workflows.

## Automated Testing

Learn about AI-driven testing and quality assurance.

## Code Generation

Explore the role of AI in code generation and its implications.

## Conclusion

AI is becoming an integral part of web development, offering new possibilities and challenges.
    `
  },
  {
    slug: "web-security-best-practices",
    title: "Web Security Best Practices for 2024",
    description: "Essential security practices every web developer should implement to protect their applications.",
    date: "2024-02-20",
    author: "Parth Shah",
    tags: ["Security", "Web Development", "Best Practices"],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    readTime: "9 min read",
    category: "Security",
    content: `
# Web Security Best Practices for 2024

Security is more important than ever in web development. Here are the essential practices to follow.

## Authentication & Authorization

Implement secure authentication and authorization systems.

## Data Protection

Learn how to protect sensitive data in your applications.

## API Security

Secure your APIs against common vulnerabilities.

## Conclusion

Following these security best practices will help you build more secure web applications.
    `
  }
] 