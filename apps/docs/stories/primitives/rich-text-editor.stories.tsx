import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { RichTextEditor } from "@qeetrix/ui";

const meta: Meta<typeof RichTextEditor> = {
  title: "Primitives/RichTextEditor",
  component: RichTextEditor,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof RichTextEditor>;

export const Default: Story = {
  render: () => {
    const [html, setHtml] = React.useState(
      "<h2>Release notes</h2><p>Write something <strong>bold</strong>…</p><ul><li>Point one</li><li>Point two</li></ul>",
    );
    return (
      <div className="flex max-w-2xl flex-col gap-3">
        <RichTextEditor value={html} onChange={setHtml} />
        <details className="text-xs text-muted-foreground">
          <summary>HTML output</summary>
          <pre className="mt-2 overflow-x-auto rounded bg-muted p-2">{html}</pre>
        </details>
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [html, setHtml] = React.useState("");
    return (
      <div className="max-w-2xl">
        <RichTextEditor
          value={html}
          onChange={setHtml}
          placeholder="Start typing…"
        />
      </div>
    );
  },
};

export const ReadOnly: Story = {
  render: () => (
    <div className="max-w-2xl">
      <RichTextEditor
        editable={false}
        defaultValue="<h3>Read-only</h3><p>This content cannot be edited and shows no toolbar.</p>"
      />
    </div>
  ),
};
