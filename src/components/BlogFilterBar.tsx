'use client'

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface BlogFilterBarProps {
  categories: string[]
  tags: string[]
}

export function BlogFilterBar({ categories, tags }: BlogFilterBarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const selectedCategory = searchParams.get('category')
  const selectedTag = searchParams.get('tag')

  const updateSearchParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) {
      params.set(key, value)
    } else {
      params.delete(key)
    }
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex flex-col items-center gap-4 mb-10">
      <span className="text-lg font-semibold text-muted-foreground mb-1">Find Articles</span>
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 pl-10 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary text-base shadow-md"
          defaultValue={search}
          onChange={e => updateSearchParams('search', e.target.value || null)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => updateSearchParams('category', selectedCategory === category ? null : category)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              selectedCategory === category
                ? 'bg-primary text-white shadow'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-2 mt-1">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => updateSearchParams('tag', selectedTag === tag ? null : tag)}
            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors border border-transparent focus:outline-none focus:ring-2 focus:ring-primary/30 ${
              selectedTag === tag
                ? 'bg-primary text-white shadow'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
} 