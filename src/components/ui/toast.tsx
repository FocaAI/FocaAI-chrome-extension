import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fx-fixed fx-top-0 fx-z-[100] fx-flex fx-max-h-screen fx-w-full fx-flex-col-reverse fx-p-4 sm:fx-bottom-0 sm:fx-right-0 sm:fx-top-auto sm:fx-flex-col md:fx-max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "fx-group fx-pointer-events-auto fx-relative fx-flex fx-w-full fx-items-center fx-justify-between fx-space-x-4 fx-overflow-hidden fx-rounded-md fx-border fx-p-6 fx-pr-8 fx-shadow-lg fx-transition-all data-[swipe=cancel]:fx-translate-x-0 data-[swipe=end]:fx-translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:fx-translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:fx-transition-none data-[state=open]:fx-animate-in data-[state=closed]:fx-animate-out data-[swipe=end]:fx-animate-out data-[state=closed]:fx-fade-out-80 data-[state=closed]:fx-slide-out-to-right-full data-[state=open]:fx-slide-in-from-top-full data-[state=open]:sm:fx-slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "fx-border fx-bg-background fx-text-foreground",
        destructive:
          "fx-destructive fx-group fx-border-destructive fx-bg-destructive fx-text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "fx-inline-flex fx-h-8 fx-shrink-0 fx-items-center fx-justify-center fx-rounded-md fx-border fx-bg-transparent fx-px-3 fx-text-sm fx-font-medium fx-ring-offset-background fx-transition-colors hover:fx-bg-secondary focus:fx-outline-none focus:fx-ring-2 focus:fx-ring-ring focus:fx-ring-offset-2 disabled:fx-pointer-events-none disabled:fx-opacity-50 group-[.destructive]:fx-border-muted/40 group-[.destructive]:hover:fx-border-destructive/30 group-[.destructive]:hover:fx-bg-destructive group-[.destructive]:hover:fx-text-destructive-foreground group-[.destructive]:focus:fx-ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "fx-absolute fx-right-2 fx-top-2 fx-rounded-md fx-p-1 fx-text-foreground/50 fx-opacity-0 fx-transition-opacity hover:fx-text-foreground focus:fx-opacity-100 focus:fx-outline-none focus:fx-ring-2 group-hover:fx-opacity-100 group-[.destructive]:fx-text-red-300 group-[.destructive]:hover:fx-text-red-50 group-[.destructive]:focus:fx-ring-red-400 group-[.destructive]:focus:fx-ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="fx-h-4 fx-w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("fx-text-sm fx-font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("fx-text-sm fx-opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
