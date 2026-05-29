import type { Meta, StoryObj } from "@storybook/react-vite";

import { JSONTree } from "@qeetix/ui";

const meta: Meta<typeof JSONTree> = {
  title: "Primitives/JSONTree",
  component: JSONTree,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof JSONTree>;

const payload = {
  event: "session.verified",
  tenant: "acme",
  actor: { id: "usr_123", email: "sai@accenture.com", mfa: true },
  factors: ["passkey", "totp"],
  occurredAt: "2026-05-29T12:00:00Z",
  metadata: { ip: "203.0.113.7", device: { os: "macOS", browser: "Safari" } },
};

export const Default: Story = {
  render: () => (
    <div className="w-[34rem]">
      <JSONTree value={payload} rootLabel="payload" initialOpenDepth={2} />
    </div>
  ),
};
