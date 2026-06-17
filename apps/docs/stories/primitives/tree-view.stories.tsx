import type { Meta, StoryObj } from "@storybook/react-vite";

import { TreeView, type TreeNode } from "@qeetrix/ui";
import { FileIcon, FolderIcon } from "lucide-react";

const data: TreeNode[] = [
  {
    id: "src",
    label: "src",
    icon: FolderIcon,
    defaultOpen: true,
    children: [
      {
        id: "components",
        label: "components",
        icon: FolderIcon,
        children: [
          { id: "button", label: "button.tsx", icon: FileIcon },
          { id: "card", label: "card.tsx", icon: FileIcon },
        ],
      },
      { id: "index", label: "index.ts", icon: FileIcon },
    ],
  },
  { id: "pkg", label: "package.json", icon: FileIcon },
];

const meta: Meta<typeof TreeView> = {
  title: "Primitives/TreeView",
  component: TreeView,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
  render: () => (
    <div className="w-64 rounded-lg border p-2">
      <TreeView data={data} />
    </div>
  ),
};
