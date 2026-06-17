import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Rating } from "@qeetrix/ui";

const meta: Meta<typeof Rating> = {
  title: "Primitives/Rating",
  component: Rating,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    size: { control: "inline-radio", options: ["sm", "default", "lg"] },
  },
};
export default meta;
type Story = StoryObj<typeof Rating>;

export const Interactive: Story = {
  render: (args) => {
    const [value, setValue] = React.useState(3);
    return (
      <div className="flex flex-col items-center gap-2">
        <Rating {...args} value={value} onChange={setValue} />
        <span className="text-sm text-muted-foreground">{value} / 5</span>
      </div>
    );
  },
};

export const HalfSteps: Story = {
  render: () => {
    const [value, setValue] = React.useState(2.5);
    return (
      <div className="flex flex-col items-center gap-2">
        <Rating value={value} onChange={setValue} allowHalf />
        <span className="text-sm text-muted-foreground">{value} / 5</span>
      </div>
    );
  },
};

export const ReadOnlyAggregate: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Rating value={4.3} allowHalf readOnly size="sm" />
      <span className="text-sm text-muted-foreground">4.3 (1,204)</span>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-3">
      <Rating value={3.5} allowHalf readOnly size="sm" />
      <Rating value={3.5} allowHalf readOnly size="default" />
      <Rating value={3.5} allowHalf readOnly size="lg" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => <Rating value={3} onChange={() => {}} disabled />,
};
