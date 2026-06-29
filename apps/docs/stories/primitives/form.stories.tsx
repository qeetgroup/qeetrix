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
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A `<form>` wrapper that provides consistent spacing between `FieldGroup` sections and a `FormActions` footer for submit/cancel controls. Used as the container for Qeet ID sign-up, passkey registration, and organization onboarding flows.",
      },
    },
  },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <Form className="w-80" onSubmit={(e) => e.preventDefault()}>
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="form-email">Work email</FieldLabel>
          <Input id="form-email" type="email" placeholder="ada.lovelace@acme.com" />
          <FieldDescription>Used to log in and receive qeet-notify alerts.</FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="form-password">Password</FieldLabel>
          <Input id="form-password" type="password" aria-invalid />
          <FieldError>Password must be at least 12 characters.</FieldError>
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
