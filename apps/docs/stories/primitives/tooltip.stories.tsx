import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@qeetrix/ui";

const meta: Meta<typeof Tooltip> = {
  title: "Primitives/Tooltip",
  component: Tooltip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={<Button variant="outline">Hover me</Button>} />
        <TooltipContent>Rotates every 90 days</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
