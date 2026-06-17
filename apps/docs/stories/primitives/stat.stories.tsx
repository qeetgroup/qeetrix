import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stat } from "@qeetrix/ui";
import { ActivityIcon, KeyRoundIcon, UsersIcon } from "lucide-react";

const meta: Meta<typeof Stat> = {
  title: "Primitives/Stat",
  component: Stat,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Stat>;

export const Default: Story = {
  args: {
    label: "Active users",
    value: "12,480",
    delta: "+12.5%",
    trend: "up",
    hint: "vs. last 30 days",
  },
  render: (args) => <Stat {...args} className="max-w-xs" />,
};

export const Grid: Story = {
  render: () => (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      <Stat
        label="Active users"
        value="12,480"
        delta="+12.5%"
        trend="up"
        hint="vs. last 30 days"
        icon={UsersIcon}
      />
      <Stat
        label="Failed logins"
        value="318"
        delta="-4.1%"
        trend="down"
        hint="vs. last 30 days"
        icon={ActivityIcon}
      />
      <Stat
        label="Active API keys"
        value="64"
        delta="0%"
        trend="neutral"
        hint="no change"
        icon={KeyRoundIcon}
      />
    </div>
  ),
};
