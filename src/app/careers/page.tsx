import Link from "next/link"

const jobs = [
  {
    title: "Full-Stack Developer",
    location: "Remote / Bangalore",
    type: "Full-time",
    description:
      "Build and scale the VivahLipi platform using Next.js, TypeScript, and Node.js. You'll own features end-to-end.",
  },
  {
    title: "UI/UX Designer",
    location: "Remote / Bangalore",
    type: "Full-time",
    description:
      "Craft beautiful, intuitive experiences for our users. Strong portfolio in premium product design required.",
  },
  {
    title: "Growth Marketing Lead",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive user acquisition and engagement across India. Experience with wedding or consumer brands preferred.",
  },
  {
    title: "Community Manager",
    location: "Remote",
    type: "Part-time",
    description:
      "Build and nurture our community across WhatsApp, Instagram, and regional channels.",
  },
]

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-dark px-6 py-24 md:py-32 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold/80">
              Careers
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Join Our Team
          </h1>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Help us redefine how India approaches wedding biodata. We&apos;re a small,
            passionate team building something meaningful.
          </p>
        </div>
      </section>

      {/* Job listings */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-3">
            Open Positions
          </h2>
          <p className="text-muted text-sm">
            We&apos;re growing and looking for talented people who share our vision.
          </p>
        </div>

        <div className="space-y-4">
          {jobs.map((j) => (
            <div
              key={j.title}
              className="glass-card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1.5">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{j.title}</h3>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                    {j.type}
                  </span>
                </div>
                <p className="text-xs text-muted mb-2">{j.location}</p>
                <p className="text-muted text-sm leading-relaxed">{j.description}</p>
              </div>
              <button className="h-11 px-6 rounded-full bg-charcoal text-white font-semibold text-sm hover:bg-charcoal/80 transition-all shrink-0">
                Apply
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted text-sm mb-6">
            Don&apos;t see the right role? Send your resume to{" "}
            <a
              href="mailto:careers@vivahlipi.in"
              className="text-saffron font-semibold hover:underline"
            >
              careers@vivahlipi.in
            </a>
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-charcoal transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
