import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Calendar, type DateRange } from "@qeetrix/ui";

const meta: Meta<typeof Calendar> = {
  title: "Primitives/Calendar",
  component: Calendar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg ring-1 ring-foreground/10"
      />
    );
  },
};

export const RangeMode: Story = {
  render: () => {
    const [range, setRange] = React.useState<DateRange | undefined>();
    return (
      <Calendar
        mode="range"
        numberOfMonths={2}
        selected={range}
        onSelect={setRange}
        className="rounded-lg ring-1 ring-foreground/10"
      />
    );
  },
};
