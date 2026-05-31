import type { Meta, StoryObj } from "@storybook/react-vite";
import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";

import { Toggle, ToggleGroup } from "@qeetrix/ui";

const meta: Meta<typeof Toggle> = {
  title: "Primitives/Toggle",
  component: Toggle,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toggle>;

export const Default: Story = {
  render: () => (
    <Toggle aria-label="Toggle bold" defaultPressed>
      <BoldIcon />
    </Toggle>
  ),
};

export const Outline: Story = {
  render: () => (
    <Toggle variant="outline" aria-label="Toggle italic">
      <ItalicIcon />
    </Toggle>
  ),
};

export const Group: Story = {
  render: () => (
    <ToggleGroup defaultValue={["bold"]} aria-label="Text formatting">
      <Toggle value="bold" variant="outline" aria-label="Bold">
        <BoldIcon />
      </Toggle>
      <Toggle value="italic" variant="outline" aria-label="Italic">
        <ItalicIcon />
      </Toggle>
      <Toggle value="underline" variant="outline" aria-label="Underline">
        <UnderlineIcon />
      </Toggle>
    </ToggleGroup>
  ),
};
