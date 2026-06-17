import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button, Toaster, toast } from "@qeetrix/ui";

const meta: Meta<typeof Toaster> = {
  title: "Primitives/Toast",
  component: Toaster,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast("Settings saved")}
      >
        Show toast
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.success("API key created", {
            description: "Copy it now — it won't be shown again.",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("Approaching quota", {
            description: "You've used 80% of your monthly budget.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.error("Couldn't save changes", {
            description: "The server returned a 500. Please retry.",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1800)),
            {
              loading: "Publishing release…",
              success: "Release published",
              error: "Publish failed",
            }
          )
        }
      >
        Promise
      </Button>
      <Toaster />
    </div>
  ),
};
