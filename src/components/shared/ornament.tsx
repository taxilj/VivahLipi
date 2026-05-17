interface OrnamentProps {
  color?: string
  size?: number
  className?: string
}

export function Ornament({ color = "#D4AF37", size = 14, className }: OrnamentProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      style={{ flexShrink: 0 }}
    >
      <path
        d="M7 0 L7.8 5.5 L13 5.5 L8.7 8.5 L10.3 14 L7 10.8 L3.7 14 L5.3 8.5 L1 5.5 L6.2 5.5 Z"
        fill={color}
      />
    </svg>
  )
}
