"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function SeasonalBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div className="relative z-50 bg-gradient-to-r from-cream via-gold/5 to-cream border-b border-gold/30">
      <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-center gap-2">
        <span className="text-sm">💍</span>
        <span className="text-xs md:text-sm text-charcoal/80 font-medium">
          Shaadi Season 2025-26 —{" "}
          <a
            href="/signup"
            className="text-saffron font-semibold hover:underline"
          >
            Create your biodata now →
          </a>
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="ml-4 text-charcoal/40 hover:text-charcoal transition-colors"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  )
}
