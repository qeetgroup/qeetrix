import * as React from "react"

import { cn } from "@/lib/utils"

interface FeedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Marks the feed busy (e.g. while loading more) for assistive tech. */
  busy?: boolean
  "aria-label"?: string
  /** Class applied to each auto-wrapped `<article>`. */
  itemClassName?: string
}

/**
 * APG Feed pattern: an `aria-live` scrollable list of articles (activity streams,
 * audit timelines, notification feeds). Each direct child is wrapped in a focusable
 * `role=article` with `aria-posinset` / `aria-setsize`. The generic primitive under
 * `NotificationCenter`.
 */
function Feed({ busy, className, children, "aria-label": ariaLabel, itemClassName, ...props }: FeedProps) {
  const items = React.Children.toArray(children)
  return (
    <div
      role="feed"
      aria-busy={busy || undefined}
      aria-label={ariaLabel}
      data-slot="feed"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      {items.map((child, i) => (
        <article
          key={i}
          data-slot="feed-item"
          aria-posinset={i + 1}
          aria-setsize={items.length}
          tabIndex={0}
          className={cn(
            "rounded-lg border border-border bg-card p-4 text-card-foreground shadow-rest transition-shadow outline-none hover:shadow-hover focus-visible:ring-3 focus-visible:ring-ring/50",
            itemClassName
          )}
        >
          {child}
        </article>
      ))}
    </div>
  )
}

export { Feed }
export type { FeedProps }
