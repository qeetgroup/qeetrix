import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { CurrencyInput } from "@/components/ui/currency-input"

describe("CurrencyInput", () => {
  it("renders the locale currency symbol", () => {
    render(<CurrencyInput aria-label="Amount" currency="INR" locale="en-IN" />)
    expect(screen.getByText("₹")).toBeInTheDocument()
  })

  it("emits a number on input", () => {
    const onValueChange = vi.fn()
    render(<CurrencyInput aria-label="Amount" onValueChange={onValueChange} />)
    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: "1500" } })
    expect(onValueChange).toHaveBeenCalledWith(1500)
  })

  it("rejects non-numeric input", () => {
    const onValueChange = vi.fn()
    render(<CurrencyInput aria-label="Amount" onValueChange={onValueChange} />)
    fireEvent.change(screen.getByLabelText("Amount"), { target: { value: "abc" } })
    expect(onValueChange).not.toHaveBeenCalled()
  })
})
