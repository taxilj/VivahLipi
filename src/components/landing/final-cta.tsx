"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="px-6 md:px-12 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gradient-saffron rounded-4xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
            <Ornament color="#D4AF37" size={200} />
          </div>
          <div className="absolute -left-12 -top-12 opacity-[0.07] pointer-events-none">
            <Ornament color="#D4AF37" size={140} />
          </div>

          <div className="relative z-10">
            <div className="text-[10px] text-white/55 font-bold tracking-[0.2em] uppercase mb-5">
              Start Your Journey
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Your Story Deserves
              <br />
              <span className="text-gold">a Beautiful Beginning</span>
            </h2>
            <p className="text-white/65 text-base md:text-lg max-w-md mx-auto leading-relaxed mb-10">
              Create your premium biodata in minutes, share it with the world.
            </p>
            <Button
              variant="gold"
              size="xl"
              className="text-base"
              onClick={() => window.location.href = "/signup"}
            >
              ✦ Create Your Biodata Now
            </Button>
            <p className="text-white/50 text-xs mt-5">
              No credit card required · One-time payment · Lifetime access
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
