import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimePicker } from "@qeetrix/ui";

const meta: Meta<typeof TimePicker> = {
  title: "Primitives/TimePicker",
  component: TimePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TimePicker>;

export const TwentyFourHour: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("09:30");
    return (
      <div className="flex flex-col items-center gap-2">
        <TimePicker value={value} onValueChange={setValue} />
        <span className="text-sm text-muted-foreground">value: {value || "—"}</span>
      </div>
    );
  },
};

export const TwelveHour: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("14:15");
    return (
      <div className="flex flex-col items-center gap-2">
        <TimePicker value={value} onValueChange={setValue} hourCycle={12} />
        <span className="text-sm text-muted-foreground">value: {value || "—"}</span>
      </div>
    );
  },
};

export const WithSeconds: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("23:59:45");
    return (
      <div className="flex flex-col items-center gap-2">
        <TimePicker value={value} onValueChange={setValue} withSeconds />
        <span className="text-sm text-muted-foreground">value: {value || "—"}</span>
      </div>
    );
  },
};

export const FiveMinuteSteps: Story = {
  render: () => {
    const [value, setValue] = React.useState<string>("");
    return (
      <div className="flex flex-col items-center gap-2">
        <TimePicker value={value} onValueChange={setValue} minuteStep={5} hourCycle={12} />
        <span className="text-sm text-muted-foreground">value: {value || "—"}</span>
      </div>
    );
  },
};
