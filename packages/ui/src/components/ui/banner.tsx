"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { XIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const bannerVariants = cva("flex w-full items-center gap-3 px-4 py-2.5 text-sm", {
  variants: {
    variant: {
      default: "bg-foreground text-background",
      info: "bg-info text-info-foreground",
      success: "bg-success text-success-foreground",
      warning: "bg-warning text-warning-foreground",
      danger: "bg-destructive text-destructive-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

interface BannerProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof bannerVariants> {
  /** When provided, renders a trailing dismiss button that calls this. */
  onDismiss?: () => void
}

/**
 * App-wide announcement bar (maintenance notices, plan limits, new features).
 * Full-width, intent-coloured, optionally dismissible. Render links inside —
 * they're underlined automatically.
 */
function Banner({
  className,
  variant,
  onDismiss,
  children,
  ...props
}: BannerProps) {
  return (
    <div
      data-slot="banner"
      role="region"
      className={cn(bannerVariants({ variant }), className)}
      {...props}
    >
      <div className="flex flex-1 items-center justify-center gap-2 text-center [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-4">
        {children}
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss"
          className="-me-1 inline-flex size-7 shrink-0 items-center justify-center rounded-md opacity-80 transition-opacity hover:opacity-100"
        >
          <XIcon className="size-4" />
        </button>
      )}
    </div>
  )
}

export { Banner, bannerVariants }
export type { BannerProps }
