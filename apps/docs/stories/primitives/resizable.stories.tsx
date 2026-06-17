import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@qeetrix/ui";

const meta: Meta<typeof ResizablePanelGroup> = {
  title: "Primitives/Resizable",
  component: ResizablePanelGroup,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ResizablePanelGroup>;

export const Horizontal: Story = {
  render: () => (
    <div className="h-64 w-[36rem] overflow-hidden rounded-lg border">
      <ResizablePanelGroup orientation="horizontal">
        <ResizablePanel
          defaultSize="35%"
          minSize="20%"
          className="flex items-center justify-center p-4 text-sm text-muted-foreground"
        >
          Sidebar
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize="65%"
          className="flex items-center justify-center p-4 text-sm"
        >
          Content
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-72 w-96 overflow-hidden rounded-lg border">
      <ResizablePanelGroup orientation="vertical">
        <ResizablePanel
          defaultSize="50%"
          className="flex items-center justify-center p-4 text-sm"
        >
          Editor
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          defaultSize="50%"
          className="flex items-center justify-center p-4 text-sm text-muted-foreground"
        >
          Console
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  ),
};
