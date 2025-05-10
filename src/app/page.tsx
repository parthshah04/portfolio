import { Hero } from "@/components/Hero"
import { About } from "@/components/About"
import { Skills } from "@/components/Skills"
import { Timeline } from "@/components/Timeline"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { CodeAndCoffee } from "@/components/CodeAndCoffee"
import { BlogTeaser } from "@/components/BlogTeaser"
import { Contact } from "@/components/Contact"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <ProjectsGrid />
      <CodeAndCoffee />
      <BlogTeaser />
      <Contact />
    </main>
  )
}
