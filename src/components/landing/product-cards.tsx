"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

const cards = [
  {
    icon: "💍",
    title: "Biodata Portfolio",
    desc: "Not married yet? Create your shaadi profile — elegant, shareable, and professional.",
    cta: "Create Biodata →",
    price: "from ₹499",
    saffron: false,
    href: "/signup",
  },
  {
    icon: "🎊",
    title: "Wedding Planner",
    desc: "Marriage fixed? Plan your entire wedding — guests, menu, venue, timeline and more.",
    cta: "Plan Wedding →",
    price: null,
    saffron: true,
    href: "/wedding-planner",
  },
]

export function ProductCards() {
  return (
    <section className="bg-cream px-6 md:px-12 pb-24 -mt-8">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            className={`rounded-3xl p-8 md:p-10 relative overflow-hidden ${
              card.saffron
                ? "bg-gradient-saffron text-white"
                : "bg-white border border-gold/40 text-charcoal"
            }`}
          >
            {card.saffron && (
              <div className="absolute -top-6 -right-6 opacity-15 pointer-events-none">
                <Ornament color="#D4AF37" size={120} />
              </div>
            )}
            {!card.saffron && (
              <div className="absolute top-0 right-0 w-24 h-24 bg-cream rounded-bl-[100%] pointer-events-none" />
            )}

            <div className="text-4xl mb-5 leading-none">{card.icon}</div>
            <h3 className="font-serif text-2xl font-bold mb-3">{card.title}</h3>
            <p
              className={`text-sm leading-relaxed mb-7 ${
                card.saffron ? "text-white/70" : "text-muted"
              }`}
            >
              {card.desc}
            </p>
            <div className="flex items-center gap-4">
              <Button
                variant={card.saffron ? "gold" : "primary"}
                size="md"
                onClick={() => window.location.href = card.href}
              >
                {card.cta}
              </Button>
              {card.price && (
                <span className="text-sm text-muted">{card.price}</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
