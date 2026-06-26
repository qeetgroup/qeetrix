import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { MentionInput } from "@qeetrix/ui";

const PEOPLE = [
  { id: "1", label: "Ada Lovelace" },
  { id: "2", label: "Grace Hopper" },
  { id: "3", label: "Alan Turing" },
  { id: "4", label: "Katherine Johnson" },
];

const meta: Meta<typeof MentionInput> = {
  title: "Primitives/MentionInput",
  component: MentionInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof MentionInput>;

export const Default: Story = {
  render: () => {
    const [v, setV] = React.useState("Hey @");
    return (
      <div className="w-80">
        <MentionInput
          aria-label="Message"
          value={v}
          onValueChange={setV}
          people={PEOPLE}
          placeholder="Type @ to mention…"
        />
      </div>
    );
  },
};
