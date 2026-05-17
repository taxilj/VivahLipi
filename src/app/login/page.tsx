import Link from "next/link"
import { Ornament } from "@/components/shared/ornament"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center px-6 py-20">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
            <Ornament color="#ab3500" size={16} />
            <span className="font-serif text-2xl font-bold text-saffron">VivahLipi</span>
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-charcoal mb-2">
            Welcome Back
          </h1>
          <p className="text-muted text-sm">Sign in to your account</p>
        </div>

        <div className="glass-card p-8 md:p-10 space-y-6">
          <div className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-charcoal/70 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full h-12 px-4 rounded-xl border border-gold/20 bg-white/60 text-charcoal text-sm placeholder:text-muted/30 focus:outline-none focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-wide uppercase text-charcoal/70 mb-1.5">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full h-12 px-4 rounded-xl border border-gold/20 bg-white/60 text-charcoal text-sm placeholder:text-muted/30 focus:outline-none focus:border-saffron/50 focus:ring-2 focus:ring-saffron/10 transition-all"
              />
            </div>
          </div>

          <button className="w-full h-12 rounded-full bg-saffron text-white font-semibold text-sm hover:bg-saffron-dark transition-all shadow-[0_12px_36px_rgba(171,53,0,0.25)] hover:shadow-[0_16px_48px_rgba(171,53,0,0.35)] hover:-translate-y-0.5 active:translate-y-0">
            Login
          </button>

          <p className="text-center text-xs text-muted">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-saffron font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="text-xs text-muted hover:text-charcoal transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
