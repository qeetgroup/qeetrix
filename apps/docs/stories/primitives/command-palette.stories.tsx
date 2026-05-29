import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, CommandPalette, type CommandPaletteItem } from "@qeetix/ui";

const meta: Meta<typeof CommandPalette> = {
  title: "Primitives/CommandPalette",
  component: CommandPalette,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CommandPalette>;

const items: CommandPaletteItem[] = [
  { id: "dashboard", title: "Go to Dashboard", group: "Navigate" },
  { id: "connections", title: "Connections", group: "Navigate" },
  { id: "audit", title: "Audit log", group: "Navigate" },
  { id: "new-key", title: "Create API key", group: "Actions" },
  { id: "invite", title: "Invite teammate", group: "Actions" },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <div className="flex h-72 items-start justify-center">
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open palette (⌘K)
        </Button>
        <CommandPalette
          open={open}
          onOpenChange={setOpen}
          items={items}
          onSelect={() => setOpen(false)}
        />
      </div>
    );
  },
};
