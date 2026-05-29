import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
  Input,
} from "@qeetrix/ui";

const meta: Meta<typeof Field> = {
  title: "Primitives/Field",
  component: Field,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Tenant</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="tenant-name">Display name</FieldLabel>
          <Input id="tenant-name" placeholder="Acme Inc." />
          <FieldDescription>Shown on the hosted login screen.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
