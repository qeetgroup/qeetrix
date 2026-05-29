import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input, Label } from "@qeetix/ui";

const meta: Meta<typeof Label> = {
  title: "Primitives/Label",
  component: Label,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  render: () => (
    <div className="flex w-72 flex-col gap-2">
      <Label htmlFor="client-id">Client ID</Label>
      <Input id="client-id" defaultValue="qid_acme_8f2c1a9b" readOnly />
    </div>
  ),
};
