'use client'

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

interface BlogFiltersProps {
  categories: string[]
  tags: string[]
}

export function BlogFilters({ categories, tags }: BlogFiltersProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''
  const selectedTag = searchParams.get('tag')
  const selectedCategory = searchParams.get('category')

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
    <aside className="sticky top-8 flex flex-col gap-8 px-2 lg:px-0 mt-16 md:mt-20">
      <h2 className="text-4xl font-extrabold mb-6">Blog</h2>
      {/* Search Box Only */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full px-3 py-1.5 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            defaultValue={search}
            onChange={(e) => updateSearchParams('search', e.target.value || null)}
          />
          <Search className="absolute left-3 top-2 h-4 w-4 text-gray-400" />
        </div>
      </div>
      {/* Categories */}
      <div className="mb-6">
        <h3 className="text-base font-semibold mb-2">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateSearchParams('category', selectedCategory === category ? null : category)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {/* Tags */}
      <div>
        <h3 className="text-base font-semibold mb-2">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => updateSearchParams('tag', selectedTag === tag ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? "bg-primary text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
} 