"use client"

import { useState } from "react"
import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      window.location.href = "/dashboard"
    }, 800)
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
        <h1 className="font-serif text-2xl font-bold text-charcoal mb-1 text-center">Welcome Back</h1>
        <p className="text-sm text-muted text-center mb-8">Login to your VivahLipi account</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-xs font-semibold text-charcoal mb-1.5 tracking-wide">Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 border border-gold/30 rounded-xl text-sm text-charcoal bg-white focus:border-gold focus:ring-1 focus:ring-gold/30 outline-none transition-all" />
          </div>
          <div className="flex justify-end">
            <a href="#" onClick={(e) => { e.preventDefault(); alert("Reset link sent to your email!") }}
              className="text-xs text-saffron font-semibold hover:underline">
              Forgot password?
            </a>
          </div>
          <button type="submit" disabled={loading}
            className="w-full mt-1 rounded-full bg-saffron text-white font-semibold py-3.5 text-sm hover:bg-saffron-dark transition-all shadow-[0_10px_28px_rgba(171,53,0,0.25)] disabled:opacity-60">
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        <p className="text-xs text-muted text-center mt-6">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-saffron font-semibold hover:underline">Sign up</Link>
        </p>
      </div>

      <Link href="/" className="text-xs text-muted mt-8 hover:text-charcoal transition-colors">
        ← Back to Home
      </Link>
    </div>
  )
}
