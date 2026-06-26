import type { Meta, StoryObj } from "@storybook/react-vite";

import { DiffViewer } from "@qeetrix/ui";

const BEFORE = `{
  "name": "qeet-id",
  "replicas": 2,
  "region": "ap-south-1"
}`;
const AFTER = `{
  "name": "qeet-id",
  "replicas": 4,
  "region": "ap-south-2",
  "tls": true
}`;

const meta: Meta<typeof DiffViewer> = {
  title: "Primitives/DiffViewer",
  component: DiffViewer,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
  argTypes: { mode: { control: "inline-radio", options: ["unified", "split"] } },
};
export default meta;
type Story = StoryObj<typeof DiffViewer>;

export const Unified: Story = { args: { before: BEFORE, after: AFTER, mode: "unified" } };
export const Split: Story = { args: { before: BEFORE, after: AFTER, mode: "split" } };
