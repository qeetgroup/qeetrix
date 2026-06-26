import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import { axe } from "vitest-axe"

import { Feed } from "@/components/ui/feed"

const a11y = (c: Element) => axe(c, { rules: { "color-contrast": { enabled: false } } })

describe("Feed", () => {
  it("wraps children as articles with feed semantics", () => {
    render(
      <Feed aria-label="Activity">
        <div>First</div>
        <div>Second</div>
      </Feed>,
    )
    expect(screen.getByRole("feed", { name: "Activity" })).toBeInTheDocument()
    const articles = screen.getAllByRole("article")
    expect(articles).toHaveLength(2)
    expect(articles[0]).toHaveAttribute("aria-posinset", "1")
    expect(articles[1]).toHaveAttribute("aria-setsize", "2")
  })

  it("has no axe violations", async () => {
    const { container } = render(
      <Feed aria-label="Activity">
        <div>Only</div>
      </Feed>,
    )
    expect(await a11y(container)).toHaveNoViolations()
  })
})
