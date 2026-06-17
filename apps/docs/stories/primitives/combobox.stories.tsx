import type { Meta, StoryObj } from "@storybook/react-vite";

import { Combobox, type ComboboxOption } from "@qeetrix/ui";

const timezones: ComboboxOption[] = [
  { label: "(UTC−08:00) Pacific Time", value: "pst" },
  { label: "(UTC−07:00) Mountain Time", value: "mst" },
  { label: "(UTC−06:00) Central Time", value: "cst" },
  { label: "(UTC−05:00) Eastern Time", value: "est" },
  { label: "(UTC+00:00) Coordinated Universal Time", value: "utc" },
  { label: "(UTC+01:00) Central European Time", value: "cet" },
  { label: "(UTC+05:30) India Standard Time", value: "ist" },
  { label: "(UTC+09:00) Japan Standard Time", value: "jst", disabled: true },
];

const meta: Meta<typeof Combobox> = {
  title: "Primitives/Combobox",
  component: Combobox,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Combobox>;

export const Default: Story = {
  render: () => (
    <div className="w-72">
      <Combobox items={timezones} placeholder="Search time zones…" />
    </div>
  ),
};

export const Preselected: Story = {
  render: () => (
    <div className="w-72">
      <Combobox items={timezones} defaultValue="utc" />
    </div>
  ),
};
