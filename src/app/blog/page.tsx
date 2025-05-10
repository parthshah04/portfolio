import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { blogPosts } from "@/data/blog-posts"
import { Suspense } from "react"
import { BlogFilterBar } from "@/components/BlogFilterBar"

export const metadata: Metadata = {
  title: "Blog - Parth Shah",
  description: "Read the latest articles about web development, programming, and technology.",
}

function BlogGrid({ posts }: { posts: typeof blogPosts }) {
  return (
    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative h-48 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="inline-block px-3 py-1 text-sm font-medium text-white bg-primary/80 rounded-full">
                {post.category}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

function LoadingGrid() {
  return (
    <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg animate-pulse"
        >
          <div className="h-48 bg-gray-200 dark:bg-gray-700" />
          <div className="p-6">
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4" />
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2" />
            <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4" />
            <div className="flex gap-2">
              {[...Array(3)].map((_, j) => (
                <div
                  key={j}
                  className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function BlogPage({
  searchParams,
}: {
  searchParams: { search?: string; tag?: string; category?: string }
}) {
  const search = searchParams.search?.toLowerCase() || ""
  const selectedTag = searchParams.tag
  const selectedCategory = searchParams.category

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search) ||
      post.description.toLowerCase().includes(search) ||
      post.tags.some((tag) => tag.toLowerCase().includes(search))
    const matchesTag = !selectedTag || post.tags.includes(selectedTag)
    const matchesCategory = !selectedCategory || post.category === selectedCategory
    return matchesSearch && matchesTag && matchesCategory
  })

  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))
  const tags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <BlogFilterBar categories={categories} tags={tags} />
      <Suspense fallback={<LoadingGrid />}>
        {filteredPosts.length > 0 ? (
          <BlogGrid posts={filteredPosts} />
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold mb-2">No posts found</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
          </div>
        )}
      </Suspense>
    </div>
  )
} 