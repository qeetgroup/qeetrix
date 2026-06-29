import type { ReactNode } from "react";

/** A labelled colour swatch driven by a CSS variable (so it reacts to theme). */
export function Swatch({ varName, name }: { varName: string; name: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div
        className="size-16 rounded-lg border border-border"
        style={{ background: `var(${varName})` }}
      />
      <div className="text-xs">
        <div className="font-medium">{name}</div>
        <code className="text-muted-foreground">{varName}</code>
      </div>
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="flex flex-wrap gap-4">{children}</div>;
}

/**
 * A Tailwind-style colour ramp: a labelled row of swatches for one palette,
 * each driven by `var(--qx-color-<name>-<step>)` (theme-reactive) and annotated
 * with its shade number and resolved value.
 */
export function Ramp({
  name,
  steps,
  values,
}: {
  name: string;
  steps: Array<number | string>;
  values?: Record<string, string>;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="font-medium text-sm capitalize">{name}</div>
      <div className="grid grid-cols-11 gap-1.5">
        {steps.map((s) => {
          const value = values?.[String(s)];
          return (
            <div key={s} className="flex flex-col gap-1" title={value ? `${name}-${s} · ${value}` : `${name}-${s}`}>
              <div
                className="h-12 rounded-md border border-border"
                style={{ background: `var(--qx-color-${name}-${s})` }}
              />
              <div className="text-[10px] leading-tight">
                <div className="font-medium">{s}</div>
                {value ? <code className="block truncate text-muted-foreground">{value}</code> : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h3 className="font-heading text-lg tracking-tight">{title}</h3>
      {children}
    </section>
  );
}

/** Page wrapper that paints the canvas + applies the DS body font. */
export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground flex w-full max-w-4xl flex-col gap-10 p-8">
      {children}
    </div>
  );
}
