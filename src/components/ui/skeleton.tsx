import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("fx-animate-pulse fx-rounded-md fx-bg-muted", className)}
      {...props}
    />
  )
}

export { Skeleton }
