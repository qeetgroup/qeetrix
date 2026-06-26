import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, RollingNumber } from "@qeetrix/ui";

const meta: Meta<typeof RollingNumber> = {
  title: "Primitives/RollingNumber",
  component: RollingNumber,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RollingNumber>;

export const Interactive: Story = {
  render: () => {
    const [v, setV] = React.useState(1280);
    return (
      <div className="flex flex-col items-center gap-3">
        <RollingNumber className="text-4xl font-semibold" value={v} locale="en-US" />
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={() => setV((n) => n + 421)}>
            +421
          </Button>
          <Button size="sm" variant="outline" onClick={() => setV((n) => Math.max(0, n - 200))}>
            −200
          </Button>
        </div>
      </div>
    );
  },
};
