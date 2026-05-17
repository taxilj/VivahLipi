"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { SectionHeader } from "@/components/shared/section-header"
import { cn } from "@/lib/utils"

const faqs = [
  {
    q: "How long does it take to create a biodata?",
    a: "Just 5 minutes! Our simple 4-step form guides you through personal, family, career details, and preview.",
  },
  {
    q: "Can I share my biodata on WhatsApp?",
    a: "Absolutely! Every profile gets a unique link like vivahlipi.in/yourname. Share it on WhatsApp, email, or anywhere.",
  },
  {
    q: "Is my data private and secure?",
    a: "Yes, 100%. Your data is encrypted and never shared without your permission. You control who sees your profile.",
  },
  {
    q: "What if I need to update my biodata?",
    a: "You can edit your biodata anytime from your dashboard. Changes go live instantly with no additional cost.",
  },
  {
    q: "Can I get a PDF version?",
    a: "Yes! All plans include a beautifully formatted PDF version of your biodata that you can download and print.",
  },
  {
    q: "Do I need design skills?",
    a: "Not at all. Choose from 10+ premium themes and your biodata is automatically styled. Just fill in your details.",
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="section-padding bg-white" id="faq">
      <SectionHeader
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
      />

      <div className="max-w-2xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-cream border border-gold/20 rounded-2xl overflow-hidden"
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <span className="text-sm font-semibold text-charcoal pr-4">
                {faq.q}
              </span>
              <ChevronDown
                size={16}
                className={cn(
                  "text-gold flex-shrink-0 transition-transform duration-200",
                  open === i && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
