import type { Meta, StoryObj } from "@storybook/react-vite";

import { ScrollArea, Separator } from "@qeetrix/ui";

const meta: Meta<typeof ScrollArea> = {
  title: "Primitives/Scroll Area",
  component: ScrollArea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ScrollArea>;

const TAGS = Array.from({ length: 40 }, (_, i) => `audit-event-${1000 + i}`);

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-56 w-64 rounded-lg border">
      <div className="p-3">
        <div className="text-sm font-medium">Recent audit events</div>
        {TAGS.map((tag) => (
          <div key={tag}>
            <div className="py-1.5 text-sm text-muted-foreground">{tag}</div>
            <Separator />
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="w-72 rounded-lg border whitespace-nowrap">
      <div className="flex gap-3 p-3">
        {Array.from({ length: 16 }, (_, i) => (
          <div
            key={i}
            className="flex size-24 shrink-0 items-center justify-center rounded-md bg-muted text-sm text-muted-foreground"
          >
            {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
