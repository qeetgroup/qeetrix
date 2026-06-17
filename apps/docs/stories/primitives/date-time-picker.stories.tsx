import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { DateTimePicker } from "@qeetrix/ui";

const meta: Meta<typeof DateTimePicker> = {
  title: "Primitives/DateTimePicker",
  component: DateTimePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DateTimePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>();
    return (
      <div className="flex w-72 flex-col gap-2">
        <DateTimePicker value={value} onValueChange={setValue} />
        <span className="text-sm text-muted-foreground">
          {value ? value.toISOString() : "no value"}
        </span>
      </div>
    );
  },
};

export const TwelveHourWithSeconds: Story = {
  render: () => {
    const [value, setValue] = React.useState<Date | undefined>(new Date());
    return (
      <div className="flex w-72 flex-col gap-2">
        <DateTimePicker
          value={value}
          onValueChange={setValue}
          hourCycle={12}
          withSeconds
          minuteStep={1}
        />
        <span className="text-sm text-muted-foreground">
          {value ? value.toISOString() : "no value"}
        </span>
      </div>
    );
  },
};
