import { Ornament } from "./ornament"
import Link from "next/link"

interface LogoProps {
  size?: number
  link?: boolean
}

export function Logo({ size = 14, link = false }: LogoProps) {
  const content = (
    <div className="inline-flex items-center gap-2">
      <Ornament color="#ab3500" size={size} />
      <span
        className="font-serif font-bold tracking-tight text-saffron"
        style={{ fontSize: size * 1.5 }}
      >
        VivahLipi
      </span>
    </div>
  )

  if (link) {
    return <Link href="/">{content}</Link>
  }

  return content
}
