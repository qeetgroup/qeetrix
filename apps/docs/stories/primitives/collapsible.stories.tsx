import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@qeetrix/ui";

const meta: Meta<typeof Collapsible> = {
  title: "Primitives/Collapsible",
  component: Collapsible,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => (
    <Collapsible className="w-72">
      <CollapsibleTrigger render={<Button variant="outline" size="sm">Advanced settings</Button>} />
      <CollapsibleContent className="mt-2 rounded-md border border-border p-3 text-sm text-muted-foreground">
        Token lifetime, clock skew tolerance, and audience overrides.
      </CollapsibleContent>
    </Collapsible>
  ),
};
