import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { ReactionBar, type Reaction } from "@qeetrix/ui";

const meta: Meta<typeof ReactionBar> = {
  title: "Primitives/ReactionBar",
  component: ReactionBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ReactionBar>;

export const Default: Story = {
  render: () => {
    const [rs, setRs] = React.useState<Reaction[]>([
      { emoji: "👍", count: 4, reacted: true },
      { emoji: "🎉", count: 2 },
      { emoji: "❤️", count: 1 },
    ]);
    const toggle = (e: string) =>
      setRs((cur) => {
        const found = cur.find((r) => r.emoji === e);
        if (found) {
          return cur
            .map((r) =>
              r.emoji === e
                ? { ...r, reacted: !r.reacted, count: r.count + (r.reacted ? -1 : 1) }
                : r,
            )
            .filter((r) => r.count > 0);
        }
        return [...cur, { emoji: e, count: 1, reacted: true }];
      });
    return <ReactionBar reactions={rs} onToggle={toggle} />;
  },
};
