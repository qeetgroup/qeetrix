import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Banner } from "@qeetrix/ui";

const meta: Meta<typeof Banner> = {
  title: "Primitives/Banner",
  component: Banner,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Banner>;

export const Default: Story = {
  render: () => (
    <Banner variant="info">
      <span>
        New: passkeys are now generally available. <a href="#">Read more →</a>
      </span>
    </Banner>
  ),
};

export const Dismissible: Story = {
  render: () => {
    const [show, setShow] = React.useState(true);
    return show ? (
      <Banner variant="warning" onDismiss={() => setShow(false)}>
        Your trial ends in 3 days — add a payment method to keep access.
      </Banner>
    ) : (
      <p className="p-4 text-sm text-muted-foreground">Banner dismissed.</p>
    );
  },
};
