"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-24 md:pt-0">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-12 left-12 opacity-10">
          <Ornament color="#D4AF37" size={64} />
        </div>
        {[520, 400, 300].map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full border pointer-events-none"
            style={{
              width: s,
              height: s,
              right: 180 - i * 20,
              top: "50%",
              transform: "translateY(-50%)",
              borderColor: `rgba(212,175,55,${0.08 + i * 0.05})`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-gold to-gold/30" />
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-gold">
                All-in-One Wedding Platform
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal leading-[1.08] mb-6">
              From Biodata
              <br />
              to <em className="text-saffron not-italic">Baraat</em> —
              <br />
              We&apos;ve Got You
            </h1>

            <p className="text-base md:text-lg text-[#6b5d54] leading-relaxed max-w-md mb-8">
              VivahLipi is your all-in-one platform. Create a stunning shaadi
              profile, then plan your entire wedding — guests, menu, venue, and
              more.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <Button size="xl" className="text-base" onClick={() => window.location.href = "/signup"}>
                ✦ Get Started Free
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = "/ananya-sharma"}>
                View Sample &rarr;
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 text-xs text-[#9c8f86]">
              {["No design skills needed", "Ready in 5 minutes", "Shareable forever"].map(
                (f) => (
                  <span key={f} className="flex items-center gap-2">
                    <span className="text-gold">✓</span> {f}
                  </span>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex-shrink-0 relative"
          >
            <div className="relative w-[260px] md:w-[280px]">
              <div className="relative bg-[#18110a] rounded-[44px] p-[10px] shadow-[0_48px_110px_rgba(24,17,10,0.35),0_0_0_1.5px_rgba(212,175,55,0.15)]">
                <div className="absolute top-[14px] left-1/2 -translate-x-1/2 w-[64px] h-[11px] bg-[#18110a] rounded-full z-10" />
                <div className="w-full rounded-[35px] overflow-hidden bg-cream">
                  <div className="h-[160px] relative">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url(https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&h=240&fit=crop&crop=face)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-[#140802]/90" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-[#f0d060] border-2 border-white mb-2" />
                      <div className="text-white font-serif text-sm font-bold">
                        Priya Sharma
                      </div>
                      <div className="text-white/70 text-[11px]">26 yrs · Delhi</div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col gap-2">
                    {[
                      ["Personal", "Hindu · Brahmin"],
                      ["Career", "Engineer · ₹18L"],
                      ["Family", "Nuclear family"],
                    ].map(([lbl, val]) => (
                      <div
                        key={lbl}
                        className="bg-white border border-gold/30 rounded-xl px-3 py-2"
                      >
                        <div className="text-[8px] font-bold uppercase tracking-wider text-saffron mb-0.5">
                          {lbl}
                        </div>
                        <div className="text-[11px] text-charcoal">{val}</div>
                      </div>
                    ))}
                    <div className="bg-wa rounded-full py-2 px-3 flex items-center justify-center gap-2">
                      <span className="text-white text-[11px] font-semibold">
                        💬 Connect on WhatsApp
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-8 bg-white border border-gold/40 rounded-xl px-4 py-2.5 shadow-elevated"
              >
                <span className="text-sm font-semibold text-charcoal">
                  <span className="text-gold">500+</span> profiles created
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
