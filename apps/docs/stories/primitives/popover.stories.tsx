import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@qeetrix/ui";

const meta: Meta<typeof Popover> = {
  title: "Primitives/Popover",
  component: Popover,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => (
    <Popover>
      <PopoverTrigger render={<Button variant="outline">Edit webhook</Button>} />
      <PopoverContent>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <PopoverTitle>Endpoint</PopoverTitle>
            <PopoverDescription>
              Where Qeet ID delivers event payloads.
            </PopoverDescription>
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="hook-url">URL</Label>
            <Input id="hook-url" defaultValue="https://api.example.com/hooks" />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};
