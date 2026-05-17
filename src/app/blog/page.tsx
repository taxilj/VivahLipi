import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const posts = [
  {
    title: "The Art of the Perfect Wedding Biodata",
    excerpt:
      "Discover how to craft a biodata that stands out — from photography tips to writing your personal summary.",
    date: "Coming Soon",
    category: "Guides",
  },
  {
    title: "5 Trends Shaping Indian Weddings in 2026",
    excerpt:
      "From sustainable decor to AI-powered matchmaking, explore the trends redefining the Indian wedding landscape.",
    date: "Coming Soon",
    category: "Trends",
  },
  {
    title: "How to Share Your Biodata with Family",
    excerpt:
      "A step-by-step guide to sharing your VivahLipi profile securely with family and potential matches.",
    date: "Coming Soon",
    category: "Tutorials",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-5xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Blog
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
            Stories & Insights
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Tips, guides, and inspiration to help you navigate your wedding journey
            with confidence and grace.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {posts.map((p) => (
            <div
              key={p.title}
              className="glass-card overflow-hidden group hover:shadow-elevated transition-all duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-gold/10 via-cream-dark to-gold/5 flex items-center justify-center">
                <Ornament color="#D4AF37" size={32} />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-saffron bg-saffron/5 px-2 py-0.5 rounded-full">
                    {p.category}
                  </span>
                  <span className="text-[10px] text-muted/60">{p.date}</span>
                </div>
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2 leading-snug group-hover:text-saffron transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe */}
        <div className="glass-card p-8 md:p-10 max-w-lg mx-auto text-center">
          <h2 className="font-serif text-xl font-bold text-charcoal mb-2">
            Stay in the Loop
          </h2>
          <p className="text-muted text-sm mb-6">
            Get notified when we publish new articles and guides.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-12 px-4 rounded-full border border-gold/20 bg-white/60 text-charcoal text-sm placeholder:text-muted/30 focus:outline-none focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 transition-all"
            />
            <button className="h-12 px-6 rounded-full bg-saffron text-white font-semibold text-sm hover:bg-saffron-dark transition-all shadow-[0_12px_36px_rgba(171,53,0,0.25)] hover:shadow-[0_16px_48px_rgba(171,53,0,0.35)] hover:-translate-y-0.5 active:translate-y-0 shrink-0">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-charcoal transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
