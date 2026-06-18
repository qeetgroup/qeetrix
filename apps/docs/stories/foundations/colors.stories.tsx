import type { Meta, StoryObj } from "@storybook/react-vite";

import { Grid, Page, Section, Swatch } from "../_helpers";

/**
 * Colour foundations. Swatches are driven by the live CSS variables generated
 * by @qeetrix/tokens, so they update with the Theme toolbar (light / dark).
 */
const meta: Meta = {
  title: "Foundations/Colors",
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj;

const SEMANTIC: Array<[string, string]> = [
  ["--background", "background"],
  ["--foreground", "foreground"],
  ["--card", "card"],
  ["--popover", "popover"],
  ["--primary", "primary"],
  ["--secondary", "secondary"],
  ["--muted", "muted"],
  ["--accent", "accent"],
  ["--border", "border"],
  ["--ring", "ring"],
];

const STATUS: Array<[string, string]> = [
  ["--success", "success"],
  ["--warning", "warning"],
  ["--info", "info"],
  ["--destructive", "destructive"],
];

const STATUS_STEPS = [100, 300, 500, 700, 900];

const NEUTRAL_STEPS = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000];

export const All: Story = {
  render: () => (
    <Page>
      <Section title="Semantic (shadcn / Base UI runtime vars)">
        <Grid>
          {SEMANTIC.map(([v, n]) => (
            <Swatch key={v} varName={v} name={n} />
          ))}
        </Grid>
      </Section>
      <Section title="Status (semantic runtime vars — theme-aware)">
        <Grid>
          {STATUS.map(([v, n]) => (
            <Swatch key={v} varName={v} name={n} />
          ))}
        </Grid>
      </Section>
      <Section title="Status ramps (primitive)">
        {(["success", "warning", "info", "danger"] as const).map((ramp) => (
          <Grid key={ramp}>
            {STATUS_STEPS.map((s) => (
              <Swatch
                key={`${ramp}-${s}`}
                varName={`--qx-color-${ramp}-${s}`}
                name={`${ramp}-${s}`}
              />
            ))}
          </Grid>
        ))}
      </Section>
      <Section title="Neutral ramp (primitive)">
        <Grid>
          {NEUTRAL_STEPS.map((s) => (
            <Swatch key={s} varName={`--qx-color-neutral-${s}`} name={`neutral-${s}`} />
          ))}
        </Grid>
      </Section>
      <Section title="Brand (placeholder — aliases neutral until OD-DS-03)">
        <Grid>
          {["brand", "accent", "passkey"].map((ramp) => (
            <Swatch key={ramp} varName={`--qx-color-${ramp}-500`} name={`${ramp}-500`} />
          ))}
        </Grid>
      </Section>
    </Page>
  ),
};
