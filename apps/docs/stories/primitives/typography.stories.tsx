import type { Meta, StoryObj } from "@storybook/react-vite";

import { Typography, Prose } from "@qeetrix/ui";

const meta: Meta<typeof Typography> = {
  title: "Primitives/Typography",
  component: Typography,
  parameters: { layout: "padded" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Variants: Story = {
  render: () => (
    <div className="flex max-w-2xl flex-col gap-4">
      <Typography variant="h1">The quick brown fox</Typography>
      <Typography variant="h2">The quick brown fox</Typography>
      <Typography variant="h3">The quick brown fox</Typography>
      <Typography variant="h4">The quick brown fox</Typography>
      <Typography variant="lead">
        A lead paragraph introduces the section with a slightly larger, muted tone.
      </Typography>
      <Typography variant="p">
        A regular body paragraph. Jackdaws love my big sphinx of quartz, and the
        five boxing wizards jump quickly.
      </Typography>
      <Typography variant="blockquote">
        “Design is not just what it looks like and feels like. Design is how it works.”
      </Typography>
      <Typography variant="large">Large emphasis text</Typography>
      <Typography variant="small">Small medium text</Typography>
      <Typography variant="muted">Muted caption text</Typography>
      <Typography variant="p">
        Inline <Typography as="code" variant="inlineCode">npm install @qeetrix/ui</Typography> code.
      </Typography>
    </div>
  ),
};

export const ProseBlock: Story = {
  render: () => (
    <Prose className="max-w-2xl">
      <h1>Getting started</h1>
      <p>
        This block of rendered HTML is styled by <code>Prose</code> with no
        <code>@tailwindcss/typography</code> dependency.
      </p>
      <h2>Installation</h2>
      <p>Install the package and import the styles:</p>
      <pre>
        <code>pnpm add @qeetrix/ui</code>
      </pre>
      <h3>Features</h3>
      <ul>
        <li>Headings, paragraphs, and lists</li>
        <li>
          Links like <a href="#">this one</a>, plus <strong>bold</strong> and{" "}
          <em>italic</em>
        </li>
        <li>Blockquotes and code</li>
      </ul>
      <blockquote>Long-form editorial content reads comfortably.</blockquote>
      <hr />
      <ol>
        <li>First</li>
        <li>Second</li>
      </ol>
    </Prose>
  ),
};
