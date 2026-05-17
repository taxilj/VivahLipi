"use client"

import { motion } from "framer-motion"
import { Ornament } from "@/components/shared/ornament"

const stats = [
  { value: "12,000+", label: "Profiles Created" },
  { value: "4.9 ★", label: "User Rating" },
  { value: "99.9%", label: "Uptime" },
  { value: "5 min", label: "Average Setup" },
]

const testimonials = [
  {
    quote:
      "VivahLipi made my shaadi profile look like a million bucks. My family was blown away when they saw it.",
    author: "Priya S.",
    role: "Premium User · Delhi",
  },
  {
    quote:
      "The wedding planner saved us so much stress. Guest list, menu, timeline — all in one place. Game changer!",
    author: "Raj & Anjali",
    role: "Wedding Planner Users · Mumbai",
  },
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
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
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

      {/* Testimonials */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.author}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white border border-gold/30 rounded-3xl p-8 relative"
          >
            <div className="absolute top-4 right-4 opacity-[0.06]">
              <Ornament color="#D4AF37" size={40} />
            </div>
            <div className="text-3xl text-gold/30 font-serif leading-none mb-4">
              &ldquo;
            </div>
            <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
              {t.quote}
            </p>
            <div>
              <div className="text-sm font-semibold text-charcoal">{t.author}</div>
              <div className="text-xs text-muted mt-0.5">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
