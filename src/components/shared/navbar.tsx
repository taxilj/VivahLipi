"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Logo } from "./logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getSession, isLoggedIn, logoutUser } from "@/lib/auth"
import { useRouter } from "next/navigation"

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")

  useEffect(() => {
    setLoggedIn(isLoggedIn())
    const session = getSession()
    if (session) setUserName(session.name)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setOpen(false)
    if (href.startsWith("#")) {
      const el = document.querySelector(href)
      el?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleLogout = () => {
    logoutUser()
    setLoggedIn(false)
    setUserName("")
    router.push("/")
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-glass py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Logo size={13} link />

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                handleNavClick(l.href)
              }}
              className="text-sm text-charcoal/60 hover:text-charcoal font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          {loggedIn ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-charcoal/80 font-medium hover:text-saffron transition-colors"
              >
                {userName}
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm text-muted hover:text-saffron font-medium transition-colors"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-saffron font-semibold hover:text-saffron-dark transition-colors"
              >
                Login
              </Link>
              <Link href="/signup" passHref legacyBehavior>
                <Button asChild size="md">
                  <a>Create Biodata</a>
                </Button>
              </Link>
            </>
          )}
        </div>

        <button
          className="md:hidden text-charcoal p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-gold/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(l.href)
                  }}
                  className="text-sm text-charcoal/70 hover:text-charcoal font-medium py-2"
                >
                  {l.label}
                </a>
              ))}
              {loggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="text-sm font-semibold text-saffron py-2"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setOpen(false) }}
                    className="text-sm text-muted text-left py-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="text-sm text-saffron font-semibold py-2"
                    onClick={() => setOpen(false)}
                  >
                    Login
                  </Link>
                  <Link href="/signup" passHref legacyBehavior>
                    <Button asChild size="lg" className="w-full">
                      <a onClick={() => setOpen(false)}>Create Biodata</a>
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
