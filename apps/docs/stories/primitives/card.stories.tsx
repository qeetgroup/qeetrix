import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@qeetix/ui";

const meta: Meta<typeof Card> = {
  title: "Primitives/Card",
  component: Card,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Create API key</CardTitle>
        <CardDescription>Keys grant full access to your tenant.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        Name this key so you can recognise it later in the audit log.
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Cancel
        </Button>
        <Button size="sm">Create</Button>
      </CardFooter>
    </Card>
  ),
};
