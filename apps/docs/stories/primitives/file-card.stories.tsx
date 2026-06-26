import type { Meta, StoryObj } from "@storybook/react-vite";
import { DownloadIcon } from "lucide-react";

import { Button, FileCard } from "@qeetrix/ui";

const meta: Meta<typeof FileCard> = {
  title: "Primitives/FileCard",
  component: FileCard,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof FileCard>;

const action = (
  <Button variant="ghost" size="icon-sm" aria-label="Download">
    <DownloadIcon />
  </Button>
);

export const Grid: Story = {
  render: () => (
    <div className="grid w-[36rem] grid-cols-3 gap-3">
      <FileCard name="Q3 Report.pdf" size="2.4 MB" meta="Ada" actions={action} />
      <FileCard name="hero.png" size="820 KB" meta="Lin" actions={action} />
      <FileCard name="demo.mp4" size="18 MB" meta="Sam" actions={action} />
      <FileCard name="budget.xlsx" size="64 KB" meta="Mira" actions={action} />
      <FileCard name="app.tsx" size="3 KB" meta="Dev" actions={action} />
      <FileCard name="assets.zip" size="44 MB" meta="Ops" selected actions={action} />
    </div>
  ),
};
