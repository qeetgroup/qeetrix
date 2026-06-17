import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AreaChart,
  BarChart,
  LineChart,
  DonutChart,
  RadialChart,
  Sparkline,
  type ChartConfig,
} from "@qeetrix/ui";

const meta: Meta = {
  title: "Primitives/ChartPresets",
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const trend = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 173, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 264, mobile: 140 },
];

const trendConfig = {
  desktop: { label: "Desktop", color: "var(--chart-1)" },
  mobile: { label: "Mobile", color: "var(--chart-2)" },
} satisfies ChartConfig;

const browsers = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 187 },
  { browser: "edge", visitors: 173 },
];

const browserConfig = {
  visitors: { label: "Visitors" },
  chrome: { label: "Chrome", color: "var(--chart-1)" },
  safari: { label: "Safari", color: "var(--chart-2)" },
  firefox: { label: "Firefox", color: "var(--chart-3)" },
  edge: { label: "Edge", color: "var(--chart-4)" },
} satisfies ChartConfig;

export const Area: Story = {
  render: () => (
    <div className="max-w-xl">
      <AreaChart
        data={trend}
        config={trendConfig}
        categoryKey="month"
        dataKeys={["desktop", "mobile"]}
        stacked
        showLegend
      />
    </div>
  ),
};

export const Bar: Story = {
  render: () => (
    <div className="max-w-xl">
      <BarChart
        data={trend}
        config={trendConfig}
        categoryKey="month"
        dataKeys={["desktop", "mobile"]}
      />
    </div>
  ),
};

export const Line: Story = {
  render: () => (
    <div className="max-w-xl">
      <LineChart
        data={trend}
        config={trendConfig}
        categoryKey="month"
        dataKeys={["desktop", "mobile"]}
        showYAxis
      />
    </div>
  ),
};

export const Donut: Story = {
  render: () => (
    <div className="max-w-xs">
      <DonutChart
        data={browsers}
        config={browserConfig}
        dataKey="visitors"
        nameKey="browser"
        showLegend
      />
    </div>
  ),
};

export const Radial: Story = {
  render: () => (
    <div className="max-w-xs">
      <RadialChart
        data={browsers}
        config={browserConfig}
        dataKey="visitors"
        nameKey="browser"
      />
    </div>
  ),
};

export const Sparklines: Story = {
  render: () => (
    <div className="grid max-w-xl grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
        <span className="text-sm font-medium text-muted-foreground">Active sessions</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold tabular-nums">2,318</span>
          <span className="text-xs font-medium text-emerald-600">+12.4%</span>
        </div>
        <Sparkline data={[4, 6, 5, 8, 7, 10, 9, 12]} type="area" className="text-emerald-500" />
      </div>
      <div className="flex flex-col gap-1.5 rounded-xl bg-card p-4 ring-1 ring-foreground/10">
        <span className="text-sm font-medium text-muted-foreground">Error rate</span>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-semibold tabular-nums">0.42%</span>
          <span className="text-xs font-medium text-rose-600">-3.1%</span>
        </div>
        <Sparkline data={[12, 10, 11, 8, 9, 6, 5, 4]} className="text-rose-500" />
      </div>
    </div>
  ),
};
