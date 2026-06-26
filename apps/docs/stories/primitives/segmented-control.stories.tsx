import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { SegmentedControl, SegmentedControlItem } from "@qeetrix/ui";

const meta: Meta<typeof SegmentedControl> = {
  title: "Primitives/SegmentedControl",
  component: SegmentedControl,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof SegmentedControl>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = React.useState("list");
    return (
      <SegmentedControl {...args} value={value} onValueChange={setValue}>
        <SegmentedControlItem value="list">List</SegmentedControlItem>
        <SegmentedControlItem value="board">Board</SegmentedControlItem>
        <SegmentedControlItem value="calendar">Calendar</SegmentedControlItem>
      </SegmentedControl>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [value, setValue] = React.useState("day");
    return (
      <div className="w-80">
        <SegmentedControl fullWidth value={value} onValueChange={setValue}>
          <SegmentedControlItem value="day">Day</SegmentedControlItem>
          <SegmentedControlItem value="week">Week</SegmentedControlItem>
          <SegmentedControlItem value="month">Month</SegmentedControlItem>
        </SegmentedControl>
      </div>
    );
  },
};
