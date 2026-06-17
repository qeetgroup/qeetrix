import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Field,
  FieldGroup,
  FieldLabel,
  Input,
} from "@qeetrix/ui";
import { OnboardingWizard } from "@qeetrix/ui/blocks";

const meta: Meta<typeof OnboardingWizard> = {
  title: "Blocks/OnboardingWizard",
  component: OnboardingWizard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof OnboardingWizard>;

export const Default: Story = {
  render: () => {
    const [done, setDone] = React.useState(false);
    return (
      <div className="mx-auto max-w-2xl">
        <OnboardingWizard
          onComplete={() => setDone(true)}
          steps={[
            {
              label: "Account",
              description: "Your details",
              content: (
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="w-name">Name</FieldLabel>
                    <Input id="w-name" placeholder="Ada Lovelace" />
                  </Field>
                </FieldGroup>
              ),
            },
            {
              label: "Workspace",
              description: "Name it",
              content: (
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="w-org">Workspace name</FieldLabel>
                    <Input id="w-org" placeholder="Acme Inc." />
                  </Field>
                </FieldGroup>
              ),
            },
            {
              label: "Invite",
              description: "Your team",
              content: done ? (
                <p className="text-sm text-emerald-600">All set — onboarding complete!</p>
              ) : (
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="w-invite">Teammate emails</FieldLabel>
                    <Input id="w-invite" placeholder="comma,separated@emails.com" />
                  </Field>
                </FieldGroup>
              ),
            },
          ]}
        />
      </div>
    );
  },
};
