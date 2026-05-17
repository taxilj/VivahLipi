"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"

const steps = [
  {
    num: "01",
    emoji: "✍️",
    title: "Fill the Form",
    desc: "Answer simple questions about yourself, your family, and career in just 5 minutes.",
  },
  {
    num: "02",
    emoji: "💳",
    title: "Pay ₹999",
    desc: "One-time payment, lifetime access. No subscriptions or hidden charges, ever.",
  },
  {
    num: "03",
    emoji: "🔗",
    title: "Share Your Link",
    desc: "Get a beautiful link like vivahlipi.in/priya — share via WhatsApp, email, or anywhere.",
  },
]

export function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="features">
      <SectionHeader
        eyebrow="Simple Process"
        title="How It Works"
        description="Get your premium biodata live in minutes."
      />

      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className="bg-cream border border-gold/30 rounded-3xl p-8 relative overflow-hidden group hover:border-gold/60 hover:shadow-gold transition-all duration-300"
          >
            <div className="absolute -top-4 right-2 font-serif text-7xl font-bold text-gold/10 pointer-events-none select-none">
              {step.num}
            </div>
            <div className="text-3xl mb-5 leading-none">{step.emoji}</div>
            <h3 className="font-serif text-xl font-bold text-charcoal mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-muted leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
