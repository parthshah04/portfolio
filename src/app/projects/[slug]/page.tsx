import { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"
import { projects } from "@/data/projects"
import { ImageGallery } from "@/components/ImageGallery"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  
  if (!project) {
    return {
      title: "Project Not Found - Parth Shah",
      description: "The requested project could not be found.",
    }
  }
  
  return {
    title: `${project.title} - Parth Shah`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.images[0]],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.images[0]],
    },
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/projects"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Projects
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <ImageGallery images={project.images} title={project.title} />
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <span>{project.role}</span>
            <span>•</span>
            <span>{project.year}</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4">
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source
            </Link>
            <Link
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-muted-foreground hover:text-foreground"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-muted-foreground">{project.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold mb-2">Challenges</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.solutions.map((solution) => (
                  <li key={solution}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            {project.results.map((result) => (
              <li key={result}>{result}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
} 