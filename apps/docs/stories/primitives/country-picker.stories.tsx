import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { CountryPicker } from "@qeetix/ui";

const meta: Meta<typeof CountryPicker> = {
  title: "Primitives/CountryPicker",
  component: CountryPicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CountryPicker>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("IN");
    return (
      <div className="w-72">
        <CountryPicker value={value} onChange={setValue} />
      </div>
    );
  },
};
