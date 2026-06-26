import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Autocomplete } from "@qeetrix/ui";

const meta: Meta<typeof Autocomplete> = {
  title: "Primitives/Autocomplete",
  component: Autocomplete,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Autocomplete>;

const FRUITS = ["Apple", "Apricot", "Banana", "Blueberry", "Cherry", "Mango", "Orange", "Peach"];

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Autocomplete aria-label="Fruit" items={FRUITS} placeholder="Search fruit…" />
    </div>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = React.useState("");
    return (
      <div className="w-72 space-y-2">
        <Autocomplete aria-label="Fruit" items={FRUITS} value={value} onValueChange={setValue} />
        <p className="text-sm text-muted-foreground">Submitted value: {value || "—"}</p>
      </div>
    );
  },
};
