import type { Meta, StoryObj } from "@storybook/react-vite";

import { Avatar, AvatarFallback, PresenceIndicator } from "@qeetrix/ui";

const meta: Meta<typeof PresenceIndicator> = {
  title: "Primitives/PresenceIndicator",
  component: PresenceIndicator,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    status: { control: "inline-radio", options: ["online", "away", "busy", "offline"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof PresenceIndicator>;

export const Statuses: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {(["online", "away", "busy", "offline"] as const).map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <PresenceIndicator status={s} size="lg" />
          <span className="text-xs text-muted-foreground capitalize">{s}</span>
        </div>
      ))}
    </div>
  ),
};

export const OnAvatar: Story = {
  render: () => (
    <div className="relative inline-block">
      <Avatar>
        <AvatarFallback>QA</AvatarFallback>
      </Avatar>
      <PresenceIndicator status="online" pulse className="absolute end-0 bottom-0" />
    </div>
  ),
};
