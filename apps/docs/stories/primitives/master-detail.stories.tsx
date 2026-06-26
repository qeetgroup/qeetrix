import type { Meta, StoryObj } from "@storybook/react-vite";

import { MasterDetail } from "@qeetrix/ui";

const meta: Meta<typeof MasterDetail> = {
  title: "Primitives/MasterDetail",
  component: MasterDetail,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MasterDetail>;

export const Default: Story = {
  render: () => (
    <div className="h-96 p-4">
      <MasterDetail
        list={
          <div className="space-y-1 p-3">
            {["Inbox", "Starred", "Sent", "Drafts", "Archive"].map((x) => (
              <div key={x} className="rounded-md px-3 py-2 text-sm hover:bg-accent">
                {x}
              </div>
            ))}
          </div>
        }
        detail={
          <div className="p-6">
            <h3 className="font-heading text-base font-medium">Detail pane</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Resize the divider on desktop; on mobile the detail opens as a slide-over sheet.
            </p>
          </div>
        }
      />
    </div>
  ),
};
