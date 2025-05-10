"use client"

import { useRouter, useSearchParams } from "next/navigation"

interface TagFilterProps {
  tags: string[]
  selectedTag?: string
}

export function TagFilter({ tags, selectedTag }: TagFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleTagClick = (tag: string) => {
    const currentQuery = searchParams.get("q") || ""
    const newParams = new URLSearchParams()
    
    if (currentQuery) {
      newParams.set("q", currentQuery)
    }
    
    if (tag === selectedTag) {
      // If clicking the selected tag, remove it
      router.push(`/blog${currentQuery ? `?q=${currentQuery}` : ""}`)
    } else {
      // Otherwise, set the new tag
      newParams.set("tag", tag)
      router.push(`/blog?${newParams.toString()}`)
    }
  }

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleTagClick(tag)}
          className={`inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
            tag === selectedTag
              ? "border-transparent bg-primary text-primary-foreground hover:bg-primary/80"
              : "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  )
} 