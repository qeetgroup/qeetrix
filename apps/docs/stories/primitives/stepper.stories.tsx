import type { Meta, StoryObj } from "@storybook/react-vite";

import { Stepper } from "@qeetrix/ui";

const steps = [
  { label: "Account", description: "Your details" },
  { label: "Workspace", description: "Name & URL" },
  { label: "Invite team", description: "Optional" },
  { label: "Done" },
];

const meta: Meta<typeof Stepper> = {
  title: "Primitives/Stepper",
  component: Stepper,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Stepper>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-2xl">
      <Stepper steps={steps} activeStep={1} />
    </div>
  ),
};
