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
