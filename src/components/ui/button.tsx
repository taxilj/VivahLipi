import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-saffron text-white hover:bg-saffron-dark shadow-[0_12px_36px_rgba(171,53,0,0.25)] hover:shadow-[0_16px_48px_rgba(171,53,0,0.35)] hover:-translate-y-0.5 active:translate-y-0",
        secondary:
          "bg-white text-saffron border-2 border-saffron/30 hover:border-saffron/60 hover:bg-cream",
        gold:
          "bg-gold text-charcoal hover:bg-gold/90 shadow-[0_8px_24px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_32px_rgba(212,175,55,0.4)] hover:-translate-y-0.5 active:translate-y-0",
        ghost:
          "bg-transparent text-saffron border-2 border-saffron/20 hover:border-saffron/50 hover:bg-saffron/5",
        wa: "bg-wa text-white hover:bg-wa/90 shadow-[0_10px_32px_rgba(37,211,102,0.42)] hover:shadow-[0_14px_40px_rgba(37,211,102,0.5)] hover:-translate-y-0.5 active:translate-y-0",
        outline:
          "bg-transparent text-charcoal border-2 border-gold/40 hover:border-gold/70 hover:bg-gold/5",
        link: "bg-transparent text-saffron underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
