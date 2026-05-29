import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@qeetrix/ui";

const meta: Meta = {
  title: "Primitives/Sidebar",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="h-[28rem] w-full overflow-hidden rounded-lg border border-border">
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader className="px-3 py-2 font-heading">Qeet ID</SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Platform</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {["Dashboard", "Connections", "Audit log", "API keys"].map((label) => (
                    <SidebarMenuItem key={label}>
                      <SidebarMenuButton>{label}</SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter className="px-3 py-2 text-xs text-muted-foreground">v1.0</SidebarFooter>
        </Sidebar>
        <SidebarInset className="p-4">
          <SidebarTrigger />
          <p className="mt-4 text-sm text-muted-foreground">Main content area.</p>
        </SidebarInset>
      </SidebarProvider>
    </div>
  ),
};
