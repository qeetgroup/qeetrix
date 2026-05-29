import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@qeetrix/ui";

const meta: Meta<typeof Sheet> = {
  title: "Primitives/Sheet",
  component: Sheet,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Sheet>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <SheetTrigger render={<Button variant="outline">Open panel</Button>} />
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Connection details</SheetTitle>
          <SheetDescription>Inspect and edit this SAML connection.</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  ),
};
