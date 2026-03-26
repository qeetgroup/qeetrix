import type { CSSProperties } from "react";
import { source } from "@/lib/source";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { baseOptions } from "@/lib/layout.shared";
import { getSection } from "@/lib/source/navigation";

const sectionColors = {
  foundations: "oklch(0.58 0.13 214)",
  components: "oklch(0.62 0.16 142)",
  icons: "oklch(0.68 0.16 72)",
  utilities: "oklch(0.61 0.12 28)",
} as const;

export default function Layout({ children }: LayoutProps<"/docs">) {
  const base = baseOptions();

  return (
    <DocsLayout
      {...base}
      tree={source.getPageTree()}
      tabs={{
        transform(option, node) {
          const meta = source.getNodeMeta(node);
          if (!meta || !node.icon) return option;

          const color =
            sectionColors[getSection(meta.path)] ?? "var(--color-fd-foreground)";

          return {
            ...option,
            icon: (
              <div
                className="[&_svg]:size-full rounded-lg size-full text-(--tab-color) max-md:bg-(--tab-color)/10 max-md:border max-md:p-1.5"
                style={
                  {
                    "--tab-color": color,
                  } as CSSProperties
                }
              >
                {node.icon}
              </div>
            ),
          };
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
