import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-white hover:bg-primary-dark",
        secondary: "border-transparent bg-secondary text-white hover:bg-secondary/90",
        tertiary: "border-transparent bg-tertiary text-white hover:bg-tertiary/90",
        outline: "border-neutral text-foreground bg-background",
        success: "border-transparent bg-success text-white hover:bg-success/90",
        error: "border-transparent bg-error text-white hover:bg-error/90",
        warning: "border-transparent bg-warning text-foreground hover:bg-warning/90",
        info: "border-transparent bg-info text-white hover:bg-info/90",
        pending: "border-transparent bg-pending text-white hover:bg-pending/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
