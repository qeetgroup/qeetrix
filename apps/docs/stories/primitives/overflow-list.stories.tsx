import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge, OverflowList } from "@qeetrix/ui";

const meta: Meta<typeof OverflowList> = {
  title: "Primitives/OverflowList",
  component: OverflowList,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OverflowList>;

const TAGS = ["design", "engineering", "product", "marketing", "sales", "support", "finance", "legal"];

export const Default: Story = {
  render: () => (
    <div className="w-80 resize-x overflow-auto rounded-md border p-2">
      <OverflowList
        items={TAGS.map((t) => (
          <Badge key={t} variant="secondary">
            {t}
          </Badge>
        ))}
      />
      <p className="mt-2 text-xs text-muted-foreground">Drag the right edge to resize.</p>
    </div>
  ),
};

export const CollapseFromStart: Story = {
  render: () => (
    <div className="w-64 rounded-md border p-2">
      <OverflowList
        collapseFrom="start"
        items={["Home", "Workspace", "Projects", "Qeet ID", "Settings"].map((t) => (
          <span key={t} className="text-sm text-muted-foreground">
            {t}
          </span>
        ))}
      />
    </div>
  ),
};
