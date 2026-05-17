import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const templates = [
  {
    name: "Arya",
    style: "Traditional",
    description: "Rich saffron and gold motifs with classic Indian ornamentation.",
  },
  {
    name: "Akira",
    style: "Modern",
    description: "Clean lines, contemporary layout, and a minimalist aesthetic.",
  },
  {
    name: "Vivaah",
    style: "Elegant",
    description: "Floral accents with a warm cream palette and delicate gold borders.",
  },
  {
    name: "Sangam",
    style: "Fusion",
    description: "Blends traditional and modern elements for a unique presentation.",
  },
]

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Coming Soon
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
            Premium Templates
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our exclusive collection of handcrafted biodata templates.
            Each design is thoughtfully created to make your profile truly unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((t) => (
            <div
              key={t.name}
              className="glass-card overflow-hidden group hover:shadow-elevated transition-all duration-300"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-cream-dark via-cream to-gold/5 flex items-center justify-center relative">
                <div className="absolute inset-0 border-2 border-gold/20 group-hover:border-gold/40 transition-colors duration-300 m-4 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Ornament color="#D4AF37" size={24} />
                    <p className="font-serif text-2xl font-bold text-gold/60 mt-3">
                      {t.name}
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <h3 className="font-serif text-lg font-bold text-charcoal">{t.name}</h3>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-gold bg-gold/10 px-2 py-0.5 rounded-full">
                    {t.style}
                  </span>
                </div>
                <p className="text-muted text-sm leading-relaxed">{t.description}</p>
              </div>
            </div>
          ))}
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
