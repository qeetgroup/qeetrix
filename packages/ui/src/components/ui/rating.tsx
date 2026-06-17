"use client"

import * as React from "react"
import { StarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

interface RatingProps
  extends Omit<React.ComponentProps<"div">, "onChange"> {
  /** Current rating. Supports halves (e.g. `3.5`) when `allowHalf`. */
  value: number
  /** Provide to make the rating interactive. Omit (or set `readOnly`) for display only. */
  onChange?: (value: number) => void
  /** Number of icons. Defaults to `5`. */
  max?: number
  /** Allow half-icon precision on click and keyboard. */
  allowHalf?: boolean
  readOnly?: boolean
  disabled?: boolean
  size?: "sm" | "default" | "lg"
  /** Swap the star for any lucide-style icon (e.g. `HeartIcon`). */
  icon?: React.ComponentType<{ className?: string }>
}

const sizeClasses = {
  sm: "size-3.5",
  default: "size-5",
  lg: "size-7",
} as const

/**
 * Star (or custom icon) rating. Interactive when `onChange` is supplied:
 * click an icon to set the value, or focus and use arrow keys. Renders as a
 * read-only `img` otherwise. Half values are supported via `allowHalf`.
 */
function Rating({
  value,
  onChange,
  max = 5,
  allowHalf = false,
  readOnly,
  disabled,
  size = "default",
  icon: Icon = StarIcon,
  className,
  "aria-label": ariaLabel,
  ...props
}: RatingProps) {
  const interactive = !!onChange && !readOnly && !disabled
  const [hover, setHover] = React.useState<number | null>(null)
  const display = hover ?? value
  const step = allowHalf ? 0.5 : 1
  const iconSize = sizeClasses[size]

  function commit(next: number) {
    onChange?.(Math.max(0, Math.min(max, next)))
  }

  function valueFromPointer(index: number, e: React.MouseEvent<HTMLElement>) {
    if (!allowHalf) return index + 1
    const { left, width } = e.currentTarget.getBoundingClientRect()
    return e.clientX - left < width / 2 ? index + 0.5 : index + 1
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (!interactive) return
    switch (e.key) {
      case "ArrowRight":
      case "ArrowUp":
        e.preventDefault()
        commit(value + step)
        break
      case "ArrowLeft":
      case "ArrowDown":
        e.preventDefault()
        commit(value - step)
        break
      case "Home":
        e.preventDefault()
        commit(0)
        break
      case "End":
        e.preventDefault()
        commit(max)
        break
    }
  }

  return (
    <div
      data-slot="rating"
      role={interactive ? "slider" : "img"}
      aria-label={ariaLabel ?? `Rating: ${value} of ${max}`}
      aria-valuenow={interactive ? value : undefined}
      aria-valuemin={interactive ? 0 : undefined}
      aria-valuemax={interactive ? max : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setHover(null)}
      className={cn(
        "inline-flex items-center gap-0.5 outline-none",
        interactive &&
          "rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        disabled && "opacity-50",
        className,
      )}
      {...props}
    >
      {Array.from({ length: max }, (_, i) => {
        const fill = Math.max(0, Math.min(1, display - i))
        const star = (
          <span className="relative inline-flex">
            <Icon className={cn(iconSize, "text-muted-foreground/40")} />
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Icon className={cn(iconSize, "fill-amber-400 text-amber-400")} />
            </span>
          </span>
        )
        if (!interactive) return <React.Fragment key={i}>{star}</React.Fragment>
        return (
          <button
            key={i}
            type="button"
            tabIndex={-1}
            aria-label={`${i + 1} of ${max}`}
            className="inline-flex cursor-pointer"
            onClick={(e) => commit(valueFromPointer(i, e))}
            onMouseMove={(e) => setHover(valueFromPointer(i, e))}
          >
            {star}
          </button>
        )
      })}
    </div>
  )
}

export { Rating }
export type { RatingProps }
