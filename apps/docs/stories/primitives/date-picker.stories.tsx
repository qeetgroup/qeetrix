import type { Meta, StoryObj } from "@storybook/react-vite";

import { DatePicker } from "@qeetrix/ui";

const meta: Meta<typeof DatePicker> = {
  title: "Primitives/DatePicker",
  component: DatePicker,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker />
    </div>
  ),
};

export const Preselected: Story = {
  render: () => (
    <div className="w-64">
      <DatePicker defaultValue={new Date()} />
    </div>
  ),
};
