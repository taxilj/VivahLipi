import Link from "next/link"

const values = [
  {
    title: "Our Mission",
    description:
      "To make wedding biodata creation effortless, elegant, and accessible for every Indian family. We believe your journey to marriage should begin with a profile that truly represents you.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    description:
      "A world where every wedding story starts with a beautiful biodata — bridging tradition and technology to connect families with grace.",
    icon: "✨",
  },
]

const team = [
  { name: "Arjun Mehta", role: "Founder & CEO", initials: "AM" },
  { name: "Priya Sharma", role: "Head of Design", initials: "PS" },
  { name: "Rohan Kapoor", role: "Lead Developer", initials: "RK" },
  { name: "Ananya Verma", role: "Community & Growth", initials: "AV" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero section */}
      <section className="relative overflow-hidden bg-gradient-dark px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold/80">
              About Us
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The VivahLipi Story
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            VivahLipi was born from a simple observation — finding a life partner in
            India should feel special, not stressful. We set out to create a platform
            where biodata is not just a document, but a celebration of who you are.
          </p>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-8 md:p-10">
              <span className="text-3xl mb-4 block">{v.icon}</span>
              <h2 className="font-serif text-2xl font-bold text-charcoal mb-3">{v.title}</h2>
              <p className="text-muted text-sm leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-dark/50 px-6 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
                Our Team
              </span>
              <div className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal">
              People Behind VivahLipi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div
                key={m.name}
                className="glass-card p-6 text-center hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-saffron flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-lg font-bold text-white">{m.initials}</span>
                </div>
                <h3 className="font-serif text-base font-bold text-charcoal">{m.name}</h3>
                <p className="text-muted text-xs mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="text-center pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-charcoal transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}
