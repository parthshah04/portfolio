"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/data/projects"

export function ProjectsGrid() {
  // Get the first 3 featured projects
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="w-full py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <motion.article
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg border bg-card"
              >
                <Link href={`/projects/${project.slug}`}>
                  <div className="aspect-video relative">
                    {(() => {
                      const firstImage = project.images.find(img => typeof img === "string") as string | undefined;
                      return firstImage ? (
                        <Image
                          src={firstImage}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                        />
                      ) : null;
                    })()}
                  </div>
                  <div className="p-6">
                    <h3 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tech.slice(0, 2).map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
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
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 