import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { FilterBar, type ActiveFilter, type FilterField } from "@qeetrix/ui";

const FIELDS: FilterField[] = [
  {
    key: "status",
    label: "Status",
    options: [
      { label: "Active", value: "active" },
      { label: "Archived", value: "archived" },
    ],
  },
  { key: "owner", label: "Owner" },
  {
    key: "env",
    label: "Environment",
    options: [
      { label: "Production", value: "prod" },
      { label: "Staging", value: "staging" },
    ],
  },
];

const meta: Meta<typeof FilterBar> = {
  title: "Primitives/FilterBar",
  component: FilterBar,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  render: () => {
    const [filters, setFilters] = React.useState<ActiveFilter[]>([
      { field: "status", operator: "is", value: "active" },
    ]);
    return <FilterBar fields={FIELDS} value={filters} onValueChange={setFilters} />;
  },
};
