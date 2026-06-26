import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import { MasterDetail } from "@/components/ui/master-detail"

describe("MasterDetail", () => {
  it("renders list and detail on desktop", () => {
    render(<MasterDetail list={<div>List content</div>} detail={<div>Detail content</div>} />)
    expect(screen.getByText("List content")).toBeInTheDocument()
    expect(screen.getByText("Detail content")).toBeInTheDocument()
  })
})
