'use client'

import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export function BlogSearchBox() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search') || ''

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams.toString())
    if (e.target.value) {
      params.set('search', e.target.value)
    } else {
      params.delete('search')
    }
    router.push(`/blog?${params.toString()}`)
  }

  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search articles..."
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary text-base"
          defaultValue={search}
          onChange={handleChange}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  )
} 