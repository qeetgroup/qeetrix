import type { Meta, StoryObj } from "@storybook/react-vite";

import { FloatingWindow } from "@qeetrix/ui";

const meta: Meta<typeof FloatingWindow> = {
  title: "Primitives/FloatingWindow",
  component: FloatingWindow,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FloatingWindow>;

export const Default: Story = {
  render: () => (
    <div className="relative h-80">
      <FloatingWindow title="Quick help" defaultPosition={{ x: 40, y: 40 }} onClose={() => {}}>
        <p className="text-muted-foreground">
          Drag me by the header. I&apos;m non-modal — I won&apos;t trap focus or block the page.
        </p>
      </FloatingWindow>
    </div>
  ),
};
