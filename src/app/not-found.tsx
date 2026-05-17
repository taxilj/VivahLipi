import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="font-serif text-8xl font-bold text-gold/30 mb-4">404</div>
        <h1 className="font-serif text-3xl font-bold text-charcoal mb-3">Page Not Found</h1>
        <p className="text-muted text-sm mb-8 leading-relaxed">
          This page doesn&apos;t exist yet. We&apos;re building something beautiful — check back soon!
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-saffron text-white font-semibold px-8 py-3 text-sm hover:bg-saffron-dark transition-all shadow-[0_12px_36px_rgba(171,53,0,0.25)]"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
