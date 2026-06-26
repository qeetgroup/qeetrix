import type { Meta, StoryObj } from "@storybook/react-vite";

import { OrgChart, type OrgNode } from "@qeetrix/ui";

const DATA: OrgNode = {
  id: "1",
  label: "Ada Lovelace",
  sublabel: "CEO",
  children: [
    {
      id: "2",
      label: "Grace Hopper",
      sublabel: "CTO",
      children: [
        { id: "4", label: "Alan Turing", sublabel: "Eng Lead" },
        { id: "5", label: "Katherine Johnson", sublabel: "Data Lead" },
      ],
    },
    { id: "3", label: "Margaret Hamilton", sublabel: "CFO" },
  ],
};

const meta: Meta<typeof OrgChart> = {
  title: "Primitives/OrgChart",
  component: OrgChart,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OrgChart>;

export const Default: Story = { render: () => <OrgChart data={DATA} /> };
