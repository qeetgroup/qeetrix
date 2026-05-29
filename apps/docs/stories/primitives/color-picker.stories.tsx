import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { ColorPicker } from "@qeetrix/ui";

const meta: Meta<typeof ColorPicker> = {
  title: "Primitives/ColorPicker",
  component: ColorPicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ColorPicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("#F26D0E");
    return (
      <div className="w-72">
        <ColorPicker
          value={value}
          onChange={setValue}
          presets={["#F26D0E", "#2563EB", "#16A34A", "#DC2626", "#0A0A0A"]}
        />
      </div>
    );
  },
};
