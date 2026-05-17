"use client"

import { SeasonalBanner } from "@/components/landing/seasonal-banner"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { Hero } from "@/components/landing/hero"
import { ProductCards } from "@/components/landing/product-cards"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { WeddingShowcase } from "@/components/landing/wedding-showcase"
import { WhatsAppSection } from "@/components/landing/whatsapp-section"
import { TrustSection } from "@/components/landing/trust-section"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { ProfileCard } from "@/components/profile/profile-card"

export default function Home() {
  return (
    <>
      <SeasonalBanner />
      <Navbar />
      <main>
        <Hero />
        <ProductCards />
        <HowItWorks />
        <Features />
        <WeddingShowcase />

        {/* Live Profile Preview Section */}
        <section className="section-padding bg-cream relative overflow-hidden" id="preview">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-gold/60" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
                Live Preview
              </span>
              <div className="h-px w-8 bg-gold/60" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
              See a Sample{" "}
              <span className="text-gradient">Biodata Profile</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-lg mx-auto leading-relaxed mt-4">
              This is what your profile will look like. Elegant, premium, and
              instantly shareable.
            </p>
          </div>
          <div className="max-w-md mx-auto rounded-3xl overflow-hidden shadow-elevated border border-gold/20">
            <ProfileCard />
          </div>
        </section>

        <WhatsAppSection />
        <TrustSection />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
