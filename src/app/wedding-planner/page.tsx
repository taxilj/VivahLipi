import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const features = [
  {
    title: "Guest List Manager",
    description: "Invite, track RSVPs, and manage your guest count with ease.",
    icon: "👥",
  },
  {
    title: "Menu & Catering",
    description: "Plan your menu, taste tests, and dietary preferences in one place.",
    icon: "🍽️",
  },
  {
    title: "Wedding Timeline",
    description: "From pheras to reception — build a seamless event schedule.",
    icon: "⏱️",
  },
  {
    title: "Vendor Directory",
    description: "Discover and book the best photographers, florists, and decorators.",
    icon: "✨",
  },
]

export default function WeddingPlannerPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
            Coming Soon
          </span>
          <div className="h-px w-8 bg-gold/60" />
        </div>

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6">
          Wedding Planner
        </h1>

        <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-16">
          We&apos;re building an all-in-one wedding planning experience to help you manage
          every detail of your big day — from the guest list to the grand finale.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {features.map((f) => (
            <div
              key={f.title}
              className="glass-card p-6 text-left hover:shadow-elevated transition-shadow duration-300"
            >
              <span className="text-2xl mb-3 block">{f.icon}</span>
              <h3 className="font-serif text-lg font-semibold text-charcoal mb-1.5">
                {f.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-10 max-w-lg mx-auto">
          <Ornament color="#D4AF37" size={16} />
          <h2 className="font-serif text-xl font-bold text-charcoal mt-4 mb-2">
            Get Notified When We Launch
          </h2>
          <p className="text-muted text-sm mb-6">
            Be the first to know when the VivahLipi Wedding Planner goes live.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 h-12 px-4 rounded-full border border-gold/20 bg-white/60 text-charcoal text-sm placeholder:text-muted/30 focus:outline-none focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 transition-all"
            />
            <button className="h-12 px-6 rounded-full bg-gold text-charcoal font-semibold text-sm hover:bg-gold/90 transition-all shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0 shrink-0">
              Notify Me
            </button>
          </div>
        </div>

        <div className="mt-12">
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
