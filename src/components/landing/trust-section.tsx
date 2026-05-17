"use client"

import { motion } from "framer-motion"
import { Ornament } from "@/components/shared/ornament"

const stats = [
  { value: "500+", label: "Profiles Created" },
  { value: "99.9%", label: "Uptime" },
  { value: "5 min", label: "Average Setup" },
]

export function TrustSection() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      <div className="absolute -right-24 -top-24 opacity-[0.03] pointer-events-none">
        <Ornament color="#ab3500" size={300} />
      </div>
      <div className="absolute -left-24 -bottom-24 opacity-[0.03] pointer-events-none">
        <Ornament color="#D4AF37" size={250} />
      </div>

      {/* Stats */}
      <div className="max-w-3xl mx-auto grid grid-cols-3 gap-6 mb-20">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="font-serif text-3xl md:text-4xl font-bold text-saffron mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Placeholder CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-lg mx-auto text-center bg-white border border-gold/30 rounded-3xl p-10"
      >
        <div className="text-4xl mb-4">💍</div>
        <p className="text-lg font-serif font-bold text-charcoal mb-3">
          Be the first to create your VivahLipi profile
        </p>
        <p className="text-sm text-muted mb-6">
          Join 500+ families who trust VivahLipi. Your story starts here.
        </p>
        <button
          onClick={() => window.location.href = "/signup"}
          className="inline-flex items-center justify-center rounded-full bg-saffron text-white font-semibold px-8 py-3 text-sm hover:bg-saffron-dark transition-all shadow-[0_12px_36px_rgba(171,53,0,0.25)]"
        >
          Create Now
        </button>
      </motion.div>
    </section>
  )
}
