import type { Meta, StoryObj } from "@storybook/react-vite";

import { Highlight } from "@qeetrix/ui";

const meta: Meta<typeof Highlight> = {
  title: "Primitives/Highlight",
  component: Highlight,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
  render: () => (
    <p className="max-w-md text-sm">
      <Highlight query="passkey">
        Qeet ID is a passkey-first identity platform; passkeys replace passwords.
      </Highlight>
    </p>
  ),
};

export const MultipleTerms: Story = {
  render: () => (
    <p className="max-w-md text-sm">
      <Highlight query={["identity", "auth"]}>
        A unified identity and auth layer for the Qeet suite.
      </Highlight>
    </p>
  ),
};
