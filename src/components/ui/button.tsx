import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "fx-inline-flex fx-items-center fx-justify-center fx-gap-2 fx-whitespace-nowrap fx-rounded-md fx-text-sm fx-font-medium fx-ring-offset-background fx-transition-colors focus-visible:fx-outline-none focus-visible:fx-ring-2 focus-visible:fx-ring-ring focus-visible:fx-ring-offset-2 disabled:fx-pointer-events-none disabled:fx-opacity-50 [&_svg]:fx-pointer-events-none [&_svg]:fx-size-4 [&_svg]:fx-shrink-0",
  {
    variants: {
      variant: {
        default: "fx-bg-primary fx-text-primary-foreground hover:fx-bg-primary/90",
        destructive:
          "fx-bg-destructive fx-text-destructive-foreground hover:fx-bg-destructive/90",
        outline:
          "fx-border fx-border-input fx-bg-background hover:fx-bg-accent hover:fx-text-accent-foreground",
        secondary:
          "fx-bg-secondary fx-text-secondary-foreground hover:fx-bg-secondary/80",
        ghost: "hover:fx-bg-accent hover:fx-text-accent-foreground",
        link: "fx-text-primary fx-underline-offset-4 hover:fx-underline",
      },
      size: {
        default: "fx-h-10 fx-px-4 fx-py-2",
        sm: "fx-h-9 fx-rounded-md fx-px-3",
        lg: "fx-h-11 fx-rounded-md fx-px-8",
        icon: "fx-h-10 fx-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
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
