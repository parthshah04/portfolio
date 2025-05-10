import Image from "next/image"
import Link from "next/link"

interface BlogCardProps {
  post: {
    slug: string
    frontmatter: {
      title: string
      description: string
      date: string
      image: string
      tags: string[]
    }
  }
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative overflow-hidden rounded-lg border bg-card"
    >
      <div className="aspect-video relative">
        <Image
          src={post.frontmatter.image}
          alt={post.frontmatter.title}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <time className="text-sm text-muted-foreground">
          {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
        <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">
          {post.frontmatter.title}
        </h2>
        <p className="mt-2 text-muted-foreground">{post.frontmatter.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {post.frontmatter.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
} 