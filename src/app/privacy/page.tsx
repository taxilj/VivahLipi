import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly when creating your biodata profile, including your name, age, contact details, photographs, and family information. We also collect usage data such as page visits, template selections, and interaction patterns to improve our service. Communication data from our WhatsApp support channel is retained to assist with inquiries.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "Your information is used solely to provide and improve the VivahLipi platform. This includes creating and displaying your biodata, enabling sharing via unique links, processing payments for premium plans, and sending service-related communications. We do not sell your personal information to third parties. Your biodata is only visible to people you choose to share it with.",
  },
  {
    title: "3. Data Protection & Security",
    content:
      "We implement industry-standard encryption protocols (AES-256 at rest, TLS 1.3 in transit) to protect your data. Access controls ensure only authorized personnel can view user information. We conduct regular security audits and comply with Indian data protection laws. You can request deletion of your account and associated data at any time by contacting our support team.",
  },
  {
    title: "4. Data Retention & Your Rights",
    content:
      "You may access, update, or delete your personal information at any time through your account settings. We retain your data for as long as your account is active. Upon account deletion, all personal data is permanently removed within 30 days. You have the right to withdraw consent for data processing at any time, though this may limit certain platform features.",
  },
  {
    title: "5. Third-Party Services",
    content:
      "We use trusted third-party services for payment processing (Razorpay), cloud hosting, and analytics. These providers are contractually bound to protect your data and may only process it in accordance with our instructions. We do not share your biodata or personal information with any third party for marketing purposes.",
  },
  {
    title: "6. Contact Us",
    content:
      "If you have questions about this privacy policy or wish to exercise your data rights, please reach out to our support team via WhatsApp or email at privacy@vivahlipi.in. We are committed to resolving any concerns promptly and transparently.",
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold/60" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
              Legal
            </span>
            <div className="h-px w-8 bg-gold/60" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted text-sm">
            Last updated: January 2026
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <div key={s.title} className="glass-card p-8 md:p-10">
              <h2 className="font-serif text-xl font-bold text-charcoal mb-4">{s.title}</h2>
              <p className="text-muted text-sm leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-10 text-center mt-6">
          <Ornament color="#D4AF37" size={14} />
          <p className="text-muted text-sm mt-4 leading-relaxed">
            Your trust matters to us. We are committed to protecting your privacy
            and being transparent about how we handle your data.
          </p>
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
