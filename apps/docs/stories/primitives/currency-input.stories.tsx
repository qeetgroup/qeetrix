import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { CurrencyInput } from "@qeetrix/ui";

const meta: Meta<typeof CurrencyInput> = {
  title: "Primitives/CurrencyInput",
  component: CurrencyInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    currency: { control: "select", options: ["USD", "INR", "EUR", "GBP", "JPY"] },
  },
};
export default meta;
type Story = StoryObj<typeof CurrencyInput>;

export const Default: Story = {
  render: (args) => {
    const [v, setV] = React.useState<number | undefined>(49900);
    return (
      <div className="w-56 space-y-2">
        <CurrencyInput {...args} aria-label="Amount" value={v} onValueChange={setV} />
        <p className="text-sm text-muted-foreground">value: {v ?? "—"}</p>
      </div>
    );
  },
  args: { currency: "INR", locale: "en-IN" },
};
