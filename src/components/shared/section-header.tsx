"use client"

import { motion } from "framer-motion"
import { GoldDivider } from "./gold-divider"

interface SectionHeaderProps {
  eyebrow?: string
  title: React.ReactNode
  description?: string
  center?: boolean
  className?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  className = "",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`${center ? "text-center" : ""} mb-14 ${className}`}
    >
      {eyebrow && (
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gold">
            {eyebrow}
          </span>
          <div className="h-px w-8 bg-gold/60" />
        </div>
      )}
      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
      <GoldDivider />
    </motion.div>
  )
}
