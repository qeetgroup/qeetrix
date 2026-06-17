"use client"

import * as React from "react"
import { Meter as MeterPrimitive } from "@base-ui/react/meter"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const meterIndicatorVariants = cva(
  "h-full rounded-full transition-all duration-300 ease-out",
  {
    variants: {
      intent: {
        default: "bg-primary",
        success: "bg-emerald-500",
        warning: "bg-amber-500",
        danger: "bg-rose-500",
      },
    },
    defaultVariants: {
      intent: "default",
    },
  }
)

interface MeterProps
  extends MeterPrimitive.Root.Props,
    VariantProps<typeof meterIndicatorVariants> {
  /** Caption shown above the track (left side). */
  label?: React.ReactNode
  /** Hide the formatted numeric value in the header row. */
  hideValue?: boolean
}

/**
 * A quota / usage gauge — like Progress, but semantically a measurement within
 * a known range (storage used, seats consumed). Pass `format` for units, e.g.
 * `format={{ style: "percent" }}` or a byte format, and `intent` to colour it.
 */
function Meter({
  className,
  intent,
  label,
  hideValue,
  ...props
}: MeterProps) {
  const showHeader = label != null || !hideValue
  return (
    <MeterPrimitive.Root
      data-slot="meter"
      className={cn("flex w-full flex-col gap-1.5", className)}
      {...props}
    >
      {showHeader && (
        <div className="flex items-center justify-between gap-2 text-sm">
          {label != null ? (
            <MeterPrimitive.Label className="font-medium text-foreground">
              {label}
            </MeterPrimitive.Label>
          ) : (
            <span />
          )}
          {!hideValue && (
            <MeterPrimitive.Value className="tabular-nums text-muted-foreground" />
          )}
        </div>
      )}
      <MeterPrimitive.Track
        data-slot="meter-track"
        className="relative h-2 w-full overflow-hidden rounded-full bg-muted"
      >
        <MeterPrimitive.Indicator
          data-slot="meter-indicator"
          className={cn(meterIndicatorVariants({ intent }))}
        />
      </MeterPrimitive.Track>
    </MeterPrimitive.Root>
  )
}

export { Meter, meterIndicatorVariants }
export type { MeterProps }
