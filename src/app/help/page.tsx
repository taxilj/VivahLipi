import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const faqs = [
  {
    q: "How do I create my wedding biodata?",
    a: "Simply sign up for a free account, fill in your details, choose a premium template, and your biodata is ready to share in minutes. No design skills needed — everything is guided step by step.",
  },
  {
    q: "Can I share my biodata with family and matches?",
    a: "Absolutely! Each biodata gets a unique link that you can share via WhatsApp, email, or social media. You can also download it as a PDF for offline sharing.",
  },
  {
    q: "Is there a paid plan? What features are included?",
    a: "We offer a free tier with essential features. Premium plans unlock additional templates, advanced customization, priority support, and more. Check our Pricing page for details.",
  },
  {
    q: "How does WhatsApp integration work?",
    a: "With one tap, you can share your biodata directly on WhatsApp. We also offer a WhatsApp support channel where you can get real-time help from our team.",
  },
  {
    q: "Is my data safe and private?",
    a: "Yes. Your data is encrypted and stored securely. You control who sees your biodata, and you can revoke access at any time. We never share your information without consent.",
  },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Support
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
            Help Centre
          </h1>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about using VivahLipi. Can&apos;t find what
            you&apos;re looking for? We&apos;re just a message away.
          </p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="glass-card group open:shadow-elevated transition-shadow duration-300"
            >
              <summary className="list-none p-6 cursor-pointer flex items-center justify-between gap-4 select-none">
                <span className="font-serif text-base font-semibold text-charcoal group-open:text-saffron transition-colors">
                  {faq.q}
                </span>
                <span className="text-gold text-xl font-light leading-none transition-transform duration-300 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0">
                <p className="text-muted text-sm leading-relaxed border-t border-gold/10 pt-4">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="glass-card p-8 md:p-10 text-center bg-gradient-to-br from-wa/5 to-transparent border-wa/10">
          <Ornament color="#25D366" size={16} />
          <h2 className="font-serif text-xl font-bold text-charcoal mt-4 mb-2">
            Still Have Questions?
          </h2>
          <p className="text-muted text-sm mb-6">
            Our support team is available on WhatsApp. We typically respond within 5 minutes.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-wa text-white font-semibold text-sm hover:bg-wa/90 transition-all shadow-[0_10px_32px_rgba(37,211,102,0.42)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:translate-y-0"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-charcoal transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
