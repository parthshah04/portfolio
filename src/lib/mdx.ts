import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import rehypePrism from "rehype-prism-plus"

const contentDirectory = path.join(process.cwd(), "content")

export async function getMDXContent(type: "blog" | "projects", slug: string) {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContent)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypePrism],
    },
  })

  return {
    frontmatter: data,
    content: mdxSource,
  }
}

export function getAllMDXFiles(type: "blog" | "projects") {
  const directory = path.join(contentDirectory, type)
  const files = fs.readdirSync(directory)
  
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const filePath = path.join(directory, file)
      const fileContent = fs.readFileSync(filePath, "utf8")
      const { data } = matter(fileContent)
      const slug = file.replace(/\.mdx$/, "")

      return {
        slug,
        frontmatter: data,
      }
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date || 0)
      const dateB = new Date(b.frontmatter.date || 0)
      return dateB.getTime() - dateA.getTime()
    })
} 