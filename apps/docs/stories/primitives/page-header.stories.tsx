import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, PageHeader } from "@qeetrix/ui";
import { PlusIcon } from "lucide-react";

const meta: Meta<typeof PageHeader> = {
  title: "Primitives/PageHeader",
  component: PageHeader,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-3xl">
      <PageHeader
        breadcrumb={<span>Settings › API keys</span>}
        title="API keys"
        description="Manage the keys used to authenticate requests to the Qeet ID API."
        actions={
          <Button>
            <PlusIcon /> New key
          </Button>
        }
      />
    </div>
  ),
};
