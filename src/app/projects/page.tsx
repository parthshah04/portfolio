import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"

export const metadata: Metadata = {
  title: "Projects - Parth Shah",
  description: "Explore my portfolio of web development projects, from full-stack applications to interactive websites.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group relative overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.images[0]}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-4 relative">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 2).map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-semibold transition-all duration-300 hover:scale-105 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 2 && (
                  <span className="text-xs text-muted-foreground">
                    +{project.tech.length - 2} more
                  </span>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
} 