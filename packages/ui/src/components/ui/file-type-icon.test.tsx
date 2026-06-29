import { describe, expect, it } from "vitest"
import { render } from "@testing-library/react"

import { FileTypeIcon } from "@/components/ui/file-type-icon"

describe("FileTypeIcon", () => {
  it("renders an icon for a filename", () => {
    const { container } = render(<FileTypeIcon type="report.pdf" />)
    expect(container.querySelector('svg[data-slot="file-type-icon"]')).not.toBeNull()
  })

  it("resolves by MIME type too", () => {
    const { container } = render(<FileTypeIcon type="image/png" />)
    expect(container.querySelector("svg")).not.toBeNull()
  })
})
