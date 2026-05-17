"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { registerUser } from "@/lib/auth"
import { Ornament } from "@/components/shared/ornament"

export default function SignupPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    const result = registerUser(name, email, phone, password)
    setLoading(false)
    if (result.ok) {
      setSuccess(true)
      setTimeout(() => router.push("/login"), 1500)
    } else {
      setError(result.error || "Registration failed")
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
            <span className="text-3xl">✓</span>
          </div>
          <h1 className="font-serif text-2xl font-bold text-charcoal mb-2">Account Created!</h1>
          <p className="text-sm text-muted mb-6">Redirecting you to login...</p>
        </div>
      </div>
    )
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
        <p className="text-sm text-muted text-center mb-8">Join India&apos;s most elegant wedding platform</p>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3 mb-5">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Priya Sharma"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Phone</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 98765 43210"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Password</label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Min 6 characters"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 rounded-full bg-saffron text-white font-semibold py-3.5 text-sm hover:bg-saffron-dark transition-all shadow-[0_10px_28px_rgba(171,53,0,0.25)] disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Biodata"}
          </button>
        </form>

        <p className="text-xs text-muted text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-saffron font-semibold hover:underline">
            Login
          </Link>
        </p>
      </div>

      <Link href="/" className="text-xs text-muted mt-8 hover:text-charcoal transition-colors">
        ← Back to Home
      </Link>
    </div>
  )
}
