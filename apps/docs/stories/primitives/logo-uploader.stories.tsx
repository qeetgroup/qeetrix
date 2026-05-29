import { useState } from "react";

import type { Meta, StoryObj } from "@storybook/react-vite";

import { LogoUploader } from "@qeetrix/ui";

const meta: Meta<typeof LogoUploader> = {
  title: "Primitives/LogoUploader",
  component: LogoUploader,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof LogoUploader>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState("");
    return (
      <div className="w-96">
        <LogoUploader value={value} onChange={setValue} />
      </div>
    );
  },
};
