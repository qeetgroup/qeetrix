import * as React from "react"

import { cn } from "@/lib/utils"

interface HighlightProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The full text to render. */
  children: string
  /** Substring(s) to emphasise. */
  query: string | string[]
  caseSensitive?: boolean
  /** Class applied to each `<mark>`. */
  markClassName?: string
}

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/** Wraps matched substrings of `children` in `<mark>` — for search-result emphasis. */
function Highlight({ children, query, caseSensitive = false, markClassName, className, ...props }: HighlightProps) {
  const terms = (Array.isArray(query) ? query : [query]).filter(Boolean).map(escapeRegExp)

  if (terms.length === 0) {
    return (
      <span data-slot="highlight" className={className} {...props}>
        {children}
      </span>
    )
  }

  // Capturing group → split alternates [text, match, text, match, …]; odd indices are matches.
  const re = new RegExp(`(${terms.join("|")})`, caseSensitive ? "g" : "gi")
  const parts = children.split(re)

  return (
    <span data-slot="highlight" className={className} {...props}>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className={cn("rounded-sm bg-primary/15 text-foreground", markClassName)}>
            {part}
          </mark>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </span>
  )
}

export { Highlight }
export type { HighlightProps }
