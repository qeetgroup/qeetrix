import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label, Radio, RadioGroup } from "@qeetrix/ui";

const meta: Meta<typeof RadioGroup> = {
  title: "Primitives/Radio Group",
  component: RadioGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RadioGroup>;

const PLANS: Array<[string, string]> = [
  ["standard", "Standard"],
  ["pro", "Pro"],
  ["enterprise", "Enterprise"],
];

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="pro" aria-label="Plan">
      {PLANS.map(([value, label]) => (
        <div key={value} className="flex items-center gap-2">
          <Radio id={`plan-${value}`} value={value} />
          <Label htmlFor={`plan-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="standard" disabled aria-label="Plan (disabled)">
      {PLANS.map(([value, label]) => (
        <div key={value} className="flex items-center gap-2">
          <Radio id={`dplan-${value}`} value={value} />
          <Label htmlFor={`dplan-${value}`}>{label}</Label>
        </div>
      ))}
    </RadioGroup>
  ),
};
