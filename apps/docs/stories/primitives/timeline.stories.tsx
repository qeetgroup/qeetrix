import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Timeline,
  TimelineContent,
  TimelineDescription,
  TimelineIndicator,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from "@qeetrix/ui";

const meta: Meta<typeof Timeline> = {
  title: "Primitives/Timeline",
  component: Timeline,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  render: () => (
    <Timeline className="w-80">
      <TimelineItem>
        <TimelineIndicator />
        <TimelineContent>
          <TimelineTitle>API key revoked</TimelineTitle>
          <TimelineTime>2 hours ago · by Ada</TimelineTime>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineIndicator />
        <TimelineContent>
          <TimelineTitle>Member invited</TimelineTitle>
          <TimelineTime>Yesterday · by Grace</TimelineTime>
          <TimelineDescription>
            alan@acme.com was invited with the Admin role.
          </TimelineDescription>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineIndicator />
        <TimelineContent>
          <TimelineTitle>Tenant created</TimelineTitle>
          <TimelineTime>Mar 4 · by system</TimelineTime>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  ),
};
