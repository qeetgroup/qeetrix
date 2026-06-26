import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { NumberFormatter } from "@/components/ui/number-formatter"

describe("NumberFormatter", () => {
  it("formats with locale grouping", () => {
    render(<NumberFormatter value={1234567} locale="en-US" />)
    expect(screen.getByText("1,234,567")).toBeInTheDocument()
  })

  it("supports compact notation", () => {
    render(<NumberFormatter value={1500000} locale="en-US" notation="compact" />)
    expect(screen.getByText("1.5M")).toBeInTheDocument()
  })

  it("renders prefix and suffix around the value", () => {
    render(<NumberFormatter value={42} prefix="$" suffix="/mo" locale="en-US" />)
    expect(screen.getByText(/\$/)).toHaveTextContent("$42/mo")
  })
})
