import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  type ChartConfig,
  ChartTooltip,
  ChartTooltipContent,
} from "@qeetrix/ui";

const meta: Meta = {
  title: "Primitives/Chart",
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Low-level Recharts integration primitives — `ChartContainer`, `ChartTooltip`, and `ChartTooltipContent` — that apply Qeetrix design tokens to any Recharts chart. Use these building blocks when a one-off chart shape isn't covered by the `ChartPresets`; for common patterns (area, bar, line, donut) use the preset components instead.",
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const data = [
  { month: "Jan", logins: 14_200 },
  { month: "Feb", logins: 18_900 },
  { month: "Mar", logins: 27_400 },
  { month: "Apr", logins: 31_100 },
  { month: "May", logins: 38_750 },
  { month: "Jun", logins: 44_320 },
];

const config = {
  logins: { label: "Logins", color: "var(--chart-1)" },
} satisfies ChartConfig;

export const Bars: Story = {
  render: () => (
    <ChartContainer config={config} className="h-64 w-md">
      <BarChart data={data}>
        <CartesianGrid vertical={false} />
        <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Bar dataKey="logins" fill="var(--color-logins)" radius={4} />
      </BarChart>
    </ChartContainer>
  ),
};
