import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox, CheckboxGroup, Label } from "@qeetrix/ui";

const meta: Meta<typeof Checkbox> = {
  title: "Primitives/Checkbox",
  component: Checkbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="terms" defaultChecked />
      <Label htmlFor="terms">Accept terms &amp; conditions</Label>
    </div>
  ),
};

export const Indeterminate: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="all" indeterminate />
      <Label htmlFor="all">Select all scopes</Label>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Checkbox id="locked" defaultChecked disabled />
      <Label htmlFor="locked">Enforced by policy</Label>
    </div>
  ),
};

const SCOPES: Array<[string, string]> = [
  ["profile", "Read profile"],
  ["email", "Read email"],
  ["write", "Write access"],
];

export const Group: Story = {
  render: () => (
    <CheckboxGroup defaultValue={["profile", "email"]} aria-label="OAuth scopes">
      {SCOPES.map(([value, label]) => (
        <div key={value} className="flex items-center gap-2">
          <Checkbox id={`scope-${value}`} name={value} value={value} />
          <Label htmlFor={`scope-${value}`}>{label}</Label>
        </div>
      ))}
    </CheckboxGroup>
  ),
};
