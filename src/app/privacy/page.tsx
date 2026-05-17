import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-cream px-6 py-24">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 mb-8">
          <Ornament color="#ab3500" size={14} />
          <span className="font-serif text-xl font-bold text-saffron">VivahLipi</span>
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-8">Privacy Policy</h1>

        <div className="space-y-6 text-sm text-charcoal/70 leading-relaxed">
          <p><strong className="text-charcoal">Last updated:</strong> May 2026</p>

          <h2 className="font-serif text-xl font-bold text-charcoal pt-4">1. Information We Collect</h2>
          <p>When you create a biodata on VivahLipi, we collect the information you provide: name, email, phone number, and any personal details you choose to add to your profile.</p>

          <h2 className="font-serif text-xl font-bold text-charcoal pt-4">2. How We Use Your Information</h2>
          <p>We use your information solely to provide and improve our wedding biodata and planning services. We never sell your personal data to third parties.</p>

          <h2 className="font-serif text-xl font-bold text-charcoal pt-4">3. Data Sharing</h2>
          <p>Your biodata profile is shared only when you choose to share the link. We do not publicly list or expose your profile without your consent.</p>

          <h2 className="font-serif text-xl font-bold text-charcoal pt-4">4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>

          <h2 className="font-serif text-xl font-bold text-charcoal pt-4">5. Contact</h2>
          <p>For privacy-related questions, reach out to us at <a href="mailto:hello@vivahlipi.in" className="text-saffron font-semibold hover:underline">hello@vivahlipi.in</a>.</p>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-xs text-muted hover:text-charcoal transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
