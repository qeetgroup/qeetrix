import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@qeetix/ui";

const meta: Meta = {
  title: "Primitives/Chart",
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const data = [
  { month: "Jan", logins: 420 },
  { month: "Feb", logins: 510 },
  { month: "Mar", logins: 680 },
  { month: "Apr", logins: 590 },
  { month: "May", logins: 740 },
];

const config = {
  logins: { label: "Logins", color: "var(--chart-1)" },
} satisfies ChartConfig;

export const Bars: Story = {
  render: () => (
    <ChartContainer config={config} className="h-64 w-[28rem]">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="logins" fill="var(--color-logins)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
