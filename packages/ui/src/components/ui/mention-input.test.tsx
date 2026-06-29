import * as React from "react"
import { describe, expect, it, vi } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import { axe } from "vitest-axe"

import { MentionInput } from "@/components/ui/mention-input"

const a11y = (c: Element) => axe(c, { rules: { "color-contrast": { enabled: false } } })

describe("MentionInput", () => {
  it("emits value changes", () => {
    const onValueChange = vi.fn()
    render(<MentionInput aria-label="Comment" value="hi" people={[]} onValueChange={onValueChange} />)
    const ta = screen.getByLabelText("Comment")
    expect(ta).toHaveValue("hi")
    fireEvent.change(ta, { target: { value: "hi @" } })
    expect(onValueChange).toHaveBeenCalledWith("hi @")
  })

  it("shows mention suggestions when typing the trigger", () => {
    function Wrapper() {
      const [v, setV] = React.useState("")
      return (
        <MentionInput
          aria-label="Comment"
          value={v}
          people={[{ id: "1", label: "Ada Lovelace" }]}
          onValueChange={setV}
        />
      )
    }
    render(<Wrapper />)
    fireEvent.change(screen.getByLabelText("Comment"), {
      target: { value: "@ada", selectionStart: 4 },
    })
    expect(screen.getByRole("option", { name: "Ada Lovelace" })).toBeInTheDocument()
  })

  it("has no axe violations", async () => {
    const { container } = render(
      <MentionInput aria-label="Comment" value="" people={[]} onValueChange={() => {}} />,
    )
    expect(await a11y(container)).toHaveNoViolations()
  })
})
