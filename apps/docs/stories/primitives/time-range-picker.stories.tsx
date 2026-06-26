import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimeRangePicker, type TimeRangeValue } from "@qeetrix/ui";

const meta: Meta<typeof TimeRangePicker> = {
  title: "Primitives/TimeRangePicker",
  component: TimeRangePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TimeRangePicker>;

export const Default: Story = {
  render: () => {
    const [v, setV] = React.useState<TimeRangeValue | null>(null);
    return (
      <div className="flex flex-col items-center gap-2">
        <TimeRangePicker onValueChange={setV} />
        <span className="text-sm text-muted-foreground">
          {v
            ? `${v.preset}: ${v.from.toLocaleDateString()} – ${v.to.toLocaleDateString()}`
            : "default — last 24 hours"}
        </span>
      </div>
    );
  },
};
