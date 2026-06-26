import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Listbox } from "@qeetrix/ui";

const meta: Meta<typeof Listbox> = {
  title: "Primitives/Listbox",
  component: Listbox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Listbox>;

const OPTIONS = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Member", value: "member" },
  { label: "Billing", value: "billing", disabled: true },
  { label: "Guest", value: "guest" },
];

export const SingleSelect: Story = {
  render: () => {
    const [v, setV] = React.useState("admin");
    return (
      <div className="w-56">
        <Listbox aria-label="Role" options={OPTIONS} value={v} onValueChange={(x) => setV(x as string)} />
      </div>
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [v, setV] = React.useState<string[]>(["owner", "member"]);
    return (
      <div className="w-56">
        <Listbox aria-label="Roles" multiple options={OPTIONS} value={v} onValueChange={(x) => setV(x as string[])} />
      </div>
    );
  },
};
