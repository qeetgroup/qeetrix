import type { Meta, StoryObj } from "@storybook/react-vite";

import { PaginationBar } from "@qeetrix/ui";

const meta: Meta<typeof PaginationBar> = {
  title: "Primitives/PaginationBar",
  component: PaginationBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PaginationBar>;

export const Default: Story = {
  render: () => (
    <div className="w-[34rem]">
      <PaginationBar hasPrev hasNext itemsOnPage={20} pageSize={20} total={138} />
    </div>
  ),
};
