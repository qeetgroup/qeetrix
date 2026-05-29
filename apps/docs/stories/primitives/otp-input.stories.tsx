import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { OTPInput } from "@qeetrix/ui";

const meta: Meta<typeof OTPInput> = {
  title: "Primitives/OTPInput",
  component: OTPInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OTPInput>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return <OTPInput value={value} onChange={setValue} length={6} aria-label="One-time code" />;
  },
};
