import type { Meta, StoryObj } from "@storybook/react-vite";

import { TableOfContents } from "@qeetrix/ui";

const meta: Meta<typeof TableOfContents> = {
  title: "Primitives/TableOfContents",
  component: TableOfContents,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TableOfContents>;

export const Default: Story = {
  render: () => (
    <TableOfContents
      activeId="usage"
      items={[
        { id: "intro", label: "Introduction" },
        { id: "install", label: "Installation" },
        { id: "usage", label: "Usage" },
        { id: "api", label: "API", depth: 1 },
        { id: "props", label: "Props", depth: 1 },
        { id: "faq", label: "FAQ" },
      ]}
    />
  ),
};
