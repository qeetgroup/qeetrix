import type { Meta, StoryObj } from "@storybook/react-vite";

import { Textarea } from "@qeetrix/ui";

const meta: Meta<typeof Textarea> = {
  title: "Primitives/Textarea",
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: { placeholder: "Describe the integration…", className: "w-80", rows: 4 },
};
