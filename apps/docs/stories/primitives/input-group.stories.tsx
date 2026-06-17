import type { Meta, StoryObj } from "@storybook/react-vite";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@qeetrix/ui";

const meta: Meta<typeof InputGroup> = {
  title: "Primitives/InputGroup",
  component: InputGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Currency: Story = {
  render: () => (
    <div className="w-64">
      <InputGroup>
        <InputGroupAddon align="start">$</InputGroupAddon>
        <InputGroupInput placeholder="0.00" inputMode="decimal" />
        <InputGroupAddon align="end">USD</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const UrlPrefix: Story = {
  render: () => (
    <div className="w-80">
      <InputGroup>
        <InputGroupAddon align="start">https://</InputGroupAddon>
        <InputGroupInput placeholder="auth.acme.com" />
      </InputGroup>
    </div>
  ),
};

export const Units: Story = {
  render: () => (
    <div className="w-56">
      <InputGroup>
        <InputGroupInput placeholder="30" inputMode="numeric" />
        <InputGroupAddon align="end">days</InputGroupAddon>
      </InputGroup>
    </div>
  ),
};
