import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  AppShell,
  AppShellContent,
  AppShellHeader,
  AppShellMain,
  Button,
  PageHeader,
} from "@qeetrix/ui";

const meta: Meta<typeof AppShell> = {
  title: "Primitives/AppShell",
  component: AppShell,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof AppShell>;

export const Default: Story = {
  render: () => (
    <AppShell className="h-[28rem] min-h-0 overflow-hidden rounded-lg ring-1 ring-foreground/10">
      <aside className="hidden w-48 shrink-0 border-e bg-muted/30 p-3 text-sm sm:block">
        <div className="font-medium">Qeet ID</div>
        <nav className="mt-3 flex flex-col gap-1 text-muted-foreground">
          <span>Dashboard</span>
          <span>Users</span>
          <span>API keys</span>
        </nav>
      </aside>
      <AppShellMain>
        <AppShellHeader>
          <span className="text-sm font-medium">Admin</span>
          <Button size="sm" className="ms-auto">
            New
          </Button>
        </AppShellHeader>
        <AppShellContent>
          <PageHeader
            title="Users"
            description="Manage who can access this tenant."
          />
        </AppShellContent>
      </AppShellMain>
    </AppShell>
  ),
};
