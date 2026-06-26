import type { Meta, StoryObj } from "@storybook/react-vite";

import { Feed } from "@qeetrix/ui";

const meta: Meta<typeof Feed> = {
  title: "Primitives/Feed",
  component: Feed,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Feed>;

export const Default: Story = {
  render: () => (
    <div className="max-w-md">
      <Feed aria-label="Recent activity">
        <div>
          <p className="text-sm font-medium">New device sign-in</p>
          <p className="text-sm text-muted-foreground">Chrome on macOS · 2m ago</p>
        </div>
        <div>
          <p className="text-sm font-medium">Passkey added</p>
          <p className="text-sm text-muted-foreground">iPhone · 1h ago</p>
        </div>
        <div>
          <p className="text-sm font-medium">Role changed to Admin</p>
          <p className="text-sm text-muted-foreground">by jordan@acme.com · 3h ago</p>
        </div>
      </Feed>
    </div>
  ),
};
