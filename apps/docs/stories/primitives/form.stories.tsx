import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Button,
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  Form,
  FormActions,
  Input,
} from "@qeetrix/ui";

const meta: Meta<typeof Form> = {
  title: "Primitives/Form",
  component: Form,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form className="w-80" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-email">Email</FieldLabel>
          <Input id="form-email" type="email" placeholder="you@acme.com" />
          <FieldDescription>We&apos;ll never share your email.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="form-password">Password</FieldLabel>
          <Input id="form-password" type="password" aria-invalid />
          <FieldError>Password must be at least 8 characters.</FieldError>
        </Field>
      </FieldGroup>
      <FormActions>
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button type="submit">Create account</Button>
      </FormActions>
    </Form>
  ),
};
