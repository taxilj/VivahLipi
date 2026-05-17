"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/section-header"

const plans = [
  {
    name: "Basic",
    price: "₹499",
    note: "Perfect start",
    features: [
      "1-page digital biodata",
      "Shareable link",
      "WhatsApp share",
      "3 classic themes",
    ],
    hot: false,
  },
  {
    name: "Premium",
    price: "₹999",
    note: "Most popular · All you need",
    features: [
      "Elegant full-page profile",
      "Custom URL slug",
      "Photo gallery",
      "10 premium themes",
      "Analytics dashboard",
      "Priority support",
    ],
    hot: true,
  },
  {
    name: "Elite",
    price: "₹1499",
    note: "For the discerning family",
    features: [
      "All Premium features",
      "PDF & print ready",
      "Video introduction",
      "Dedicated family page",
      "Concierge setup call",
    ],
    hot: false,
  },
]

export function Pricing() {
  return (
    <section className="section-padding bg-cream" id="pricing">
      <SectionHeader
        eyebrow="Simple Pricing"
        title="Choose Your Plan"
        description="One-time payment, lifetime access. No hidden charges."
      />

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 items-start">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`rounded-3xl p-8 relative ${
              plan.hot
                ? "bg-gradient-saffron text-white shadow-[0_28px_72px_rgba(171,53,0,0.25)] -mt-0 md:-mt-4"
                : "bg-white border border-gold/40 text-charcoal shadow-card"
            }`}
          >
            {plan.hot && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold text-charcoal text-[10px] font-extrabold px-5 py-1.5 rounded-full tracking-wider whitespace-nowrap">
                MOST POPULAR ★
              </div>
            )}

            <div
              className={`text-[11px] font-bold tracking-[0.15em] uppercase mb-3 ${
                plan.hot ? "text-white/65" : "text-gold"
              }`}
            >
              {plan.name}
            </div>
            <div
              className={`font-serif text-4xl md:text-5xl font-bold leading-none mb-2 ${
                plan.hot ? "text-white" : "text-charcoal"
              }`}
            >
              {plan.price}
            </div>
            <div
              className={`text-sm mb-7 ${
                plan.hot ? "text-white/60" : "text-muted"
              }`}
            >
              {plan.note}
            </div>

            <div className="flex flex-col gap-3 mb-8">
              {plan.features.map((f) => (
                <div key={f} className="flex gap-2.5 items-start">
                  <span className="text-gold text-xs mt-0.5 flex-shrink-0">✦</span>
                  <span
                    className={`text-sm leading-relaxed ${
                      plan.hot ? "text-white/85" : "text-charcoal"
                    }`}
                  >
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant={plan.hot ? "gold" : "primary"}
              size="lg"
              className="w-full"
              onClick={() => window.location.href = "/signup"}
            >
              Get Started &rarr;
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
