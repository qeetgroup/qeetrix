"use client"

import * as React from "react"
import { XIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface TagInputProps
  extends Omit<
    React.ComponentProps<"input">,
    "value" | "onChange" | "size"
  > {
  /** Current tags (controlled). */
  value: string[]
  /** Called with the next tag list whenever a tag is added or removed. */
  onChange: (next: string[]) => void
  /** Also commit the current text when a comma is typed. Defaults to `true`. */
  addOnComma?: boolean
  /** Reject case-insensitive duplicates. Defaults to `true`. */
  dedupe?: boolean
  /** Hard cap on the number of tags. */
  maxTags?: number
  /**
   * Validate/normalise a candidate tag before it is added. Return the
   * cleaned string to accept, or `null`/empty to reject silently.
   */
  validate?: (tag: string) => string | null
  disabled?: boolean
  className?: string
}

/**
 * Free-form chips input: type and press Enter (or comma) to add a tag,
 * Backspace on an empty field to remove the last one. Controlled — the parent
 * owns the `string[]`. For a fixed option set, prefer `MultiSelect`.
 */
function TagInput({
  value,
  onChange,
  addOnComma = true,
  dedupe = true,
  maxTags,
  validate,
  disabled,
  className,
  onKeyDown,
  onBlur,
  ...props
}: TagInputProps) {
  const [draft, setDraft] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  function addTag(raw: string) {
    let tag = raw.trim()
    if (!tag) return
    if (validate) {
      const cleaned = validate(tag)
      if (!cleaned) return
      tag = cleaned
    }
    if (dedupe && value.some((t) => t.toLowerCase() === tag.toLowerCase())) {
      setDraft("")
      return
    }
    if (maxTags != null && value.length >= maxTags) return
    onChange([...value, tag])
    setDraft("")
  }

  function removeAt(index: number) {
    onChange(value.filter((_, i) => i !== index))
  }

  return (
    <div
      data-slot="tag-input"
      data-disabled={disabled || undefined}
      onClick={() => inputRef.current?.focus()}
      className={cn(
        "flex min-h-8 w-full flex-wrap items-center gap-1 rounded-lg border border-input bg-transparent px-1.5 py-1 text-sm transition-colors focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/50 dark:bg-input/30",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className,
      )}
    >
      {value.map((tag, i) => (
        <Badge key={`${tag}-${i}`} variant="secondary" className="gap-1 pe-1">
          <span className="truncate">{tag}</span>
          <button
            type="button"
            tabIndex={-1}
            aria-label={`Remove ${tag}`}
            className="-me-0.5 inline-flex size-3.5 items-center justify-center rounded-sm text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
            onClick={(e) => {
              e.stopPropagation()
              removeAt(i)
            }}
          >
            <XIcon className="size-3" />
          </button>
        </Badge>
      ))}
      <input
        ref={inputRef}
        data-slot="tag-input-field"
        value={draft}
        disabled={disabled}
        className="h-6 min-w-24 flex-1 bg-transparent px-1 text-base outline-none placeholder:text-muted-foreground md:text-sm"
        onChange={(e) => {
          const next = e.target.value
          if (addOnComma && next.includes(",")) {
            next.split(",").forEach(addTag)
          } else {
            setDraft(next)
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault()
            addTag(draft)
          } else if (e.key === "Backspace" && draft === "" && value.length > 0) {
            removeAt(value.length - 1)
          }
          onKeyDown?.(e)
        }}
        onBlur={(e) => {
          addTag(draft)
          onBlur?.(e)
        }}
        {...props}
      />
    </div>
  )
}

export { TagInput }
export type { TagInputProps }
