import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Notification } from "@qeetrix/ui";

const meta: Meta<typeof Notification> = {
  title: "Primitives/Notification",
  component: Notification,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "inline-radio", options: ["info", "success", "warning", "error"] },
  },
};
export default meta;
type Story = StoryObj<typeof Notification>;

export const Variants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-3">
      <Notification variant="info" title="Heads up" description="Your trial ends in 3 days." onClose={() => {}} />
      <Notification variant="success" title="Saved" description="Your changes are live." onClose={() => {}} />
      <Notification variant="warning" title="Usage high" description="You're near your plan limit." onClose={() => {}} />
      <Notification variant="error" title="Payment failed" description="Update your card to continue." onClose={() => {}} />
    </div>
  ),
};

export const WithAction: Story = {
  render: () => (
    <div className="w-96">
      <Notification
        variant="info"
        title="New device sign-in"
        description="A new device signed in from Chennai."
        action={
          <Button size="sm" variant="outline">
            Review
          </Button>
        }
        onClose={() => {}}
      />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="w-96">
      <Notification variant="info" loading title="Syncing…" description="Importing your directory." />
    </div>
  ),
};
