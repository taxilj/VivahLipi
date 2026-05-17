"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

export function WhatsAppSection() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-wa/10 border border-wa/20 mb-8">
          <span className="text-lg">💬</span>
          <span className="text-xs font-bold tracking-wider uppercase text-wa">
            WhatsApp Ready
          </span>
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
          Share Your Profile
          <br />
          <span className="text-gradient">on WhatsApp</span>
        </h2>

        <p className="text-muted text-lg max-w-lg mx-auto leading-relaxed mb-10">
          One tap. Your entire biodata — beautifully formatted — ready to share
          with family and prospects. No PDFs. No attachments. Just a link.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { icon: "🔗", label: "Copy Link", desc: "Share anywhere" },
            { icon: "💬", label: "WhatsApp", desc: "Direct share" },
            { icon: "📱", label: "Preview", desc: "Mobile optimized" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-cream border border-gold/30 flex items-center justify-center text-2xl mx-auto mb-3">
                {item.icon}
              </div>
              <div className="text-sm font-semibold text-charcoal">{item.label}</div>
              <div className="text-xs text-muted mt-0.5">{item.desc}</div>
            </div>
          ))}
        </div>

        <Button variant="wa" size="xl">
          💬 Share on WhatsApp
        </Button>
      </motion.div>

      <div className="absolute -left-16 -bottom-16 opacity-[0.03] pointer-events-none">
        <Ornament color="#25D366" size={200} />
      </div>
    </section>
  )
}
