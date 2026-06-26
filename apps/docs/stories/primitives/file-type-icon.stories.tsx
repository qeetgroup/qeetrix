import type { Meta, StoryObj } from "@storybook/react-vite";

import { FileTypeIcon } from "@qeetrix/ui";

const meta: Meta<typeof FileTypeIcon> = {
  title: "Primitives/FileTypeIcon",
  component: FileTypeIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FileTypeIcon>;

const TYPES = ["doc.pdf", "photo.png", "clip.mp4", "song.mp3", "data.csv", "app.ts", "archive.zip", "notes.txt", "unknown.xyz"];

export const Types: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      {TYPES.map((t) => (
        <div key={t} className="flex flex-col items-center gap-1">
          <FileTypeIcon type={t} className="size-7" />
          <code className="text-xs text-muted-foreground">{t.split(".").pop()}</code>
        </div>
      ))}
    </div>
  ),
};
