"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Form is a deliberately library-agnostic wrapper: a styled `<form>` with
 * sensible vertical rhythm, plus `FormActions` for the footer button row.
 * It composes with the existing Field family (`FieldGroup`, `Field`,
 * `FieldLabel`, `FieldError`, …) for layout and validation display, and
 * works with any form library (TanStack Form, React Hook Form) or none —
 * you own the state/validation; the design system owns the look.
 */
function Form({ className, ...props }: React.ComponentProps<"form">) {
  return (
    <form
      data-slot="form"
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  )
}

function FormActions({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="form-actions"
      className={cn(
        "flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  )
}

export { Form, FormActions }
