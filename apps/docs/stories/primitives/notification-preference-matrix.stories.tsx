import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { NotificationPreferenceMatrix, type PreferenceMatrix } from "@qeetrix/ui";

const CHANNELS = [
  { key: "inapp", label: "In-app" },
  { key: "email", label: "Email" },
  { key: "push", label: "Push" },
  { key: "sms", label: "SMS" },
];
const CATEGORIES = [
  { key: "security", label: "Security", description: "Sign-ins, password changes" },
  { key: "billing", label: "Billing", description: "Invoices, payment failures" },
  { key: "product", label: "Product", description: "New features and tips" },
];

const meta: Meta<typeof NotificationPreferenceMatrix> = {
  title: "Primitives/NotificationPreferenceMatrix",
  component: NotificationPreferenceMatrix,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof NotificationPreferenceMatrix>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<PreferenceMatrix>({
      security: { inapp: true, email: true, push: true },
      billing: { email: true },
    });
    return (
      <div className="max-w-xl">
        <NotificationPreferenceMatrix
          channels={CHANNELS}
          categories={CATEGORIES}
          value={value}
          onValueChange={setValue}
        />
      </div>
    );
  },
};
