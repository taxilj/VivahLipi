import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const posts = [
  {
    title: "The Ultimate Guide to Creating a Wedding Biodata",
    excerpt: "Everything you need to know about crafting a beautiful, shareable wedding biodata that stands out.",
    date: "May 10, 2026",
    slug: "ultimate-guide-wedding-biodata",
  },
  {
    title: "5 Tips for a Memorable Wedding Proposal",
    excerpt: "Planning to pop the question? Here are five tips to make your proposal truly unforgettable.",
    date: "April 28, 2026",
    slug: "tips-for-memorable-wedding-proposal",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Ornament color="#ab3500" size={14} />
          <span className="font-serif text-xl font-bold text-saffron">VivahLipi</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-2">Blog</h1>
        <p className="text-sm text-muted mb-10">Stories, guides, and tips for your wedding journey.</p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article key={post.slug} className="bg-white border border-gold/30 rounded-2xl p-6 hover:border-gold/60 transition-colors">
              <div className="text-xs text-muted mb-2">{post.date}</div>
              <h2 className="font-serif text-xl font-bold text-charcoal mb-2">{post.title}</h2>
              <p className="text-sm text-muted leading-relaxed mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-xs text-saffron font-semibold hover:underline"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/" className="text-xs text-muted hover:text-charcoal transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
