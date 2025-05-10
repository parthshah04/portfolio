import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { blogPosts } from "@/data/blog-posts"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found - Parth Shah",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} - Parth Shah`,
    description: post.description,
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Blog
      </Link>

      <article className="max-w-3xl mx-auto">
        <div className="relative aspect-video mb-8">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time>
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
          </div>
        </header>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split("\n").map((paragraph, index) => {
            if (paragraph.startsWith("##")) {
              return (
                <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                  {paragraph.replace("##", "").trim()}
                </h2>
              )
            }
            if (paragraph.startsWith("-")) {
              return (
                <ul key={index} className="list-disc pl-6 my-4">
                  <li>{paragraph.replace("-", "").trim()}</li>
                </ul>
              )
            }
            if (paragraph.startsWith("```")) {
              return null // Skip code block markers
            }
            if (paragraph.trim() === "") {
              return <br key={index} />
            }
            return <p key={index} className="my-4">{paragraph}</p>
          })}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  )
} 