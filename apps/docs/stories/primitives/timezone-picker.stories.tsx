import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { TimezonePicker } from "@qeetrix/ui";

const meta: Meta<typeof TimezonePicker> = {
  title: "Primitives/TimezonePicker",
  component: TimezonePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TimezonePicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("Asia/Kolkata");
    return (
      <div className="w-72">
        <TimezonePicker value={value} onChange={setValue} />
      </div>
    );
  },
};
