import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input, Label } from "@qeetix/ui";

const meta: Meta<typeof Input> = {
  title: "Primitives/Input",
  component: Input,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: "you@example.com" },
};

export const WithLabel: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Invalid: Story = {
  args: { placeholder: "Invalid", "aria-invalid": true, defaultValue: "nope" },
};

export const Disabled: Story = {
  args: { placeholder: "Disabled", disabled: true },
};
