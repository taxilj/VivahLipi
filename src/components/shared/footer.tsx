import { Ornament } from "./ornament"

const footerLinks = [
  {
    title: "Product",
    links: ["Biodata", "Wedding Planner", "Pricing", "Templates"],
  },
  {
    title: "Company",
    links: ["About Us", "Blog", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Centre", "WhatsApp", "Privacy Policy"],
  },
]

export function Footer() {
  return (
    <footer className="bg-charcoal px-6 md:px-12 py-14 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Ornament color="#D4AF37" size={18} />
              <span className="font-serif text-xl md:text-2xl font-bold text-white">
                VivahLipi
              </span>
            </div>
            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              India&apos;s most elegant all-in-one wedding platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 md:gap-16">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gold mb-5">
                  {group.title}
                </div>
                <div className="space-y-3">
                  {group.links.map((link) => (
                    <div
                      key={link}
                      className="text-sm text-white/50 hover:text-white/80 cursor-pointer transition-colors"
                    >
                      {link}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/35">
          <span>© 2026 VivahLipi. Made with ❤️ in India.</span>
          <span className="text-gold/70">vivahlipi.in</span>
        </div>
      </div>
    </footer>
  )
}
