import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarSeparator,
} from "@qeetrix/ui";
import {
  AlignCenterIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
} from "lucide-react";

const meta: Meta<typeof Toolbar> = {
  title: "Primitives/Toolbar",
  component: Toolbar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: () => (
    <Toolbar aria-label="Formatting">
      <ToolbarGroup>
        <ToolbarButton aria-label="Bold">
          <BoldIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="Italic">
          <ItalicIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="Underline">
          <UnderlineIcon />
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarSeparator />
      <ToolbarGroup>
        <ToolbarButton aria-label="Align left">
          <AlignLeftIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="Align center">
          <AlignCenterIcon />
        </ToolbarButton>
        <ToolbarButton aria-label="Align right">
          <AlignRightIcon />
        </ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  ),
};
