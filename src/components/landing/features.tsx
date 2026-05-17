"use client"

import { motion } from "framer-motion"
import { SectionHeader } from "@/components/shared/section-header"
import { Ornament } from "@/components/shared/ornament"

const features = [
  {
    emoji: "💒",
    title: "Guest Management",
    desc: "Send digital invites and track RSVPs in real time.",
    tag: "Invites & RSVP",
  },
  {
    emoji: "🍽️",
    title: "Menu Planner",
    desc: "Plan lunch, dinner, and snack menus for every ceremony.",
    tag: "Food & Catering",
  },
  {
    emoji: "📍",
    title: "Venue Details",
    desc: "Share address, maps, parking info and timings for guests.",
    tag: "Venue & Location",
  },
  {
    emoji: "📋",
    title: "Event Timeline",
    desc: "Mehendi, Sangeet, Haldi, Wedding — so nothing slips.",
    tag: "Schedule",
  },
]

export function Features() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="features">
      <div className="absolute -right-20 -top-20 opacity-[0.03] pointer-events-none">
        <Ornament color="#1e1b18" size={320} />
      </div>
      <div className="absolute -left-20 -bottom-20 opacity-[0.03] pointer-events-none">
        <Ornament color="#ab3500" size={280} />
      </div>

      <div className="relative">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
            Plan Your Entire Wedding
          </span>
          <div className="h-px w-8 bg-gold/60" />
        </div>

        <SectionHeader
          title={
            <>
              Everything You Need,{" "}
              <em className="text-saffron not-italic">All in One Place</em>
            </>
          }
          description="Once your match is fixed, use VivahLipi to plan your entire wedding — all in one beautiful place."
        />

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-cream border border-gold/30 rounded-2xl p-6 group hover:border-gold/60 hover:shadow-gold transition-all duration-300"
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-saffron/20 bg-saffron/5 text-[10px] font-bold uppercase tracking-wider text-saffron mb-4">
                {f.tag}
              </div>
              <div className="text-3xl mb-4 leading-none">{f.emoji}</div>
              <h3 className="font-serif text-lg font-bold text-charcoal mb-2 leading-tight">
                {f.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
