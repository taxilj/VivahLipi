"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

export function WeddingShowcase() {
  return (
    <section className="px-6 md:px-12 py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute -right-12 -top-12 opacity-[0.04] pointer-events-none">
        <Ornament color="#1e1b18" size={340} />
      </div>
      <div className="absolute -left-12 -bottom-12 opacity-[0.04] pointer-events-none">
        <Ornament color="#ab3500" size={280} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto bg-gradient-dark rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 relative overflow-hidden"
      >
        {[340, 240].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: s,
              height: s,
              right: -60 + i * 30,
              top: "50%",
              transform: "translateY(-50%)",
              borderColor: `rgba(212,175,55,${0.1 + i * 0.1})`,
            }}
          />
        ))}

        <div className="relative z-10 flex-1">
          <div className="text-xs font-bold tracking-[0.25em] uppercase text-gold mb-3">
            New · Public Wedding Page
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
            One Link for All Your Guests
          </h3>
          <p className="text-sm text-white/55 leading-relaxed max-w-sm">
            Share a beautiful wedding info page. Venue, schedule, menu —
            everything in one place.
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 w-full max-w-sm">
          <div className="bg-white/5 border border-gold/30 rounded-2xl p-6">
            <div className="text-[10px] text-white/40 font-semibold tracking-[0.15em] uppercase mb-3">
              Your wedding URL
            </div>
            <div className="flex items-center bg-black/30 rounded-xl overflow-hidden mb-4">
              <div className="px-3 py-2.5 bg-gold/15 border-r border-gold/20">
                <span className="text-[11px] text-gold/80 font-semibold">
                  vivahlipi.in
                </span>
              </div>
              <div className="px-3 py-2.5">
                <span className="text-sm text-white font-serif font-semibold">
                  /wedding/raj-weds-priya
                </span>
              </div>
            </div>
            <div className="space-y-2">
              {[
                "💌 Invite guests via WhatsApp",
                "📅 Live schedule + venue map",
                "🎉 RSVP tracking dashboard",
              ].map((f) => (
                <div
                  key={f}
                  className="text-xs text-white/55"
                >
                  <span className="text-gold text-[10px]">✦ </span>
                  {f}
                </div>
              ))}
            </div>
          </div>
          <Button size="lg" className="w-full mt-4 text-sm">
            Create Wedding Page &rarr;
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
