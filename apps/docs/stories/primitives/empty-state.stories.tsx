import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, EmptyState } from "@qeetrix/ui";
import { InboxIcon, PlusIcon, SearchXIcon } from "lucide-react";

const meta: Meta<typeof EmptyState> = {
  title: "Primitives/EmptyState",
  component: EmptyState,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  render: () => (
    <div className="rounded-xl ring-1 ring-foreground/10">
      <EmptyState
        icon={InboxIcon}
        title="No API keys yet"
        description="Create your first key to start authenticating requests to the Qeet ID API."
        action={
          <Button>
            <PlusIcon /> New API key
          </Button>
        }
      />
    </div>
  ),
};

export const NoResults: Story = {
  render: () => (
    <div className="rounded-xl ring-1 ring-foreground/10">
      <EmptyState
        icon={SearchXIcon}
        title="No matches"
        description="No results for “acme-prod”. Try a different search term."
      />
    </div>
  ),
};
