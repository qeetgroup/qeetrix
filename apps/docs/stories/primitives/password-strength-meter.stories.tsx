import type { Meta, StoryObj } from "@storybook/react-vite";

import { PasswordStrengthMeter } from "@qeetix/ui";

const meta: Meta<typeof PasswordStrengthMeter> = {
  title: "Primitives/PasswordStrengthMeter",
  component: PasswordStrengthMeter,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PasswordStrengthMeter>;

export const Weak: Story = {
  render: () => (
    <div className="w-80">
      <PasswordStrengthMeter value="pass" />
    </div>
  ),
};

export const Strong: Story = {
  render: () => (
    <div className="w-80">
      <PasswordStrengthMeter value="C0rrect-Horse-Battery-Staple!" />
    </div>
  ),
};
