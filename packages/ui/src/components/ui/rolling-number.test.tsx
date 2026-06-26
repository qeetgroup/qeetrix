import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { RollingNumber } from "@/components/ui/rolling-number"

describe("RollingNumber", () => {
  it("renders the formatted value", () => {
    render(<RollingNumber value={1234} locale="en-US" />)
    expect(screen.getByText("1,234")).toBeInTheDocument()
  })

  it("exposes a polite live region", () => {
    render(<RollingNumber value={5} />)
    expect(screen.getByText("5")).toHaveAttribute("aria-live", "polite")
  })
})
