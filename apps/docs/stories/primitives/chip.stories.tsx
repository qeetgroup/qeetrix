import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Chip, ChipGroup } from "@qeetrix/ui";

const meta: Meta<typeof Chip> = {
  title: "Primitives/Chip",
  component: Chip,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Chip>;

export const SingleSelect: Story = {
  render: () => {
    const [value, setValue] = React.useState("all");
    return (
      <ChipGroup value={value} onValueChange={(v) => setValue(v as string)}>
        <Chip value="all">All</Chip>
        <Chip value="active">Active</Chip>
        <Chip value="archived">Archived</Chip>
      </ChipGroup>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>(["design"]);
    return (
      <ChipGroup multiple value={value} onValueChange={(v) => setValue(v as string[])}>
        <Chip value="design">Design</Chip>
        <Chip value="eng">Engineering</Chip>
        <Chip value="pm">Product</Chip>
      </ChipGroup>
    );
  },
};

export const Removable: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["alpha", "beta", "gamma"]);
    return (
      <div className="flex gap-2">
        {tags.map((t) => (
          <Chip key={t} onRemove={() => setTags((cur) => cur.filter((x) => x !== t))}>
            {t}
          </Chip>
        ))}
      </div>
    );
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Chip size="sm" selected>
        Small
      </Chip>
      <Chip size="md" selected>
        Medium
      </Chip>
      <Chip size="lg" selected>
        Large
      </Chip>
    </div>
  ),
};
