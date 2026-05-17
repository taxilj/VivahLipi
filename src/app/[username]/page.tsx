import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

export default function UsernamePage({ params }: { params: { username: string } }) {
  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-12">
      <div className="w-full max-w-sm bg-white border border-gold/30 rounded-3xl p-8 shadow-card text-center">
        <Ornament color="#ab3500" size={30} />
        <h1 className="font-serif text-2xl font-bold text-charcoal mt-4 mb-2">
          Profile Not Found
        </h1>
        <p className="text-sm text-muted mb-8">
          No VivahLipi profile exists for <strong className="text-charcoal">/{params.username}</strong>.
          Create yours today!
        </p>
        <Link href="/create"
          className="inline-flex items-center justify-center rounded-full bg-saffron text-white font-semibold px-8 py-3 text-sm hover:bg-saffron-dark transition-all shadow-[0_10px_28px_rgba(171,53,0,0.25)]">
          Create Your Biodata →
        </Link>
      </div>
      <Link href="/" className="text-xs text-muted mt-8 hover:text-charcoal transition-colors">
        ← Back to Home
      </Link>
    </div>
  )
}
