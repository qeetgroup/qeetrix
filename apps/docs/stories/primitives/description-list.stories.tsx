import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
  StatusPill,
} from "@qeetrix/ui";

const meta: Meta<typeof DescriptionList> = {
  title: "Primitives/DescriptionList",
  component: DescriptionList,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof DescriptionList>;

export const Default: Story = {
  render: () => (
    <DescriptionList className="max-w-xl">
      <DescriptionTerm>Tenant</DescriptionTerm>
      <DescriptionDetails>Acme Inc.</DescriptionDetails>

      <DescriptionTerm>Plan</DescriptionTerm>
      <DescriptionDetails>Enterprise</DescriptionDetails>

      <DescriptionTerm>Status</DescriptionTerm>
      <DescriptionDetails>
        <StatusPill status="active" />
      </DescriptionDetails>

      <DescriptionTerm>Primary domain</DescriptionTerm>
      <DescriptionDetails>auth.acme.com</DescriptionDetails>

      <DescriptionTerm>Created</DescriptionTerm>
      <DescriptionDetails>March 4, 2026</DescriptionDetails>
    </DescriptionList>
  ),
};
