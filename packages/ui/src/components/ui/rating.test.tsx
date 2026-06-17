import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { Rating } from "@/components/ui/rating"

describe("Rating", () => {
  it("renders read-only as a labelled image", () => {
    render(<Rating value={3} readOnly />)
    expect(screen.getByRole("img")).toHaveAccessibleName("Rating: 3 of 5")
  })

  it("exposes slider semantics when interactive", () => {
    render(<Rating value={2} onChange={() => {}} />)
    const slider = screen.getByRole("slider")
    expect(slider).toHaveAttribute("aria-valuenow", "2")
    expect(slider).toHaveAttribute("aria-valuemax", "5")
  })

  it("calls onChange with the clicked star value", () => {
    const onChange = vi.fn()
    render(<Rating value={0} onChange={onChange} />)
    fireEvent.click(screen.getByRole("button", { name: "3 of 5" }))
    expect(onChange).toHaveBeenCalledWith(3)
  })

  it("steps with arrow keys", () => {
    const onChange = vi.fn()
    render(<Rating value={2} onChange={onChange} />)
    fireEvent.keyDown(screen.getByRole("slider"), { key: "ArrowRight" })
    expect(onChange).toHaveBeenCalledWith(3)
  })
})
