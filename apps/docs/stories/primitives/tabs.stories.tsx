import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@qeetrix/ui";

const meta: Meta<typeof Tabs> = {
  title: "Primitives/Tabs",
  component: Tabs,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-80">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="sessions">Sessions</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-3 text-sm text-muted-foreground">
        Manage your name, email, and avatar.
      </TabsContent>
      <TabsContent value="security" className="p-3 text-sm text-muted-foreground">
        Configure passkeys, MFA, and recovery codes.
      </TabsContent>
      <TabsContent value="sessions" className="p-3 text-sm text-muted-foreground">
        Review and revoke active sessions.
      </TabsContent>
    </Tabs>
  ),
};
