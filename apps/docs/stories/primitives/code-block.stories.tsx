import type { Meta, StoryObj } from "@storybook/react-vite";

import { CodeBlock } from "@qeetrix/ui";

const meta: Meta<typeof CodeBlock> = {
  title: "Primitives/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sample = [
  "import { QeetClient } from \"@qeet/sdk\";",
  "",
  "const qeet = new QeetClient({ tenant: \"acme\" });",
  "await qeet.sessions.verify(token);",
].join("\n");

export const Default: Story = {
  render: () => (
    <div className="w-[34rem]">
      <CodeBlock value={sample} lineNumbers copy caption="quickstart.ts" />
    </div>
  ),
};
