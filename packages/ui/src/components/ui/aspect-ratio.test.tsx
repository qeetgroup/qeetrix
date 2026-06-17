import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { AspectRatio } from "@/components/ui/aspect-ratio"

describe("AspectRatio", () => {
  it("applies the ratio as an inline aspect-ratio style", () => {
    render(
      <AspectRatio ratio={16 / 9} data-testid="ar">
        <span>media</span>
      </AspectRatio>,
    )
    // jsdom normalises `aspect-ratio: 1.77…` to `"1.77… / 1"`, so compare the ratio.
    expect(parseFloat(screen.getByTestId("ar").style.aspectRatio)).toBeCloseTo(16 / 9)
  })

  it("defaults to a square and merges className", () => {
    render(
      <AspectRatio data-testid="ar" className="rounded-md">
        <span>media</span>
      </AspectRatio>,
    )
    const el = screen.getByTestId("ar")
    expect(parseFloat(el.style.aspectRatio)).toBe(1)
    expect(el).toHaveClass("rounded-md")
  })
})
