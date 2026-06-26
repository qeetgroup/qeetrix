"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const rootVariants = cva(
  "relative inline-flex rounded-lg bg-muted p-1 text-muted-foreground",
  {
    variants: {
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-10 text-sm",
      },
      fullWidth: { true: "flex w-full", false: "" },
      orientation: { horizontal: "flex-row", vertical: "flex-col" },
    },
    defaultVariants: { size: "md", fullWidth: false, orientation: "horizontal" },
  }
)

interface SegmentedControlContextValue {
  value: string | undefined
  setValue: (v: string) => void
  disabled?: boolean
}

const SegmentedControlContext = React.createContext<SegmentedControlContextValue | null>(null)

interface SegmentedControlProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "defaultValue">,
    VariantProps<typeof rootVariants> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
}

/**
 * Inline single-select control with an animated sliding indicator. Radio-group
 * semantics; arrow keys move between segments.
 */
function SegmentedControl({
  className,
  size,
  fullWidth,
  orientation = "horizontal",
  value,
  defaultValue,
  onValueChange,
  disabled,
  children,
  ...props
}: SegmentedControlProps) {
  const isControlled = value !== undefined
  const [internal, setInternal] = React.useState<string | undefined>(defaultValue)
  const current = isControlled ? value : internal
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [indicator, setIndicator] = React.useState<React.CSSProperties>({ opacity: 0 })

  const setValue = React.useCallback(
    (next: string) => {
      if (!isControlled) setInternal(next)
      onValueChange?.(next)
    },
    [isControlled, onValueChange]
  )

  // Position the floating indicator under the active segment.
  React.useLayoutEffect(() => {
    const root = rootRef.current
    if (!root) return
    const active = root.querySelector<HTMLElement>('[data-slot="segmented-control-item"][data-active]')
    if (!active) {
      setIndicator({ opacity: 0 })
      return
    }
    const vertical = orientation === "vertical"
    setIndicator({
      opacity: 1,
      transform: vertical
        ? `translateY(${active.offsetTop - root.clientTop}px)`
        : `translateX(${active.offsetLeft - root.clientLeft}px)`,
      width: vertical ? undefined : active.offsetWidth,
      height: vertical ? active.offsetHeight : undefined,
    })
  }, [current, orientation, children])

  const ctx = React.useMemo(() => ({ value: current, setValue, disabled }), [current, setValue, disabled])

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const keys = orientation === "vertical" ? ["ArrowUp", "ArrowDown"] : ["ArrowLeft", "ArrowRight"]
    if (!keys.includes(e.key)) return
    const items = Array.from(
      e.currentTarget.querySelectorAll<HTMLElement>('[data-slot="segmented-control-item"]:not([disabled])')
    )
    const idx = items.findIndex((el) => el.getAttribute("data-active") !== null)
    const dir = e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : -1
    const next = items[(idx + dir + items.length) % items.length]
    if (next) {
      e.preventDefault()
      next.focus()
      next.click()
    }
  }

  return (
    <SegmentedControlContext.Provider value={ctx}>
      <div
        ref={rootRef}
        data-slot="segmented-control"
        role="radiogroup"
        aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
        onKeyDown={onKeyDown}
        className={cn(rootVariants({ size, fullWidth, orientation }), className)}
        {...props}
      >
        <span
          aria-hidden
          data-slot="segmented-control-indicator"
          className="absolute inset-y-1 start-1 rounded-md bg-background shadow-sm ring-1 ring-foreground/5 transition-[transform,width,height] duration-200 ease-out motion-reduce:transition-none dark:bg-input/40"
          style={indicator}
        />
        {children}
      </div>
    </SegmentedControlContext.Provider>
  )
}

interface SegmentedControlItemProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value"> {
  value: string
}

function SegmentedControlItem({
  className,
  value,
  disabled,
  children,
  ...props
}: SegmentedControlItemProps) {
  const ctx = React.useContext(SegmentedControlContext)
  const active = ctx?.value === value
  const isDisabled = disabled || ctx?.disabled

  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      data-slot="segmented-control-item"
      data-active={active || undefined}
      disabled={isDisabled}
      tabIndex={active ? 0 : -1}
      onClick={() => ctx?.setValue(value)}
      className={cn(
        "relative z-10 inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-3 font-medium whitespace-nowrap outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-active:text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export { SegmentedControl, SegmentedControlItem }
export type { SegmentedControlProps, SegmentedControlItemProps }
