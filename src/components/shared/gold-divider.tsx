import { Ornament } from "./ornament"

export function GoldDivider() {
  return (
    <div className="flex items-center gap-3 my-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <Ornament size={10} />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent via-gold/30 to-transparent" />
    </div>
  )
}
