"use client"

import { useState } from "react"
import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

export default function CreatePage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = "/dashboard"
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-12">
      <Link href="/" className="mb-8">
        <div className="inline-flex items-center gap-2">
          <Ornament color="#ab3500" size={14} />
          <span className="font-serif text-xl font-bold text-saffron">VivahLipi</span>
        </div>
      </Link>

      <div className="w-full max-w-sm bg-white border border-gold/30 rounded-3xl p-8 shadow-card">
        <h1 className="font-serif text-2xl font-bold text-charcoal mb-1 text-center">Create Your Biodata</h1>
        <p className="text-sm text-muted text-center mb-8">Apni shaadi website ₹999 maa</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Full Name</label>
            <input type="text" required value={name} onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Phone</label>
            <input type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Password</label>
            <input type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 6 characters"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>

          <button type="submit" disabled={loading}
            className="w-full mt-2 rounded-full bg-saffron text-white font-semibold py-3.5 text-sm hover:bg-saffron-dark transition-all shadow-[0_10px_28px_rgba(171,53,0,0.25)] disabled:opacity-60">
            {loading ? "Creating..." : "✦ Create Biodata — ₹999"}
          </button>

          <div className="text-center text-xs text-muted pt-2">
            Your data is safe 🔒
          </div>
        </form>

        <p className="text-xs text-muted text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-saffron font-semibold hover:underline">Login</Link>
        </p>
      </div>

      <Link href="/" className="text-xs text-muted mt-8 hover:text-charcoal transition-colors">
        ← Back to Home
      </Link>
    </div>
  )
}
