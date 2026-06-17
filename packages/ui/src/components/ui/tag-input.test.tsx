import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"

import { TagInput } from "@/components/ui/tag-input"

describe("TagInput", () => {
  it("adds a tag on Enter", () => {
    const onChange = vi.fn()
    render(<TagInput value={["a"]} onChange={onChange} />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "b" } })
    fireEvent.keyDown(input, { key: "Enter" })
    expect(onChange).toHaveBeenCalledWith(["a", "b"])
  })

  it("rejects case-insensitive duplicates", () => {
    const onChange = vi.fn()
    render(<TagInput value={["Design"]} onChange={onChange} />)
    const input = screen.getByRole("textbox")
    fireEvent.change(input, { target: { value: "design" } })
    fireEvent.keyDown(input, { key: "Enter" })
    expect(onChange).not.toHaveBeenCalled()
  })

  it("removes the last tag on Backspace when the field is empty", () => {
    const onChange = vi.fn()
    render(<TagInput value={["a", "b"]} onChange={onChange} />)
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Backspace" })
    expect(onChange).toHaveBeenCalledWith(["a"])
  })

  it("removes a tag via its remove button", () => {
    const onChange = vi.fn()
    render(<TagInput value={["a", "b"]} onChange={onChange} />)
    fireEvent.click(screen.getByLabelText("Remove a"))
    expect(onChange).toHaveBeenCalledWith(["b"])
  })
})
