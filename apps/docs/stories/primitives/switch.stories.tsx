import type { Meta, StoryObj } from "@storybook/react-vite";

import { Label, Switch } from "@qeetrix/ui";

const meta: Meta<typeof Switch> = {
  title: "Primitives/Switch",
  component: Switch,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = { args: { defaultChecked: true, "aria-label": "Enable setting" } };

export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Switch id="mfa" defaultChecked />
      <Label htmlFor="mfa">Require MFA</Label>
    </div>
  ),
};
