"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { getSession, logoutUser } from "@/lib/auth"
import { Logo } from "@/components/shared/logo"
import Link from "next/link"

export default function DashboardPage() {
  const router = useRouter()
  const [session, setSession] = useState<{ name: string; email: string } | null>(null)

  useEffect(() => {
    const s = getSession()
    if (!s) {
      router.push("/login")
    } else {
      setSession(s)
    }
  }, [router])

  const handleLogout = () => {
    logoutUser()
    router.push("/")
  }

  if (!session) return null

  return (
    <div className="min-h-screen bg-cream">
      <nav className="bg-white border-b border-gold/15 px-6 md:px-12 py-4 flex items-center justify-between">
        <Link href="/"><Logo size={12} /></Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-charcoal/70 font-medium">{session.name}</span>
          <button
            onClick={handleLogout}
            className="text-xs text-muted hover:text-saffron font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="font-serif text-3xl font-bold text-charcoal">
            Welcome, {session.name.split(" ")[0]} 👋
          </h1>
        </div>
        <p className="text-sm text-muted mb-10">Manage your biodata and wedding planning.</p>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-white border border-gold/30 rounded-2xl p-6">
            <div className="text-2xl mb-3">💍</div>
            <h2 className="font-serif text-lg font-bold text-charcoal mb-2">My Biodata</h2>
            <p className="text-xs text-muted mb-4">Create and manage your premium biodata profile.</p>
            <button className="rounded-full bg-saffron text-white text-sm font-semibold px-5 py-2.5 hover:bg-saffron-dark transition-all">
              Create Biodata →
            </button>
          </div>

          <div className="bg-white border border-gold/30 rounded-2xl p-6">
            <div className="text-2xl mb-3">🎊</div>
            <h2 className="font-serif text-lg font-bold text-charcoal mb-2">Wedding Planner</h2>
            <p className="text-xs text-muted mb-4">Plan your wedding — guests, menu, timeline.</p>
            <button className="rounded-full bg-saffron text-white text-sm font-semibold px-5 py-2.5 hover:bg-saffron-dark transition-all">
              Open Planner →
            </button>
          </div>

          <div className="bg-white border border-gold/30 rounded-2xl p-6">
            <div className="text-2xl mb-3">👁️</div>
            <h2 className="font-serif text-lg font-bold text-charcoal mb-2">Profile Views</h2>
            <p className="text-xs text-muted mb-4">See who&apos;s viewed your biodata.</p>
            <div className="font-serif text-3xl font-bold text-saffron">0</div>
          </div>

          <div className="bg-gradient-saffron rounded-2xl p-6 text-white">
            <div className="text-2xl mb-3">🔗</div>
            <h2 className="font-serif text-lg font-bold mb-2">Your Profile Link</h2>
            <p className="text-xs text-white/70 mb-3">Share this with family and prospects.</p>
            <div className="bg-white/15 rounded-xl px-4 py-2.5 text-sm font-mono text-white/90 truncate">
              vivahlipi.in/{session.name.toLowerCase().replace(/\s+/g, "-")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
