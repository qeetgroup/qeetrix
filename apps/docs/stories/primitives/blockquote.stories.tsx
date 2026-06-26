import type { Meta, StoryObj } from "@storybook/react-vite";

import { Blockquote } from "@qeetrix/ui";

const meta: Meta<typeof Blockquote> = {
  title: "Primitives/Blockquote",
  component: Blockquote,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  render: () => (
    <Blockquote attribution="— Ada Lovelace" className="max-w-md">
      <p>That brain of mine is something more than merely mortal, as time will show.</p>
    </Blockquote>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <Blockquote size="sm">
        <p>A small pull-quote.</p>
      </Blockquote>
      <Blockquote size="lg">
        <p>A large, emphatic pull-quote.</p>
      </Blockquote>
    </div>
  ),
};
