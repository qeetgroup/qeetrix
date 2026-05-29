import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimeSince } from "@qeetix/ui";

const meta: Meta<typeof TimeSince> = {
  title: "Primitives/TimeSince",
  component: TimeSince,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TimeSince>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-col gap-1 text-sm">
      <span>
        Created <TimeSince value={new Date(Date.now() - 42_000).toISOString()} />
      </span>
      <span>
        Last used <TimeSince value={new Date(Date.now() - 3 * 3600_000).toISOString()} />
      </span>
    </div>
  ),
};
