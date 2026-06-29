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
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Composes a `FieldLabel`, optional `FieldDescription`, and optional `FieldError` around any form control. Use `FieldSet` + `FieldLegend` to group related fields (e.g. a Qeet ID tenant configuration section). The layout handles spacing and ARIA relationships automatically.",
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  render: () => (
    <FieldSet className="w-80">
      <FieldLegend>Tenant settings</FieldLegend>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="tenant-name">Display name</FieldLabel>
          <Input id="tenant-name" placeholder="Acme Inc." />
          <FieldDescription>Shown on the hosted Qeet ID login screen.</FieldDescription>
        </Field>
      </FieldGroup>
    </FieldSet>
  ),
};
