import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { TagInput } from "@qeetrix/ui";

const meta: Meta<typeof TagInput> = {
  title: "Primitives/TagInput",
  component: TagInput,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  render: () => {
    const [tags, setTags] = React.useState<string[]>(["design", "system"]);
    return (
      <div className="w-80">
        <TagInput value={tags} onChange={setTags} placeholder="Add a tag…" />
      </div>
    );
  },
};

export const WithMax: Story = {
  render: () => {
    const [tags, setTags] = React.useState<string[]>(["a", "b"]);
    return (
      <div className="w-80">
        <TagInput
          value={tags}
          onChange={setTags}
          maxTags={3}
          placeholder="Up to 3 tags"
        />
      </div>
    );
  },
};

export const Validated: Story = {
  render: () => {
    const [tags, setTags] = React.useState<string[]>(["alice@qeet.in"]);
    return (
      <div className="w-80">
        <TagInput
          value={tags}
          onChange={setTags}
          placeholder="Add emails…"
          // Only accept things that look like an email, lowercased.
          validate={(t) => (/^\S+@\S+\.\S+$/.test(t) ? t.toLowerCase() : null)}
        />
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div className="w-80">
      <TagInput value={["read", "only"]} onChange={() => {}} disabled />
    </div>
  ),
};
