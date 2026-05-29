import type { Meta, StoryObj } from "@storybook/react-vite";

import { CopyableSecret } from "@qeetix/ui";

const meta: Meta<typeof CopyableSecret> = {
  title: "Primitives/CopyableSecret",
  component: CopyableSecret,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CopyableSecret>;

export const Default: Story = {
  render: () => (
    <div className="w-96">
      <CopyableSecret label="API key" value="qid_live_8f2c1a9b4e7d6c0f3a2b1e9d8c7f6a5b" />
    </div>
  ),
};
