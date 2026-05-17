"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Ornament } from "@/components/shared/ornament"

interface ProfileData {
  name: string
  age: string
  location: string
  religion: string
  image: string
  personal: Record<string, string>
  career: Record<string, string>
  family: Record<string, string>
}

const defaultProfile: ProfileData = {
  name: "Priya Sharma",
  age: "26",
  location: "Delhi, India",
  religion: "Hindu · Brahmin",
  image:
    "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&h=600&fit=crop&crop=face",
  personal: {
    Religion: "Hindu",
    Caste: "Brahmin",
    Height: "5ft 5in",
    Complexion: "Fair",
    Manglik: "No",
  },
  career: {
    Profession: "Software Engineer",
    Company: "Tech Corp India",
    Income: "₹18 LPA",
    Education: "B.Tech – IIT Delhi",
  },
  family: {
    Father: "Rajesh Sharma (Retd. IAS)",
    Mother: "Sunita Sharma",
    Siblings: "1 elder brother (married)",
    "Family Type": "Nuclear · Upper middle class",
  },
}

interface ProfileCardProps {
  data?: ProfileData
  username?: string
}

const WA_SHARE_TEXT = encodeURIComponent(
  "Check out my premium wedding biodata on VivahLipi! https://vivahlipi.in"
)

export function ProfileCard({ data = defaultProfile, username }: ProfileCardProps) {
  const sections = [
    { title: "Personal", rows: Object.entries(data.personal) },
    { title: "Career", rows: Object.entries(data.career) },
    { title: "Family", rows: Object.entries(data.family) },
  ]

  const handleWhatsApp = () => window.open(`https://wa.me/?text=${WA_SHARE_TEXT}`, "_blank")

  const handleCopyProfileLink = () => {
    const link = username ? `https://vivahlipi.in/${username}` : "https://vivahlipi.in"
    navigator.clipboard.writeText(link).then(() => alert("Profile link copied!"))
  }

  return (
    <div className="font-sans bg-cream min-h-screen relative">
      <div className="h-[300px] relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${data.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/30 to-[#120803]/95" />
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-saffron via-gold to-saffron" />

        <div className="absolute bottom-0 left-0 right-0 p-6 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight">
              {data.name}
            </h1>
            <div className="flex flex-wrap gap-3 items-center">
              <span className="bg-gold/80 text-charcoal text-xs font-bold px-3.5 py-1.5 rounded-full">
                {data.age} Years
              </span>
              <span className="text-white/80 text-sm">📍 {data.location}</span>
              <span className="bg-saffron/80 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full">
                {data.religion}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="px-5 py-6 max-w-lg mx-auto flex flex-col gap-4">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * i }}
            className="bg-white border border-gold/40 rounded-2xl overflow-hidden"
          >
            <div className="px-5 py-3 border-b border-gold/15 flex items-center gap-2.5">
              <Ornament color="#D4AF37" size={11} />
              <span className="text-[11px] font-bold tracking-widest uppercase text-saffron">
                {section.title}
              </span>
            </div>
            <div className="px-5 py-4 space-y-3.5">
              {section.rows.map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-start gap-4"
                >
                  <span className="text-sm text-muted flex-shrink-0">{key}</span>
                  <span className="text-sm font-medium text-charcoal text-right">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-saffron rounded-2xl p-6 text-center relative overflow-hidden cursor-pointer"
          onClick={handleCopyProfileLink}
        >
          <div className="absolute -right-5 -bottom-5 opacity-10 pointer-events-none">
            <Ornament color="#D4AF37" size={90} />
          </div>
          <div className="text-[10px] text-white/60 font-bold tracking-widest uppercase mb-2">
            Made with
          </div>
          <div className="inline-flex items-center gap-2 mb-2">
            <Ornament color="#D4AF37" size={16} />
            <span className="font-serif text-xl font-bold text-white">
              VivahLipi
            </span>
          </div>
          <p className="text-xs text-white/65 mb-4 leading-relaxed">
            Create your own beautiful biodata
            <br />
            Share it with your family
          </p>
          <div className="inline-block bg-white rounded-full px-6 py-2.5 text-sm font-bold text-saffron">
            {username ? `vivahlipi.in/${username}` : "Create your own &rarr; vivahlipi.in"}
          </div>
        </motion.div>

        <div className="h-4" />
      </div>

      <div className="sticky bottom-4 mx-4 max-w-lg lg:mx-auto">
        <Button
          variant="wa"
          size="lg"
          className="w-full shadow-[0_10px_32px_rgba(37,211,102,0.42)]"
          onClick={handleWhatsApp}
        >
          💬 Connect on WhatsApp
        </Button>
      </div>
    </div>
  )
}
