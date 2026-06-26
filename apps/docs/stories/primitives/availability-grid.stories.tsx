import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { AvailabilityGrid } from "@qeetrix/ui";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];
const TIMES = ["09:00", "09:30", "10:00", "10:30", "11:00"];

const meta: Meta<typeof AvailabilityGrid> = {
  title: "Primitives/AvailabilityGrid",
  component: AvailabilityGrid,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AvailabilityGrid>;

export const Default: Story = {
  render: () => {
    const [v, setV] = React.useState<string[]>(["0:1", "0:2", "2:0"]);
    return (
      <AvailabilityGrid
        days={DAYS}
        times={TIMES}
        value={v}
        onValueChange={setV}
        unavailable={["1:3", "3:0", "4:4"]}
      />
    );
  },
};
