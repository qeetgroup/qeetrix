import type { Meta, StoryObj } from "@storybook/react-vite";

import { Skeleton } from "@qeetix/ui";

const meta: Meta<typeof Skeleton> = {
  title: "Primitives/Skeleton",
  component: Skeleton,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Card: Story = {
  render: () => (
    <div className="flex w-72 items-center gap-3">
      <Skeleton className="size-12 rounded-full" />
      <div className="flex flex-1 flex-col gap-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  ),
};
