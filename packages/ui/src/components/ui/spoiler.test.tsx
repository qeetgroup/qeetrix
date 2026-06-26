import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { Spoiler } from "@/components/ui/spoiler"

describe("Spoiler", () => {
  it("toggles expanded state and label", () => {
    render(
      <Spoiler maxLines={2}>
        <p>Long content that would be clamped to two lines until expanded.</p>
      </Spoiler>,
    )
    const toggle = screen.getByRole("button", { name: "Show more" })
    expect(toggle).toHaveAttribute("aria-expanded", "false")
    fireEvent.click(toggle)
    expect(screen.getByRole("button", { name: "Show less" })).toHaveAttribute(
      "aria-expanded",
      "true",
    )
  })
})
