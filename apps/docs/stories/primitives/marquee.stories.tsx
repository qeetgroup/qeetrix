import type { Meta, StoryObj } from "@storybook/react-vite";

import { Badge, Marquee } from "@qeetrix/ui";

const meta: Meta<typeof Marquee> = {
  title: "Primitives/Marquee",
  component: Marquee,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Marquee>;

const LOGOS = ["Acme", "Globex", "Initech", "Umbrella", "Stark", "Wayne"];

export const Default: Story = {
  render: () => (
    <Marquee aria-label="Customers" speed={18}>
      {LOGOS.map((l) => (
        <Badge key={l} variant="secondary" className="mx-3">
          {l}
        </Badge>
      ))}
    </Marquee>
  ),
};
