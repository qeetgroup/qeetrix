import type { Meta, StoryObj } from "@storybook/react-vite";

import { DataState } from "@qeetix/ui";

const meta: Meta<typeof DataState> = {
  title: "Primitives/DataState",
  component: DataState,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DataState>;

export const Loading: Story = {
  render: () => (
    <div className="w-96">
      <DataState isLoading skeletonRows={3}>
        <div>loaded content</div>
      </DataState>
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div className="w-96">
      <DataState isEmpty emptyTitle="No connections yet" emptyDescription="Add a SAML or OIDC connection to get started.">
        <div>content</div>
      </DataState>
    </div>
  ),
};
