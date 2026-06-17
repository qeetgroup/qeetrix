import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "@qeetrix/ui";
import { NotFound, ServerError, Maintenance } from "@qeetrix/ui/blocks";

const meta: Meta = {
  title: "Blocks/PageState",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

export const Not_Found: Story = {
  render: () => (
    <NotFound
      actions={
        <>
          <Button variant="outline">Go back</Button>
          <Button>Go home</Button>
        </>
      }
    />
  ),
};

export const Server_Error: Story = {
  render: () => <ServerError actions={<Button>Retry</Button>} />,
};

export const Under_Maintenance: Story = {
  render: () => <Maintenance />,
};
