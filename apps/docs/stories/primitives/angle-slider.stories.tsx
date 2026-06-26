import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AngleSlider } from "@qeetrix/ui";

const meta: Meta<typeof AngleSlider> = {
  title: "Primitives/AngleSlider",
  component: AngleSlider,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AngleSlider>;

export const Interactive: Story = {
  render: () => {
    const [v, setV] = React.useState(45);
    return (
      <div className="flex flex-col items-center gap-3">
        <AngleSlider value={v} onValueChange={setV} size={96} aria-label="Gradient angle" />
        <span className="text-sm text-muted-foreground">{v}°</span>
      </div>
    );
  },
};
