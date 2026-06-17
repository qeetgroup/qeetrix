import type { Meta, StoryObj } from "@storybook/react-vite";

import { MultiSelect, type ComboboxOption } from "@qeetrix/ui";

const scopes: ComboboxOption[] = [
  { label: "openid", value: "openid" },
  { label: "profile", value: "profile" },
  { label: "email", value: "email" },
  { label: "offline_access", value: "offline_access" },
  { label: "users:read", value: "users:read" },
  { label: "users:write", value: "users:write" },
  { label: "tenants:read", value: "tenants:read" },
];

const meta: Meta<typeof MultiSelect> = {
  title: "Primitives/MultiSelect",
  component: MultiSelect,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MultiSelect>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <MultiSelect items={scopes} placeholder="Add scopes…" />
    </div>
  ),
};

export const Preselected: Story = {
  render: () => (
    <div className="w-80">
      <MultiSelect items={scopes} defaultValue={["openid", "email"]} />
    </div>
  ),
};
